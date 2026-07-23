import { FadeIn } from "../components/ui/FadeIn";
import { Button } from "../components/ui/Button";
import { PageHero } from "../components/ui/PageHero";
import styles from "./ContactPage.module.css";

const WHATSAPP_APPOINTMENT_URL =
  "https://wa.me/918007668786?text=" +
  encodeURIComponent(
    "Hello Sistra Diamonds,\n\nI would like to book a private appointment. Please share the available times.",
  );

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Private appointments & enquiries"
        lead="Arrange a confidential consultation by telephone or WhatsApp."
      />

      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          <FadeIn className={styles.details}>
            <h2>Contact</h2>
            <p>
              <a href="tel:8007668786">800 766 8786</a>
            </p>
            <p className={styles.hours}>
              Sunday – Thursday · 10:00 – 19:00
              <br />
              Friday · By appointment
            </p>
          </FadeIn>

          <FadeIn delay={100} className={styles.booking}>
            <span className="eyebrow">WhatsApp</span>
            <h2 className={styles.bookingTitle}>Book your appointment on WhatsApp</h2>
            <p className={styles.bookingCopy}>
              Message our concierge directly to reserve a private viewing or
              discuss a piece from the collection.
            </p>
            <Button
              href={WHATSAPP_APPOINTMENT_URL}
              variant="solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on WhatsApp
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
