export default function Entregas() {
  const entregas = [
    {
      number: "01",
      title: "Diagnóstico fiscal completo",
      text: "Análise completa da situação cadastral, fiscal e tributária da sua empresa. Você entende tudo — o que está bem e o que precisa de atenção.",
    },
    {
      number: "02",
      title: "Regularização de CNPJ e débitos",
      text: "Pendências na Receita Federal, inscrições estaduais e municipais, certidões bloqueadas — cuidamos de todo o processo de regularização.",
    },
    {
      number: "03",
      title: "Revisão e recuperação tributária",
      text: "Identificamos se sua empresa pagou impostos a mais nos últimos 5 anos — e abrimos o processo de restituição quando encontramos algo.",
    },
    {
      number: "04",
      title: "Assessoria contábil mensal",
      text: "Depois de regularizar, garantimos que sua empresa nunca mais acumule pendências. Acompanhamento mensal com transparência total.",
    },
  ];

  return (
    <section id="entregas" className="bg-white py-20 lg:py-28 text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary-light/10 border border-primary-light/30 text-primary-light px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
            Proposta de Valor
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            O que a 3IN entrega para você
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Regularização não é só resolver o problema de hoje. É garantir que amanhã sua empresa esteja protegida para crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {entregas.map((entrega, idx) => (
            <div
              key={idx}
              className="group bg-surface p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white hover:border-primary-light/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-6 font-serif text-6xl sm:text-7xl font-bold text-primary-light/10 group-hover:text-primary-light/20 transition-colors duration-300 select-none">
                {entrega.number}
              </div>

              <div className="relative z-10 space-y-4 max-w-md">
                <span className="inline-block font-serif text-lg font-bold text-primary-light">
                  {entrega.number}.
                </span>
                
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary group-hover:text-primary-light transition-colors duration-300">
                  {entrega.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {entrega.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
