import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-accent/25 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="relative w-32 h-32 md:w-36 md:h-36 -my-4 overflow-hidden">
            <Image
              src="/assets/logo-3in.png"
              alt="3IN Intermediações e Soluções Empresariais"
              fill
              className="object-contain"
            />
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
