import { FadeIn } from "../ui/FadeIn";
import styles from "./DiamondQuality.module.css";

const specs = [
  { label: "Cut", value: "Excellent & Ideal only" },
  { label: "Color", value: "D–F, selected by eye" },
  { label: "Clarity", value: "IF–VS2, life over ledger" },
  { label: "Certification", value: "GIA & IGI authenticated" },
];

export function DiamondQuality() {
  return (
    <section className={`section section--dark ${styles.section}`} aria-labelledby="quality-heading">
      <div className={`container ${styles.inner}`}>
        <FadeIn className={styles.copy}>
          <span className="eyebrow">Diamond Quality</span>
          <h2 id="quality-heading" className="section-title">
            Certified brilliance. Human judgement.
          </h2>
          <p className="section-lead">
            Every Sistra diamond arrives with world-class certification — and
            the approval of gemologists who still trust the loupe as much as the
            report.
          </p>
        </FadeIn>

        <FadeIn delay={100} className={styles.grid}>
          {specs.map((spec) => (
            <div key={spec.label} className={styles.item}>
              <p className={styles.label}>{spec.label}</p>
              <p className={styles.value}>{spec.value}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
