import { MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { CONTACT } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Marca */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-52 h-52 -my-6">
              <Logo variant="branco" />
            </div>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-surface">
              Endereço
            </h3>
            <div className="mt-5 flex items-start gap-3 text-sm text-gray-300">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-white" />
              <address className="not-italic leading-relaxed space-y-1">
                <span className="block font-semibold text-white">
                  Edifício DOMO Business — Torre B
                </span>
                <span className="block">{CONTACT.address.street}</span>
                <span className="block">{CONTACT.address.floor}</span>
                <span className="block">{CONTACT.address.district}</span>
                <span className="block">CEP {CONTACT.address.cep}</span>
              </address>
            </div>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-surface">
              Atendimento
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="text-gray-300 leading-relaxed">
                Segunda a sexta
                <br />
                09h às 18h
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 shrink-0 text-white" />
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 shrink-0 fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.975 14.069 1.026 11.45 1.026 6.012 1.026 1.587 5.397 1.584 10.827c-.001 1.68.45 3.318 1.31 4.755l-.989 3.612 3.742-.981zm11.313-7.467c-.29-.145-1.71-.845-1.976-.94-.266-.096-.46-.145-.653.145-.193.291-.748.94-.917 1.159-.169.217-.338.242-.628.096-1.286-.642-2.122-1.12-2.955-2.548-.22-.377.22-.35.63-1.173.068-.13.033-.242-.017-.338-.05-.096-.46-1.11-.63-1.522-.165-.399-.349-.344-.48-.344h-.41c-.145 0-.38.054-.578.266-.198.212-.756.74-.756 1.802 0 1.062.773 2.087.88 2.229.109.142 1.521 2.322 3.685 3.251.515.221.917.353 1.23.454.517.164.988.141 1.36.08.414-.068 1.71-.699 1.952-1.375.242-.676.242-1.256.17-1.375-.072-.12-.266-.192-.556-.338z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="bg-[#234c74] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>
            &copy; 2026 3IN Intermediações e Soluções Empresariais. Todos os
            direitos reservados.
          </p>
          <p>
            BY{" "}
            <a
              href="https://thecortexdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface hover:text-white transition-colors duration-300"
            >
              Cortex Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
