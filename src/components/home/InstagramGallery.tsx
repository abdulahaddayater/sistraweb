import { siteImages } from "../../data/products";
import { FadeIn } from "../ui/FadeIn";
import styles from "./InstagramGallery.module.css";

const gallery = [
  { src: siteImages.ring1, alt: "Aurora Solitaire detail" },
  { src: siteImages.necklace1, alt: "Lumen Pendant worn" },
  { src: siteImages.earring1, alt: "Étoile Drops" },
  { src: siteImages.bracelet1, alt: "Riviera Tennis bracelet" },
  { src: siteImages.ring2, alt: "Noir Halo ring" },
  { src: siteImages.craft, alt: "Atelier craftsmanship" },
];

export function InstagramGallery() {
  return (
    <section className={`section section--soft ${styles.section}`} aria-labelledby="gallery-heading">
      <div className="container">
        <FadeIn className={styles.header}>
          <span className="eyebrow">@sistradiamonds</span>
          <h2 id="gallery-heading" className="section-title">
            Moments from the maison
          </h2>
        </FadeIn>
      </div>

      <FadeIn className={styles.grid}>
        {gallery.map((item) => (
          <a
            key={item.src}
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
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
          </a>
        ))}
      </FadeIn>
    </section>
  );
}
