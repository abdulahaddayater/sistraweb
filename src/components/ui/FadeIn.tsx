import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../../hooks/useInView";
import styles from "./FadeIn.module.css";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "blockquote";
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: FadeInProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref as never}
      className={`${styles.fade} ${isInView ? styles.visible : ""} ${className}`.trim()}
      style={{ "--fade-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
