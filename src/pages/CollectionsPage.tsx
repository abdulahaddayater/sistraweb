import { Link } from "react-router-dom";
import { collections } from "../data/content";
import { FadeIn } from "../components/ui/FadeIn";
import { PageHero } from "../components/ui/PageHero";
import styles from "./CollectionsPage.module.css";

export function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title="Houses of light"
        lead="Three signatures define the Sistra world — celestial white, desert gold, and architectural noir."
      />
      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.list}`}>
          {collections.map((collection, i) => (
            <FadeIn key={collection.id} delay={i * 80} as="article" className={styles.item}>
              <div className={styles.media}>
                <img
                  src={collection.image}
                  alt={collection.name}
                  loading="lazy"
                  decoding="async"
                  width={900}
                  height={700}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.tagline}>{collection.tagline}</p>
                <h2>{collection.name}</h2>
                <p>{collection.description}</p>
                <Link to={`/${collection.slug === "celestial" ? "necklaces" : collection.slug === "desert-light" ? "bracelets" : "engagement-rings"}`}>
                  Explore pieces
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
