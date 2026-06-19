"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/brand";

export default function Hero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [situation, setSituation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setPhone(value);
  };

  const buildWhatsappUrl = () => {
    const formattedMsg = `Olá! Gostaria de solicitar um diagnóstico gratuito.\n\n*Nome:* ${name}\n*WhatsApp:* ${phone}\n*Situação:* ${situation}`;
    return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(formattedMsg)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !situation) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      window.open(buildWhatsappUrl(), "_blank");
    }, 1500);
  };

  return (
    <section id="hero" className="relative bg-primary text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/assets/hero-img.png')" }}
      ></div>
      {/* Base tint so the brand color stays present over the photo */}
      <div className="absolute inset-0 bg-primary/60 pointer-events-none"></div>
      {/* Darker on the left (where the text lives) fading toward the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary/20 pointer-events-none"></div>
      {/* Extra darkening at the very top for menu legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-transparent pointer-events-none"></div>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-light blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-light blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-4">
                Regularização Empresarial
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Sua empresa tem pendência fiscal? <br />
                <span className="text-surface">A gente resolve.</span>
              </h1>
            </div>
            
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              CNPJ restrito, débito na Receita Federal, certidão bloqueada: esses problemas têm solução. E quanto antes você olha para eles, menor o custo de resolver. Há 18 anos ajudamos empresas a sair dessa situação com clareza e sem surpresas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-surface" />
                </div>
                <span className="text-sm font-medium text-gray-200">Desde 2007</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-surface" />
                </div>
                <span className="text-sm font-medium text-gray-200">+25 anos de exp.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-surface" />
                </div>
                <span className="text-sm font-medium text-gray-200">Atendimento personalizado</span>
              </div>
            </div>
          </div>

          <div id="diagnostico" className="lg:col-span-5">
            <div className="bg-white/90 backdrop-blur-md text-charcoal rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/40 relative">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-center pb-2 border-b border-gray-100">
                    <h2 className="font-serif text-2xl font-bold text-primary">
                      Diagnóstico gratuito
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">
                      Entenda em 24h a situação real da sua empresa
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-charcoal uppercase tracking-wider">
                      Seu nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: João Silva"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-charcoal uppercase tracking-wider">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="situation" className="text-xs font-semibold text-charcoal uppercase tracking-wider">
                      Qual é a sua situação?
                    </label>
                    <select
                      id="situation"
                      required
                      value={situation}
                      onChange={(e) => setSituation(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm bg-white"
                    >
                      <option value="">Selecione...</option>
                      <option value="CNPJ com pendência / irregular">CNPJ com pendência / irregular</option>
                      <option value="Débito na Receita Federal">Débito na Receita Federal</option>
                      <option value="Certidão negativa bloqueada">Certidão negativa bloqueada</option>
                      <option value="Empresa sem contador">Empresa sem contador</option>
                      <option value="Outro / Não sei ao certo">Outro / Não sei ao certo</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-primary text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent/20 group text-sm"
                  >
                    Quero meu diagnóstico gratuito
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-[11px] text-gray-400">
                    Sem compromisso. Retorno em até 24 horas úteis.
                  </p>
                </form>
              ) : (
                <div className="py-12 px-4 text-center space-y-4 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-whatsapp/10 rounded-full flex items-center justify-center mb-2">
                    <svg
                      className="w-8 h-8 text-whatsapp animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary">
                    Solicitação Enviada!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-xs">
                    Obrigado, <strong className="text-primary">{name}</strong>. Estamos preparando seu diagnóstico.
                  </p>
                  <p className="text-xs text-gray-400">
                    Redirecionando para o WhatsApp em instantes...
                  </p>
                  <button
                    onClick={() => window.open(buildWhatsappUrl(), "_blank")}
                    className="mt-4 bg-whatsapp hover:bg-whatsapp/90 text-white font-bold py-2.5 px-6 rounded-lg transition-all text-xs flex items-center gap-2"
                  >
                    Ir para o WhatsApp agora
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
