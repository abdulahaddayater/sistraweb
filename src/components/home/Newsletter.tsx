import { useState, type FormEvent } from "react";
import { FadeIn } from "../ui/FadeIn";
import styles from "./Newsletter.module.css";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  };

  return (
    <section className={`section ${styles.section}`} aria-labelledby="newsletter-heading">
      <FadeIn className={`container ${styles.inner}`}>
        <span className="eyebrow">Private Circle</span>
        <h2 id="newsletter-heading" className={`section-title ${styles.title}`}>
          Receive invitations before the world does.
        </h2>
        <p className={styles.copy}>
          Join a discreet list for collection previews, atelier notes, and
          private viewing appointments.
        </p>

        {done ? (
          <p className={styles.success} role="status">
            You are on the list. We look forward to sharing what comes next.
          </p>
        ) : (
          <form className={styles.form} onSubmit={onSubmit}>
            <label htmlFor="home-newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="home-newsletter"
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </FadeIn>
    </section>
  );
}
