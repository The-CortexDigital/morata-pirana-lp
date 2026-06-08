import Logo from "@/components/Logo";
import { CONTACT } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Logo */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="relative w-32 h-32 md:w-36 md:h-36 -my-4">
              <Logo variant="branco" />
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 text-center md:text-left text-sm space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-surface">
              Contato
            </h3>
            <address className="not-italic text-gray-300 leading-relaxed">
              {CONTACT.address.street}
              <br />
              {CONTACT.address.floor}
              <br />
              {CONTACT.address.building}
              <br />
              {CONTACT.address.district}
              <br />
              CEP {CONTACT.address.cep}
            </address>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-surface hover:text-white transition-colors duration-300"
            >
              WhatsApp: {CONTACT.whatsappDisplay}
            </a>
          </div>

          {/* Copyright */}
          <div className="md:col-span-4 text-center md:text-right text-sm text-gray-400">
            <p>
              &copy; 2026 3IN Intermediações e Soluções Empresariais.
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Todos os direitos reservados. &mdash; BY{" "}
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
      </div>
    </footer>
  );
}
