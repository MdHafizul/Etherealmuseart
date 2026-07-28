import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Works", path: "/works" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Connect", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream border-b border-gray-100">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-6 md:px-12 h-16">
        {/* Logo — lowercase, light */}
        <Link to="/" className="text-navy font-light tracking-wide text-lg">
          ethereal muse art
        </Link>

        {/* Desktop Nav — all-caps, tracked-out */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              aria-current={location.pathname === item.path ? "page" : undefined}
              className={`nav-link transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-navy"
                  : "text-gray-400 hover:text-navy"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-navy p-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-gray-100">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "text-navy" : "text-gray-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
