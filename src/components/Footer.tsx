import { Link } from "react-router-dom";

const footerCols = [
  {
    title: "Works",
    links: [
      { label: "Nikah Nama", path: "/works" },
      { label: "Sampul Raya", path: "/works" },
      { label: "Illumination Art", path: "/works" },
      { label: "All Works", path: "/works" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Nikah Certificate", path: "/services" },
      { label: "Custom Design", path: "/services" },
      { label: "Pricing", path: "/services" },
      { label: "Terms", path: "/services" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "The Artist", path: "/about" },
      { label: "Philosophy", path: "/about" },
      { label: "Collaborations", path: "/about" },
      { label: "Clients", path: "/about" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", path: "/contact" },
      { label: "Instagram", href: "https://www.instagram.com/etherealmuseart/" },
      { label: "WhatsApp", href: "https://wa.me/60183603504" },
      { label: "Email", href: "mailto:etherealmuseartventures@gmail.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        {/* Logo */}
        <Link to="/" className="inline-block text-navy font-light tracking-wide text-lg mb-12">
          ethereal muse art
        </Link>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="nav-link text-navy mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.path ? (
                      <Link
                        to={link.path}
                        className="text-xs text-gray-500 hover:text-navy transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-navy transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-2 text-[10px] text-gray-400">
          <p>© {new Date().getFullYear()} Ethereal Muse Art. All rights reserved.</p>
          <p>Islamic geometric art from Malaysia</p>
        </div>
      </div>
    </footer>
  );
}
