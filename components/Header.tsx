"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md py-4 shadow-lg border-b border-accent/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer select-none" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 overflow-hidden rounded-md border border-accent/20">
              <Image
                src="/assets/logo-morata-pirana.png"
                alt="Morata &amp; Pirana Advogados"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white leading-none">
                Morata &amp; Pirana
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-accent font-sans font-semibold mt-1">
                Advogados
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={() => scrollToSection("diagnostico")}
            className="border border-accent text-accent hover:bg-accent hover:text-primary px-5 py-2 rounded-md text-sm font-semibold transition-all duration-300 tracking-wide"
          >
            Falar com especialista
          </button>
        </div>
      </div>
    </header>
  );
}
