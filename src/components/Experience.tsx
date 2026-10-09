import React from "react";
import { motion } from "motion/react";
import { EXPERIENCE_STEPS, IMAGES } from "../config/siteConfig";
import { LuxuryImage } from "./LuxuryImage";

const PILLARS = [
  "Personalized consultation",
  "Expert styling",
  "Premium ambience",
  "Attention to detail",
  "Relaxed environment",
  "Professional finishing",
];

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 md:py-36 bg-[#111214] border-t border-[#2A2B2E]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#C9B27C] mb-4">
            <span>03</span>
            <span aria-hidden="true">·</span>
            <span>SIGNATURE RITUAL</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-[0.05em] uppercase text-[#FFFFFF] leading-[1.08] text-balance">
            THE ARVEN EDGE EXPERIENCE
          </h2>
          <p className="mt-5 text-base md:text-lg text-[#D6D6D6] font-light leading-relaxed">
            Every detail inside our sanctuary is choreographed to slow time—from
            acoustic isolation and ergonomic stone wash suites to bespoke
            diagnostic rituals.
          </p>
        </div>

        {/* Large Cinematic Showcase Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[16/9] w-full border border-[#2A2B2E] overflow-hidden mb-16 md:mb-20"
        >
          <LuxuryImage
            src={IMAGES.experienceRitual}
            alt="The ARVEN EDGE Private Scalp & Sensory Sanctuary"
            containerClassName="w-full h-full"
            imageClassName="brightness-[0.82]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#111214] via-transparent to-transparent"
            aria-hidden="true"
          />

          {/* Unboxed Editorial Pillars Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#2A2B2E]/80 bg-[#111214]/80 backdrop-blur-md">
            {PILLARS.map((pillar, idx) => (
              <React.Fragment key={pillar}>
                <span className="text-xs tracking-[0.2em] uppercase text-[#F5F5F5]">
                  {pillar}
                </span>
                {idx < PILLARS.length - 1 && (
                  <span
                    className="hidden xl:inline text-[#C9B27C]"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* 4 Numbered Editorial Steps: 01 — CONSULTATION to 04 — FINISH */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {EXPERIENCE_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-[#3A3B3F] pt-7 flex flex-col justify-between group hover:border-[#C9B27C] transition-colors duration-300"
            >
              <div>
                <div className="font-mono-num text-xs tracking-[0.28em] uppercase text-[#C9B27C] mb-3">
                  {step.number} — {step.title}
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-[#FFFFFF] font-normal tracking-wide mb-3">
                  {step.subtitle}
                </h3>
                <p className="text-sm text-[#D6D6D6]/85 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 text-[11px] font-mono-num tracking-[0.25em] uppercase text-[#D6D6D6]/40 group-hover:text-[#C9B27C] transition-colors">
                STAGE {step.number} / 04
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
