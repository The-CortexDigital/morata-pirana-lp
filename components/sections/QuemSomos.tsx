import Image from "next/image";
import Reveal from "@/components/Reveal";

const METRICAS = [
  { value: "25+", label: "Anos de experiência" },
  { value: "2007", label: "Fundação da 3IN" },
  { value: "100%", label: "Atendimento personalizado" },
];

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="bg-surface py-20 lg:py-28 text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          {/* Portrait card */}
          <div className="lg:col-span-5">
            <Reveal className="h-full">
            <div className="relative h-full min-h-[480px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-primary/10 group">
              <Image
                src="/assets/reginaldo-bio.png"
                alt="Reginaldo Ortenzi, contador e consultor fundador da 3IN"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              {/* Bottom gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent pointer-events-none" />

              {/* Name block */}
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                <h3 className="font-serif text-3xl font-bold text-white tracking-tight">
                  Reginaldo Ortenzi
                </h3>
                <div className="h-1 w-12 bg-accent rounded-full my-3" />
                <p className="text-xs text-surface uppercase tracking-[0.2em] font-semibold">
                  Contador &amp; Consultor
                </p>
                <p className="mt-4 pt-4 border-t border-white/15 text-[11px] text-gray-300 tracking-wide">
                  Reginaldo Ortenzi &nbsp;|&nbsp; CRC 1SP 196.329/O-18
                </p>
              </div>
            </div>
            </Reveal>
          </div>

          {/* Text + metrics */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <Reveal delay={120} className="space-y-6">
              <div>
                <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-4">
                  Quem vai cuidar do seu caso
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                  Um contador que entende e que explica.
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Ao longo de 25 anos, aprendi que o maior obstáculo para o empresário não é a dívida em si. É não entender exatamente o que está acontecendo e não ter alguém de confiança para sentar junto e explicar.
                </p>
                <p>
                  Na <strong className="text-primary">3IN</strong>, cada caso é analisado com atenção individual. Não existe solução genérica, não existe resposta automática. Existe o tempo necessário para entender a situação real da sua empresa e apresentar o melhor caminho.
                </p>
                <p>
                  Se você está com pendência fiscal, não precisa resolver sozinho e não precisa ter vergonha de chegar com um problema. Faz parte da trajetória de qualquer empresa. O que importa é o que você faz a partir de agora.
                </p>
              </div>
            </Reveal>

            {/* Metrics strip */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {METRICAS.map((metrica, idx) => (
                <Reveal
                  key={metrica.label}
                  delay={200 + idx * 120}
                  className="rounded-xl bg-primary ring-1 ring-white/10 shadow-md px-3 py-6 text-center flex flex-col items-center justify-center"
                >
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-white leading-none">
                    {metrica.value}
                  </div>
                  <div className="mt-2 text-[11px] sm:text-xs font-semibold text-gray-200 uppercase tracking-wider leading-snug">
                    {metrica.label}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
