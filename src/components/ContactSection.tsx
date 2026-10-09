import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram, ArrowUpRight } from "lucide-react";
import { BRAND_CONFIG, INSTAGRAM_URL } from "../config/siteConfig";

interface ContactSectionProps {
  onBookAppointment: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onBookAppointment,
}) => {
  const { contact } = BRAND_CONFIG;

  return (
    <section
      id="contact"
      className="py-24 md:py-36 bg-[#17181A] border-t border-[#2A2B2E]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="mb-16 pb-10 border-b border-[#2A2B2E] flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#C9B27C] mb-4">
              <span>08</span>
              <span aria-hidden="true">·</span>
              <span>CONCIERGE & LOCATION</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-[0.05em] uppercase text-[#FFFFFF] leading-[1.08]">
              VISIT THE SANCTUARY
            </h2>
          </div>

          {/* 3 Required Action Buttons: GET DIRECTIONS, CALL NOW, BOOK APPOINTMENT */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={contact.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs tracking-[0.2em] uppercase text-[#F5F5F5] bg-[#111214] border border-[#2A2B2E] hover:border-[#C9B27C] transition-colors whitespace-nowrap shrink-0"
            >
              <span>GET DIRECTIONS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs tracking-[0.2em] uppercase text-[#F5F5F5] bg-[#111214] border border-[#2A2B2E] hover:border-[#C9B27C] transition-colors whitespace-nowrap shrink-0"
            >
              <span>CALL NOW</span>
            </a>

            <button
              type="button"
              onClick={onBookAppointment}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-medium tracking-[0.2em] uppercase text-[#111214] bg-[#F5F5F5] hover:bg-[#C9B27C] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>BOOK APPOINTMENT</span>
            </button>
          </div>
        </div>

        {/* Contact Grid & Google Maps Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Editable Placeholder Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* ADDRESS */}
            <div className="border-b border-[#2A2B2E] pb-6">
              <div className="flex items-center gap-2.5 text-xs tracking-[0.25em] uppercase text-[#C9B27C] mb-2">
                <MapPin className="w-4 h-4 stroke-[1.5]" />
                <span>ADDRESS</span>
              </div>
              <p className="font-mono-num text-base text-[#FFFFFF] tracking-wide">
                {contact.address}
              </p>
            </div>

            {/* PHONE */}
            <div className="border-b border-[#2A2B2E] pb-6">
              <div className="flex items-center gap-2.5 text-xs tracking-[0.25em] uppercase text-[#C9B27C] mb-2">
                <Phone className="w-4 h-4 stroke-[1.5]" />
                <span>PHONE</span>
              </div>
              <p className="font-mono-num text-base text-[#FFFFFF] tracking-wide">
                {contact.phone}
              </p>
            </div>

            {/* EMAIL */}
            <div className="border-b border-[#2A2B2E] pb-6">
              <div className="flex items-center gap-2.5 text-xs tracking-[0.25em] uppercase text-[#C9B27C] mb-2">
                <Mail className="w-4 h-4 stroke-[1.5]" />
                <span>EMAIL</span>
              </div>
              <p className="font-mono-num text-base text-[#FFFFFF] tracking-wide">
                {contact.email}
              </p>
            </div>

            {/* INSTAGRAM */}
            <div className="border-b border-[#2A2B2E] pb-6">
              <div className="flex items-center gap-2.5 text-xs tracking-[0.25em] uppercase text-[#C9B27C] mb-2">
                <Instagram className="w-4 h-4 stroke-[1.5]" />
                <span>INSTAGRAM</span>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-num text-base text-[#FFFFFF] hover:text-[#C9B27C] transition-colors tracking-wide inline-flex items-center gap-2"
              >
                <span>{contact.instagramDisplay}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* OPENING HOURS */}
            <div>
              <div className="flex items-center gap-2.5 text-xs tracking-[0.25em] uppercase text-[#C9B27C] mb-2">
                <Clock className="w-4 h-4 stroke-[1.5]" />
                <span>OPENING HOURS</span>
              </div>
              <p className="font-mono-num text-base text-[#FFFFFF] tracking-wide">
                {contact.openingHours}
              </p>
            </div>
          </div>

          {/* Right: Google Maps Integration Placeholder */}
          <div className="lg:col-span-7">
            <div className="w-full h-full min-h-[420px] bg-[#111214] border border-[#2A2B2E] relative flex flex-col items-center justify-center p-8 text-center overflow-hidden">
              {contact.googleMapsEmbedUrl ? (
                <iframe
                  title="ARVEN EDGE Salon Location Map"
                  src={contact.googleMapsEmbedUrl}
                  className="absolute inset-0 w-full h-full border-0 grayscale contrast-125 invert-[0.9]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <>
                  {/* Architectural Grid Pattern Background */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #3A3B3F 1px, transparent 1px), linear-gradient(to bottom, #3A3B3F 1px, transparent 1px)",
                      backgroundSize: "48px 48px",
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10 max-w-md space-y-4">
                    <div className="w-12 h-12 mx-auto border border-[#C9B27C]/50 flex items-center justify-center text-[#C9B27C]">
                      <MapPin className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="font-display text-2xl tracking-[0.2em] uppercase text-[#FFFFFF]">
                      GOOGLE MAPS INTEGRATION PLACEHOLDER
                    </div>
                    <p className="text-xs text-[#D6D6D6]/75 leading-relaxed">
                      Update{" "}
                      <code className="font-mono-num text-[#C9B27C]">
                        BRAND_CONFIG.contact.googleMapsEmbedUrl
                      </code>{" "}
                      and{" "}
                      <code className="font-mono-num text-[#C9B27C]">
                        address
                      </code>{" "}
                      in <code className="font-mono-num">siteConfig.ts</code> to
                      display your live interactive salon map.
                    </p>
                    <div className="pt-2">
                      <a
                        href={contact.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase border border-[#3A3B3F] hover:border-[#F5F5F5] text-[#F5F5F5] transition-colors"
                      >
                        <span>OPEN IN GOOGLE MAPS</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
