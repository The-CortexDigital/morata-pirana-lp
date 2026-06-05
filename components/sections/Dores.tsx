import { AlertTriangle, Mail, Lock, UserX, TrendingUp, HelpCircle } from "lucide-react";

const cards = [
  {
    icon: AlertTriangle,
    title: "Certidão negativa bloqueada",
    text: "Você estava prestes a fechar um contrato importante — e descobriu que não consegue emitir a certidão. O negócio travou por causa de uma pendência que você nem sabia que existia.",
  },
  {
    icon: Mail,
    title: "Notificação da Receita Federal",
    text: "Uma carta chegou. Um número grande apareceu. Você não entende exatamente o que significa — mas sabe que não é bom. E não sabe por onde começar a resolver.",
  },
  {
    icon: Lock,
    title: "CNPJ com restrição",
    text: "Abrir conta bancária, solicitar crédito, participar de licitação — qualquer um desses movimentos revelou que o CNPJ tem um problema que precisa ser resolvido.",
  },
  {
    icon: UserX,
    title: "Contador que desapareceu",
    text: "Você ligou, mandou mensagem — e o contador não aparece. Não sabe se as obrigações estão em dia, se há declarações atrasadas, se existe alguma pendência acumulando.",
  },
  {
    icon: TrendingUp,
    title: "Dívida que cresce sem parar",
    text: "Uma guia não paga virou multa. A multa virou juros. Os juros viraram dívida ativa. Cada mês que passa, o valor aumenta — e a sensação é de que ficou grande demais para resolver.",
  },
  {
    icon: HelpCircle,
    title: "Não sabe o que está devendo",
    text: "Você sabe que tem algum problema, mas não sabe exatamente qual. A empresa funciona, o dinheiro entra — mas uma dúvida persiste: e se algo estiver errado há anos?",
  },
];

export default function Dores() {
  return (
    <section id="dores" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Você reconhece alguma dessas situações?
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            A maioria das empresas irregulares não chegou lá por má fé. Chegou por falta de orientação, um prazo esquecido ou um contador que sumiu na hora errada.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-accent transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-serif text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.text}
                  </p>
                </div>

                {/* Subtle gold line at the bottom on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
