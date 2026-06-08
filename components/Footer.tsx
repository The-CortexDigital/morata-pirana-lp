import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-accent/25 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 overflow-hidden rounded-md">
              <Image
                src="/assets/logo-3in.png"
                alt="3IN Intermediações e Soluções Empresariais"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white leading-none">
                3IN
              </span>
              <span className="text-[8px] tracking-[0.1em] uppercase text-accent font-sans font-semibold mt-1">
                Intermediações &amp; Soluções
              </span>
            </div>
          </div>

          {/* Copyright & Co-branding */}
          <div className="text-center md:text-right text-sm text-gray-400">
            <p>
              &copy; 2026 3IN Intermediações e Soluções Empresariais.
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
