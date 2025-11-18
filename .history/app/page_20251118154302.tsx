"use client";

import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { AboutSection } from "@/components/sections/about";
import { ServiceAreasSection } from "@/components/sections/service-areas";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import BackToTop from "@/components/BackToTop";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
     <BackToTop/>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ServiceAreasSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
