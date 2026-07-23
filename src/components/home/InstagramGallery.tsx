import { Link } from "react-router-dom";
import { products } from "../../data/products";
import { FadeIn } from "../ui/FadeIn";
import styles from "./InstagramGallery.module.css";

const gallery = products.slice(0, 6).map((product) => ({
  src: product.images[0],
  alt: product.name,
  slug: product.slug,
}));

export function InstagramGallery() {
  return (
    <section className={`section section--soft ${styles.section}`} aria-labelledby="gallery-heading">
      <div className="container">
        <FadeIn className={styles.header}>
          <span className="eyebrow">Gallery</span>
          <h2 id="gallery-heading" className="section-title">
            Moments from the maison
          </h2>
        </FadeIn>
      </div>

      <FadeIn className={styles.grid}>
        {gallery.map((item) => (
          <Link
            key={item.slug}
            to={`/product/${item.slug}`}
            className={styles.item}
            aria-label={item.alt}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              width={500}
              height={500}
            />
          </Link>
        ))}
      </FadeIn>
    </section>
  );
}
