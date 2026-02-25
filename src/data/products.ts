import sampulBlue from "@/assets/sampul-raya-blue.jpg";
import sampulPurple from "@/assets/sampul-raya-purple.jpg";
import sampulPink from "@/assets/sampul-raya-pink.jpg";
import sampulBurgundy from "@/assets/sampul-raya-burgundy.jpg";
import sampulCollection from "@/assets/sampul-raya-collection.jpg";
import nikahsignage1 from "@/assets/nikahnama-1.jpg";
import nikahsignage2 from "@/assets/nikahnama-2.jpg";
import artDetail1 from "@/assets/art-detail-1.jpg";
import artDetail2 from "@/assets/art-detail-2.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "sampul-raya" | "mug" | "art-print";
  description: string;
}

export interface Artwork {
  id: string;
  title: string;
  image: string;
  category: "Nikah Signage" | "Sampul Raya" | "Illumination Art";
  year: string;
}

export interface NikahSignagePackage {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

export const products: Product[] = [
  { id: "sr-blue", name: "Sampul Raya  Azure Collection", price: 15, image: sampulBlue, category: "sampul-raya", description: "Hand illustrated Islamic geometric sampul raya in azure blue tones." },
  { id: "sr-purple", name: "Sampul Raya  Lavender Collection", price: 15, image: sampulPurple, category: "sampul-raya", description: "Elegant lavender hued sampul raya with intricate geometric patterns." },
  { id: "sr-pink", name: "Sampul Raya  Rose Collection", price: 15, image: sampulPink, category: "sampul-raya", description: "Soft rose sampul raya adorned with delicate Islamic motifs." },
  { id: "sr-burgundy", name: "Sampul Raya  Burgundy Collection", price: 15, image: sampulBurgundy, category: "sampul-raya", description: "Rich burgundy sampul raya with gold geometric accents." },
  { id: "mug-geo", name: "Geometric Art Mug", price: 35, image: artDetail1, category: "mug", description: "Ceramic mug featuring hand drawn Islamic geometric art." },
  { id: "print-illum", name: "Illumination Art Print  A3", price: 65, image: artDetail2, category: "art-print", description: "Gallery quality giclée print of original illumination artwork." },
];

export const artworks: Artwork[] = [
  { id: "a1", title: "Nikah Signage  Gold Illumination", image: nikahsignage1, category: "Nikah Signage", year: "2024" },
  { id: "a2", title: "Nikah Signage  Classic Foliage", image: nikahsignage2, category: "Nikah Signage", year: "2024" },
  { id: "a3", title: "Azure Sampul Raya Collection", image: sampulBlue, category: "Sampul Raya", year: "2025" },
  { id: "a4", title: "Lavender Sampul Raya Collection", image: sampulPurple, category: "Sampul Raya", year: "2025" },
  { id: "a5", title: "Rose Sampul Raya Collection", image: sampulPink, category: "Sampul Raya", year: "2025" },
  { id: "a6", title: "Burgundy Sampul Raya Collection", image: sampulBurgundy, category: "Sampul Raya", year: "2025" },
  { id: "a7", title: "Illumination Detail  Tezhip", image: artDetail1, category: "Illumination Art", year: "2023" },
  { id: "a8", title: "Illumination Detail  Floral", image: artDetail2, category: "Illumination Art", year: "2023" },
  { id: "a9", title: "Full Sampul Raya Spread", image: sampulCollection, category: "Sampul Raya", year: "2025" },
];

export const nikahSignagePackages: NikahSignagePackage[] = [
  {
    id: "nn-classic",
    name: "Classic",
    price: 350,
    description: "A beautifully handcrafted Nikah Signage with traditional Islamic geometric borders.",
    features: ["A4 size", "Gold leaf accents", "Custom names & date", "Quranic verse of choice", "Unframed"],
  },
  {
    id: "nn-premium",
    name: "Premium",
    price: 550,
    description: "Enhanced illumination with intricate floral and geometric detailing.",
    features: ["A3 size", "Gold & lapis accents", "Custom names & date", "Quranic verse of choice", "Premium frame included", "Certificate of authenticity"],
  },
  {
    id: "nn-bespoke",
    name: "Bespoke",
    price: 900,
    description: "A fully bespoke Nikah Signage  collaborate directly with the artist for a one of a kind piece.",
    features: ["Custom size", "Full colour palette choice", "Unlimited revisions", "Custom calligraphy", "Luxury framing", "Personal consultation", "Certificate of authenticity"],
  },
];

export const experiences = [
  { year: "2025", title: "Raya Pop-up Store  Bangsar Village", description: "Featured collection of sampul raya and art prints." },
  { year: "2024", title: "Nikah Signage Exhibition  Islamic Arts Museum", description: "Solo showcase of handcrafted marriage certificates." },
  { year: "2024", title: "Artisan Market  APW Bangsar", description: "Collaborative pop up with local Malaysian artisans." },
  { year: "2023", title: "Illumination Workshop  KLCC", description: "Teaching traditional Islamic illumination techniques." },
  { year: "2023", title: "Raya Collection Launch", description: "First limited edition sampul raya collection, sold out in 3 days." },
];
