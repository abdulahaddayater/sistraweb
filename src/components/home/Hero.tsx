import { Button } from "../ui/Button";
import { siteImages } from "../../data/products";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.media}>
        <img
          src={siteImages.hero}
          alt="Sistra Diamonds fine jewellery on warm stone"
          className={styles.image}
          fetchPriority="high"
          decoding="async"
          width={2000}
          height={1333}
        />
        <div className={styles.veil} aria-hidden="true" />
      </div>

      <div className={`container ${styles.content}`}>
        <p className={styles.brand}>Sistra Diamonds</p>
        <h1 className={styles.headline}>Light, held forever.</h1>
        <p className={styles.sub}>
          Fine jewellery from the Middle East — diamonds of rare clarity,
          crafted in quiet luxury.
        </p>
        <div className={styles.actions}>
          <Button to="/collections" variant="outline-light">
            Explore Collections
          </Button>
          <Button to="/contact" variant="ghost" className={styles.ghost}>
            Book an Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
