import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "../config/siteConfig";
import { LuxuryImage } from "./LuxuryImage";

const GALLERY_CATEGORIES = [
  "All",
  "Salon Interior",
  "Hair Styling",
  "Haircuts",
  "Grooming",
  "Beauty",
  "Client Experience",
  "Details / Atmosphere",
] as const;

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % visibleItems.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + visibleItems.length) % visibleItems.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, visibleItems.length]);

  const currentLightboxItem: GalleryItem | null =
    lightboxIndex !== null && visibleItems[lightboxIndex]
      ? visibleItems[lightboxIndex]
      : null;

  return (
    <section
      id="editorial-archive"
      className="py-24 md:py-36 bg-[#17181A] border-t border-[#2A2B2E]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Heading & Filter Bar */}
        <div className="flex flex-col justify-between gap-8 mb-14 pb-10 border-b border-[#2A2B2E]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#C9B27C] mb-4">
                <span>04</span>
                <span aria-hidden="true">·</span>
                <span>VISUAL ARCHIVE</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-[0.05em] uppercase text-[#FFFFFF] leading-[1.08] text-balance">
                EDITORIAL GALLERY
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#D6D6D6] max-w-md font-light">
              Select any photograph to open the full-screen cinema viewer.
            </p>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div
            role="tablist"
            aria-label="Gallery Categories"
            className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 text-xs tracking-[0.18em] uppercase border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9B27C] ${
                    isActive
                      ? "bg-[#F5F5F5] text-[#111214] border-[#F5F5F5] font-medium"
                      : "bg-[#111214] text-[#D6D6D6] border-[#2A2B2E] hover:border-[#F5F5F5]/50 hover:text-[#FFFFFF]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Masonry / Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {visibleItems.map((item, idx) => {
            const colSpanClass =
              selectedCategory !== "All"
                ? "md:col-span-6 lg:col-span-4"
                : idx === 0
                ? "md:col-span-8"
                : idx === 1
                ? "md:col-span-4"
                : idx === 2
                ? "md:col-span-4"
                : idx === 3
                ? "md:col-span-4"
                : idx === 4
                ? "md:col-span-4"
                : "md:col-span-6";

            return (
              <motion.figure
                key={item.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(idx)}
                className={`${colSpanClass} group relative bg-[#111214] border border-[#2A2B2E] overflow-hidden cursor-pointer`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <LuxuryImage
                    src={item.image}
                    alt={`${item.title} — ${item.category}`}
                    containerClassName="w-full h-full"
                    imageClassName="group-hover:scale-105 transition-transform duration-700 brightness-[0.88] group-hover:brightness-100"
                  />
                </div>

                {/* Subtle Editorial Overlay on Hover */}
                <figcaption className="p-5 bg-[#111214] border-t border-[#2A2B2E] flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-[#C9B27C]">
                      {item.category}
                    </div>
                    <div className="font-display text-xl text-[#FFFFFF] tracking-wide mt-0.5">
                      {item.title}
                    </div>
                  </div>
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 border border-[#2A2B2E] group-hover:border-[#C9B27C] text-[#D6D6D6] group-hover:text-[#C9B27C] transition-colors shrink-0"
                    aria-hidden="true"
                  >
                    <Maximize2 className="w-4 h-4 stroke-[1.5]" />
                  </span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Cinematic Lightbox Viewer */}
      <AnimatePresence>
        {currentLightboxItem && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] bg-[#111214]/95 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery Image Lightbox"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#2A2B2E] pb-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#D6D6D6]">
                <span className="font-mono-num text-[#C9B27C]">
                  0{lightboxIndex + 1} / 0{visibleItems.length}
                </span>
                <span>·</span>
                <span>{currentLightboxItem.category}</span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Lightbox"
                className="inline-flex items-center justify-center w-11 h-11 border border-[#2A2B2E] text-[#F5F5F5] hover:border-[#C9B27C] hover:text-[#C9B27C] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Center Image Stage */}
            <div className="relative my-auto py-6 flex items-center justify-center max-h-[72vh]">
              {visibleItems.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + visibleItems.length) %
                        visibleItems.length
                    )
                  }
                  aria-label="Previous Image"
                  className="absolute left-0 md:left-4 z-10 w-12 h-12 bg-[#17181A]/90 border border-[#2A2B2E] hover:border-[#C9B27C] text-[#F5F5F5] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              <div className="max-w-5xl w-full max-h-[68vh] overflow-hidden border border-[#2A2B2E] bg-[#17181A]">
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full max-h-[68vh] object-contain mx-auto"
                />
              </div>

              {visibleItems.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % visibleItems.length)
                  }
                  aria-label="Next Image"
                  className="absolute right-0 md:right-4 z-10 w-12 h-12 bg-[#17181A]/90 border border-[#2A2B2E] hover:border-[#C9B27C] text-[#F5F5F5] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Caption Footer */}
            <div className="border-t border-[#2A2B2E] pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="font-display text-2xl text-[#FFFFFF] tracking-wide">
                {currentLightboxItem.title}
              </h3>
              <p className="text-xs md:text-sm text-[#D6D6D6]/80 font-light">
                {currentLightboxItem.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
