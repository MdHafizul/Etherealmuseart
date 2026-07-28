import { useState } from "react";
import { motion } from "motion/react";
import { Instagram } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="pt-16">
      {/* Hero header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <h1 className="text-2xl font-light uppercase tracking-[0.2em] text-navy mb-3">Connect</h1>
        <p className="text-[15px] text-gray-500 max-w-xl">
          For custom Nikah Nama, bulk sampul raya orders, or collaborations — we would love to hear from you.
        </p>
      </section>

      {/* Contact body — split layout */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 max-w-5xl">
          {/* Left — contact details (2 cols) */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Instagram</p>
              <a
                href="https://www.instagram.com/etherealmuseart/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[15px] text-navy hover:text-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @etherealmuseart
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Email</p>
              <a
                href="mailto:etherealmuseartventures@gmail.com"
                className="text-[15px] text-navy hover:text-gold transition-colors"
              >
                etherealmuseartventures@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">WhatsApp</p>
              <a
                href="https://wa.me/60183603504"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-navy hover:text-gold transition-colors"
              >
                +60 18-360 3504
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Location</p>
              <p className="text-[15px] text-navy">Ipoh, Perak, Malaysia</p>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400 leading-relaxed">
                We typically respond within 24–48 hours. For urgent inquiries, reach out via Instagram DM or WhatsApp.
              </p>
            </div>
          </div>

          {/* Right — form (3 cols, visually heavier) */}
          <div className="md:col-span-3">
            <div className="bg-gray-50 p-8 md:p-10">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <p className="text-lg font-light text-navy">Thank you for reaching out.</p>
                  <p className="text-sm text-gray-500">We will get back to you soon.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                    className="text-xs text-gray-400 hover:text-navy transition-colors underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-navy placeholder-gray-300 outline-none focus:border-navy focus:ring-1 focus:ring-navy/10 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-navy placeholder-gray-300 outline-none focus:border-navy focus:ring-1 focus:ring-navy/10 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-navy placeholder-gray-300 outline-none focus:border-navy focus:ring-1 focus:ring-navy/10 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-navy text-cream text-xs uppercase tracking-[0.15em] font-medium hover:bg-navy/90 transition-colors duration-300"
                  >
                    Send Message
                  </button>

                  <p className="text-[10px] text-gray-400 text-center">
                    By sending, you agree to our terms and privacy policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
