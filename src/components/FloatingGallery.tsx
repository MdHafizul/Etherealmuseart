import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
  year: string;
}

interface FloatingGalleryProps {
  items: GalleryItem[];
}

function FloatingCard({ item, index }: { item: GalleryItem; index: number }) {
  // Unique floating animation per card — different delays, durations, directions
  const floatOffset = index * 0.3;
  const floatDuration = 5 + (index % 3) * 2;
  const driftX = (index % 3 === 0 ? 1 : index % 3 === 1 ? -1 : 0.5) * 8;
  const driftY = (index % 2 === 0 ? 1 : -1) * 6;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 18,
        delay: index * 0.06,
      }}
      whileHover={{
        zIndex: 50,
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        animate={{
          y: [0, driftY, 0, -driftY, 0],
          x: [0, driftX * 0.5, 0, -driftX * 0.5, 0],
          rotate: [0, (index % 2 === 0 ? 0.5 : -0.5), 0, (index % 2 === 0 ? -0.5 : 0.5), 0],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatOffset,
        }}
        whileHover={{
          scale: 1.06,
          y: -4,
          rotate: 0,
          boxShadow: "0 20px 40px rgba(26, 58, 92, 0.15)",
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
          },
        }}
        className="relative bg-cream cursor-pointer"
      >
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full object-cover aspect-[3/4]"
            loading="lazy"
          />

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-navy/50 flex flex-col justify-end p-5"
          >
            <motion.p
              initial={{ y: 8, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="text-white text-sm font-medium leading-snug"
            >
              {item.title}
            </motion.p>
            <motion.p
              initial={{ y: 6, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              className="text-white/50 text-[11px] mt-1.5 uppercase tracking-wider"
            >
              {item.category} &middot; {item.year}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FloatingGallery({ items }: FloatingGalleryProps) {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {items.map((item, i) => (
          <FloatingCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
