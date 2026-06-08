"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

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
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 -my-6 sm:-my-8 transition-all duration-300">
            <Logo variant="branco" priority />
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
