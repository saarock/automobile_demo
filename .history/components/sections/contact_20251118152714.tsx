'use client';

import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Booking Request:%0AName: ${formData.name}%0APhone: ${formData.phone}%0ALocation: ${formData.location}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.location.href = `https://wa.me/61481374525?text=${whatsappMsg}`;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', location: '', service: '', message: '' });
      setSubmitted(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-700 px-5 py-2 rounded-full font-semibold mb-6 text-sm tracking-wide">
            ✨ Book Your Service
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Get Your Mobile Service
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 mt-2">Booked in Minutes</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Three easy ways to book your mobile car service across Canberra and ACT
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Emergency Card */}
          <div className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-red-300 hover:shadow-xl transition-all duration-300 animate-slide-up">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              🚨
            </div>
            <h3 className="text-slate-900 font-bold mb-2 text-lg">Emergency Breakdown</h3>
            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
              Stranded or broken down? Available 24/7 for emergency roadside assistance.
            </p>
            <a 
              href="tel:0481374525"
              className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all"
            >
              Call: 0481 374 525 →
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-green-300 hover:shadow-xl transition-all duration-300 animate-slide-up delay-100">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              💬
            </div>
            <h3 className="text-slate-900 font-bold mb-2 text-lg">WhatsApp Message</h3>
            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
              Instant messaging. Tell us your location and service needed for quick response.
            </p>
            <a 
              href="https://wa.me/61481374525?text=Hi%20Alfa%20Automotive,%20I%20would%20like%20to%20book%20a%20mobile%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 font-bold hover:gap-3 transition-all"
            >
              Message Us →
            </a>
          </div>

          {/* Email Card */}
          <div className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 animate-slide-up delay-200">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              📧
            </div>
            <h3 className="text-slate-900 font-bold mb-2 text-lg">Email Inquiry</h3>
            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
              Send details about your service needs for a detailed quote and availability.
            </p>
            <a 
              href="mailto:info@alfaautomotive.com.au"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
            >
              Email Us →
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-10 lg:p-14 shadow-2xl border border-slate-700">
            <div className="mb-2">
              <h3 className="font-black text-2xl lg:text-3xl mb-2">Book Your Service</h3>
              <p className="text-slate-300 text-sm">Fill in your details and we'll confirm availability within 30 minutes</p>
            </div>

            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mb-8"></div>
            
            <form onSubmit={handleBooking} className="space-y-5">
              {/* Name and Phone Row */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:bg-slate-700 outline-none transition-all group-hover:border-slate-500"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="0400 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:bg-slate-700 outline-none transition-all group-hover:border-slate-500"
                    required
                  />
                </div>
              </div>

              {/* Location */}
              <div className="group">
                <label className="block text-sm font-semibold text-slate-300 mb-2">📍 Your Location</label>
                <input
                  type="text"
                  placeholder="e.g., Gungahlin, Tuggeranong, Queanbeyan, Canberra CBD"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full px-5 py-3.5 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:bg-slate-700 outline-none transition-all group-hover:border-slate-500"
                  required
                />
                <p className="text-xs text-slate-400 mt-2">We serve all Canberra & ACT including Queanbeyan</p>
              </div>

              {/* Service Type */}
              <div className="group">
                <label className="block text-sm font-semibold text-slate-300 mb-2">🔧 Service Required</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-5 py-3.5 rounded-xl bg-slate-800 border border-slate-600 text-white focus:border-blue-500 focus:bg-slate-700 outline-none transition-all group-hover:border-slate-500 cursor-pointer"
                  required
                >
                  <option value="" className="bg-slate-800">Select your service...</option>
                  <option value="General Service" className="bg-slate-800">🔧 General Service</option>
                  <option value="Logbook Service" className="bg-slate-800">📋 Logbook Service</option>
                  <option value="Brake Service" className="bg-slate-800">🛑 Brake Service</option>
                  <option value="Battery Service" className="bg-slate-800">🔋 Battery Service</option>
                  <option value="Cooling System" className="bg-slate-800">❄️ Cooling System</option>
                  <option value="Pre-Purchase Inspection" className="bg-slate-800">✅ Pre-Purchase Inspection</option>
                  <option value="Emergency Repair" className="bg-slate-800">🚨 Emergency Repair</option>
                  <option value="Other" className="bg-slate-800">➕ Other Service</option>
                </select>
              </div>

              {/* Message */}
              <div className="group">
                <label className="block text-sm font-semibold text-slate-300 mb-2">Additional Details (Optional)</label>
                <textarea
                  placeholder="Tell us more about your vehicle or service needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-3.5 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:bg-slate-700 outline-none transition-all group-hover:border-slate-500 h-24 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  submitted 
                    ? 'bg-green-500 text-white cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-blue-600/50'
                }`}
              >
                {submitted ? '✓ Redirecting to WhatsApp...' : '📱 Send Booking via WhatsApp'}
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <p className="text-slate-300 text-sm text-center">
                <span className="font-semibold text-blue-400">⚡ Quick Response:</span> We'll contact you within 30 minutes to confirm availability and discuss your service needs!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
