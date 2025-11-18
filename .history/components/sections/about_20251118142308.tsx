export function AboutSection() {
  return (
    <section id="about" className="py-32 lg:py-40 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary px-5 py-2 rounded-full font-semibold text-sm tracking-wide">
                Why Alfa Automotive
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
                Professional Mobile Mechanics
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-3">You Can Trust</span>
              </h2>
              
              <p className="text-lg text-foreground/60 leading-relaxed">
                Alfa Automotive revolutionizes car maintenance by bringing professional automotive services directly to you. Our certified mechanics use fully equipped mobile workshops.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-xl p-6 text-center border border-primary/20 hover:border-primary/40 transition-all">
                <div className="text-3xl font-black text-primary mb-2">100%</div>
                <div className="text-xs text-foreground/70 font-semibold uppercase tracking-wide">Mobile Service</div>
              </div>
              <div className="bg-accent/10 rounded-xl p-6 text-center border border-accent/20 hover:border-accent/40 transition-all">
                <div className="text-3xl font-black text-accent mb-2">ACT</div>
                <div className="text-xs text-foreground/70 font-semibold uppercase tracking-wide">Licensed</div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              {[
                "Licensed & Insured Mechanics",
                "Fully Equipped Mobile Workshops",
                "Same-Day Service Available",
                // "24/7 Emergency Breakdown Support",
                "Transparent Pricing & Digital Reports"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-foreground font-medium group">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <span className="text-xs text-primary font-black">✓</span>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden luxury-shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1615746363486-92cd8c5e0a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBkaWFnbm9zaXMlMjB0b29sc3xlbnwxfHx8fDE3NTk4NDA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional automotive service"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 luxury-shadow-lg border border-border">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-3 shadow-md">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <div className="font-black text-foreground">ACT Licensed</div>
                  <div className="text-xs text-foreground/60 font-medium">Certified Technicians</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
