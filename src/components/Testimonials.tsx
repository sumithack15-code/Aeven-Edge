import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS_DATA } from "../config/siteConfig";

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-36 bg-[#111214] border-t border-[#2A2B2E]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#2A2B2E]">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#C9B27C] mb-4">
              <span>05</span>
              <span aria-hidden="true">·</span>
              <span>CLIENT IMPRESSIONS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-[0.05em] uppercase text-[#FFFFFF] leading-[1.08]">
              WORDS OF DISTINCTION
            </h2>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="w-12 h-12 border border-[#2A2B2E] hover:border-[#C9B27C] text-[#F5F5F5] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="w-12 h-12 border border-[#2A2B2E] hover:border-[#C9B27C] text-[#F5F5F5] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Minimal Luxury Testimonial Stage */}
        <div className="max-w-4xl mx-auto text-center py-8 md:py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {/* 5 Stars */}
              <div
                className="text-[#C9B27C] tracking-[0.4em] text-sm md:text-base mb-8 select-none"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </div>

              {/* Quote */}
              <blockquote className="font-display text-2xl sm:text-4xl md:text-5xl text-[#FFFFFF] font-normal leading-[1.28] tracking-wide text-balance">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="mt-10 flex flex-col items-center gap-1.5">
                <cite className="not-italic text-xs md:text-sm tracking-[0.25em] uppercase text-[#F5F5F5]">
                  — {current.clientName}
                </cite>
                <span className="text-xs text-[#D6D6D6]/60 tracking-widest uppercase">
                  {current.serviceTag}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Minimal Step Indicators */}
          <div className="mt-12 flex items-center justify-center gap-3">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View testimonial ${idx + 1}`}
                className={`h-[2px] transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-10 bg-[#C9B27C]"
                    : "w-5 bg-[#3A3B3F] hover:bg-[#D6D6D6]"
                }`}
              />
            ))}
          </div>

          <p className="mt-8 text-[11px] font-mono-num tracking-widest uppercase text-[#D6D6D6]/45">
            * Placeholder client testimonials shown for layout preview — replace
            in src/config/siteConfig.ts
          </p>
        </div>
      </div>
    </section>
  );
};
