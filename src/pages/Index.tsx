import { motion } from "motion/react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/nikahnama-1.jpg";
import sampulImg from "@/assets/sampul-raya-collection.jpg";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Handcrafted Islamic geometric NikahNama artwork" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
        </div>

        <div className="relative z-10 container text-center py-32 md:py-40">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-accent mb-6"
          >
            Handcrafted Islamic Geometric Art
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-primary leading-[0.95] mb-8"
          >
            Ethereal<br />Muse Art
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed"
          >
            Where geometry meets devotion — bespoke illumination art, NikahNama, and curated Raya collections from Malaysia.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/shop"
              className="px-8 py-3 text-sm tracking-widest uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Shop Collection
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 text-sm tracking-widest uppercase border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Custom NikahNama
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Teaser */}
      <section className="py-20 md:py-28">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <img src={sampulImg} alt="Sampul Raya collection spread" className="w-full rounded-sm shadow-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent">From the Studio</p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-light">
              Art that honours tradition
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Every piece begins with a meditation — pencil to paper, compass to page. Rooted in centuries-old Islamic geometric traditions and reimagined for modern celebrations, each creation carries the quiet beauty of patience and precision.
            </p>
            <Link to="/about" className="inline-block text-sm tracking-widest uppercase text-accent hover:text-primary transition-colors border-b border-accent/30 pb-1">
              Read the story →
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
