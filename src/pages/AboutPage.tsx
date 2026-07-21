import { siteImages } from "../data/products";
import { Button } from "../components/ui/Button";
import { FadeIn } from "../components/ui/FadeIn";
import { PageHero } from "../components/ui/PageHero";
import styles from "./AboutPage.module.css";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A house built on quiet conviction"
        lead="Sistra Diamonds is a Middle Eastern maison devoted to exceptional diamonds, enduring proportion, and the calm confidence of true luxury."
      />

      <section className={`section ${styles.story}`}>
        <div className={`container ${styles.grid}`}>
          <FadeIn className={styles.media}>
            <img
              src={siteImages.about}
              alt="Sistra diamond ring detail"
              loading="lazy"
              decoding="async"
              width={900}
              height={1100}
            />
          </FadeIn>
          <FadeIn delay={100} className={styles.copy}>
            <h2 className="section-title">Born between desert and light</h2>
            <p>
              Founded in Dubai, Sistra draws from a region where hospitality,
              craftsmanship, and splendour have always walked together. We
              translate that heritage into a contemporary language — refined,
              international, unmistakably our own.
            </p>
            <p>
              Our name evokes rhythm and resonance: the soft sound of something
              precious in motion. Every piece is designed to be worn often,
              remembered always, and passed on without apology.
            </p>
            <Button to="/contact" variant="outline">
              Visit the Atelier
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="section section--dark">
        <div className={`container ${styles.values}`}>
          <FadeIn>
            <span className="eyebrow">Principles</span>
            <h2 className="section-title">What we never compromise</h2>
          </FadeIn>
          <div className={styles.valueGrid}>
            {[
              {
                title: "Provenance",
                text: "Ethically sourced diamonds with full certification and transparent supply chains.",
              },
              {
                title: "Restraint",
                text: "Designs that favour silence — no excess ornament, no seasonal gimmick.",
              },
              {
                title: "Service",
                text: "Private appointments, discreet delivery, and a concierge who knows your name.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 90} className={styles.value}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
