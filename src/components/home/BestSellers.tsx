import { getBestSellers } from "../../data/products";
import { FadeIn } from "../ui/FadeIn";
import { ProductCard } from "../ui/ProductCard";
import { Button } from "../ui/Button";
import styles from "./BestSellers.module.css";

export function BestSellers() {
  const items = getBestSellers().slice(0, 4);

  return (
    <section className={`section section--soft ${styles.section}`} aria-labelledby="bestsellers-heading">
      <div className="container">
        <FadeIn className={styles.header}>
          <div>
            <span className="eyebrow">Bestsellers</span>
            <h2 id="bestsellers-heading" className="section-title">
              Most coveted pieces
            </h2>
          </div>
          <Button to="/collections" variant="outline">
            View All
          </Button>
        </FadeIn>

        <div className={styles.grid}>
          {items.map((product, i) => (
            <FadeIn key={product.id} delay={i * 80}>
              <ProductCard product={product} priority={i < 2} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
