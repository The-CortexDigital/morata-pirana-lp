import Image from "next/image";

export default function QuemSomos() {
  const metricas = [
    {
      value: "25+",
      label: "Anos de experiência",
    },
    {
      value: "2007",
      label: "Fundação da 3IN",
    },
    {
      value: "100%",
      label: "Atendimento personalizado",
    },
  ];

  return (
    <section id="quem-somos" className="bg-surface py-20 lg:py-28 text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-primary text-white rounded-2xl p-8 shadow-xl border border-white/10 overflow-hidden group">
              
              <div className="absolute -right-8 -bottom-8 text-9xl font-serif font-bold text-white/5 pointer-events-none select-none group-hover:scale-110 transition-transform duration-500">
                RO
              </div>

              <div className="relative z-10 flex flex-col items-center py-8 space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary-light/30 blur-md scale-110" aria-hidden="true" />
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1.5 bg-gradient-to-br from-primary-light via-primary-light/80 to-primary-light/40 shadow-lg">
                    <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-white/20">
                      <Image
                        src="/assets/reginado_02.png"
                        alt="Reginaldo Ortenzi, contador e consultor fundador da 3IN"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 192px, 224px"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Reginaldo Ortenzi
                  </h3>
                  <p className="text-xs text-surface uppercase tracking-widest font-semibold">
                    Contador &amp; Consultor
                  </p>
                </div>
              </div>

              <div className="relative z-10 border-t border-white/10 pt-4 text-center text-xs text-gray-400 font-sans">
                Reginaldo Ortenzi | CRC ativo &bull; Desde 2007
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <span className="inline-block bg-primary-light/10 border border-primary-light/30 text-primary-light px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
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
                Na <strong className="text-primary">3IN</strong>, cada caso é analisado com atenção individual. Não existe solução genérica, não existe resposta automática. Existe o tempo necessário para entender a situação real da sua empresa e apresentar o melhor caminho.
              </p>
              <p>
                Se você está com pendência fiscal, não precisa resolver sozinho &mdash; e não precisa ter vergonha de chegar com um problema. Faz parte da trajetória de qualquer empresa. O que importa é o que você faz a partir de agora.
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-primary-light/20 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {metricas.map((metrica, idx) => (
              <div key={idx} className="space-y-2">
                <div className="font-serif text-4xl sm:text-5xl font-bold text-primary-light">
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
