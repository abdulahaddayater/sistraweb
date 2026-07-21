import {
  categoryLabels,
  getProductsByCategory,
  type CategorySlug,
} from "../data/products";
import { FadeIn } from "../components/ui/FadeIn";
import { PageHero } from "../components/ui/PageHero";
import { ProductCard } from "../components/ui/ProductCard";
import styles from "./CategoryPage.module.css";

const leads: Record<CategorySlug, string> = {
  "engagement-rings":
    "Solitaires and halos designed for a lifetime of quiet radiance.",
  necklaces: "Pendants and collars that rest close to the light.",
  earrings: "Studs and drops refined for day elegance and evening fire.",
  bracelets: "Tennis lines and sculptural cuffs — continuous brilliance.",
};

interface CategoryPageProps {
  category: CategorySlug;
}

export function CategoryPage({ category }: CategoryPageProps) {
  const products = getProductsByCategory(category);

  return (
    <>
      <PageHero
        eyebrow="Fine Jewellery"
        title={categoryLabels[category]}
        lead={leads[category]}
      />
      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          {products.map((product, i) => (
            <FadeIn key={product.id} delay={i * 70}>
              <ProductCard product={product} priority={i < 2} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
