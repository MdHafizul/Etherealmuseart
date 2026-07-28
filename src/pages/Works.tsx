import { useState } from "react";
import { artworks } from "@/data/products";
import ArtworkModal from "@/components/ArtworkModal";

const categories = ["All", "Nikah Nama", "Sampul Raya", "Illumination Art"] as const;

export default function WorksPage() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? artworks : artworks.filter((a) => a.category === filter);

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <h1 className="text-2xl font-light uppercase tracking-[0.2em] text-navy mb-2">Works</h1>
        <p className="text-[15px] text-gray-500 max-w-xl">
          Hand-painted Islamic geometric art, Nikah certificates, and illumination works
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-6 mt-8 mb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`nav-link pb-1 border-b-2 transition-colors ${
                filter === cat
                  ? "border-navy text-navy"
                  : "border-transparent text-gray-400 hover:text-navy"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Creative Alternating Gallery + Click Modal */}
      <ArtworkModal artworks={filtered} />
    </main>
  );
}
