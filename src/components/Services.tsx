import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "../config/siteConfig";
import { LuxuryImage } from "./LuxuryImage";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

type CategoryFilter = "ALL" | "HAIR" | "BEAUTY" | "GROOMING";

const CATEGORIES: { id: CategoryFilter; label: string; count: number }[] = [
  { id: "ALL", label: "All Offerings", count: SERVICES_DATA.length },
  {
    id: "HAIR",
    label: "Hair",
    count: SERVICES_DATA.filter((s) => s.category === "HAIR").length,
  },
  {
    id: "BEAUTY",
    label: "Beauty",
    count: SERVICES_DATA.filter((s) => s.category === "BEAUTY").length,
  },
  {
    id: "GROOMING",
    label: "Grooming",
    count: SERVICES_DATA.filter((s) => s.category === "GROOMING").length,
  },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("ALL");

  const filteredServices =
    activeCategory === "ALL"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services"
      className="py-24 md:py-36 bg-[#17181A] border-t border-[#2A2B2E]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header & Interactive Category Segmented Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 pb-10 border-b border-[#2A2B2E]">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#C9B27C] mb-4">
              <span>02</span>
              <span aria-hidden="true">·</span>
              <span>CURATED MENU</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-[0.05em] uppercase text-[#FFFFFF] leading-[1.08] text-balance">
              BESPOKE SERVICES
            </h2>
          </div>

          {/* Functional Segmented Filter Controls */}
          <div
            role="tablist"
            aria-label="Service Categories"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#111214] border border-[#2A2B2E] self-start lg:self-end"
          >
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9B27C] ${
                    active
                      ? "bg-[#F5F5F5] text-[#111214] font-medium"
                      : "text-[#D6D6D6] hover:text-[#FFFFFF]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`ml-2 font-mono-num text-[11px] ${
                      active ? "text-[#111214]/70" : "text-[#D6D6D6]/50"
                    }`}
                  >
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredServices.map((service: ServiceItem) => (
            <motion.article
              key={service.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => onSelectService(service.name)}
              className="group relative bg-[#111214] border border-[#2A2B2E] hover:border-[#C9B27C]/60 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
            >
              {/* Card Image Header */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#202124]">
                <LuxuryImage
                  src={service.image}
                  alt={`${service.name} — ${service.category} at ARVEN EDGE`}
                  containerClassName="w-full h-full"
                  imageClassName="group-hover:scale-105 transition-transform duration-500 brightness-[0.85] group-hover:brightness-100"
                />
              </div>

              {/* Card Body */}
              <div className="p-7 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Quiet Unboxed Metadata Line (Zero-Pill Rule) */}
                  <div className="flex items-center justify-between text-[11px] tracking-[0.24em] uppercase text-[#D6D6D6]/65 mb-3">
                    <span>{service.category}</span>
                    <span className="font-mono-num">{service.duration}</span>
                  </div>

                  {/* Service Title & Arrow */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl md:text-3xl text-[#FFFFFF] font-normal tracking-wide group-hover:text-[#C9B27C] transition-colors">
                      {service.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-[#D6D6D6] group-hover:text-[#C9B27C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0 mt-1" />
                  </div>

                  <p className="mt-3 text-sm text-[#D6D6D6]/85 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Price / Consultation Footer */}
                <div className="mt-7 pt-5 border-t border-[#2A2B2E]/80 flex items-center justify-between text-xs">
                  <span className="text-[#D6D6D6] tracking-wider uppercase font-mono-num">
                    {service.price}
                  </span>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#F5F5F5] group-hover:text-[#C9B27C] transition-colors">
                    RESERVE →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pricing Transparency Footnote */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#D6D6D6]/60 border-t border-[#2A2B2E] pt-6">
          <p>
            * All bespoke colour, transformation, and bridal services include a
            complimentary diagnostic consultation prior to commencement.
          </p>
          <span className="font-mono-num uppercase tracking-widest">
            [ADD PRICES IN SITECONFIG.TS]
          </span>
        </div>
      </div>
    </section>
  );
};
