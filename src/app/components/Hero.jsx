import React from "react";
import happy from "../../../public/assets/img/happy.webp";
import Image from "next/image";
import Photogrind from "./Photogrid";

const Hero = () => {
  return (
    <section id="home" className="bg-background">
      <div className="max-w-screen-xl mx-auto min-h-[90vh] p-5 my-auto flex items-center">
        <div className="flex justify-center items-center h-full gap-5 flex-wrap flex-col lg:flex-row">
          <div className="flex-1 space-y-5">
            <h1 className="text-5xl md:text-8xl bg-gradient-to-r font-medium from-accent via-primary to-secondary font-bebasNeue inline text-transparent bg-clip-text">
              YMe Recruiment
            </h1>
            <p className="text-text text-md md:text-xl max-w-prose font-medium leading-relaxed">
              Somos una agencia de reclutamiento y recursos humanos dedicada a
              la integración de talentos locales, potenciando su participación
              en las diferentes industrias de la macrozona norte. Nos aseguramos
              de que los talentos locales que integramos aporten un valor
              significativo a nuestros clientes, acompañándolos durante su
              onboarding para garantizar la satisfacción de todas las partes.
              Nuestra misión es crear conexiones sólidas y oportunidades
              laborales significativas para todos, en un entorno inclusivo,
              equitativo y verde. Únete a nosotros en este viaje hacia un futuro
              más inclusivo, equitativo y verde.
            </p>
          </div>
          <div className="flex flex-1 justify-center min-w-80 overflow-hidden">
            {/* <Image src={happy} alt="foto" className="rounded-md" /> */}
            <Photogrind />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
