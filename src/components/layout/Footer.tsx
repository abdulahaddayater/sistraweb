import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/content";
import styles from "./Footer.module.css";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <p className={styles.logo}>Sistra Diamonds</p>
          <p className={styles.story}>
            A Middle Eastern house of fine jewellery. We craft pieces of lasting
            quiet — diamonds selected for life and light, finished by hand in our
            atelier.
          </p>
          <div className={styles.social}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              Instagram
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
              Pinterest
            </a>
            <a href="mailto:concierge@sistradiamonds.com">Email</a>
          </div>
        </div>

        <div>
          <p className={styles.heading}>Explore</p>
          <ul className={styles.links}>
            {navLinks.slice(1).map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.heading}>Contact</p>
          <ul className={styles.links}>
            <li>Dubai Design District</li>
            <li>Building 6, Suite 210</li>
            <li>
              <a href="tel:+97144000000">+971 4 400 0000</a>
            </li>
            <li>
              <a href="mailto:concierge@sistradiamonds.com">
                concierge@sistradiamonds.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className={styles.heading}>Newsletter</p>
          <p className={styles.newsCopy}>
            Private previews, atelier stories, and new collections.
          </p>
          {submitted ? (
            <p className={styles.thanks} role="status">
              Thank you. Welcome to the maison.
            </p>
          ) : (
            <form className={styles.form} onSubmit={onSubmit}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <button type="submit">Join</button>
            </form>
          )}
          <ul className={styles.policies}>
            <li>
              <a href="#shipping">Shipping</a>
            </li>
            <li>
              <a href="#returns">Returns</a>
            </li>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
            <li>
              <a href="#terms">Terms</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} Sistra Diamonds. All rights reserved.</p>
        <p>Crafted with care in the Middle East.</p>
      </div>
    </footer>
  );
}
