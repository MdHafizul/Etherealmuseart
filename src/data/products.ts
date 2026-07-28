import sampulBlue from "@/assets/sampul-raya-blue.jpg";
import sampulPurple from "@/assets/sampul-raya-purple.jpg";
import sampulPink from "@/assets/sampul-raya-pink.jpg";
import sampulBurgundy from "@/assets/sampul-raya-burgundy.jpg";
import sampulCollection from "@/assets/sampul-raya-collection.jpg";
import nikahsignage1 from "@/assets/nikahnama-1.jpg";
import nikahsignage2 from "@/assets/nikahnama-2.jpg";
import artDetail1 from "@/assets/art-detail-1.jpg";
import artDetail2 from "@/assets/art-detail-2.jpg";

export interface Artwork {
  id: string;
  title: string;
  image: string;
  category: "Nikah Nama" | "Sampul Raya" | "Illumination Art";
  year: string;
  description: string;
}

export interface NikahSignagePackage {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

export const artworks: Artwork[] = [
  { id: "a1", title: "Nikah Nama — Gold Illumination", image: nikahsignage1, category: "Nikah Nama", year: "2024", description: "A full Nikah marriage certificate featuring traditional Islamic geometric borders with hand-painted gold leaf accents. Custom names and date incorporated into the design." },
  { id: "a2", title: "Nikah Nama — Classic Foliage", image: nikahsignage2, category: "Nikah Nama", year: "2024", description: "Elegant Nikah certificate with flowing floral motifs and Islamic geometric patterns. Soft maroon and gold palette on premium ivory paper." },
  { id: "a3", title: "Azure Sampul Raya Collection", image: sampulBlue, category: "Sampul Raya", year: "2025", description: "Hand-illustrated Islamic geometric sampul raya in azure blue tones. Designed for Hari Raya giving with precision pattern work." },
  { id: "a4", title: "Lavender Sampul Raya Collection", image: sampulPurple, category: "Sampul Raya", year: "2025", description: "Elegant lavender-hued sampul raya with intricate geometric patterns. A refined take on festive envelope design." },
  { id: "a5", title: "Rose Sampul Raya Collection", image: sampulPink, category: "Sampul Raya", year: "2025", description: "Soft rose sampul raya adorned with delicate Islamic motifs. Crafted for those who appreciate subtle, warm-toned artistry." },
  { id: "a6", title: "Burgundy Sampul Raya Collection", image: sampulBurgundy, category: "Sampul Raya", year: "2025", description: "Rich burgundy sampul raya with gold geometric accents. A luxurious choice for festive celebrations and gift-giving." },
  { id: "a7", title: "Illumination Detail — Tezhip", image: artDetail1, category: "Illumination Art", year: "2023", description: "A close study of traditional Islamic tezhip illumination. Hand-painted with natural pigments and shell gold, showcasing the precision of classical manuscript decoration." },
  { id: "a8", title: "Illumination Detail — Floral", image: artDetail2, category: "Illumination Art", year: "2023", description: "Floral illumination artwork blending Persian and Ottoman traditions. Delicate gold detailing against deep blue, created using compass and straightedge constructions." },
  { id: "a9", title: "Full Sampul Raya Spread", image: sampulCollection, category: "Sampul Raya", year: "2025", description: "The complete Sampul Raya collection — four colourways displayed together. Each envelope is hand-painted and inspired by classical Islamic geometry." },
];

export const nikahSignagePackages: NikahSignagePackage[] = [
  {
    id: "nn-classic", name: "Classic", price: 350,
    description: "A hand-painted Nikah Nama with traditional Islamic geometric borders.",
    features: ["A4 size", "Gold leaf accents", "Custom names & date", "Quranic verse of choice", "Unframed"],
  },
  {
    id: "nn-premium", name: "Premium", price: 550,
    description: "Enhanced illumination with floral and geometric detailing.",
    features: ["A3 size", "Gold & lapis accents", "Custom names & date", "Quranic verse of choice", "Premium frame included", "Certificate of authenticity"],
  },
  {
    id: "nn-bespoke", name: "Commissioned", price: 900,
    description: "A fully commissioned Nikah Nama — collaborate directly with the artist for a one-of-a-kind piece.",
    features: ["Custom size", "Full colour palette choice", "Revisions included", "Custom calligraphy", "Luxury framing", "Personal consultation", "Certificate of authenticity"],
  },
];

export const serviceTerms = [
  {
    title: "Payment Terms",
    points: [
      "A 50% deposit is required before work begins.",
      "The remaining balance must be paid before delivery.",
      "Work will only start after deposit is received.",
    ],
  },
  {
    title: "Copyright & Usage",
    points: [
      "All copyright remains with the Artist.",
      "Artwork is for personal use only.",
      "Client may not reproduce, resell, or use for commercial purposes without permission.",
    ],
  },
  {
    title: "AI Restriction",
    points: [
      "The artwork may not be used for AI training, machine learning, or any digital generation.",
    ],
  },
];

export const pricingPlans = [
  {
    title: "Without Frame",
    sizes: [
      { size: "A4", price: "RM 380" },
      { size: "A3", price: "RM 580" },
      { size: "A2", price: "RM 650" },
      { size: "A1", price: "RM 880" },
      { size: "A0", price: "RM 1200" },
    ],
  },
  {
    title: "With Frame",
    sizes: [
      { size: "A4", price: "RM 440" },
      { size: "A3", price: "RM 650" },
      { size: "A2", price: "RM 880" },
      { size: "A1", price: "RM 1200" },
      { size: "A0", price: "RM 1500" },
    ],
  },
];

export const processSteps = [
  { title: "Draft", description: "This stage focuses on capturing the general shape, proportion, and placement of elements in the composition. No details are added yet." },
  { title: "Motifs and Pattern Blocking", description: "We discuss which floral motifs to use, their placement, and integration into the composition." },
  { title: "Colouring", description: "Adding colors to the floral patterns as well as other elements of the drawing." },
  { title: "Payment & Delivery", description: "50% deposit is needed to start. The remaining 50% is paid after final work is complete. Delivery is arranged after payment is received." },
];

export const designOptions = [
  { title: "Design 1", description: "Islamic geometric patterns with deep blue and gold accents. Traditional manuscript-inspired borders with floral motifs.", features: ["Traditional Islamic borders", "Hand-painted gold elements", "Classical design"] },
  { title: "Design 2", description: "Rich maroon and cream palette with geometric designs. A luxurious, formal aesthetic.", features: ["Rich color combinations", "Premium gold leafing", "Formal elegance"] },
  { title: "Design 3", description: "Soft purple and gold palette with delicate floral arrangements. A modern interpretation of traditional Islamic art.", features: ["Soft, calming palette", "Contemporary design", "Refined aesthetics"] },
];

export const collaborations = [
  { name: "The Silsila", description: "Collaborative partnership for Nikah Nama designs and Islamic art workshops", year: "2023–Present", type: "Strategic Partnership" },
  { name: "Islamic Art Collective Malaysia", description: "Joint exhibitions and cultural events promoting traditional Islamic illumination", year: "2024", type: "Cultural Collaboration" },
  { name: "Raya Bazaar KL", description: "Featured vendor for Sampul Raya collections during festive seasons", year: "2024–2025", type: "Retail Partnership" },
];

export const clientTestimonials = [
  { name: "Fatimah & Ahmad", project: "Commissioned Nikah Nama", year: "2024", testimonial: "The craftsmanship and attention to detail exceeded all our expectations. Our Nikah Nama is truly a work of art that we will treasure forever." },
  { name: "Zainab & Yusuf", project: "Premium Nikah Nama with Custom Calligraphy", year: "2024", testimonial: "Working with Ethereal Muse Art was an absolute pleasure. The artist understood our vision perfectly and created something beyond beautiful." },
  { name: "Sarah & Ibrahim", project: "Classic Nikah Nama", year: "2023", testimonial: "The gold leaf work is precise. This certificate is not just a document — it is a precious heirloom for generations to come." },
];

export const stats = [
  { label: "Happy Clients", value: "100+" },
  { label: "Projects Completed", value: "150+" },
  { label: "Years Experience", value: "5+" },
];
