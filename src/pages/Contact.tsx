import { useState } from "react";
import { motion } from "motion/react";
import { Send, Instagram, MapPin } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-24 md:pt-28">
      <section className="container py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary font-light">Contact</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Whether you're interested in a custom NikahNama, a bulk order of sampul raya, or a collaboration — I'd love to hear from you.
            </p>
            <div className="space-y-4">
              <a href="https://www.instagram.com/etherealmuseart/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground/80 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5 text-accent" /> @etherealmuseart
              </a>
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <MapPin className="w-5 h-5 text-accent" /> Kuala Lumpur, Malaysia
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <Send className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-xl text-primary">Message Sent!</h3>
                <p className="text-sm text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground block mb-1">Name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 text-sm border border-input rounded bg-background" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-1">Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2 text-sm border border-input rounded bg-background" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-1">Message</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-3 py-2 text-sm border border-input rounded bg-background resize-none" />
                </div>
                <button type="submit" className="w-full px-6 py-3 text-xs tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
