import React, { useState } from "react";
import { BRAND_CONFIG } from "../config/siteConfig";

interface BrandLogoProps {
  variant?: "navbar" | "hero" | "footer";
  className?: string;
}

/**
 * Renders the exact uploaded ARVEN EDGE logo (preserving original proportions,
 * 3D metallic silver/white typography, horizontal flanking bars, and "!! जय माता दी !!" header).
 * In the top navigation bar, it renders the logo emblem right before "ARVEN EDGE" as requested.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "navbar",
  className = "",
}) => {
  const [imgError, setImgError] = useState(false);

  const ExactUploadedLogoSVG: React.FC<{ svgClassName?: string }> = ({
    svgClassName = "",
  }) => (
    <svg
      viewBox="0 0 1120 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none shrink-0 ${svgClassName}`}
      role="img"
      aria-label="ARVEN EDGE UNISEX SALON Official Logo"
    >
      <defs>
        {/* Subtle dark slate-charcoal background matching the uploaded logo card */}
        <linearGradient id="aeCardBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5C5E62" />
          <stop offset="50%" stopColor="#525458" />
          <stop offset="100%" stopColor="#484A4E" />
        </linearGradient>

        {/* High-sheen 3D silver/white bevel gradient for ARVEN & EDGE letters */}
        <linearGradient id="aeSilverBevel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#F8F8F8" />
          <stop offset="58%" stopColor="#D6D7D9" />
          <stop offset="80%" stopColor="#F2F2F2" />
          <stop offset="100%" stopColor="#BDBFC2" />
        </linearGradient>

        {/* Inner highlight rim stroke */}
        <linearGradient id="aeRimLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E2E3E5" />
          <stop offset="100%" stopColor="#9E9FA3" />
        </linearGradient>

        {/* Realistic 3D drop shadow matching the uploaded photo */}
        <filter id="ae3DShadow" x="-10%" y="-10%" width="125%" height="135%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="6"
            floodColor="#000000"
            floodOpacity="0.65"
          />
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="1.5"
            floodColor="#000000"
            floodOpacity="0.45"
          />
        </filter>

        <filter id="aeSubtleShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="3"
            floodColor="#000000"
            floodOpacity="0.55"
          />
        </filter>
      </defs>

      {/* Original Logo Proportion Plate */}
      <rect
        x="2"
        y="2"
        width="1116"
        height="446"
        rx="4"
        fill="url(#aeCardBg)"
        stroke="#FFFFFF"
        strokeOpacity="0.18"
        strokeWidth="2"
      />

      {/* Top Sacred Invocation: !! जय माता दी !! */}
      <text
        x="560"
        y="36"
        textAnchor="middle"
        fill="#F5F5F5"
        fontSize="21"
        fontWeight="600"
        fontFamily="sans-serif"
        letterSpacing="1.5"
        filter="url(#aeSubtleShadow)"
      >
        !! जय माता दी !!
      </text>

      {/* Main 3D Sculpted "ARVEN" Letterforms (Note: Λ has no crossbar in original logo) */}
      <g
        filter="url(#ae3DShadow)"
        fill="url(#aeSilverBevel)"
        stroke="url(#aeRimLight)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      >
        {/* Λ (Stylized A without crossbar) */}
        <path d="M148 70 C153 62 165 62 170 70 L256 244 C259 250 255 256 248 256 L224 256 C218 256 214 252 211 246 L159 136 L107 246 C104 252 100 256 94 256 L70 256 C63 256 59 250 62 244 Z" />

        {/* R */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M286 74 C286 67 291 63 298 63 L398 63 C442 63 470 86 470 123 C470 151 452 172 421 180 L466 244 C470 250 466 256 458 256 L429 256 C423 256 419 253 415 247 L374 185 L326 185 L326 246 C326 252 322 256 315 256 L297 256 C290 256 286 252 286 246 Z M326 98 L326 151 L393 151 C416 151 429 140 429 124 C429 108 416 98 393 98 Z"
        />

        {/* V */}
        <path d="M474 74 C471 67 475 63 483 63 L509 63 C515 63 519 67 522 73 L576 196 L630 73 C633 67 637 63 643 63 L669 63 C677 63 681 67 678 74 L593 248 C590 254 584 257 576 257 C568 257 562 254 559 248 Z" />

        {/* E */}
        <path d="M700 74 C700 67 705 63 712 63 L846 63 C853 63 857 67 857 74 L857 90 C857 97 853 101 846 101 L740 101 L740 140 L832 140 C839 140 843 144 843 151 L843 166 C843 173 839 177 832 177 L740 177 L740 218 L848 218 C855 218 859 222 859 229 L859 245 C859 252 855 256 848 256 L712 256 C705 256 700 252 700 245 Z" />

        {/* N */}
        <path d="M892 74 C892 67 897 63 904 63 L926 63 C932 63 937 66 941 72 L1026 192 L1026 74 C1026 67 1030 63 1037 63 L1054 63 C1061 63 1065 67 1065 74 L1065 245 C1065 252 1061 256 1054 256 L1033 256 C1027 256 1022 253 1018 247 L931 125 L931 245 C931 252 927 256 920 256 L904 256 C897 256 892 252 892 245 Z" />
      </g>

      {/* Middle Row: Flanking Horizontal Bars + "EDGE" */}
      <g
        filter="url(#aeSubtleShadow)"
        fill="url(#aeSilverBevel)"
        stroke="url(#aeRimLight)"
        strokeWidth="1.5"
      >
        {/* Left Horizontal Line */}
        <rect x="64" y="309" width="224" height="10" rx="2" />

        {/* E */}
        <path d="M320 278 H386 V291 H335 V308 H379 V320 H335 V339 H388 V352 H320 Z" />

        {/* D */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M446 278 H482 C508 278 525 293 525 315 C525 337 508 352 482 352 H446 Z M461 291 V339 H481 C499 339 510 329 510 315 C510 301 499 291 481 291 Z"
        />

        {/* G */}
        <path d="M629 313 H665 V343 C656 350 642 354 627 354 C598 354 579 338 579 315 C579 292 598 276 627 276 C643 276 656 281 664 289 L654 299 C647 293 638 289 627 289 C607 289 594 300 594 315 C594 330 607 341 627 341 C637 341 645 339 651 335 V325 H629 Z" />

        {/* E */}
        <path d="M726 278 H792 V291 H741 V308 H785 V320 H741 V339 H794 V352 H726 Z" />

        {/* Right Horizontal Line */}
        <rect x="832" y="309" width="224" height="10" rx="2" />
      </g>

      {/* Bottom Subtitle: UNISEX SALON */}
      <text
        x="568"
        y="420"
        textAnchor="middle"
        fill="#F2F2F2"
        fontSize="46"
        fontWeight="400"
        fontFamily="'Plus Jakarta Sans', 'Montserrat', sans-serif"
        letterSpacing="16"
        filter="url(#aeSubtleShadow)"
      >
        UNISEX SALON
      </text>
    </svg>
  );

  if (variant === "navbar") {
    // Renders the uploaded logo on the top right BEFORE the "ARVEN EDGE" text
    return (
      <span
        className={`inline-flex items-center gap-3.5 font-display tracking-[0.26em] text-[#FFFFFF] text-lg md:text-xl font-medium uppercase whitespace-nowrap select-none ${className}`}
      >
        {BRAND_CONFIG.logoImageUrl && !imgError ? (
          <img
            src={BRAND_CONFIG.logoImageUrl}
            alt="ARVEN EDGE Logo"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-9 md:h-11 w-auto object-contain shrink-0"
          />
        ) : (
          <ExactUploadedLogoSVG svgClassName="h-9 md:h-11 w-auto" />
        )}
        <span>ARVEN EDGE</span>
      </span>
    );
  }

  if (variant === "hero") {
    return (
      <div
        className={`inline-flex flex-col items-center select-none ${className}`}
        aria-label="ARVEN EDGE UNISEX SALON"
      >
        {BRAND_CONFIG.logoImageUrl && !imgError ? (
          <img
            src={BRAND_CONFIG.logoImageUrl}
            alt="ARVEN EDGE UNISEX SALON"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-24 sm:h-28 md:h-36 w-auto object-contain"
          />
        ) : (
          <ExactUploadedLogoSVG svgClassName="h-24 sm:h-28 md:h-36 w-auto" />
        )}
      </div>
    );
  }

  // Footer variant
  return (
    <div
      className={`inline-flex flex-col items-start select-none ${className}`}
    >
      <div className="flex items-center gap-4">
        {BRAND_CONFIG.logoImageUrl && !imgError ? (
          <img
            src={BRAND_CONFIG.logoImageUrl}
            alt="ARVEN EDGE UNISEX SALON"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-14 w-auto object-contain shrink-0"
          />
        ) : (
          <ExactUploadedLogoSVG svgClassName="h-14 w-auto" />
        )}
        <div>
          <div className="font-display text-xl md:text-2xl tracking-[0.3em] text-[#FFFFFF] uppercase leading-none">
            ARVEN EDGE
          </div>
          <div className="text-[10px] tracking-[0.4em] text-[#D6D6D6] uppercase mt-1.5">
            UNISEX SALON
          </div>
        </div>
      </div>
    </div>
  );
};

