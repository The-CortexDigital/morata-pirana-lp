import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "3IN Intermediações e Soluções Empresariais | Regularização Empresarial",
  description: "Sua empresa tem pendência fiscal? A 3IN resolve. Diagnóstico gratuito em até 24h para regularização de CNPJ, débitos na Receita Federal e certidões bloqueadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans bg-white text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
