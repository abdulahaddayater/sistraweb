import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { heroImages } from "../../data/products";
import styles from "./Hero.module.css";

/** Each image stays fully visible for this long before changing */
const HOLD_MS = 3000;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length < 2) return;

    let cancelled = false;
    let timeoutId = 0;

    const scheduleNext = () => {
      timeoutId = window.setTimeout(() => {
        if (cancelled) return;
        setIndex((current) => (current + 1) % heroImages.length);
        scheduleNext();
      }, HOLD_MS);
    };

    scheduleNext();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.media} aria-live="polite">
        {heroImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={i === index ? "Sistra Diamonds fine jewellery" : ""}
            className={`${styles.image} ${i === index ? styles.active : ""}`}
            fetchPriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            width={2000}
            height={1333}
            aria-hidden={i !== index}
          />
        ))}
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
