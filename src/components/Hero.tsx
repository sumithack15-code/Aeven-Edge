import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { BRAND_CONFIG, IMAGES } from "../config/siteConfig";
import { BrandLogo } from "./BrandLogo";
import { LuxuryImage } from "./LuxuryImage";

interface HeroProps {
  onBookNow: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookNow, onExploreServices }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#111214] pt-24 pb-16"
    >
      {/* Background High-Res Salon Image with Subtle Slow Zoom */}
      <motion.div
        initial={{ scale: 1.07 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <LuxuryImage
          src={IMAGES.heroSalon}
          alt="ARVEN EDGE Luxury Unisex Salon Interior"
          priority={true}
          containerClassName="w-full h-full"
          imageClassName="object-center brightness-[0.65] contrast-[1.05]"
        />
      </motion.div>

      {/* Measured Dark Luxury Gradient Scrims for Unmistakable Readability */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-[#111214] via-[#111214]/55 to-[#111214]/80"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-10 bg-radial from-transparent via-[#111214]/30 to-[#111214]/90"
        aria-hidden="true"
      />

      {/* Foreground Editorial Content */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Monochrome Hero Brand Emblem */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <BrandLogo variant="hero" />
        </motion.div>

        {/* Unboxed Editorial Small Label (Zero-Pill Discipline) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 text-xs tracking-[0.35em] uppercase text-[#C9B27C] mb-5"
        >
          <span>ARVEN EDGE</span>
          <span aria-hidden="true">•</span>
          <span>UNISEX SALON</span>
        </motion.div>

        {/* Main Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal tracking-[0.06em] uppercase text-[#FFFFFF] leading-[1.06] max-w-4xl text-balance"
        >
          WHERE STYLE MEETS SOPHISTICATION
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base md:text-lg text-[#D6D6D6] font-light leading-relaxed max-w-xl tracking-wide"
        >
          {BRAND_CONFIG.subtext}
        </motion.p>

        {/* Primary & Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            type="button"
            onClick={onBookNow}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs md:text-sm font-medium tracking-[0.22em] uppercase text-[#111214] bg-[#F5F5F5] hover:bg-[#C9B27C] transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9B27C]"
          >
            <span>BOOK AN APPOINTMENT</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={onExploreServices}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs md:text-sm font-medium tracking-[0.22em] uppercase text-[#F5F5F5] bg-[#17181A]/70 hover:bg-[#2A2B2E] border border-[#F5F5F5]/30 hover:border-[#F5F5F5] backdrop-blur-sm transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9B27C]"
          >
            <span>EXPLORE SERVICES</span>
          </button>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-[#D6D6D6]/60 hover:text-[#FFFFFF] transition-colors"
      >
        <span className="text-[10px] tracking-[0.35em] uppercase">DISCOVER</span>
        <ChevronDown className="w-4 h-4 animate-bounce stroke-[1.25]" />
      </a>
    </section>
  );
};
