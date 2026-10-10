import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  AlertCircle,
} from "lucide-react";

export interface OurGalleryImage {
  id: number;
  pageUrl: string;
  directUrl: string;
  title: string;
}

/**
 * All 18 provided ibb.co hosting page links mapped to their extracted direct i.ibb.co image URLs.
 */
export const OUR_GALLERY_IMAGES: OurGalleryImage[] = [
  {
    id: 1,
    pageUrl: "https://ibb.co/MyQVP8w2",
    directUrl: "https://i.ibb.co/1YjqRsyv/Home-Page-Image.jpg",
    title: "ARVEN EDGE — Salon Collective",
  },
  {
    id: 2,
    pageUrl: "https://ibb.co/xSqz4j2z",
    directUrl: "https://i.ibb.co/mC5hxqRh/Photo-1.jpg",
    title: "ARVEN EDGE — Gallery Photo 01",
  },
  {
    id: 3,
    pageUrl: "https://ibb.co/mrRNv6ww",
    directUrl: "https://i.ibb.co/20FZ8gQQ/Photo-2.jpg",
    title: "ARVEN EDGE — Gallery Photo 02",
  },
  {
    id: 4,
    pageUrl: "https://ibb.co/4wqRPttf",
    directUrl: "https://i.ibb.co/mrj56TTB/Photo-3.jpg",
    title: "ARVEN EDGE — Gallery Photo 03",
  },
  {
    id: 5,
    pageUrl: "https://ibb.co/JwXG0tNN",
    directUrl: "https://i.ibb.co/hJp4h9kk/Photo-4.jpg",
    title: "ARVEN EDGE — Gallery Photo 04",
  },
  {
    id: 6,
    pageUrl: "https://ibb.co/B5t7mHWh",
    directUrl: "https://i.ibb.co/LX8qMDjT/Photo-5.jpg",
    title: "ARVEN EDGE — Gallery Photo 05",
  },
  {
    id: 7,
    pageUrl: "https://ibb.co/KcHG4Ynn",
    directUrl: "https://i.ibb.co/sprPxh77/Photo-6.jpg",
    title: "ARVEN EDGE — Gallery Photo 06",
  },
  {
    id: 8,
    pageUrl: "https://ibb.co/Q3fVmV6k",
    directUrl: "https://i.ibb.co/Rk9KHKCN/Photo-7.jpg",
    title: "ARVEN EDGE — Gallery Photo 07",
  },
  {
    id: 9,
    pageUrl: "https://ibb.co/hJHqd20W",
    directUrl: "https://i.ibb.co/G4khMCm2/Photo-8.jpg",
    title: "ARVEN EDGE — Gallery Photo 08",
  },
  {
    id: 10,
    pageUrl: "https://ibb.co/qMH1Pvdx",
    directUrl: "https://i.ibb.co/DDBKSZtL/Photo-9.jpg",
    title: "ARVEN EDGE — Gallery Photo 09",
  },
  {
    id: 11,
    pageUrl: "https://ibb.co/mCSDptCt",
    directUrl: "https://i.ibb.co/MD92dpDp/Photo-10.jpg",
    title: "ARVEN EDGE — Gallery Photo 10",
  },
  {
    id: 12,
    pageUrl: "https://ibb.co/GQhd156P",
    directUrl: "https://i.ibb.co/0ywnWG7J/Photo-11.jpg",
    title: "ARVEN EDGE — Gallery Photo 11",
  },
  {
    id: 13,
    pageUrl: "https://ibb.co/ccnBVcGQ",
    directUrl: "https://i.ibb.co/7JmfLJwK/Photo-12.jpg",
    title: "ARVEN EDGE — Gallery Photo 12",
  },
  {
    id: 14,
    pageUrl: "https://ibb.co/359QzgQ1",
    directUrl: "https://i.ibb.co/spdzH8zj/Photo-13.jpg",
    title: "ARVEN EDGE — Gallery Photo 13",
  },
  {
    id: 15,
    pageUrl: "https://ibb.co/HMzmt4b",
    directUrl: "https://i.ibb.co/sDwLKRN/Photo-15.jpg",
    title: "ARVEN EDGE — Gallery Photo 15",
  },
  {
    id: 16,
    pageUrl: "https://ibb.co/d078Ktxb",
    directUrl: "https://i.ibb.co/tM3VCzFZ/Photo-16.jpg",
    title: "ARVEN EDGE — Gallery Photo 16",
  },
  {
    id: 17,
    pageUrl: "https://ibb.co/rGFXvc1Z",
    directUrl: "https://i.ibb.co/tMQ13xWb/Photo-17.jpg",
    title: "ARVEN EDGE — Gallery Photo 17",
  },
  {
    id: 18,
    pageUrl: "https://ibb.co/tTMW2yNP",
    directUrl: "https://i.ibb.co/ksgWDYr6/Photo-18.jpg",
    title: "ARVEN EDGE — Gallery Photo 18",
  },
];

export const OurGallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loadedMap, setLoadedMap] = useState<Record<number, boolean>>({});
  const [failedItems, setFailedItems] = useState<OurGalleryImage[]>([]);

  // Keyboard navigation for full-screen Lightbox (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % OUR_GALLERY_IMAGES.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + OUR_GALLERY_IMAGES.length) % OUR_GALLERY_IMAGES.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const handleImageLoad = (id: number) => {
    setLoadedMap((prev) => ({ ...prev, [id]: true }));
  };

  const handleImageError = (item: OurGalleryImage) => {
    setFailedItems((prev) =>
      prev.some((f) => f.id === item.id) ? prev : [...prev, item]
    );
  };

  const currentItem =
    lightboxIndex !== null ? OUR_GALLERY_IMAGES[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="py-24 md:py-36 bg-[#17181A] border-t border-[#2A2B2E]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Heading: 'Our Gallery' */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-[#2A2B2E]">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#C9B27C] mb-3">
              <span>ARVEN EDGE</span>
              <span aria-hidden="true">·</span>
              <span>PORTFOLIO</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-[0.05em] uppercase text-[#FFFFFF] leading-[1.08]">
              Our Gallery
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#D6D6D6] max-w-md font-light">
            Explore our signature hair, beauty, and grooming transformations.
            Click any image to view in full-screen.
          </p>
        </div>

        {/* Report any image links that fail to load */}
        {failedItems.length > 0 && (
          <div
            role="alert"
            className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/40 text-xs text-amber-200 flex items-start gap-3"
          >
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
            <div>
              <div className="font-medium uppercase tracking-wider mb-1">
                The following image link(s) could not be loaded:
              </div>
              <ul className="list-disc list-inside space-y-1 font-mono-num">
                {failedItems.map((item) => (
                  <li key={item.id}>
                    {item.pageUrl} ({item.directUrl})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Featured First Image (Wide Group Photo) — Fitted to its natural 4:3 landscape proportions so no people are cropped */}
        {OUR_GALLERY_IMAGES.slice(0, 1).map((item) => {
          const isLoaded = Boolean(loadedMap[item.id]);
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightboxIndex(0)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxIndex(0);
                }
              }}
              aria-label={`Open ${item.title} in full-screen lightbox`}
              className="group relative w-full max-w-4xl mx-auto mb-6 sm:mb-8 rounded-xl overflow-hidden bg-[#111214] border border-[#2A2B2E] hover:border-[#C9B27C]/70 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9B27C]"
            >
              {!isLoaded && (
                <div
                  className="aspect-[847/651] w-full bg-gradient-to-br from-[#17181A] via-[#202124] to-[#111214] animate-pulse"
                  aria-hidden="true"
                />
              )}

              <img
                src={item.directUrl}
                alt={item.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onLoad={() => handleImageLoad(item.id)}
                onError={() => handleImageError(item)}
                className={`w-full h-auto max-h-[540px] object-contain bg-[#111214] mx-auto transition-transform duration-500 ease-out group-hover:scale-[1.02] ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Smooth Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111214]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-mono-num tracking-[0.2em] uppercase text-[#F5F5F5] truncate">
                    01 · {item.title}
                  </span>
                  <span className="w-9 h-9 rounded-lg bg-[#111214]/80 border border-[#C9B27C]/60 text-[#C9B27C] flex items-center justify-center shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Responsive Grid for Remaining Images: Mobile 2 columns (grid-cols-2), Tablet 2 columns (md:grid-cols-2), Desktop 4 columns (lg:grid-cols-4) */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 md:gap-6">
          {OUR_GALLERY_IMAGES.slice(1).map((item, idx) => {
            const actualIndex = idx + 1;
            const isLoaded = Boolean(loadedMap[item.id]);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (idx % 4) * 0.04 }}
                onClick={() => setLightboxIndex(actualIndex)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(actualIndex);
                  }
                }}
                aria-label={`Open ${item.title} in full-screen lightbox`}
                className="group relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#111214] border border-[#2A2B2E] hover:border-[#C9B27C]/70 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9B27C]"
              >
                {!isLoaded && (
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#17181A] via-[#202124] to-[#111214] animate-pulse"
                    aria-hidden="true"
                  />
                )}

                <img
                  src={item.directUrl}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onLoad={() => handleImageLoad(item.id)}
                  onError={() => handleImageError(item)}
                  className={`w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Smooth Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111214]/85 via-[#111214]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 sm:p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] sm:text-xs font-mono-num tracking-[0.2em] uppercase text-[#F5F5F5] truncate">
                      {String(actualIndex + 1).padStart(2, "0")} · ARVEN EDGE
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-[#111214]/80 border border-[#C9B27C]/60 text-[#C9B27C] flex items-center justify-center shrink-0">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Lightbox with Previous, Next, and Close Buttons */}
      <AnimatePresence>
        {currentItem && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[90] bg-[#111214]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="Our Gallery Lightbox"
          >
            {/* Top Bar with Counter & Close Button */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-between border-b border-[#2A2B2E] pb-4"
            >
              <div className="flex items-center gap-3 text-xs tracking-[0.24em] uppercase text-[#D6D6D6]">
                <span className="font-mono-num text-[#C9B27C]">
                  {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
                  {String(OUR_GALLERY_IMAGES.length).padStart(2, "0")}
                </span>
                <span aria-hidden="true">·</span>
                <span className="truncate max-w-[200px] sm:max-w-md">
                  {currentItem.title}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Lightbox"
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#17181A] border border-[#2A2B2E] text-[#F5F5F5] hover:border-[#C9B27C] hover:text-[#C9B27C] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Center Full-Screen Image Stage with Previous / Next Controls */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative my-auto py-4 flex items-center justify-center max-h-[76vh] w-full max-w-6xl mx-auto"
            >
              {/* Previous Button */}
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + OUR_GALLERY_IMAGES.length) %
                      OUR_GALLERY_IMAGES.length
                  )
                }
                aria-label="Previous Image"
                className="absolute left-1 sm:left-4 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#17181A]/90 border border-[#2A2B2E] hover:border-[#C9B27C] text-[#F5F5F5] hover:text-[#C9B27C] flex items-center justify-center transition-colors shadow-xl cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Active Image */}
              <div className="max-w-4xl w-full max-h-[74vh] flex items-center justify-center overflow-hidden rounded-xl border border-[#2A2B2E] bg-[#17181A] p-1.5 sm:p-2">
                <img
                  src={currentItem.directUrl}
                  alt={currentItem.title}
                  referrerPolicy="no-referrer"
                  className="w-auto h-auto max-h-[70vh] max-w-full object-contain rounded-lg mx-auto select-none"
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex + 1) % OUR_GALLERY_IMAGES.length
                  )
                }
                aria-label="Next Image"
                className="absolute right-1 sm:right-4 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#17181A]/90 border border-[#2A2B2E] hover:border-[#C9B27C] text-[#F5F5F5] hover:text-[#C9B27C] flex items-center justify-center transition-colors shadow-xl cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Bottom Navigation Bar */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="border-t border-[#2A2B2E] pt-4 flex items-center justify-between gap-4 text-xs text-[#D6D6D6]/75"
            >
              <span className="font-display text-lg sm:text-xl text-[#FFFFFF] tracking-wide truncate">
                {currentItem.title}
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + OUR_GALLERY_IMAGES.length) %
                        OUR_GALLERY_IMAGES.length
                    )
                  }
                  className="px-3.5 py-2 rounded-lg border border-[#2A2B2E] hover:border-[#C9B27C] text-[#F5F5F5] uppercase tracking-wider text-[11px] cursor-pointer"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex + 1) % OUR_GALLERY_IMAGES.length
                    )
                  }
                  className="px-3.5 py-2 rounded-lg border border-[#2A2B2E] hover:border-[#C9B27C] text-[#F5F5F5] uppercase tracking-wider text-[11px] cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
