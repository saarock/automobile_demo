'use client';

import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Booking Request:%0AName: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.location.href = `https://wa.me/9809820098?text=${whatsappMsg}`;
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary px-5 py-2 rounded-full font-semibold mb-6 text-sm tracking-wide">
            Book Your Service
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Quick & Easy Booking
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">In 2 Minutes</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Call, message us on WhatsApp, or fill the form below to book your mobile service
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Emergency Card */}
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-3xl p-8 hover:border-accent/40 transition-all animate-slide-up">
            <h3 className="text-accent font-black mb-3 text-xl">🚨 Emergency</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
              Car won't start or broken down? Call for 24/7 emergency roadside assistance.
            </p>
            <a 
              href="tel:0481374525"
              className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-bold w-full text-center block transition-all hover:scale-105"
            >
              Call Now
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-gradient-to-br from-green-50 to-green-5 border border-green-200 rounded-3xl p-8 hover:border-green-300 transition-all animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-green-700 font-black mb-3 text-xl">💬 WhatsApp</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
              Prefer messaging? Chat with us on WhatsApp for instant responses.
            </p>
            <a 
              href="https://wa.me/61481374525?text=Hi%20Alfa%20Automotive,%20I%20would%20like%20to%20book%20a%20mobile%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold w-full text-center block transition-all hover:scale-105"
            >
              Message Us
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/5 border border-primary/20 rounded-3xl p-8 hover:border-primary/40 transition-all animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-primary font-black mb-3 text-xl">📧 Email</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
              Send us an email for quotes and general inquiries.
            </p>
            <a 
              href="mailto:info@alfaautomotive.com.au"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold w-full text-center block transition-all hover:scale-105"
            >
              Email Us
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary/95 text-white rounded-3xl p-12 luxury-shadow-lg">
          <h3 className="font-black mb-8 text-2xl">Book Your Mobile Service</h3>
          
          <form onSubmit={handleBooking} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-5 py-3 rounded-xl bg-white/90 text-foreground placeholder:text-foreground/50 focus:bg-white outline-none transition-all"
                required
              />
              <input
                type="tel"
                placeholder="Your Mobile Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-5 py-3 rounded-xl bg-white/90 text-foreground placeholder:text-foreground/50 focus:bg-white outline-none transition-all"
                required
              />
            </div>

            <select
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              className="w-full px-5 py-3 rounded-xl bg-white/90 text-foreground focus:bg-white outline-none transition-all"
              required
            >
              <option value="">Select a Service</option>
              <option value="General Service">General Service</option>
              <option value="Logbook Service">Logbook Service</option>
              <option value="Brake Service">Brake Service</option>
              <option value="Battery Service">Battery Service</option>
              <option value="Cooling System">Cooling System</option>
              <option value="Pre-Purchase Inspection">Pre-Purchase Inspection</option>
              <option value="Other">Other Service</option>
            </select>

            <textarea
              placeholder="Additional details (optional)"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-5 py-3 rounded-xl bg-white/90 text-foreground placeholder:text-foreground/50 focus:bg-white outline-none transition-all h-24 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-black transition-all hover:scale-105 block"
            >
              Send Booking Request via WhatsApp
            </button>
          </form>

          <p className="text-white/80 text-center font-medium text-sm mt-6">
            Your booking request will be sent to our WhatsApp. We'll confirm within 30 minutes!
          </p>
        </div>
      </div>
    </section>
  );
}
