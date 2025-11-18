"use client";

import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { AboutSection } from "@/components/sections/about";
import { ServiceAreasSection } from "@/components/sections/service-areas";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import useBackToTop from "@/hooks/useBackToTop";

export default function Home() {
  const { scrollToTop, show } = useBackToTop();
  return (
    <div className="min-h-screen bg-background">
      <div style={{ height: "200vh" }}>
        <h1>Scroll down to see the button</h1>
        {show && (
          <button
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              padding: "10px 20px",
              background: "blue",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Back to Top
          </button>
        )}
      </div>
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
