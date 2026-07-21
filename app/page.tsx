import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { BrandTicker } from "@/components/sections/brand-ticker";
import { CaseStudies } from "@/components/sections/case-studies";
import { WhatYouGet } from "@/components/sections/what-you-get";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandTicker />
      <CaseStudies />
      <WhatYouGet />
      <Footer />
    </>
  );
}
