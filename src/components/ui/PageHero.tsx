import type { ReactNode } from "react";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <header className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1 className={styles.title}>{title}</h1>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
        {children}
      </div>
    </header>
  );
}
