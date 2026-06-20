import { Search, ShieldCheck, Coins, CalendarCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const ENTREGAS = [
  {
    number: "01",
    Icon: Search,
    title: "Diagnóstico fiscal completo",
    text: "Análise completa da situação cadastral, fiscal e tributária da sua empresa. Você entende tudo: o que está bem e o que precisa de atenção.",
  },
  {
    number: "02",
    Icon: ShieldCheck,
    title: "Regularização de CNPJ e débitos",
    text: "Pendências na Receita Federal, inscrições estaduais e municipais, certidões bloqueadas: cuidamos de todo o processo de regularização.",
  },
  {
    number: "03",
    Icon: Coins,
    title: "Revisão e recuperação tributária",
    text: "Identificamos se sua empresa pagou impostos a mais nos últimos 5 anos e abrimos o processo de restituição quando encontramos algo.",
  },
  {
    number: "04",
    Icon: CalendarCheck,
    title: "Assessoria contábil mensal",
    text: "Depois de regularizar, garantimos que sua empresa nunca mais acumule pendências. Acompanhamento mensal com transparência total.",
  },
];

export default function Entregas() {
  return (
    <section id="entregas" className="bg-white py-20 lg:py-28 text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-4">
            Proposta de Valor
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            O que a 3IN entrega para você
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Regularização não é só resolver o problema de hoje. É garantir que amanhã sua empresa esteja protegida para crescer.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ENTREGAS.map((entrega, idx) => (
            <Reveal key={entrega.number} delay={idx * 100} className="h-full">
              <div className="group relative h-full bg-surface shadow-sm border border-gray-100 p-8 sm:p-10 rounded-2xl transition-all duration-300 overflow-hidden flex flex-col hover:shadow-xl hover:bg-white hover:border-accent/30">
                {/* Número decorativo (único) */}
                <span className="absolute top-5 right-7 font-serif text-6xl sm:text-7xl font-bold text-primary group-hover:text-accent transition-colors duration-300 select-none pointer-events-none">
                  {entrega.number}
                </span>

                {/* Barra azul no topo */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-t-2xl" />

                <div className="relative z-10 space-y-5 max-w-md">
                  <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center shadow-md shadow-accent/25 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300">
                    <entrega.Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {entrega.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {entrega.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
