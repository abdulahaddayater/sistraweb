export type CategorySlug =
  | "engagement-rings"
  | "necklaces"
  | "earrings"
  | "bracelets";

export interface DiamondSpecs {
  carat: string;
  cut: string;
  color: string;
  clarity: string;
  certification: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: CategorySlug;
  collection: string;
  images: [string, string];
  description: string;
  materials: string;
  diamondSpecs: DiamondSpecs;
  bestSeller?: boolean;
  featured?: boolean;
}

export const categoryLabels: Record<CategorySlug, string> = {
  "engagement-rings": "Engagement Rings",
  necklaces: "Necklaces",
  earrings: "Earrings",
  bracelets: "Bracelets",
};

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

/** Curated Unsplash jewellery photography */
const img = {
  ring1:
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
  ring1b:
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
  ring2:
    "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=80",
  ring2b:
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
  ring3:
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
  ring3b:
    "https://images.unsplash.com/photo-1608042314453-ae338dce87d2?auto=format&fit=crop&w=1200&q=80",
  necklace1:
    "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80",
  necklace1b:
    "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
  necklace2:
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
  necklace2b:
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
  earring1:
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
  earring1b:
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
  earring2:
    "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80",
  earring2b:
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
  bracelet1:
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
  bracelet1b:
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
  bracelet2:
    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
  bracelet2b:
    "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
  hero: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=85",
  craft:
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1400&q=80",
  about:
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=80",
  diamond:
    "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=80",
};

export const siteImages = img;

export const products: Product[] = [
  {
    id: "1",
    slug: "aurora-solitaire",
    name: "Aurora Solitaire",
    price: 12800,
    category: "engagement-rings",
    collection: "Celestial",
    images: [img.ring1, img.ring1b],
    description:
      "A luminous round brilliant set in hand-polished platinum. The Aurora Solitaire is defined by quiet proportion — a single diamond held by a claw setting refined over months of atelier study.",
    materials: "Platinum 950, Round brilliant diamond",
    diamondSpecs: {
      carat: "1.50 ct",
      cut: "Excellent",
      color: "D",
      clarity: "VVS1",
      certification: "GIA",
    },
    bestSeller: true,
    featured: true,
  },
  {
    id: "2",
    slug: "noir-halo",
    name: "Noir Halo",
    price: 18500,
    category: "engagement-rings",
    collection: "Maison Noir",
    images: [img.ring2, img.ring2b],
    description:
      "A halo of pavé diamonds frames a central brilliant, creating depth and radiance. Crafted for those who seek presence without excess.",
    materials: "18k white gold, Round brilliant diamonds",
    diamondSpecs: {
      carat: "2.10 ct total",
      cut: "Excellent",
      color: "E",
      clarity: "VS1",
      certification: "GIA",
    },
    bestSeller: true,
  },
  {
    id: "3",
    slug: "sahara-band",
    name: "Sahara Band",
    price: 6400,
    category: "engagement-rings",
    collection: "Desert Light",
    images: [img.ring3, img.ring3b],
    description:
      "Inspired by dune lines at dusk. A slender band set with a continuous row of diamonds — understated, architectural, endlessly wearable.",
    materials: "18k yellow gold, Round brilliant diamonds",
    diamondSpecs: {
      carat: "0.85 ct total",
      cut: "Very Good",
      color: "F",
      clarity: "VS2",
      certification: "IGI",
    },
    featured: true,
  },
  {
    id: "4",
    slug: "lumen-pendant",
    name: "Lumen Pendant",
    price: 9200,
    category: "necklaces",
    collection: "Celestial",
    images: [img.necklace1, img.necklace1b],
    description:
      "A floating diamond on a fine chain of white gold. The Lumen Pendant is designed to catch light with every movement — intimate luxury for day and evening.",
    materials: "18k white gold, Round brilliant diamond",
    diamondSpecs: {
      carat: "0.75 ct",
      cut: "Excellent",
      color: "D",
      clarity: "VVS2",
      certification: "GIA",
    },
    bestSeller: true,
    featured: true,
  },
  {
    id: "5",
    slug: "oasis-collar",
    name: "Oasis Collar",
    price: 24600,
    category: "necklaces",
    collection: "Desert Light",
    images: [img.necklace2, img.necklace2b],
    description:
      "An architectural collar of graduated diamonds. Each stone is set to follow the curve of the collarbone — a signature of Sistra craftsmanship.",
    materials: "18k yellow gold, Round brilliant diamonds",
    diamondSpecs: {
      carat: "4.20 ct total",
      cut: "Excellent",
      color: "E–F",
      clarity: "VS1–VS2",
      certification: "GIA",
    },
  },
  {
    id: "6",
    slug: "étoile-drops",
    name: "Étoile Drops",
    price: 7800,
    category: "earrings",
    collection: "Celestial",
    images: [img.earring1, img.earring1b],
    description:
      "Drop earrings of exceptional clarity. Suspended diamonds move with a soft cadence — refined for soirées and ceremonies alike.",
    materials: "Platinum 950, Round brilliant diamonds",
    diamondSpecs: {
      carat: "1.20 ct total",
      cut: "Excellent",
      color: "D",
      clarity: "VVS1",
      certification: "GIA",
    },
    bestSeller: true,
  },
  {
    id: "7",
    slug: "mirage-studs",
    name: "Mirage Studs",
    price: 4200,
    category: "earrings",
    collection: "Maison Noir",
    images: [img.earring2, img.earring2b],
    description:
      "Classic studs elevated by ideal cut and precise setting. Everyday brilliance with house-level finish.",
    materials: "18k white gold, Round brilliant diamonds",
    diamondSpecs: {
      carat: "0.80 ct total",
      cut: "Excellent",
      color: "E",
      clarity: "VS1",
      certification: "IGI",
    },
    featured: true,
  },
  {
    id: "8",
    slug: "riviera-tennis",
    name: "Riviera Tennis",
    price: 16800,
    category: "bracelets",
    collection: "Celestial",
    images: [img.bracelet1, img.bracelet1b],
    description:
      "A continuous line of matched diamonds on a flexible platinum setting. The Riviera Tennis bracelet is our most requested signature piece.",
    materials: "Platinum 950, Round brilliant diamonds",
    diamondSpecs: {
      carat: "5.00 ct total",
      cut: "Excellent",
      color: "F",
      clarity: "VS1",
      certification: "GIA",
    },
    bestSeller: true,
    featured: true,
  },
  {
    id: "9",
    slug: "dune-cuff",
    name: "Dune Cuff",
    price: 11200,
    category: "bracelets",
    collection: "Desert Light",
    images: [img.bracelet2, img.bracelet2b],
    description:
      "A sculptural cuff with a single row of diamonds along its crest. Warm gold meets cool fire — a dialogue of desert and light.",
    materials: "18k yellow gold, Round brilliant diamonds",
    diamondSpecs: {
      carat: "1.80 ct total",
      cut: "Very Good",
      color: "E",
      clarity: "VS2",
      certification: "GIA",
    },
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (category: CategorySlug): Product[] =>
  products.filter((p) => p.category === category);

export const getBestSellers = (): Product[] =>
  products.filter((p) => p.bestSeller);

export const getRelatedProducts = (product: Product, limit = 4): Product[] =>
  products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
