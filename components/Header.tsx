"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const NAV_ITEMS = [
  { label: "Início", id: "hero" },
  { label: "Situações", id: "dores" },
  { label: "Como funciona", id: "como-funciona" },
  { label: "Quem somos", id: "quem-somos" },
  { label: "Serviços", id: "entregas" },
  { label: "Contato", id: "cta-final" },
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 shadow-lg bg-primary border-b border-white/10"
          : "py-4 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            type="button"
            className="flex-shrink-0 flex items-center cursor-pointer select-none"
            onClick={() => scrollToSection("hero")}
            aria-label="Voltar ao início"
          >
            <div
              className={`relative transition-all duration-300 ${
                isScrolled
                  ? "w-16 h-16 sm:w-20 sm:h-20 -my-2"
                  : "w-20 h-20 sm:w-24 sm:h-24 -my-4 sm:-my-5"
              }`}
            >
              <Logo variant="branco" priority />
            </div>
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1 flex-1 justify-center"
            aria-label="Navegação principal"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={() => scrollToSection("diagnostico")}
              className="hidden sm:inline-flex border border-white text-white hover:bg-white hover:text-primary px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 tracking-wide"
            >
              Falar com especialista
            </button>

            <button
              type="button"
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="border-t border-white/10 bg-primary px-4 pb-4 pt-2"
          aria-label="Navegação mobile"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-3 py-3 text-sm text-gray-200 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-2 mt-1 border-t border-white/10">
              <button
                type="button"
                onClick={() => scrollToSection("diagnostico")}
                className="w-full border border-white text-white hover:bg-white hover:text-primary px-4 py-3 rounded-md text-sm font-semibold transition-all duration-300"
              >
                Falar com especialista
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
