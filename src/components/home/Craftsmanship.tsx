import { siteImages } from "../../data/products";
import { FadeIn } from "../ui/FadeIn";
import styles from "./Craftsmanship.module.css";

const pillars = [
  {
    title: "Hand-finished settings",
    text: "Every claw and gallery is refined by master setters — measured in millimetres, perfected over weeks.",
  },
  {
    title: "Stone-first selection",
    text: "We reject diamonds that score well on paper but lack life. Brilliance is felt before it is certified.",
  },
  {
    title: "Enduring proportion",
    text: "Our designs favour silence over spectacle — forms that remain relevant across generations.",
  },
];

export function Craftsmanship() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="craft-heading">
      <div className={`container ${styles.grid}`}>
        <FadeIn className={styles.media}>
          <img
            src={siteImages.craft}
            alt="Artisan crafting a diamond setting"
            loading="lazy"
            decoding="async"
            width={900}
            height={1100}
          />
        </FadeIn>
        <FadeIn delay={120} className={styles.content}>
          <span className="eyebrow">Craftsmanship</span>
          <h2 id="craft-heading" className="section-title">
            Made slowly. Meant to last.
          </h2>
          <p className={styles.lead}>
            In our atelier, time is the rarest material. Each Sistra piece passes
            through gemologists, designers, and setters who share one standard:
            nothing leaves unfinished.
          </p>
          <ul className={styles.list}>
            {pillars.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
