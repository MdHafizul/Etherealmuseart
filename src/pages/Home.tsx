import { Link } from "react-router-dom";
import { motion } from "motion/react";
import artistPhoto from "@/assets/artistphoto2.jpeg";
import ImageCarousel from "@/components/ImageCarousel";

export default function HomePage() {
  return (
    <main className="pt-16">
      {/* Hero — Split Layout: Photo | Negative Space + Text */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-4rem)]">
        {/* Left — Artist portrait */}
        <div className="relative h-[50vh] md:h-auto md:min-h-[calc(100vh-4rem)]">
          <img
            src={artistPhoto}
            alt="The artist at work"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right — Negative space + Quote */}
        <div className="flex items-center bg-cream">
          <div className="px-8 md:px-16 lg:px-20 py-16 md:py-0 max-w-lg">
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.15 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[1.15] mb-8"
            >
              &ldquo;Every pattern begins from a single point.&rdquo;
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
              className="text-[15px] text-gray-500 leading-relaxed mb-10"
            >
              Islamic geometric art, hand-painted Nikah marriage certificates,
              and illumination works from Malaysia. Each piece is created using
              traditional techniques — compass and straightedge constructions,
              natural pigments, and shell gold — bridging centuries of artistic
              heritage with contemporary sensibilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/works"
                className="inline-flex items-center gap-2 px-6 py-3 border border-navy text-navy text-xs uppercase tracking-[0.15em] font-medium hover:bg-navy hover:text-cream transition-colors duration-300"
              >
                Explore Works →
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 text-navy text-xs uppercase tracking-[0.15em] font-medium hover:text-gold transition-colors duration-300"
              >
                View Services →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
