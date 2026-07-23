import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  categoryLabels,
  getProductBySlug,
  getRelatedProducts,
  getWhatsAppInquiryUrl,
} from "../data/products";
import { useWishlist } from "../hooks/useWishlist";
import { Button } from "../components/ui/Button";
import { FadeIn } from "../components/ui/FadeIn";
import { ProductCard } from "../components/ui/ProductCard";
import styles from "./ProductPage.module.css";

type Tab = "details" | "specs" | "materials" | "size" | "shipping";

export function ProductPage() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState<Tab>("details");
  const { has, toggle } = useWishlist();
  const zoomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} — Sistra Diamonds`;
      setActive(0);
      setTab("details");
    }
  }, [product]);

  if (!product) return <Navigate to="/collections" replace />;

  const related = getRelatedProducts(product);
  const wished = has(product.id);

  const onZoomMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = zoomRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--zoom-x", `${x}%`);
    el.style.setProperty("--zoom-y", `${y}%`);
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: "details", label: "Details" },
    { id: "specs", label: "Diamond Specs" },
    { id: "materials", label: "Materials" },
    { id: "size", label: "Size Guide" },
    { id: "shipping", label: "Shipping & Returns" },
  ];

  return (
    <div className={styles.page}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.gallery}>
          <div
            ref={zoomRef}
            className={styles.mainImage}
            onMouseMove={onZoomMove}
          >
            <img
              src={product.images[active]}
              alt={`${product.name} view ${active + 1}`}
              className={styles.base}
              width={900}
              height={1125}
              decoding="async"
            />
            <img
              src={product.images[active]}
              alt=""
              className={styles.zoom}
              aria-hidden="true"
              decoding="async"
            />
          </div>
          {product.images.length > 1 ? (
            <div className={styles.thumbs} role="tablist" aria-label="Product images">
              {product.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  className={`${styles.thumb} ${active === i ? styles.thumbActive : ""}`}
                  onClick={() => setActive(i)}
                >
                  <img src={src} alt="" loading="lazy" width={160} height={200} />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className={styles.info}>
          <p className={styles.collection}>{product.collection}</p>
          <h1>{product.name}</h1>
          <p className={styles.summary}>{product.description}</p>

          <div className={styles.actions}>
            <Button
              href={getWhatsAppInquiryUrl(product)}
              variant="solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inquiry
            </Button>
            <button
              type="button"
              className={`${styles.wishBtn} ${wished ? styles.wished : ""}`}
              onClick={() => toggle(product.id)}
              aria-pressed={wished}
            >
              {wished ? "Saved to Wishlist" : "Add to Wishlist"}
            </button>
          </div>

          <div className={styles.tabs}>
            <div className={styles.tabList} role="tablist">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={tab === t.id}
                  className={tab === t.id ? styles.tabActive : ""}
                  onClick={() => setTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className={styles.tabPanel} role="tabpanel">
              {tab === "details" && <p>{product.description}</p>}
              {tab === "specs" && (
                <dl className={styles.specs}>
                  {Object.entries(product.diamondSpecs).map(([key, value]) => (
                    <div key={key}>
                      <dt>{key.charAt(0).toUpperCase() + key.slice(1)}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {tab === "materials" && <p>{product.materials}</p>}
              {tab === "size" && (
                <p>
                  Rings are available in EU sizes 48–60. Complimentary resizing
                  within 30 days of purchase. Bracelets and necklaces include
                  adjustable fittings where design permits. Book a private fitting
                  for bespoke sizing.
                </p>
              )}
              {tab === "shipping" && (
                <p>
                  Insured worldwide shipping with signature delivery. Complimentary
                  returns within 14 days for unworn pieces in original condition.
                  Engagement rings may be exchanged once within 30 days.
                </p>
              )}
            </div>
          </div>

          <p className={styles.back}>
            <Link to={`/${product.category}`}>
              ← Back to {categoryLabels[product.category]}
            </Link>
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className={`section section--soft ${styles.related}`}>
          <div className="container">
            <FadeIn>
              <h2 className="section-title">You may also admire</h2>
            </FadeIn>
            <div className={styles.relatedGrid}>
              {related.map((item, i) => (
                <FadeIn key={item.id} delay={i * 70}>
                  <ProductCard product={item} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
