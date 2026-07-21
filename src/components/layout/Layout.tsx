import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { WishlistProvider } from "../../hooks/useWishlist";
import { Footer } from "./Footer";
import { Header } from "./Header";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Sistra Diamonds — Fine Jewellery",
      "/collections": "Collections — Sistra Diamonds",
      "/engagement-rings": "Engagement Rings — Sistra Diamonds",
      "/necklaces": "Necklaces — Sistra Diamonds",
      "/earrings": "Earrings — Sistra Diamonds",
      "/bracelets": "Bracelets — Sistra Diamonds",
      "/about": "About — Sistra Diamonds",
      "/journal": "Journal — Sistra Diamonds",
      "/contact": "Contact — Sistra Diamonds",
    };

    if (titles[location.pathname]) {
      document.title = titles[location.pathname];
    }
  }, [location.pathname]);

  return (
    <WishlistProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </WishlistProvider>
  );
}
