import { useState } from "react";
import { motion } from "motion/react";
import { nikahnamaPackages } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Check, Palette, PenTool, BookOpen } from "lucide-react";
import nikahnama from "@/assets/nikahnama-1.jpg";

const otherServices = [
  { icon: Palette, title: "Custom Illumination", description: "Commission a bespoke illumination artwork — tezhip, geometric, or floral — tailored to your space and preferences." },
  { icon: PenTool, title: "Corporate Art", description: "Islamic geometric art for offices, hotels, and public spaces. Large-scale installations and framed pieces available." },
  { icon: BookOpen, title: "Workshops", description: "Learn the art of Islamic geometry in guided workshops. Suitable for beginners and art enthusiasts alike." },
];

export default function ServicesPage() {
  const { addItem } = useCart();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name1: "", name2: "", date: "", verse: "", size: "", frame: "no" });

  const handleAddService = (pkg: typeof nikahnamaPackages[0]) => {
    addItem({ id: pkg.id, name: `NikahNama — ${pkg.name}`, price: pkg.price, image: nikahnama, type: "service" });
    setSelectedPackage(null);
  };

  return (
    <main className="pt-24 md:pt-28">
      {/* NikahNama hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={nikahnama} alt="NikahNama handcrafted marriage certificate" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="relative container py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-lg">
            <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Featured Service</p>
            <h1 className="font-heading text-4xl md:text-5xl text-primary font-light mb-4">NikahNama</h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A handcrafted marriage certificate adorned with Islamic geometric illumination — transforming a sacred document into a lifelong heirloom. Inspired by centuries of tradition, made uniquely yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Choose Your Package</p>
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-light">NikahNama Packages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {nikahnamaPackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`border rounded-sm p-6 space-y-4 transition-all duration-300 ${
                i === 1 ? "border-accent bg-accent/5 shadow-lg scale-[1.02]" : "border-border bg-card hover:border-accent/50"
              }`}
            >
              {i === 1 && <p className="text-[10px] tracking-widest uppercase text-accent text-center">Most Popular</p>}
              <h3 className="font-heading text-2xl text-primary text-center">{pkg.name}</h3>
              <p className="font-heading text-3xl text-accent text-center">RM {pkg.price}</p>
              <p className="text-xs text-muted-foreground text-center">{pkg.description}</p>
              <ul className="space-y-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-foreground/80">
                    <Check className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedPackage(pkg.id)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs tracking-widest uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ShoppingBag className="w-3.5 h-3.5" /> Select Package
              </button>
            </motion.div>
          ))}
        </div>

        {/* Customisation form */}
        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto mt-12 border border-border rounded-sm p-6 bg-card space-y-4"
          >
            <h3 className="font-heading text-xl text-primary">Customise Your NikahNama</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground block mb-1">Partner 1 Name</label>
                <input value={formData.name1} onChange={(e) => setFormData({ ...formData, name1: e.target.value })} className="w-full px-3 py-2 text-sm border border-input rounded bg-background" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-1">Partner 2 Name</label>
                <input value={formData.name2} onChange={(e) => setFormData({ ...formData, name2: e.target.value })} className="w-full px-3 py-2 text-sm border border-input rounded bg-background" />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Wedding Date</label>
              <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full px-3 py-2 text-sm border border-input rounded bg-background" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Quranic Verse (optional)</label>
              <input placeholder="e.g. Ar-Rum 30:21" value={formData.verse} onChange={(e) => setFormData({ ...formData, verse: e.target.value })} className="w-full px-3 py-2 text-sm border border-input rounded bg-background" />
            </div>
            <div className="flex gap-3">
              <button onClick={() => setSelectedPackage(null)} className="flex-1 px-4 py-2 text-xs tracking-widest uppercase border border-border text-muted-foreground hover:text-foreground transition-colors">
                Cancel
              </button>
              <button
                onClick={() => handleAddService(nikahnamaPackages.find((p) => p.id === selectedPackage)!)}
                className="flex-1 px-4 py-2 text-xs tracking-widest uppercase bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        )}
      </section>

      {/* Other services */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">More Services</p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-light">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {otherServices.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-border rounded-sm p-6 bg-card space-y-3 text-center"
              >
                <svc.icon className="w-8 h-8 text-accent mx-auto" />
                <h3 className="font-heading text-xl text-primary">{svc.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{svc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
