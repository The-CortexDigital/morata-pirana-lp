import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-darkGray antialiased">
        {children}
      </body>
    </html>
  );
}
