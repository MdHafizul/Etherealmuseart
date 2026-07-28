import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
  year: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  className?: string;
}

export default function GalleryGrid({ items, className }: GalleryGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px] bg-gray-200",
        className,
      )}
    >
      {items.map((item) => (
        <div key={item.id} className="relative group bg-cream overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover aspect-[3/4]"
            loading="lazy"
          />
          {/* Hover reveal */}
          <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <p className="text-white text-xs font-medium leading-snug">{item.title}</p>
            <p className="text-white/60 text-[10px] mt-1">{item.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
