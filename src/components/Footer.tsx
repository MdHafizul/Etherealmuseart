import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const footerLinks = [
  { label: "About", path: "/about" },
  { label: "Works", path: "/works" },
  { label: "Clients", path: "/clients" },
  { label: "Shop", path: "/shop" },
  { label: "Services", path: "/services" },
];

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer className="border-t border-border bg-card">
      {/* Contact Section */}
      <div className="container py-16 md:py-20 border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">Get In Touch</p>
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-light mb-4">
                Let's Create Together
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Have a question about our work or want to commission a custom piece? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Malaysia</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a 
                    href="mailto:etherealmuseartventures@gmail.com" 
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    etherealmuseartventures@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Phone / WhatsApp</p>
                  <a 
                    href="tel:+60183603504" 
                    className="text-sm text-muted-foreground hover:text-accent transition-colors block"
                  >
                    +60 18-360 3504
                  </a>
                  <a 
                    href="https://wa.me/60183603504" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:text-primary transition-colors inline-flex items-center gap-1 mt-1"
                  >
                    <MessageCircle className="w-3 h-3" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                asChild
              >
                <a
                  href="https://www.instagram.com/etherealmuseart/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                asChild
              >
                <a
                  href="https://t.me/etherealmuseart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project or inquiry..."
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We typically respond within 1-2 business days
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h3 className="font-heading text-xl tracking-widest">
                <span className="font-light text-primary">Ethereal</span>
                <span className="text-accent">Muse</span>
                <span className="font-light text-primary">Art</span>
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-6">
              Handcrafted Islamic geometric art from Malaysia. Each piece is a meditation in geometry, color, and devotion — where mathematics meets spirituality.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              Navigate
            </h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              Connect
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Follow us for latest works, pop up store announcements, and behind the scenes glimpses.
            </p>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/etherealmuseart/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @etherealmuseart
              </a>
              <a
                href="https://t.me/etherealmuseart"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors"
              >
                <Send className="w-4 h-4" />
                Telegram Channel
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ethereal Muse Art. All rights reserved.</p>
          <p className="text-center">
            Crafted with dedication to Islamic art traditions
          </p>
        </div>
      </div>
    </footer>
  );
}
