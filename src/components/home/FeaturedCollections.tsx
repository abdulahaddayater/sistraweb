import { Link } from "react-router-dom";
import { collections } from "../../data/content";
import { FadeIn } from "../ui/FadeIn";
import styles from "./FeaturedCollections.module.css";

export function FeaturedCollections() {
  return (
    <section className={`section section--soft ${styles.section}`} aria-labelledby="collections-heading">
      <div className="container">
        <FadeIn className={styles.header}>
          <span className="eyebrow">Collections</span>
          <h2 id="collections-heading" className="section-title">
            Signature houses of light
          </h2>
          <p className="section-lead">
            Three distinct worlds — celestial white, desert gold, and architectural noir.
          </p>
        </FadeIn>

        <div className={styles.grid}>
          {collections.map((collection, i) => (
            <FadeIn key={collection.id} delay={i * 100} as="article" className={styles.item}>
              <Link to="/collections" className={styles.link}>
                <div className={styles.media}>
                  <img
                    src={collection.image}
                    alt={collection.name}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={1000}
                  />
                </div>
                <div className={styles.meta}>
                  <h3>{collection.name}</h3>
                  <p>{collection.tagline}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
