import { BestSellers } from "../components/home/BestSellers";
import { BrandIntro } from "../components/home/BrandIntro";
import { Craftsmanship } from "../components/home/Craftsmanship";
import { DiamondQuality } from "../components/home/DiamondQuality";
import { FeaturedCollections } from "../components/home/FeaturedCollections";
import { Hero } from "../components/home/Hero";
import { InstagramGallery } from "../components/home/InstagramGallery";
import { Newsletter } from "../components/home/Newsletter";
import { Testimonials } from "../components/home/Testimonials";

export function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <FeaturedCollections />
      <Craftsmanship />
      <BestSellers />
      <DiamondQuality />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
    </>
  );
}
