'use client';

import { useState } from 'react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-border sticky top-0 z-50 luxury-shadow">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
              <img src="./logo.jpeg" alt="logo" width={300} height={300}/>
            </div>
            <div>
              <h1 className="text-foreground font-black text-lg tracking-tight">Alfa Automotive</h1>
              <p className="text-muted-foreground text-xs tracking-widest uppercase">Expert Mobile Mechanics</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-12">
            <button onClick={() => scrollToSection('services')} className="text-foreground/70 hover:text-primary transition-colors font-medium text-sm tracking-wide">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground/70 hover:text-primary transition-colors font-medium text-sm tracking-wide">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground/70 hover:text-primary transition-colors font-medium text-sm tracking-wide">
              Contact
            </button>
            <a 
              href="tel:0481374525" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-2.5 rounded-full font-semibold text-sm transition-all luxury-shadow hover:luxury-shadow-lg hover:scale-105"
            >
              Call Now
            </a>
          </nav>

          <div className="md:hidden">
            <a 
              href="tel:0481374525" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-lg font-semibold text-sm"
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
