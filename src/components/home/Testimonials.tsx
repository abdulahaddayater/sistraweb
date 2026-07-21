import { testimonials } from "../../data/content";
import { FadeIn } from "../ui/FadeIn";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="testimonials-heading">
      <div className="container">
        <FadeIn className={styles.header}>
          <span className="eyebrow">Client Voices</span>
          <h2 id="testimonials-heading" className="section-title">
            Words from those who wear Sistra
          </h2>
        </FadeIn>

        <div className={styles.grid}>
          {testimonials.map((item, i) => (
            <FadeIn key={item.id} delay={i * 90} as="blockquote" className={styles.quote}>
              <p>“{item.quote}”</p>
              <footer>
                <cite>{item.name}</cite>
                <span>{item.location}</span>
              </footer>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
