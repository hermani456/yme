import React from "react";
import happy from "../../../public/assets/img/happy.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="bg-background">
      <div className="max-w-screen-xl mx-auto min-h-[90vh] p-5 my-auto flex items-center">
        <div className="flex justify-center items-center h-full gap-5 flex-wrap flex-col md:flex-row">
          <div className="flex-1 mx-auto">
            <h1 className="text-5xl md:text-8xl mb-4 bg-gradient-to-r from-accent via-primary to-secondary font-bebasNeue inline text-transparent bg-clip-text">
              YME Recruiment
            </h1>
            <p className="text-text text-lg md:text-xl">
              Somos una agencia de reclutamiento y recursos humanos enfocada en
              la integración de talentos diversos y comunidades indígenas en el
              sector minero. Nuestra misión es crear conexiones sólidas y
              oportunidades laborales significativas. Únete a nosotros en este
              viaje hacia un futuro más inclusivo y equitativo.
            </p>
          </div>
          <div className="flex flex-1 justify-center min-w-80">
            <Image src={happy} alt="foto" className="rounded-md"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
