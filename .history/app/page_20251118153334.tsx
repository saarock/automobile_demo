'use client';

import { Header } from '@/components/sections/header';
import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { AboutSection } from '@/components/sections/about';
import { ServiceAreasSection } from '@/components/sections/service-areas';
import { FAQSection } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import useBackToTop from '@/hooks/useBackToTop';

export default function Home() {
  useBackToTop();
  return (
    <div className="min-h-screen bg-background">
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
