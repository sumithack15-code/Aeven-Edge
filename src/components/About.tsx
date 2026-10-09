import React from "react";
import { motion } from "motion/react";
import { BRAND_CONFIG, IMAGES } from "../config/siteConfig";
import { LuxuryImage } from "./LuxuryImage";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 bg-[#111214] border-t border-[#2A2B2E]/70"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Editorial Intro Ribbon */}
        <div className="mb-16 md:mb-24 pb-12 border-b border-[#2A2B2E]/80 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#C9B27C] mb-4">
              <span>01</span>
              <span aria-hidden="true">·</span>
              <span>PHILOSOPHY & HERITAGE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-[0.05em] uppercase text-[#FFFFFF] leading-[1.08] text-balance">
              THE ART OF
              <br />
              PERSONAL STYLE
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#D6D6D6] max-w-md font-light leading-relaxed tracking-wide">
            Designed as an architectural haven for modern aesthetics, ARVEN EDGE
            unites couture hair artistry, clinical skin science, and sartorial
            grooming under one roof.
          </p>
        </div>

        {/* Split Layout: Left Large Editorial Photography, Right Brand Story & Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Large Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="aspect-[3/4] w-full border border-[#2A2B2E]">
              <LuxuryImage
                src={IMAGES.aboutEditorial}
                alt="Master Stylist Crafting Precision Look at ARVEN EDGE"
                containerClassName="w-full h-full"
                imageClassName="hover:scale-103 transition-transform duration-700"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-[#D6D6D6]/60 tracking-[0.18em] uppercase">
              <span>ARVEN EDGE ATELIER</span>
              <span>·</span>
              <span>PRECISION CRAFTSMANSHIP</span>
            </div>
          </motion.div>

          {/* RIGHT: Brand Story, Short Paragraph & Editable Luxury Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl text-[#F5F5F5] font-normal leading-[1.3] tracking-wide mb-8">
              &ldquo;At ARVEN EDGE, grooming is more than a service. It is an
              experience designed around precision, individuality and effortless
              sophistication.&rdquo;
            </blockquote>

            <div className="space-y-5 text-[#D6D6D6] text-base leading-relaxed font-light max-w-xl">
              <p>
                Every appointment at ARVEN EDGE begins with quiet observation.
                Instead of following fleeting templates, our creative directors
                study your natural features, hair movement, and personal cadence
                to craft a look that belongs distinctly to you.
              </p>
              <p>
                Set within a calm, dark-stone and smoked-oak sanctuary, our
                unisex studio blends high-fashion editorial technique with
                restorative sensory care—ensuring you leave composed, confident,
                and unmistakably refined.
              </p>
            </div>

            {/* Luxury Statistics with Tabular Numerals & Clear Placeholder Note */}
            <div className="mt-12 pt-10 border-t border-[#2A2B2E]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {BRAND_CONFIG.aboutStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col border-l border-[#3A3B3F] pl-5"
                  >
                    <span className="font-display font-mono-num text-3xl md:text-4xl text-[#FFFFFF] tracking-wider">
                      {stat.value}
                    </span>
                    <span className="mt-2 text-xs tracking-[0.2em] uppercase text-[#F5F5F5]">
                      {stat.label}
                    </span>
                    <span className="mt-1 text-[11px] text-[#D6D6D6]/50 tracking-wide">
                      {stat.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
