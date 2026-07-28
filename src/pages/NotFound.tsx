import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream">
      <div className="text-center px-6">
        <p className="nav-link text-gray-400 mb-4">Page not found</p>
        <h1 className="font-heading text-[10rem] font-light text-navy leading-none mb-6">404</h1>
        <Link
          to="/"
          className="nav-link text-navy hover:text-gold transition-colors"
        >
          Return Home →
        </Link>
      </div>
    </main>
  );
}
