import { siteImages } from "./products";

export interface Collection {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export const collections: Collection[] = [
  {
    id: "1",
    slug: "celestial",
    name: "Celestial",
    tagline: "Light, distilled",
    description:
      "Diamonds suspended in platinum and white gold — pieces that feel weightless, luminous, and eternal.",
    image: siteImages.necklace1,
  },
  {
    id: "2",
    slug: "desert-light",
    name: "Desert Light",
    tagline: "Warmth of the dune",
    description:
      "Yellow gold and soft fire. A collection inspired by Middle Eastern horizons and golden hour.",
    image: siteImages.bracelet2,
  },
  {
    id: "3",
    slug: "maison-noir",
    name: "Maison Noir",
    tagline: "Quiet intensity",
    description:
      "Architectural lines and deep contrast. For those who prefer presence in restraint.",
    image: siteImages.ring2,
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Sistra understands silence. The Aurora Solitaire needed no explanation — it simply felt inevitable.",
    name: "Layla Al-Hashimi",
    location: "Abu Dhabi",
  },
  {
    id: "2",
    quote:
      "From private viewing to certification, every detail reflected a house that takes craftsmanship seriously.",
    name: "James Whitmore",
    location: "London",
  },
  {
    id: "3",
    quote:
      "The Riviera Tennis bracelet is the most elegant piece I own. Understated, flawless, and endlessly worn.",
    name: "Sofia Mendes",
    location: "Dubai",
  },
];

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string[];
}

export const journalPosts: JournalPost[] = [
  {
    id: "1",
    slug: "anatomy-of-a-solitaire",
    title: "The Anatomy of a Solitaire",
    excerpt:
      "How claw height, girdle thickness, and metal temperature shape the presence of a single diamond.",
    date: "12 March 2026",
    image: siteImages.ring1,
    content: [
      "A solitaire is never merely a stone in a setting. It is a conversation between light, metal, and the hand that will wear it for a lifetime.",
      "At Sistra, each claw is filed by hand until the diamond appears to float. We favour platinum for its cool restraint and lasting integrity — a metal that ages with dignity.",
      "Proportion is everything. Too high a setting risks fragility; too low, and the stone loses its voice. Our atelier measures that balance in millimetres and months.",
    ],
  },
  {
    id: "2",
    slug: "desert-gold-philosophy",
    title: "Desert Gold: A Philosophy of Warmth",
    excerpt:
      "Why yellow gold remains the quiet signature of Middle Eastern fine jewellery.",
    date: "28 February 2026",
    image: siteImages.bracelet2,
    content: [
      "Yellow gold carries the memory of sun on stone. In our Desert Light collection, we return to 18k — rich enough to glow, refined enough to feel contemporary.",
      "We do not chase trends. We chase temperature: the warmth of gold against skin, the soft fire of a well-cut diamond at dusk.",
    ],
  },
  {
    id: "3",
    slug: "beyond-the-4cs",
    title: "Beyond the 4Cs",
    excerpt:
      "Certification matters. So does the human eye that selects each stone for Sistra.",
    date: "4 February 2026",
    image: siteImages.diamond,
    content: [
      "GIA and IGI certificates are our baseline — never our ceiling. Every diamond that enters the maison is reviewed under controlled light by our gemologists.",
      "We reject stones that score well on paper but lack life. Brilliance is a feeling before it is a number.",
    ],
  },
];

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Collections", path: "/collections" },
  { label: "Engagement Rings", path: "/engagement-rings" },
  { label: "Necklaces", path: "/necklaces" },
  { label: "Earrings", path: "/earrings" },
  { label: "Bracelets", path: "/bracelets" },
  { label: "About", path: "/about" },
  { label: "Journal", path: "/journal" },
  { label: "Contact", path: "/contact" },
] as const;
