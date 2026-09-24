import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X, ZoomIn } from "lucide-react";

interface ProductImageSliderProps {
  images: string[];
  productName: string;
  composition: string;
}

export function ProductImageSlider({
  images,
  productName,
  composition,
}: ProductImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = images.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "Escape") setLightboxOpen(false);
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
        return;
      }
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, total]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      // Swiped left -> next
      nextSlide();
    } else if (diff < -45) {
      // Swiped right -> prev
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Descriptive slide labels based on quadrant/angle
  const getSlideLabel = (idx: number) => {
    switch (idx) {
      case 0:
        return "Primary Carton Pack";
      case 1:
        return "Angled Perspective & Pouch";
      case 2:
        return "Foil Blister & Reverse Composition";
      case 3:
        return "Dimensional Packaging View";
      default:
        return `Slide ${idx + 1}`;
    }
  };

  return (
    <div className="flex flex-col gap-3.5">
      {/* Main Slidable Viewport */}
      <div
        className="group relative overflow-hidden rounded-2xl border border-border bg-slate-50/60 p-3 sm:p-6 shadow-xs select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Soft pedestal gradient */}
        <div className="absolute inset-x-8 bottom-3 h-20 rounded-2xl bg-slate-200/50 -z-0 blur-md pointer-events-none" />

        {/* Active Image */}
        <div
          className="relative aspect-4/3 sm:aspect-square w-full flex items-center justify-center cursor-zoom-in"
          onClick={() => setLightboxOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Click to enlarge product pack"
          onKeyDown={(e) => e.key === "Enter" && setLightboxOpen(true)}
        >
          <img
            key={images[activeIndex]}
            src={images[activeIndex]}
            alt={`${productName} — ${getSlideLabel(activeIndex)} — ${composition}`}
            className="relative z-10 max-h-full max-w-full object-contain transition-all duration-300 animate-in fade-in zoom-in-95"
            loading="eager"
            fetchPriority="high"
          />

          {/* Quick Zoom Hint Pill */}
          <div className="absolute right-2 bottom-2 z-20 hidden sm:flex items-center gap-1.5 rounded-full bg-navy/80 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur transition-opacity opacity-0 group-hover:opacity-100 shadow-xs pointer-events-none">
            <ZoomIn className="h-3.5 w-3.5" />
            <span>Click to Zoom</span>
          </div>
        </div>

        {/* Counter Badge */}
        <div className="absolute left-3 top-3 z-20 flex items-center gap-2">
          <span className="rounded-full bg-navy/85 px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur shadow-xs">
            {activeIndex + 1} / {total}
          </span>
          <span className="hidden sm:inline-block rounded-md bg-white/90 border border-border px-2 py-0.5 text-[11px] font-semibold text-navy shadow-2xs">
            {getSlideLabel(activeIndex)}
          </span>
        </div>

        {/* Navigation Arrows (if multiple images) */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Previous image"
              className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/95 text-navy shadow-md border border-border/80 transition-all hover:bg-clinical hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Next image"
              className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/95 text-navy shadow-md border border-border/80 transition-all hover:bg-clinical hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Progress Dots for Mobile */}
        {total > 1 && (
          <div className="absolute inset-x-0 bottom-2 z-20 flex justify-center gap-1.5 sm:hidden">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === activeIndex ? "w-6 bg-clinical" : "w-1.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Interactive Thumbnail Carousel Strip */}
      {total > 1 && (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {images.map((img, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl border p-1 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "border-clinical bg-clinical/5 shadow-sm ring-2 ring-clinical"
                    : "border-border bg-white hover:border-slate-300 hover:bg-slate-50 opacity-75 hover:opacity-100"
                }`}
                aria-label={`Select ${getSlideLabel(idx)}`}
              >
                <img
                  src={img}
                  alt={`${productName} thumbnail ${idx + 1}`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
                <span className="absolute bottom-1 right-1 rounded bg-black/60 px-1 py-0.2 text-[9px] font-bold text-white leading-none">
                  {idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Lightbox / Zoom Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-h-[92vh] max-w-[92vw] overflow-hidden rounded-2xl bg-white p-4 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex w-full items-center justify-between border-b border-border pb-3 mb-3">
              <div>
                <h4 className="font-display text-base font-bold text-navy">
                  {productName}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {getSlideLabel(activeIndex)} ({activeIndex + 1} of {total})
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Close zoomed view"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex items-center justify-center max-h-[75vh] w-auto overflow-hidden">
              <img
                src={images[activeIndex]}
                alt={`${productName} high resolution preview`}
                className="max-h-[72vh] max-w-full object-contain"
              />

              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg border border-border hover:bg-clinical hover:text-white transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg border border-border hover:bg-clinical hover:text-white transition-colors cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip in Modal */}
            {total > 1 && (
              <div className="mt-4 flex gap-2 overflow-x-auto py-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`h-14 w-18 shrink-0 overflow-hidden rounded-lg border p-1 transition-all cursor-pointer ${
                      idx === activeIndex
                        ? "border-clinical ring-2 ring-clinical bg-clinical/5"
                        : "border-border bg-slate-50 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumb ${idx + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
