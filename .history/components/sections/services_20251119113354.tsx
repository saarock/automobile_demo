"use client";

import Link from "next/link";
import { Button } from "../ui/button";

const services = [
  {
    title: "General Service",
    description: "Oil change, filters, fluids, belts & safety inspection",
    price: "From $180",
    duration: "1-2 hours",
    icon: "🔧",
  },
  {
    title: "Logbook Service",
    description: "Manufacturer scheduled service with genuine parts",
    price: "",
    duration: "1.5-3 hours",
    icon: "📋",
  },
  {
    title: "Brake Service",
    description: "Inspection, pad replacement & rotor machining",
    price: "",
    duration: "1-2 hours",
    icon: "🛑",
  },
  {
    title: "Battery Service",
    description: "Testing, replacement & electrical system check",
    price: "From $150",
    duration: "30-45 min",
    icon: "🔋",
  },
  {
    title: "Cooling System",
    description: "Radiator service, coolant & leak detection",
    price: "From $200",
    duration: "1-1.5 hours",
    icon: "🌡️",
  },
  {
    title: "Pre-Purchase Inspection",
    description: "100+ point inspection with detailed report",
    price: "From $150",
    duration: "1-2 hours",
    icon: "🔍",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-muted/20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary px-5 py-2 rounded-full font-semibold mb-6 text-sm tracking-wide">
            Quick Overview
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Mobile Services We Offer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">
              Simplified View
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            Quick overview of our most popular services. For detailed
            information and pricing, visit our services page.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.slice(0, 6).map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 luxury-shadow hover:luxury-shadow-lg hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl bg-primary/10 p-4 rounded-xl group-hover:scale-110 transition-transform group-hover:bg-primary/20">
                  {service.icon}
                </div>
              </div>

              <h3 className="font-black text-foreground mb-3 text-lg group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-foreground/60 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="flex items-center justify-between text-sm font-medium">
                <span className="text-primary font-black">{service.price}</span>
                <span className="text-foreground/50">
                  ⏱️ {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button
            disabled
            // href="/services"

            // className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all luxury-shadow-lg hover:scale-105"
          >
            View All Services & Details
          </Button>
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/10">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-primary/20 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="font-black text-foreground mb-2">Licensed</h3>
              <p className="text-foreground/60 text-sm">
                Professional mechanics
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-accent/20 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-black text-foreground mb-2">Same-Day</h3>
              <p className="text-foreground/60 text-sm">Quick turnaround</p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/20 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="font-black text-foreground mb-2">Insured</h3>
              <p className="text-foreground/60 text-sm">Complete coverage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
