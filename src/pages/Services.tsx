import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { pricingPlans, processSteps, serviceTerms, designOptions } from "@/data/products";
import design1 from "@/assets/nikahnamadesign1.png";
import design2 from "@/assets/nikanhnamadesign2.png";
import design3 from "@/assets/nikahnamadesign3.png";

const designPreviews = [design1, design2, design3];

export default function ServicesPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-28">
        <h1 className="text-2xl font-light uppercase tracking-[0.2em] text-navy mb-3">Services</h1>
        <p className="text-base text-gray-500 max-w-xl mb-6">
          Nikah certificate design, hand-painted with gold elements on premium ivory paper
        </p>
        <p className="text-[15px] text-gray-500 max-w-2xl leading-relaxed">
          Celebrate the union of two hearts with our crafted Nikah certificate
          designs, inspired by old Islamic manuscripts and adorned with
          hand-drawn details that bring a meaningful charm to your special day.
          Each piece is professionally printed, with selected gold elements
          carefully hand-painted for a refined finish.
        </p>
      </section>

      {/* Pricing */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 border-t border-gray-100">
        <h2 className="nav-link text-navy mb-10 text-sm">Nikah Certificate Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-3xl">
          {pricingPlans.map((plan) => (
            <div key={plan.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400 mb-6">{plan.title}</h3>
              <div className="space-y-3">
                {plan.sizes.map((item) => (
                  <div key={item.size} className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-[15px] text-navy">{item.size}</span>
                    <span className="text-[15px] text-gold font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-6">Ivory paper 250gsm. Gold elements hand-painted.</p>
      </section>

      {/* Design Options — with click-to-enlarge */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 border-t border-gray-100">
        <h2 className="nav-link text-navy mb-10 text-sm">Available Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl">
          {designOptions.map((design, i) => (
            <div key={i} className="space-y-4">
              <div
                className="overflow-hidden cursor-pointer group relative"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={designPreviews[i]}
                  alt={design.title}
                  className="w-full object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Click indicator */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-xs uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to enlarge
                  </span>
                </div>
              </div>
              <h3 className="text-base font-medium text-navy">{design.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{design.description}</p>
              <ul className="space-y-2">
                {design.features.map((f, j) => (
                  <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/60183603504?text=Hi! I'm interested in ${design.title} for Nikah Certificate.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 mt-2 border border-gold text-gold text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold hover:text-white transition-colors duration-300"
              >
                Inquire →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 border-t border-gray-100">
        <h2 className="nav-link text-navy mb-10 text-sm">Our Creative Process</h2>
        <div className="max-w-2xl space-y-8">
          {processSteps.map((step, i) => (
            <div key={step.title} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full border border-gold text-gold flex items-center justify-center text-sm font-medium">
                  {i + 1}
                </div>
                {i < processSteps.length - 1 && (
                  <div className="w-px flex-1 bg-gray-200 mt-2" />
                )}
              </div>
              <div className="pb-6">
                <h4 className="text-base font-medium text-navy mb-1.5">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed max-w-md">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Design */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 border-t border-gray-100">
        <h2 className="nav-link text-navy mb-6 text-sm">Custom Design Service</h2>
        <p className="text-[15px] text-gray-500 max-w-2xl leading-relaxed mb-8">
          If you are looking for something different from our existing designs, we can create a
          fully custom piece tailored just for you. Additional charges apply for custom design work.
          Allow 4–5 weeks for custom designs, or 2–4 weeks for available designs.
        </p>
        <a
          href="https://wa.me/60183603504?text=Hi! I'm interested in a custom Nikah Certificate."
          className="inline-flex items-center gap-2 px-6 py-3 border border-navy text-navy text-xs uppercase tracking-[0.15em] font-medium hover:bg-navy hover:text-cream transition-colors duration-300"
        >
          Inquire via WhatsApp →
        </a>
      </section>

      {/* Terms */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 border-t border-gray-100">
        <h2 className="nav-link text-navy mb-10 text-sm">Terms for Nikah Nama Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl">
          {serviceTerms.map((term) => (
            <div key={term.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-navy mb-4">{term.title}</h3>
              <ul className="space-y-2">
                {term.points.map((point) => (
                  <li key={point} className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-navy/90 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.img
              key={lightbox}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={designPreviews[lightbox]}
              alt={designOptions[lightbox].title}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Info bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white text-sm font-medium">{designOptions[lightbox].title}</p>
              <p className="text-white/50 text-xs mt-1">{designOptions[lightbox].description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
