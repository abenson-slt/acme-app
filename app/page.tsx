import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedParts } from "@/components/FeaturedParts";
import { IndustryBand } from "@/components/IndustryBand";
import { TrustSignals } from "@/components/TrustSignals";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <CategoryGrid />
        <FeaturedParts />
        <IndustryBand />
        <TrustSignals />
      </main>
      <SiteFooter />
    </>
  );
}
