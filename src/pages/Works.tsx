import { useState } from "react";
import { motion } from "motion/react";
import { artworks, experiences } from "@/data/products";

const categories = ["All", "NikahNama", "Sampul Raya", "Illumination Art"] as const;

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = activeFilter === "All" ? artworks : artworks.filter((a) => a.category === activeFilter);

  return (
    <main className="pt-24 md:pt-28">
      <section className="container py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Portfolio</p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary font-light">Works & Experience</h1>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 text-xs tracking-widest uppercase border transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((artwork, i) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-sm aspect-square"
            >
              <img src={artwork.image} alt={artwork.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <p className="text-primary-foreground font-heading text-lg">{artwork.title}</p>
                  <p className="text-primary-foreground/70 text-xs tracking-wider uppercase">{artwork.category} · {artwork.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience timeline */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Experience</p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-light">Exhibitions & Events</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <span className="text-accent font-heading text-lg font-semibold min-w-[3rem]">{exp.year}</span>
                <div className="border-l border-accent/30 pl-6">
                  <h3 className="font-heading text-lg text-primary">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
