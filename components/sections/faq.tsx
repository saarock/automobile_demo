'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What areas do you service?",
    answer: "We service all Canberra suburbs including Gungahlin, Tuggeranong, Woden, Belconnen, City Centre, Molonglo Valley, and surrounding ACT areas."
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes! We offer same-day service for most repairs and maintenance. Emergency breakdown service is available till late hours for emergency services with typical response times under 30 minutes."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. We are fully licensed automotive technicians with comprehensive public liability insurance."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major credit cards, EFTPOS, and bank transfer. Payment is due upon completion of service."
  },
  {
    question: "Do you use genuine parts?",
    answer: "We use genuine manufacturer parts where possible, or premium quality aftermarket parts that meet or exceed OEM specifications. All parts come with warranty."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white hover:bg-muted/50 px-8 py-6 flex items-center justify-between transition-all text-left group"
      >
        <h3 className="font-black text-foreground group-hover:text-primary transition-colors">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="bg-muted/30 px-8 py-6 border-t border-border">
          <p className="text-foreground/70 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary px-5 py-2 rounded-full font-semibold mb-6 text-sm tracking-wide">
            Questions & Answers
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">Questions</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our mobile automotive services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-6">Still have questions? We're here to help.</p>
          <a
            href="tel:0481374525"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all luxury-shadow-lg hover:scale-105"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
