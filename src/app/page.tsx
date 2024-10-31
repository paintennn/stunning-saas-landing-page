import { CallToAction } from "@/sections/CallToAction";
import { DeveloperInfo } from "@/sections/DeveloperInfo";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
export default function Home() {
  return (
    <>
      {/* <DeveloperInfo /> */}
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
      <DeveloperInfo />
    </>
  );
}
