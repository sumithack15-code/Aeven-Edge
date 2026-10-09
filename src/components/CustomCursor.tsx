import React, { useEffect, useState } from "react";

/**
 * Minimal desktop-only custom cursor:
 * - Small inner precision dot
 * - Subtle outer ring that expands smoothly around interactive elements
 * - Automatically disabled on touch devices and when prefers-reduced-motion is enabled
 */
export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateCapability = () => {
      setIsDesktop(mediaQuery.matches && !reducedMotion.matches);
    };

    updateCapability();
    mediaQuery.addEventListener("change", updateCapability);

    return () => mediaQuery.removeEventListener("change", updateCapability);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, select, textarea, [role="button"]'
        );
        setIsHovered(Boolean(interactive));
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isDesktop, isVisible]);

  if (!isDesktop || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden lg:block"
      aria-hidden="true"
    >
      {/* Small center dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#F5F5F5] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${
            isHovered ? 0.5 : 1
          })`,
        }}
      />
      {/* Subtle outer ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-[#F5F5F5]/35 transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${
            isHovered ? 1.45 : 1
          })`,
          borderColor: isHovered
            ? "rgba(201, 178, 124, 0.65)"
            : "rgba(245, 245, 245, 0.28)",
        }}
      />
    </div>
  );
};
