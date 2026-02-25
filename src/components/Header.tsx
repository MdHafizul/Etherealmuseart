import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, Instagram } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Works", path: "/works" },
  { label: "Shop", path: "/shop" },
  { label: "Services", path: "/services" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ item }: { item: typeof navItems[0] }) => (
    <Link
      to={item.path}
      onClick={() => setMobileOpen(false)}
      className={`group relative text-xs font-medium tracking-widest uppercase transition-all hover:text-accent ${
        location.pathname === item.path ? "text-accent" : "text-muted-foreground"
      }`}
    >
      {item.label}
      <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all ${
        location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
      }`} />
    </Link>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? "py-3 bg-background/95 backdrop-blur-xl border-b border-border shadow-sm" 
        : "py-6 bg-transparent"
    }`}>
      <div className={`container transition-all duration-700 ${
        isScrolled ? "flex items-center justify-between" : "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
      }`}>
        {/* Logo - Ethereal Muse Art */}
        <Link 
          to="/" 
          className={`font-heading tracking-widest transition-all duration-700 hover:text-accent ${
            isScrolled ? "text-2xl" : "text-3xl lg:text-4xl text-center lg:text-left"
          }`}
        >
          <span className="font-light text-primary">Ethereal</span>
          <span className="text-accent">Muse</span>
          <span className="font-light text-primary">Art</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden lg:flex items-center transition-all duration-700 ${
          isScrolled ? "gap-8" : "gap-10"
        }`}>
          {navItems.map((item) => <NavLink key={item.path} item={item} />)}
        </nav>

        {/* Actions */}
        <div className="flex items-center justify-center lg:justify-end gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex hover:text-accent"
            asChild
          >
            <a
              href="https://www.instagram.com/etherealmuseart/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="relative hover:text-accent"
            onClick={() => setIsOpen(true)}
            aria-label="Shopping cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {itemCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center p-0 text-[10px] font-bold">
                {itemCount}
              </Badge>
            )}
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="font-heading text-left text-lg">
                  <span className="font-light">Ethereal</span>
                  <span className="text-accent">Muse</span>
                  <span className="font-light">Art</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    variant="ghost"
                    asChild
                    className={`justify-start text-sm tracking-wider uppercase ${
                      location.pathname === item.path ? "bg-accent/10 text-accent" : ""
                    }`}
                  >
                    <Link to={item.path} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </nav>
              <Separator className="my-6" />
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <a
                  href="https://www.instagram.com/etherealmuseart/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow on Instagram
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
