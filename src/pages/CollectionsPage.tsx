import { products } from "../data/products";
import { FadeIn } from "../components/ui/FadeIn";
import { PageHero } from "../components/ui/PageHero";
import { ProductCard } from "../components/ui/ProductCard";
import styles from "./CategoryPage.module.css";

export function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title="All collections"
        lead="Every Sistra piece in one place — explore the full atelier selection."
      />
      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          {products.map((product, i) => (
            <FadeIn key={product.id} delay={Math.min(i * 50, 400)}>
              <ProductCard product={product} priority={i < 4} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
