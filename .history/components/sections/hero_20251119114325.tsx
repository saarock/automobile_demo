"use client";

import { useState } from "react";

export function HeroSection() {
  const [showCallback, setShowCallback] = useState(false);
  const [phone, setPhone] = useState("");

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      window.location.href = `https://wa.me/61${phone.slice(
        1
      )}?text=Hi%20Alfa%20Automotive,%20I%20would%20like%20to%20book%20a%20mobile%20service.`;
      setPhone("");
      setShowCallback(false);
    }
  };

  return (
    <section className="relative bg-white py-20 lg:py-32 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/van_cut.jpg"
          alt="Mobile mechanics service van at customer location"
          className="w-full h-full object-cover"
     
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          {/* <div className="inline-flex items-center bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary px-5 py-2.5 rounded-full font-semibold mb-8 text-sm tracking-wide animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full mr-2.5 animate-pulse"></span>
            24/7 Emergency Mobile Service
          </div> */}

          <h1 className="text-5xl lg:text-7xl font-black text-foreground leading-[1.15] mb-6 tracking-tight animate-slide-up">
            Professional Mobile Car Service
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent mt-3 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              We Come to You
            </span>
          </h1>

          <p
            className="text-lg lg:text-xl text-foreground/70 leading-relaxed mb-6 max-w-2xl font-light animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Our fully equipped service vans bring expert mechanics directly to
            your home, workplace, or roadside. No more waiting in service
            centers - we deliver convenience to you across all Canberra & ACT.
          </p>

          <div className="flex items-center gap-6 text-foreground/80 mb-10 text-sm font-medium animate-slide-in">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Mobile Service Only
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Same-Day Available
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Licensed & Insured
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-16 animate-scale-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="tel:0481374525"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold inline-block text-center transition-all luxury-shadow-lg hover:scale-105 hover:-translate-y-1"
            >
              Call Now - Free Quote
            </a>
            <button
              onClick={() => setShowCallback(!showCallback)}
              className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-xl font-bold transition-all"
            >
              Request Call Back
            </button>
          </div>

          {showCallback && (
            <div className="animate-slide-up bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-8">
              <form
                onSubmit={handleCallbackSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border border-primary/30 focus:border-primary outline-none bg-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-bold transition-all whitespace-nowrap hover:scale-105"
                >
                  Message via WhatsApp
                </button>
              </form>
              <p className="text-xs text-foreground/60 mt-3">
                We'll respond instantly via WhatsApp
              </p>
            </div>
          )}

          <div
            className="grid grid-cols-3 gap-8 pt-12 border-t border-foreground/10 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            {/* <div className="group">
              <div className="text-3xl font-black text-primary mb-2">24/7</div>
              <div className="text-xs text-foreground/60 tracking-wide uppercase font-semibold">
                Emergency Service
              </div>
            </div> */}
            <div className="group">
              <div className="text-3xl font-black text-accent mb-2">
                All ACT
              </div>
              <div className="text-xs text-foreground/60 tracking-wide uppercase font-semibold">
                Including Queanbeyan
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-black text-primary mb-2">30min</div>
              <div className="text-xs text-foreground/60 tracking-wide uppercase font-semibold">
                Avg Response Time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
