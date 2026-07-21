import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { journalPosts } from "../data/content";
import { FadeIn } from "../components/ui/FadeIn";
import { PageHero } from "../components/ui/PageHero";
import styles from "./JournalPage.module.css";

export function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Notes from the atelier"
        lead="Essays on diamonds, design, and the quiet rituals of fine jewellery."
      />
      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          {journalPosts.map((post, i) => (
            <FadeIn key={post.id} delay={i * 80} as="article" className={styles.card}>
              <Link to={`/journal/${post.slug}`} className={styles.link}>
                <div className={styles.media}>
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width={700}
                    height={500}
                  />
                </div>
                <p className={styles.date}>{post.date}</p>
                <h2>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <span className={styles.read}>Read</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}

export function JournalArticlePage() {
  const { slug } = useParams();
  const post = journalPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) document.title = `${post.title} — Sistra Diamonds`;
  }, [post]);

  if (!post) return <Navigate to="/journal" replace />;

  return (
    <article className={styles.article}>
      <PageHero eyebrow="Journal" title={post.title} lead={post.date} />
      <div className={`container ${styles.articleBody}`}>
        <FadeIn className={styles.articleMedia}>
          <img
            src={post.image}
            alt=""
            loading="eager"
            decoding="async"
            width={1200}
            height={700}
          />
        </FadeIn>
        <FadeIn delay={80} className={styles.articleCopy}>
          {post.content.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
          <Link to="/journal" className={styles.back}>
            ← All journal entries
          </Link>
        </FadeIn>
      </div>
    </article>
  );
}
