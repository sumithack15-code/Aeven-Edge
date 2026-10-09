import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import {
  SERVICES_DATA,
  BOOKING_EXTERNAL_URL,
  BRAND_CONFIG,
} from "../config/siteConfig";

interface BookingSectionProps {
  preselectedService?: string;
}

interface BookingFormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedService,
}) => {
  const [formData, setFormData] = useState<BookingFormState>({
    name: "",
    phone: "",
    email: "",
    service: preselectedService || SERVICES_DATA[0].name,
    preferredDate: "",
    preferredTime: "14:00",
    message: "",
  });

  const [errorMsg, setErrorMsg] = useState<string>("");
  const [preparedSummary, setPreparedSummary] =
    useState<BookingFormState | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.preferredDate
    ) {
      setErrorMsg(
        "Please provide your full name, phone number, and preferred date."
      );
      return;
    }

    if (BOOKING_EXTERNAL_URL) {
      window.open(BOOKING_EXTERNAL_URL, "_blank", "noopener,noreferrer");
      return;
    }

    // Do NOT fake a backend database booking: prepare the structured appointment request
    // and clearly display the integration handoff state.
    setPreparedSummary({ ...formData });
  };

  return (
    <section
      id="booking"
      className="py-24 md:py-36 bg-[#111214] border-t border-[#2A2B2E]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline & Direct Booking CTA */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#C9B27C] mb-4">
              <span>07</span>
              <span aria-hidden="true">·</span>
              <span>PRIVATE RESERVATIONS</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-[0.05em] uppercase text-[#FFFFFF] leading-[1.06] text-balance">
              YOUR NEXT LOOK
              <br />
              STARTS HERE.
            </h2>

            <p className="mt-5 text-base md:text-lg text-[#D6D6D6] font-light leading-relaxed">
              Reserve your time with ARVEN EDGE. Every appointment includes a
              dedicated one-on-one stylistic consultation.
            </p>

            <div className="mt-8">
              <a
                href="#booking-form-name"
                onClick={(e) => {
                  if (BOOKING_EXTERNAL_URL) {
                    e.preventDefault();
                    window.open(
                      BOOKING_EXTERNAL_URL,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }
                }}
                className="inline-flex items-center gap-3 px-7 py-4 text-xs font-medium tracking-[0.22em] uppercase text-[#111214] bg-[#F5F5F5] hover:bg-[#C9B27C] transition-colors whitespace-nowrap shrink-0"
              >
                <span>BOOK AN APPOINTMENT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Editable Configuration Notice */}
            <div className="mt-12 p-6 bg-[#17181A] border border-[#2A2B2E]">
              <div className="flex items-start gap-3">
                <Info className="w-4 h-4 text-[#C9B27C] shrink-0 mt-0.5" />
                <div className="text-xs text-[#D6D6D6]/80 space-y-1.5 leading-relaxed">
                  <div className="uppercase tracking-[0.2em] text-[#FFFFFF] font-medium">
                    Booking Integration Point
                  </div>
                  <p>
                    Connect your preferred salon scheduling provider (Fresha,
                    Zenoti, Boulevard, or WhatsApp concierge) by updating{" "}
                    <code className="font-mono-num text-[#C9B27C]">
                      BOOKING_EXTERNAL_URL
                    </code>{" "}
                    in <code className="font-mono-num">siteConfig.ts</code>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Appointment Request Form */}
          <div className="lg:col-span-7 bg-[#17181A] border border-[#2A2B2E] p-8 md:p-12">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="booking-form-name"
                    className="block text-[11px] tracking-[0.22em] uppercase text-[#D6D6D6] mb-2.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="booking-form-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-[#111214] border border-[#2A2B2E] focus:border-[#C9B27C] px-4 py-3.5 text-sm text-[#FFFFFF] placeholder:text-[#D6D6D6]/35 focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="booking-form-phone"
                    className="block text-[11px] tracking-[0.22em] uppercase text-[#D6D6D6] mb-2.5"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="booking-form-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full bg-[#111214] border border-[#2A2B2E] focus:border-[#C9B27C] px-4 py-3.5 text-sm text-[#FFFFFF] placeholder:text-[#D6D6D6]/35 focus:outline-none transition-colors font-mono-num"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label
                    htmlFor="booking-form-email"
                    className="block text-[11px] tracking-[0.22em] uppercase text-[#D6D6D6] mb-2.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="booking-form-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full bg-[#111214] border border-[#2A2B2E] focus:border-[#C9B27C] px-4 py-3.5 text-sm text-[#FFFFFF] placeholder:text-[#D6D6D6]/35 focus:outline-none transition-colors"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="booking-form-service"
                    className="block text-[11px] tracking-[0.22em] uppercase text-[#D6D6D6] mb-2.5"
                  >
                    Selected Service *
                  </label>
                  <select
                    id="booking-form-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#111214] border border-[#2A2B2E] focus:border-[#C9B27C] px-4 py-3.5 text-sm text-[#FFFFFF] focus:outline-none transition-colors"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.category} — {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="booking-form-date"
                    className="block text-[11px] tracking-[0.22em] uppercase text-[#D6D6D6] mb-2.5"
                  >
                    Preferred Date *
                  </label>
                  <input
                    id="booking-form-date"
                    name="preferredDate"
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full bg-[#111214] border border-[#2A2B2E] focus:border-[#C9B27C] px-4 py-3.5 text-sm text-[#FFFFFF] focus:outline-none transition-colors font-mono-num"
                  />
                </div>

                {/* Preferred Time */}
                <div>
                  <label
                    htmlFor="booking-form-time"
                    className="block text-[11px] tracking-[0.22em] uppercase text-[#D6D6D6] mb-2.5"
                  >
                    Preferred Time *
                  </label>
                  <select
                    id="booking-form-time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full bg-[#111214] border border-[#2A2B2E] focus:border-[#C9B27C] px-4 py-3.5 text-sm text-[#FFFFFF] focus:outline-none transition-colors font-mono-num"
                  >
                    <option value="10:00">10:00 AM — Morning Session</option>
                    <option value="12:00">12:00 PM — Midday Session</option>
                    <option value="14:00">02:00 PM — Afternoon Session</option>
                    <option value="16:00">04:00 PM — Late Afternoon</option>
                    <option value="18:00">06:00 PM — Evening Session</option>
                    <option value="20:00">08:00 PM — Private Late</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="booking-form-message"
                  className="block text-[11px] tracking-[0.22em] uppercase text-[#D6D6D6] mb-2.5"
                >
                  Styling Notes or Preferences
                </label>
                <textarea
                  id="booking-form-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share any specific requests, hair history, or consultation notes..."
                  className="w-full bg-[#111214] border border-[#2A2B2E] focus:border-[#C9B27C] p-4 text-sm text-[#FFFFFF] placeholder:text-[#D6D6D6]/35 focus:outline-none transition-colors resize-none"
                />
              </div>

              {errorMsg && (
                <div
                  role="alert"
                  className="p-4 border border-amber-500/40 bg-amber-500/10 text-xs text-amber-200 tracking-wide"
                >
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 px-8 text-xs md:text-sm font-medium tracking-[0.24em] uppercase text-[#111214] bg-[#F5F5F5] hover:bg-[#C9B27C] transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                CONFIRM APPOINTMENT
              </button>
            </form>

            {/* Transparent Frontend Integration Handoff Summary (Does NOT fake a live backend confirmation) */}
            {preparedSummary && (
              <div
                role="status"
                className="mt-8 p-6 bg-[#111214] border border-[#C9B27C]/60 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-[#C9B27C]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>APPOINTMENT DETAILS PREPARED (FRONTEND PREVIEW)</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPreparedSummary(null)}
                    className="text-[11px] uppercase tracking-widest text-[#D6D6D6]/60 hover:text-[#FFFFFF]"
                  >
                    CLEAR
                  </button>
                </div>

                <p className="text-xs text-[#D6D6D6] leading-relaxed">
                  No live booking backend is currently connected, so this
                  request has not been dispatched yet. Below is the structured
                  payload ready for your booking API or direct concierge
                  dispatch:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs border-t border-[#2A2B2E] pt-4 font-mono-num">
                  <div>
                    <span className="text-[#D6D6D6]/50">CLIENT: </span>
                    <span className="text-[#FFFFFF]">{preparedSummary.name}</span>
                  </div>
                  <div>
                    <span className="text-[#D6D6D6]/50">PHONE: </span>
                    <span className="text-[#FFFFFF]">{preparedSummary.phone}</span>
                  </div>
                  <div>
                    <span className="text-[#D6D6D6]/50">SERVICE: </span>
                    <span className="text-[#FFFFFF]">
                      {preparedSummary.service}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#D6D6D6]/50">PREFERRED SLOT: </span>
                    <span className="text-[#FFFFFF]">
                      {preparedSummary.preferredDate} @{" "}
                      {preparedSummary.preferredTime}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${BRAND_CONFIG.contact.email}?subject=${encodeURIComponent(
                      `Appointment Request — ${preparedSummary.service}`
                    )}&body=${encodeURIComponent(
                      `Name: ${preparedSummary.name}\nPhone: ${preparedSummary.phone}\nService: ${preparedSummary.service}\nPreferred Date: ${preparedSummary.preferredDate}\nPreferred Time: ${preparedSummary.preferredTime}\nNotes: ${preparedSummary.message}`
                    )}`}
                    className="inline-flex items-center gap-2 px-4 py-2 text-[11px] tracking-[0.2em] uppercase bg-[#2A2B2E] hover:bg-[#C9B27C] hover:text-[#111214] text-[#FFFFFF] transition-colors"
                  >
                    SEND VIA EMAIL CLIENT ↗
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
