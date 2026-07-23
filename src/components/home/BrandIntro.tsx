import { FadeIn } from "../ui/FadeIn";
import { Button } from "../ui/Button";
import styles from "./BrandIntro.module.css";

export function BrandIntro() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="brand-intro">
      <FadeIn className={`container ${styles.inner}`}>
        <span className="eyebrow">The Maison</span>
        <h2 id="brand-intro" className={`section-title ${styles.title}`}>
          Jewellery that speaks in whispers.
        </h2>
        <p className={styles.copy}>
          Sistra Diamonds was founded on a simple conviction: true luxury is
          calm. From our atelier in Dubai, we select exceptional stones and
          shape them into pieces of enduring proportion — for those who prefer
          presence over spectacle.
        </p>
        <Button to="/collections" variant="outline">
          View Our Collections
        </Button>
      </FadeIn>
    </section>
  );
}
