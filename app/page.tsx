import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Dores from "@/components/sections/Dores";
import ComoFunciona from "@/components/sections/ComoFunciona";
import QuemSomos from "@/components/sections/QuemSomos";
import Entregas from "@/components/sections/Entregas";
import CtaFinal from "@/components/sections/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Global Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <Dores />
        <ComoFunciona />
        <QuemSomos />
        <Entregas />
        <CtaFinal />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
