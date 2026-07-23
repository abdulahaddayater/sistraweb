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
  category: CategorySlug;
  collection: string;
  images: string[];
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

const WHATSAPP_NUMBER = "918007668786";

export function getWhatsAppInquiryUrl(product: Product): string {
  const message = [
    `Hello Sistra Diamonds,`,
    ``,
    `I would like to enquire about:`,
    `• Product: ${product.name}`,
    `• Collection: ${product.collection}`,
    `• Category: ${categoryLabels[product.category]}`,
    `• Materials: ${product.materials}`,
    `• Diamond: ${product.diamondSpecs.carat}, ${product.diamondSpecs.cut} cut, Color ${product.diamondSpecs.color}, Clarity ${product.diamondSpecs.clarity}`,
    `• Certification: ${product.diamondSpecs.certification}`,
    ``,
    `Please share availability and further details.`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Local Sistra product imagery */
const img = {
  p01: "/products/product-01.jpg",
  p02: "/products/product-02.jpg",
  p03: "/products/product-03.jpg",
  p04: "/products/product-04.jpg",
  p05: "/products/product-05.jpg",
  p06: "/products/product-06.jpg",
  p07: "/products/product-07.jpg",
  p08: "/products/product-08.jpg",
  p09: "/products/product-09.jpg",
  p10: "/products/product-10.jpg",
  p11: "/products/product-11.jpg",
  p12: "/products/product-12.jpg",
  p13: "/products/product-13.jpg",
  p14: "/products/product-14.jpg",
  p15: "/products/product-15.jpg",
};

export const siteImages = {
  hero: img.p04,
  craft: img.p04,
  about: img.p15,
  diamond: img.p10,
  ring1: img.p01,
  necklace1: img.p06,
  earring1: img.p14,
  bracelet1: img.p03,
  ring2: img.p15,
  bracelet2: img.p03,
};

/** All folder images for the hero slideshow — first image is the opening slide */
export const heroImages = [
  img.p04,
  img.p01,
  img.p02,
  img.p03,
  img.p05,
  img.p06,
  img.p07,
  img.p08,
  img.p09,
  img.p10,
  img.p11,
  img.p12,
  img.p13,
  img.p14,
  img.p15,
];

export const products: Product[] = [
  {
    id: "1",
    slug: "oval-solitaire-gold",
    name: "Oval Solitaire in Yellow Gold",
    category: "engagement-rings",
    collection: "Signature Rings",
    images: [img.p01],
    description:
      "A luminous oval-cut diamond held in a refined four-prong yellow gold setting. Quiet proportion, exceptional fire, and timeless presence.",
    materials: "Yellow gold, Oval-cut diamond",
    diamondSpecs: {
      carat: "Available upon enquiry",
      cut: "Oval brilliant",
      color: "Selected by atelier",
      clarity: "Selected by atelier",
      certification: "Available upon enquiry",
    },
    bestSeller: true,
    featured: true,
  },
  {
    id: "2",
    slug: "floral-marquise-set",
    name: "Floral Marquise Necklace & Earrings",
    category: "necklaces",
    collection: "Bridal Atelier",
    images: [img.p02],
    description:
      "A matching necklace and earring set in a leaf-inspired marquise motif, finished with a pear-cut drop at the centre — crafted for ceremonies and evenings.",
    materials: "White metal, Marquise & pear-cut stones",
    diamondSpecs: {
      carat: "Set total upon enquiry",
      cut: "Marquise & pear",
      color: "Selected by atelier",
      clarity: "Selected by atelier",
      certification: "Available upon enquiry",
    },
    bestSeller: true,
    featured: true,
  },
  {
    id: "3",
    slug: "vine-leaf-bracelet",
    name: "Vine Leaf Bracelet",
    category: "bracelets",
    collection: "Desert Light",
    images: [img.p03],
    description:
      "A delicate vine bracelet with leaf accents and fine stone glints — light enough for everyday, refined enough for evening.",
    materials: "White metal, Round brilliant accents",
    diamondSpecs: {
      carat: "Accent stones",
      cut: "Round brilliant",
      color: "Selected by atelier",
      clarity: "Selected by atelier",
      certification: "Available upon enquiry",
    },
    featured: true,
  },
  {
    id: "4",
    slug: "sapphire-teardrop-halo",
    name: "Sapphire Teardrop Halo Necklace",
    category: "necklaces",
    collection: "Celestial",
    images: [img.p04],
    description:
      "A deep blue teardrop stone framed in a brilliant halo, suspended from a fine chain with crystal floral clusters.",
    materials: "White metal, Blue sapphire-tone centre, Halo accents",
    diamondSpecs: {
      carat: "Centre & halo upon enquiry",
      cut: "Pear / teardrop",
      color: "Deep blue centre",
      clarity: "Selected by atelier",
      certification: "Available upon enquiry",
    },
    bestSeller: true,
  },
  {
    id: "5",
    slug: "floral-bow-necklace",
    name: "Floral Bow Necklace",
    category: "necklaces",
    collection: "Bridal Atelier",
    images: [img.p05],
    description:
      "A romantic gold-tone necklace with a crystal bow centre and floral vine accents along a soft, organic chain.",
    materials: "Yellow gold tone, Crystal accents",
    diamondSpecs: {
      carat: "Accent stones",
      cut: "Round brilliant accents",
      color: "Selected by atelier",
      clarity: "Selected by atelier",
      certification: "Available upon enquiry",
    },
  },
  {
    id: "6",
    slug: "gold-solitaire-pendant",
    name: "Gold Solitaire Pendant",
    category: "necklaces",
    collection: "Celestial",
    images: [img.p06],
    description:
      "A classic round brilliant on a fine gold chain — minimal, luminous, and endlessly wearable.",
    materials: "Yellow gold, Round brilliant diamond",
    diamondSpecs: {
      carat: "Available upon enquiry",
      cut: "Round brilliant",
      color: "Selected by atelier",
      clarity: "Selected by atelier",
      certification: "Available upon enquiry",
    },
    bestSeller: true,
    featured: true,
  },
  {
    id: "7",
    slug: "solitaire-carat-guide-gold",
    name: "Solitaire Pendant — Carat Guide (Gold)",
    category: "necklaces",
    collection: "Celestial",
    images: [img.p07],
    description:
      "Compare solitaire pendant sizes in yellow gold: 0.1ct, 0.3ct, 0.5ct, and 1ct. Enquire to select your preferred carat.",
    materials: "Yellow gold, Round brilliant diamonds",
    diamondSpecs: {
      carat: "0.1ct – 1ct options",
      cut: "Round brilliant",
      color: "Selected by atelier",
      clarity: "Selected by atelier",
      certification: "Available upon enquiry",
    },
  },
  {
    id: "8",
    slug: "solitaire-carat-guide-classic",
    name: "Solitaire Pendant — Classic Carat Guide",
    category: "necklaces",
    collection: "Celestial",
    images: [img.p08],
    description:
      "A size reference for gold solitaire pendants in 0.25ct, 0.50ct, 0.75ct, and 1.0ct — choose the scale that suits you.",
    materials: "Yellow gold, Round brilliant diamonds",
    diamondSpecs: {
      carat: "0.25ct – 1.0ct options",
      cut: "Round brilliant",
      color: "Selected by atelier",
      clarity: "Selected by atelier",
      certification: "Available upon enquiry",
    },
  },
  {
    id: "9",
    slug: "solitaire-carat-guide-white",
    name: "Solitaire Pendant — White Metal Guide",
    category: "necklaces",
    collection: "Maison Noir",
    images: [img.p09],
    description:
      "White metal solitaire pendants shown in 0.50ct, 1.00ct, 1.50ct, and 2.00ct for effortless comparison.",
    materials: "White metal, Round brilliant diamonds",
    diamondSpecs: {
      carat: "0.50ct – 2.00ct options",
      cut: "Round brilliant",
      color: "Selected by atelier",
      clarity: "Selected by atelier",
      certification: "Available upon enquiry",
    },
  },
  {
    id: "10",
    slug: "mixed-cut-pendant-edit",
    name: "Mixed Cut Pendant Edit",
    category: "necklaces",
    collection: "Celestial",
    images: [img.p10],
    description:
      "An edit of fine pendants spanning emerald, cushion, oval blue, and round cuts across white, rose, and yellow gold.",
    materials: "Yellow, rose & white metal; mixed diamond & gem cuts",
    diamondSpecs: {
      carat: "Available upon enquiry",
      cut: "Emerald, cushion, oval, round",
      color: "Clear & blue options",
      clarity: "Selected by atelier",
      certification: "Available upon enquiry",
    },
    featured: true,
  },
  {
    id: "11",
    slug: "signature-cut-pendants",
    name: "Signature Cut Pendants",
    category: "necklaces",
    collection: "Celestial",
    images: [img.p11],
    description:
      "Six signature diamond shapes on delicate gold chains — marquise, princess, pear, oval, cushion, and emerald.",
    materials: "Yellow gold, Mixed-cut diamonds",
    diamondSpecs: {
      carat: "Available upon enquiry",
      cut: "Marquise, princess, pear, oval, cushion, emerald",
      color: "Selected by atelier",
      clarity: "Selected by atelier",
      certification: "Available upon enquiry",
    },
    bestSeller: true,
  },
  {
    id: "12",
    slug: "classic-cut-solitaires",
    name: "Classic Cut Solitaire Pendants",
    category: "necklaces",
    collection: "Maison Noir",
    images: [img.p12],
    description:
      "Four classic solitaire silhouettes in white metal — princess, round, emerald, and pear — for a precise, architectural look.",
    materials: "White metal, Mixed-cut diamonds",
    diamondSpecs: {
      carat: "Available upon enquiry",
      cut: "Princess, round, emerald, pear",
      color: "Selected by atelier",
      clarity: "Selected by atelier",
      certification: "Available upon enquiry",
    },
  },
  {
    id: "13",
    slug: "yellow-gold-ring-atelier",
    name: "Yellow Gold Ring Atelier",
    category: "engagement-rings",
    collection: "Signature Rings",
    images: [img.p13],
    description:
      "A curated line of yellow gold engagement rings — solitaires, halos, three-stone, emerald, pear, and square cuts.",
    materials: "Yellow gold, Mixed-cut diamonds",
    diamondSpecs: {
      carat: "Available upon enquiry",
      cut: "Round, oval, emerald, pear, square",
      color: "Selected by atelier",
      clarity: "Selected by atelier",
      certification: "Available upon enquiry",
    },
    bestSeller: true,
    featured: true,
  },
  {
    id: "14",
    slug: "diamond-stud-collection",
    name: "Diamond Stud Collection",
    category: "earrings",
    collection: "Celestial",
    images: [img.p14],
    description:
      "A selection of diamond studs in round, oval, and emerald cuts — from intimate everyday sizes to statement brilliance.",
    materials: "Yellow gold, Round / oval / emerald-cut diamonds",
    diamondSpecs: {
      carat: "Multiple sizes available",
      cut: "Round, oval, emerald",
      color: "Selected by atelier",
      clarity: "Selected by atelier",
      certification: "Available upon enquiry",
    },
    bestSeller: true,
  },
  {
    id: "15",
    slug: "oval-pave-engagement-ring",
    name: "Oval Pavé Engagement Ring",
    category: "engagement-rings",
    collection: "Signature Rings",
    images: [img.p15],
    description:
      "An oval centre diamond on a pavé band in warm gold — soft fire along the shank, quiet luxury at the centre.",
    materials: "Rose / yellow gold, Oval-cut diamond, Pavé accents",
    diamondSpecs: {
      carat: "Available upon enquiry",
      cut: "Oval brilliant",
      color: "Selected by atelier",
      clarity: "Selected by atelier",
      certification: "Available upon enquiry",
    },
    featured: true,
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
