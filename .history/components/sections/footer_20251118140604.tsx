"use client";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-17 h-17 flex justify-center items-center">
                <img src="./logo.jpeg" alt="logo" width={200} height={200} />
              </div>
              <div>
                <h3 className="text-white font-black">Alfa Automotive</h3>
                <p className="text-white/60 text-xs tracking-widest uppercase rounded-2xl">
                  Expert Mechanics
                </p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed text-sm">
              Professional mobile mechanics bringing expert automotive services
              directly to your doorstep across Canberra and ACT.
            </p>
            <div className="flex gap-3">
              <div className="bg-primary/30 text-white px-4 py-2 rounded-lg text-xs font-bold border border-primary/50">
                Licensed
              </div>
              <div className="bg-accent/30 text-white px-4 py-2 rounded-lg text-xs font-bold border border-accent/50">
                Insured
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-6 text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <div className="space-y-3 text-white/70">
              <button
                onClick={() => scrollToSection("services")}
                className="block hover:text-white transition-colors font-medium text-sm hover:translate-x-1"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block hover:text-white transition-colors font-medium text-sm hover:translate-x-1"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block hover:text-white transition-colors font-medium text-sm hover:translate-x-1"
              >
                Contact
              </button>
              <a
                href="#"
                className="block hover:text-white transition-colors font-medium text-sm hover:translate-x-1"
              >
                Service Areas
              </a>
              <a
                href="#"
                className="block hover:text-white transition-colors font-medium text-sm hover:translate-x-1"
              >
                Emergency
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-6 text-sm tracking-wide uppercase">
              Our Services
            </h4>
            <div className="space-y-2 text-white/70 text-sm">
              <p className="hover:text-white transition-colors">
                General Maintenance
              </p>
              <p className="hover:text-white transition-colors">
                Brake Service
              </p>
              <p className="hover:text-white transition-colors">
                Battery & Electrical
              </p>
              <p className="hover:text-white transition-colors">
                Pre-Purchase Inspections
              </p>
              <p className="hover:text-white transition-colors">
                Emergency Breakdown
              </p>
              <p className="hover:text-white transition-colors">
                And Much More
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-6 text-sm tracking-wide uppercase">
              Contact & Emergency
            </h4>
            <div className="space-y-5">
              <div>
                <p className="text-white/60 text-xs mb-2 uppercase tracking-wide">
                  Phone Support
                </p>
                <a
                  href="tel:0481374525"
                  className="text-white hover:text-primary font-black text-lg"
                >
                  0481 374 525
                </a>
              </div>
              <div>
                <p className="text-white/60 text-xs mb-2 uppercase tracking-wide">
                  Email
                </p>
                <a
                  href="mailto:info@alfaautomotive.com.au"
                  className="text-white hover:text-primary font-medium text-sm break-all"
                >
                  info@alfaautomotive.com.au
                </a>
              </div>
              <div>
                <p className="text-white/60 text-xs mb-2 uppercase tracking-wide">
                  Service Area
                </p>
                <p className="text-white font-bold">All Canberra & ACT</p>
              </div>

              <a
                href="tel:0481374525"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-black inline-block w-full text-center transition-all luxury-shadow-lg hover:scale-105 mt-6"
              >
                🚨 Emergency
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/50 text-xs">
              © 2025 Alfa Automotive Mobile. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs text-white/50">
              <a
                href="#"
                className="hover:text-white transition-colors font-medium"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors font-medium"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors font-medium"
              >
                Warranty Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
