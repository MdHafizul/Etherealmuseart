import { stats, clientTestimonials, collaborations } from "@/data/products";
import artDetail from "@/assets/art-detail-2.jpg";

export default function AboutPage() {
  return (
    <main className="pt-16">

      {/* About text */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 max-w-5xl">
          <div className="md:col-span-5">
            <h1 className="text-2xl font-light uppercase tracking-[0.2em] text-navy mb-6">About</h1>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Based in Ipoh, Perak, Malaysia, the artist specialises in
              traditional Islamic illumination (tezhip), geometric pattern
              design, and Nikah Nama — hand-painted marriage certificates
              that transform a sacred document into a lifelong heirloom.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Each piece is created by hand using traditional techniques:
              compass and straightedge constructions, natural pigments, shell
              gold, and careful burnishing. The work bridges centuries of
              artistic heritage with contemporary Malaysian sensibilities.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Beyond personal commissions, Ethereal Muse Art has been featured
              in pop-up stores across KL, from Bangsar Village to the Islamic
              Arts Museum, sharing the beauty of geometric art through
              accessible products like sampul raya and art prints.
            </p>
          </div>

          <div className="md:col-span-7">
            <img
              src={artDetail}
              alt="Close-up of illumination artwork"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 border-t border-gray-100">
        <div className="grid grid-cols-3 gap-8 max-w-2xl">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-4xl md:text-5xl text-navy font-light">{stat.value}</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 border-t border-gray-100">
        <div className="max-w-3xl">
          <h2 className="nav-link text-navy mb-6">Philosophy</h2>
          <p className="text-sm text-gray-500 leading-relaxed italic">
            "Islamic geometric art is, at its heart, a contemplative practice.
            Every pattern begins from a single point and expands into infinite
            complexity — a metaphor for the divine unity underlying creation.
            This philosophy guides every stroke: patience over speed, precision
            over spectacle, meaning over decoration."
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            {["Patience", "Precision", "Contemplation", "Unity"].map((v) => (
              <span key={v} className="text-[10px] uppercase tracking-[0.2em] text-gray-400">{v}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 border-t border-gray-100">
        <h2 className="nav-link text-navy mb-10">Client Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {clientTestimonials.map((client) => (
            <div key={client.name} className="space-y-3">
              <p className="text-xs text-gray-500 leading-relaxed italic">
                &ldquo;{client.testimonial}&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium text-navy">{client.name}</p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400">{client.project} &middot; {client.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaborations */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 border-t border-gray-100">
        <h2 className="nav-link text-navy mb-10">Partnership Ledger</h2>
        <div className="max-w-3xl space-y-6">
          {collaborations.map((collab) => (
            <div key={collab.name} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 pb-6 border-b border-gray-100">
              <div className="shrink-0">
                <p className="text-xs font-medium text-navy">{collab.name}</p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400">{collab.type} &middot; {collab.year}</p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{collab.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
