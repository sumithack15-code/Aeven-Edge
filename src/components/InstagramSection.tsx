import React from "react";
import { motion } from "motion/react";
import {
  INSTAGRAM_PREVIEW_POSTS,
  INSTAGRAM_URL,
  BRAND_CONFIG,
} from "../config/siteConfig";
import { InstagramGlowButton } from "./InstagramGlowButton";
import { LuxuryImage } from "./LuxuryImage";

export const InstagramSection: React.FC = () => {
  return (
    <section
      id="instagram"
      className="py-24 md:py-36 bg-[#17181A] border-t border-[#2A2B2E] relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Heading & Glowing CTA */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#C9B27C] mb-4">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>SOCIAL EDITORIAL</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-[0.06em] uppercase text-[#FFFFFF] leading-[1.08]">
            FOLLOW THE EDGE
          </h2>

          <p className="mt-4 text-base md:text-lg text-[#D6D6D6] font-light leading-relaxed">
            Discover the latest looks, transformations and moments from ARVEN
            EDGE.
          </p>

          <div className="mt-9">
            <InstagramGlowButton />
          </div>

          <span className="mt-4 text-[11px] font-mono-num tracking-widest uppercase text-[#D6D6D6]/50">
            Destination: {BRAND_CONFIG.contact.instagramDisplay}
          </span>
        </div>

        {/* 4-Column Editorial Preview Grid (Clearly Marked as Curated Placeholders) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_PREVIEW_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group block bg-[#111214] border border-[#2A2B2E] hover:border-[#C9B27C]/60 transition-colors overflow-hidden"
            >
              <div className="aspect-square w-full overflow-hidden">
                <LuxuryImage
                  src={post.image}
                  alt={post.label}
                  containerClassName="w-full h-full"
                  imageClassName="group-hover:scale-105 transition-transform duration-700 brightness-[0.88] group-hover:brightness-100"
                />
              </div>
              <div className="px-4 py-3.5 flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-[#D6D6D6]/75 border-t border-[#2A2B2E]">
                <span className="truncate">{post.label}</span>
                <span className="text-[#C9B27C] shrink-0 ml-2">↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
