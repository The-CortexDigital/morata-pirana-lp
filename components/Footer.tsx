import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-accent/25 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 overflow-hidden rounded-md border border-accent/20">
              <Image
                src="/assets/logo-morata-pirana.png"
                alt="Morata &amp; Pirana Advogados"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white leading-none">
                Morata &amp; Pirana
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-accent font-sans font-semibold mt-1">
                Advogados
              </span>
            </div>
          </div>

          {/* Copyright & Co-branding */}
          <div className="text-center md:text-right text-sm text-gray-400">
            <p>
              &copy; 2026 Morata &amp; Pirana Advogados em parceria com 3IN Contabilidade.
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
