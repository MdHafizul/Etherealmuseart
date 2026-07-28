import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import nikah1 from "@/assets/nikahnama-1.jpg";
import nikah2 from "@/assets/nikahnama-2.jpg";
import artDetail1 from "@/assets/art-detail-1.jpg";
import artDetail2 from "@/assets/art-detail-2.jpg";
import sampulSpread from "@/assets/sampul-raya-collection.jpg";

const slides = [
  { src: nikah1, alt: "Nikah Nama — Gold Illumination" },
  { src: nikah2, alt: "Nikah Nama — Classic Foliage" },
  { src: artDetail1, alt: "Illumination Detail — Tezhip" },
  { src: artDetail2, alt: "Illumination Detail — Floral" },
  { src: sampulSpread, alt: "Full Sampul Raya Spread" },
];

interface ImageCarouselProps {
  height?: string;
}

export default function ImageCarousel({ height = "60vh" }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goTo = useCallback(
    (i: number) => {
      setCurrent(((i % total) + total) % total);
    },
    [total],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  return (
    <div className="relative w-full overflow-hidden bg-cream" style={{ height }}>
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full h-full flex-shrink-0">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-navy/40 hover:text-navy transition-colors bg-cream/80 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-navy/40 hover:text-navy transition-colors bg-cream/80 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Counter */}
      <div className="absolute bottom-6 right-6 text-xs text-navy/40 tabular-nums tracking-wider">
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-6 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-navy" : "bg-navy/20"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
