import React from "react";
import { BrandLogo } from "./BrandLogo";
import { InstagramGlowButton } from "./InstagramGlowButton";
import { INSTAGRAM_URL, BRAND_CONFIG } from "../config/siteConfig";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111214] border-t border-[#2A2B2E] pt-20 pb-12 text-[#D6D6D6]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2A2B2E]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <a
              href="#home"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9B27C]"
            >
              <BrandLogo variant="footer" />
            </a>
            <p className="text-sm text-[#D6D6D6]/75 max-w-sm font-light leading-relaxed">
              {BRAND_CONFIG.subtext}
            </p>
            <div className="pt-2">
              <InstagramGlowButton />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4">
            <div className="text-xs tracking-[0.28em] uppercase text-[#C9B27C] mb-6">
              NAVIGATION
            </div>
            <ul className="grid grid-cols-2 gap-y-3.5 gap-x-8">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs tracking-[0.2em] uppercase text-[#D6D6D6] hover:text-[#FFFFFF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Connect & Social */}
          <div className="lg:col-span-3 space-y-6">
            <div className="text-xs tracking-[0.28em] uppercase text-[#C9B27C]">
              CONNECT
            </div>
            <div className="space-y-2 text-xs font-mono-num text-[#D6D6D6]/85">
              <div>{BRAND_CONFIG.contact.address}</div>
              <div>{BRAND_CONFIG.contact.phone}</div>
              <div>{BRAND_CONFIG.contact.email}</div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ARVEN EDGE on Instagram"
                className="w-10 h-10 border border-[#2A2B2E] hover:border-[#C9B27C] flex items-center justify-center text-[#F5F5F5] hover:text-[#C9B27C] transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Luxury Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-[0.25em] uppercase text-[#D6D6D6]/60">
          <div>© 2026 ARVEN EDGE. ALL RIGHTS RESERVED.</div>
          <div className="text-[#C9B27C]/80">CRAFTED WITH PRECISION.</div>
        </div>
      </div>
    </footer>
  );
};
