export default function ComoFunciona() {
  const passos = [
    {
      number: "01",
      title: "Diagnóstico completo",
      text: "Analisamos a situação real da sua empresa — sem julgamento, sem susto. Você entende exatamente o que existe, o que precisa ser feito e qual a urgência de cada ponto.",
    },
    {
      number: "02",
      title: "Plano de regularização",
      text: "Apresentamos o caminho mais eficiente para resolver — por ordem de prioridade, com custo claro e sem passos desnecessários.",
    },
    {
      number: "03",
      title: "Execução com acompanhamento",
      text: "Cuidamos de todo o processo, do protocolo ao encerramento. Você é informado em cada etapa, em linguagem clara.",
    },
    {
      number: "04",
      title: "Empresa regularizada e protegida",
      text: "Quando terminamos, sua empresa está em conformidade — e pronta para crescer sem carregar o peso de pendências antigas.",
    },
  ];

  return (
    <section id="como-funciona" className="bg-primary text-white py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-sm">
              <span className="absolute -top-6 -left-2 text-7xl font-serif text-surface opacity-50 select-none">
                &ldquo;
              </span>
              
              <blockquote className="relative z-10">
                <p className="font-serif text-xl sm:text-2xl italic leading-relaxed text-gray-100">
                  Em 25 anos, nunca vi uma situação irregular sem solução. O que muda é o custo de resolver — e esse custo cresce a cada mês que passa.
                </p>
                
                <footer className="mt-8 pt-6 border-t border-white/10 flex flex-col">
                  <strong className="text-lg text-surface font-sans">
                    Reginaldo Ortenzi
                  </strong>
                  <span className="text-xs text-gray-400 mt-1">
                    Contador &mdash; Fundador da 3IN
                  </span>
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div>
              <span className="inline-block bg-white/10 border border-white/20 text-surface px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
                Como Funciona
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Metodologia clara e sem surpresas
              </h2>
            </div>

            <div className="relative border-l border-white/20 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-12 py-2">
              {passos.map((passo, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[43px] sm:-left-[49px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary border-2 border-surface flex items-center justify-center text-surface font-bold text-sm sm:text-base group-hover:bg-surface group-hover:text-primary transition-all duration-300 shadow-md">
                    {passo.number}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-surface transition-colors duration-300">
                      {passo.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                      {passo.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
