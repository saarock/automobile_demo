const areas = [
  "Gungahlin", "Tuggeranong", "Woden", "Belconnen", "City Centre",
  "Molonglo Valley", "Jerrabomberra", "Queanbeyan", "Hall", "Tharwa"
];

export function ServiceAreasSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary px-5 py-2 rounded-full font-semibold mb-6 text-sm tracking-wide">
            Canberra-Wide Coverage
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Service Areas Across
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">All Canberra & ACT</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            We proudly serve all Canberra suburbs plus Queanbeyan and surrounding ACT areas. Our mobile mechanics can reach you wherever you are.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-5 mb-12">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-5 text-center shadow-sm hover:luxury-shadow-lg transition-all duration-300 border border-border hover:border-primary/30 group animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-2xl mb-3 group-hover:scale-125 group-hover:animate-float transition-transform">📍</div>
              <div className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{area}</div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/10 luxury-shadow animate-fade-in">
          <p className="text-lg text-foreground/80 mb-6 font-medium">
            Don't see your area? Contact us! We service all of ACT, including emergency responses 24/7.
          </p>
          <a 
            href="https://wa.me/61481374525?text=Is%20my%20area%20covered%20for%20mobile%20service?"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold inline-block transition-all luxury-shadow-lg hover:scale-105"
          >
            Check Service Availability
          </a>
        </div>
      </div>
    </section>
  );
}
