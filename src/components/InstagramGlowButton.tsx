import React from "react";
import { INSTAGRAM_URL } from "../config/siteConfig";

interface InstagramGlowButtonProps {
  className?: string;
  label?: string;
}

/**
 * Critical Requirement:
 * Premium glowing Instagram button with:
 * - black / dark background (#111214)
 * - thin white/silver border with subtle animated Instagram gradient aura
 * - soft purple/pink/orange/champagne glow that intensifies on hover
 * - opens INSTAGRAM_URL in a new tab with rel="noopener noreferrer"
 */
export const InstagramGlowButton: React.FC<InstagramGlowButtonProps> = ({
  className = "",
  label = "FOLLOW US ON INSTAGRAM",
}) => {
  const handleClick = () => {
    window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`${label} (opens in a new tab)`}
      className={`instagram-glow-btn group inline-flex items-center justify-center gap-3.5 px-8 py-4 text-xs md:text-sm font-medium tracking-[0.22em] uppercase text-[#FFFFFF] border border-[#F5F5F5]/40 hover:border-[#FFFFFF]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9B27C] whitespace-nowrap shrink-0 cursor-pointer ${className}`}
    >
      {/* Authentic Instagram vector icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 md:w-5 md:h-5 text-[#F5F5F5] transition-transform duration-200 group-hover:scale-110 shrink-0"
        aria-hidden="true"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
      <span>{label}</span>
    </button>
  );
};
