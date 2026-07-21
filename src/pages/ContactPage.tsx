import { useState, type FormEvent } from "react";
import { FadeIn } from "../components/ui/FadeIn";
import { PageHero } from "../components/ui/PageHero";
import styles from "./ContactPage.module.css";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Private appointments & enquiries"
        lead="We welcome you to our Dubai atelier, or arrange a confidential consultation by telephone or video."
      />

      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          <FadeIn className={styles.details}>
            <h2>Atelier</h2>
            <p>
              Dubai Design District
              <br />
              Building 6, Suite 210
              <br />
              Dubai, United Arab Emirates
            </p>
            <p>
              <a href="tel:+97144000000">+971 4 400 0000</a>
              <br />
              <a href="mailto:concierge@sistradiamonds.com">
                concierge@sistradiamonds.com
              </a>
            </p>
            <p className={styles.hours}>
              Sunday – Thursday · 10:00 – 19:00
              <br />
              Friday · By appointment
            </p>
          </FadeIn>

          <FadeIn delay={100} className={styles.formWrap}>
            {sent ? (
              <p className={styles.success} role="status">
                Thank you. Our concierge will respond within one business day.
              </p>
            ) : (
              <form className={styles.form} onSubmit={onSubmit} noValidate={false}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Full name</label>
                    <input id="name" name="name" required autoComplete="name" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="interest">Interest</label>
                  <select id="interest" name="interest" defaultValue="appointment">
                    <option value="appointment">Private appointment</option>
                    <option value="engagement">Engagement rings</option>
                    <option value="bespoke">Bespoke commission</option>
                    <option value="other">General enquiry</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required />
                </div>
                <button type="submit" className={styles.submit}>
                  Send Enquiry
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </>
  );
}
