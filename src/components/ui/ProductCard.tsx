import { Link } from "react-router-dom";
import type { Product } from "../../data/products";
import { useWishlist } from "../../hooks/useWishlist";
import { Button } from "./Button";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { has, toggle } = useWishlist();
  const wished = has(product.id);
  const secondary = product.images[1];

  return (
    <article className={styles.card}>
      <div className={`${styles.media} ${secondary ? styles.hasHover : ""}`}>
        <Link
          to={`/product/${product.slug}`}
          className={styles.imageLink}
          aria-label={`View ${product.name}`}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className={`${styles.image} ${styles.primary}`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            width={600}
            height={750}
          />
          {secondary ? (
            <img
              src={secondary}
              alt=""
              className={`${styles.image} ${styles.secondary}`}
              loading="lazy"
              decoding="async"
              width={600}
              height={750}
              aria-hidden="true"
            />
          ) : null}
        </Link>
        <button
          type="button"
          className={`${styles.wish} ${wished ? styles.wished : ""}`}
          onClick={() => toggle(product.id)}
          aria-label={
            wished
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          aria-pressed={wished}
        >
          <HeartIcon filled={wished} />
        </button>
      </div>
      <div className={styles.body}>
        <p className={styles.collection}>{product.collection}</p>
        <h3 className={styles.name}>
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <Button to={`/product/${product.slug}`} variant="outline" className={styles.cta}>
          View Details
        </Button>
      </div>
    </article>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
