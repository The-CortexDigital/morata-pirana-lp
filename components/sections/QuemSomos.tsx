export default function QuemSomos() {
  const metricas = [
    {
      value: "25+",
      label: "Anos de experiência",
    },
    {
      value: "2007",
      label: "Fundação da 3IN (parceira contábil)",
    },
    {
      value: "100%",
      label: "Atendimento personalizado e integrado",
    },
  ];

  return (
    <section id="quem-somos" className="bg-secondary py-20 lg:py-28 text-darkGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm bg-primary text-white rounded-2xl p-8 shadow-xl border border-accent/20 overflow-hidden group">
              
              {/* Watermark "RO" */}
              <div className="absolute -right-8 -bottom-8 text-9xl font-serif font-bold text-white/5 pointer-events-none select-none group-hover:scale-110 transition-transform duration-500">
                RO
              </div>

              {/* Stylized Avatar / Silhouette Representation */}
              <div className="relative z-10 flex flex-col items-center py-10 space-y-6">
                <div className="w-28 h-28 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center shadow-inner">
                  {/* Elegant professional silhouette icon */}
                  <svg
                    className="w-16 h-16 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                <div className="text-center space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Reginaldo Ortenzi
                  </h3>
                  <p className="text-xs text-accent uppercase tracking-widest font-semibold">
                    Contador &amp; Consultor
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 border-t border-white/10 pt-4 text-center text-xs text-gray-400 font-sans">
                Reginaldo Ortenzi | CRC ativo &bull; Desde 2007
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <span className="inline-block bg-accent/10 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
                Quem vai cuidar do seu caso
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                Um contador que entende &mdash; e que explica.
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Ao longo de 25 anos, aprendi que o maior obstáculo para o empresário não é a dívida em si. É não entender exatamente o que está acontecendo &mdash; e não ter alguém de confiança para sentar junto e explicar.
              </p>
              <p>
                Na <strong className="text-primary">3IN</strong>, nossa parceira contábil estratégica, cada caso é analisado com atenção individual em conjunto com o corpo jurídico da <strong className="text-primary">Morata &amp; Pirana Advogados</strong>. Não existe solução genérica, não existe resposta automática. Existe o tempo necessário para entender a situação real da sua empresa e apresentar o melhor caminho.
              </p>
              <p>
                Se você está com pendência fiscal, não precisa resolver sozinho &mdash; e não precisa ter vergonha de chegar com um problema. Faz parte da trajetória de qualquer empresa. O que importa é o que você faz a partir de agora.
              </p>
            </div>
          </div>

        </div>

        {/* Metrics Row */}
        <div className="border-t border-accent/20 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {metricas.map((metrica, idx) => (
              <div key={idx} className="space-y-2">
                <div className="font-serif text-4xl sm:text-5xl font-bold text-accent">
                  {metrica.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider max-w-xs mx-auto">
                  {metrica.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
