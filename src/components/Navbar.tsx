import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { BrandLogo } from "./BrandLogo";
import { INSTAGRAM_URL } from "../config/siteConfig";

interface NavbarProps {
  onBookNow: () => void;
}

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ onBookNow }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when fullscreen mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#111214]/85 backdrop-blur-md border-b border-[#2A2B2E] py-3.5"
            : "bg-gradient-to-b from-[#111214]/90 to-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Single Brand Lockup */}
          <a
            href="#home"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9B27C]"
            aria-label="ARVEN EDGE Home"
          >
            <BrandLogo variant="navbar" />
          </a>

          {/* Zone 2: Clean Typography Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 xl:gap-9"
          >
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                className={`${
                  idx >= 5 ? "hidden xl:inline-block" : "inline-block"
                } text-xs tracking-[0.2em] uppercase text-[#D6D6D6] hover:text-[#FFFFFF] transition-colors duration-150 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9B27C] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onBookNow}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-[0.2em] uppercase text-[#111214] bg-[#F5F5F5] hover:bg-[#C9B27C] hover:text-[#111214] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9B27C]"
            >
              BOOK NOW
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#F5F5F5] hover:text-[#C9B27C] border border-[#2A2B2E] bg-[#17181A]/80 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9B27C]"
            >
              <Menu className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile / Tablet Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[#111214]/98 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="flex items-center justify-between border-b border-[#2A2B2E] pb-5">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="focus-visible:outline-none"
              >
                <BrandLogo variant="navbar" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Navigation Menu"
                className="inline-flex items-center justify-center w-11 h-11 text-[#F5F5F5] hover:text-[#C9B27C] border border-[#2A2B2E] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            <nav className="my-auto py-8 flex flex-col items-start gap-5">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.25 }}
                  className="font-display text-3xl sm:text-4xl tracking-[0.14em] uppercase text-[#F5F5F5] hover:text-[#C9B27C] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="border-t border-[#2A2B2E] pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookNow();
                }}
                className="w-full sm:w-auto px-8 py-4 text-xs font-medium tracking-[0.22em] uppercase text-[#111214] bg-[#F5F5F5] hover:bg-[#C9B27C] transition-colors text-center whitespace-nowrap cursor-pointer"
              >
                BOOK AN APPOINTMENT
              </button>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] uppercase text-[#D6D6D6] hover:text-[#FFFFFF] py-2 text-center sm:text-right"
              >
                INSTAGRAM ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
