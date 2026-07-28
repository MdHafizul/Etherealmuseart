import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Artwork } from "@/data/products";

interface Props {
  artworks: Artwork[];
}

export default function ArtworkModal({ artworks }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (i: number) => setActiveIndex(i);
  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i! > 0 ? i! - 1 : artworks.length - 1));
  const next = () => setActiveIndex((i) => (i! < artworks.length - 1 ? i! + 1 : 0));

  return (
    <>
      {/* Gallery — Creative Alternating Editorial Layout */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8">
        <div className="space-y-6 md:space-y-10">
          {artworks.map((artwork, i) => {
            // Alternate: image-left/text-right for even, reversed for odd
            const isEven = i % 2 === 0;
            // Every 3rd item is a featured full-width hero
            const isHero = i % 3 === 0;

            if (isHero) {
              return (
                <motion.div
                  key={artwork.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 60, damping: 18, delay: i * 0.05 }}
                  className="relative cursor-pointer group"
                  onClick={() => open(i)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full object-cover max-h-[70vh]"
                      loading="lazy"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-navy/40 flex items-end p-8 md:p-12"
                    >
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-2">{artwork.category}</p>
                        <h3 className="text-white text-2xl md:text-3xl font-light">{artwork.title}</h3>
                        <p className="text-white/70 text-sm mt-2 max-w-xl">{artwork.year}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            }

            // Standard alternating rows
            return (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 60, damping: 18, delay: i * 0.05 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center cursor-pointer group`}
                onClick={() => open(i)}
              >
                {/* Image */}
                <div className={`${isEven ? "md:order-1" : "md:order-2"}`}>
                  <div className="overflow-hidden">
                    <motion.img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full object-cover aspect-[4/5] md:aspect-[3/4]"
                      loading="lazy"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">{artwork.category}</p>
                  <h3 className="text-lg md:text-xl font-light text-navy mb-2 group-hover:text-gold transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{artwork.description}</p>
                  <p className="text-xs text-gray-400 mt-3">{artwork.year}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-cream flex"
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center text-navy/60 hover:text-navy transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 z-20 text-xs text-navy/40 tabular-nums tracking-wider">
              {String(activeIndex + 1).padStart(2, "0")} / {String(artworks.length).padStart(2, "0")}
            </div>

            {/* Prev/Next */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-navy/40 hover:text-navy transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-navy/40 hover:text-navy transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-8 md:gap-16 px-8 md:px-20 py-20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="flex-shrink-0 max-w-full md:max-w-[55%] max-h-[60vh] md:max-h-[80vh]">
                <img
                  src={artworks[activeIndex].image}
                  alt={artworks[activeIndex].title}
                  className="w-full h-full object-contain max-h-[60vh] md:max-h-[80vh]"
                />
              </div>

              {/* Info */}
              <div className="max-w-sm space-y-4 text-center md:text-left">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  {artworks[activeIndex].category}
                </p>
                <h2 className="text-2xl md:text-3xl font-light text-navy leading-tight">
                  {artworks[activeIndex].title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {artworks[activeIndex].description}
                </p>
                <p className="text-xs text-gray-400">{artworks[activeIndex].year}</p>

                {/* CTA */}
                <a
                  href={`https://wa.me/60183603504?text=Hi! I'm interested in "${artworks[activeIndex].title}".`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold hover:text-white transition-colors duration-300 mt-4"
                >
                  Inquire about this piece →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
