import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { PUBLIC_IMAGE_FALLBACKS } from "../config/siteConfig";

interface LuxuryImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackLabel?: string;
  containerClassName?: string;
  imageClassName?: string;
  priority?: boolean;
}

/**
 * Resilient high-resolution image wrapper enforcing the Zero-Broken-Image Policy:
 * - Resolves bundled Vite asset URLs and automatically falls back to `/images/...` public static paths if needed
 * - Includes loading skeleton state
 * - Renders a styled architectural charcoal/champagne fallback card if all sources fail
 */
export const LuxuryImage: React.FC<LuxuryImageProps> = ({
  src,
  alt,
  fallbackLabel,
  containerClassName = "",
  imageClassName = "",
  priority = false,
  ...rest
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [triedPublicFallback, setTriedPublicFallback] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setTriedPublicFallback(false);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const handleError = () => {
    const publicFallback = PUBLIC_IMAGE_FALLBACKS[src];
    if (!triedPublicFallback && publicFallback && currentSrc !== publicFallback) {
      setTriedPublicFallback(true);
      setCurrentSrc(publicFallback);
      return;
    }
    setHasError(true);
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#17181A] ${containerClassName}`}
    >
      {!hasError ? (
        <>
          {!isLoaded && (
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#17181A] via-[#202124] to-[#111214] animate-pulse"
              aria-hidden="true"
            />
          )}
          <img
            src={currentSrc}
            alt={alt}
            referrerPolicy="no-referrer"
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            onLoad={() => setIsLoaded(true)}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${imageClassName}`}
            {...rest}
          />
        </>
      ) : (
        <div className="w-full h-full min-h-[240px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#17181A] via-[#202124] to-[#111214] border border-[#2A2B2E]">
          <Sparkles className="w-6 h-6 text-[#C9B27C]/60 mb-3 stroke-[1.25]" />
          <span className="font-display text-lg tracking-[0.2em] uppercase text-[#F5F5F5]">
            ARVEN EDGE
          </span>
          <span className="text-xs text-[#D6D6D6]/70 tracking-widest uppercase mt-1">
            {fallbackLabel || alt}
          </span>
        </div>
      )}
    </div>
  );
};
