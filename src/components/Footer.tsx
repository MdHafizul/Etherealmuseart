import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const footerLinks = [
  { label: "About", path: "/about" },
  { label: "Works", path: "/works" },
  { label: "Shop", path: "/shop" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary mb-3">Ethereal Muse Art</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Handcrafted Islamic geometric art from Malaysia. Each piece is a meditation in geometry, colour, and devotion.
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Navigate</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-foreground/80 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Connect</h4>
            <a
              href="https://www.instagram.com/etherealmuseart/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-accent transition-colors"
            >
              <Instagram className="w-4 h-4" /> @etherealmuseart
            </a>
            <p className="text-sm text-muted-foreground mt-3">Kuala Lumpur, Malaysia</p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ethereal Muse Art. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
