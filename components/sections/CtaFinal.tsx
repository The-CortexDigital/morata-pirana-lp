import { Phone } from "lucide-react";

export default function CtaFinal() {
  const whatsappNumber = "5511999999999";
  const phoneNumber = "+5511999999999";
  const defaultMsg = "Olá! Vi a landing page de regularização empresarial e gostaria de falar com um especialista.";
  const encodedMsg = encodeURIComponent(defaultMsg);

  return (
    <section id="cta-final" className="relative bg-primary text-white py-20 lg:py-28 overflow-hidden text-center">
      {/* Concentric circular graphics in background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <div className="w-[1000px] h-[1000px] rounded-full border border-accent/30 animate-pulse"></div>
        <div className="absolute w-[800px] h-[800px] rounded-full border border-accent/20"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full border border-accent/10"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full border border-accent/5"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Badge */}
        <div>
          <span className="inline-block bg-accent/10 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
            Primeiro Passo
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Comece com uma conversa. <br />
          <span className="text-accent">Sem compromisso.</span>
        </h2>

        {/* Subheadline */}
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Oferecemos um diagnóstico inicial gratuito. Você entende a situação real da sua empresa e o que precisa ser feito &mdash; sem pressão, sem surpresa.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodedMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-whatsapp/20 group text-sm sm:text-base"
          >
            {/* Custom WhatsApp SVG Icon */}
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.975 14.069 1.026 11.45 1.026 6.012 1.026 1.587 5.397 1.584 10.827c-.001 1.68.45 3.318 1.31 4.755l-.989 3.612 3.742-.981zm11.313-7.467c-.29-.145-1.71-.845-1.976-.94-.266-.096-.46-.145-.653.145-.193.291-.748.94-.917 1.159-.169.217-.338.242-.628.096-1.286-.642-2.122-1.12-2.955-2.548-.22-.377.22-.35.63-1.173.068-.13.033-.242-.017-.338-.05-.096-.46-1.11-.63-1.522-.165-.399-.349-.344-.48-.344h-.41c-.145 0-.38.054-.578.266-.198.212-.756.74-.756 1.802 0 1.062.773 2.087.88 2.229.109.142 1.521 2.322 3.685 3.251.515.221.917.353 1.23.454.517.164.988.141 1.36.08.414-.068 1.71-.699 1.952-1.375.242-.676.242-1.256.17-1.375-.072-.12-.266-.192-.556-.338z" />
            </svg>
            Falar pelo WhatsApp
          </a>

          {/* Phone Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="w-full sm:w-auto border border-white hover:border-accent hover:text-accent font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base"
          >
            <Phone className="w-5 h-5" />
            Ligar agora
          </a>
        </div>

        {/* Supporting Text */}
        <p className="text-gray-400 text-xs sm:text-sm pt-6 border-t border-white/10 max-w-xl mx-auto">
          São Bernardo do Campo - SP - Edifício DOMO Business, Torre B, 11º andar
        </p>
      </div>
    </section>
  );
}
