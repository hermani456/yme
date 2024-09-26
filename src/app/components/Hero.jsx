import React from "react";
import happy from "../../../public/assets/img/happy.webp";
import Image from "next/image";
import Photogrind from "./Photogrid";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="bg-background">
      <div className="max-w-screen-xl mx-auto min-h-[90vh] p-5 my-auto flex items-center">
        <div className="flex justify-center items-center h-full gap-5 flex-wrap flex-col lg:flex-row">
          <div className="flex-1 space-y-5">
            <h1 className="text-5xl md:text-8xl font-medium bg-gradient-to-r from-accent via-primary to-secondary font-bebasNeue inline text-transparent bg-clip-text">
              YMe Recruiment
            </h1>
            <p className="text-text text-md max-w-prose font-medium leading-relaxed">
              Conectamos talentos locales con oportunidades significativas en la
              macrozona norte. Impulsamos un futuro inclusivo, equitativo y
              sostenible. Únete a nosotros.
            </p>
            <div>
              <Link href="#contact" className="mt-5">
                <button className="text-white bg-accent px-3 py-2 rounded-md hover:bg-secondary transition-colors font-semibold text-sm lg:text-md">
                  Envíanos tu CV
                </button>
              </Link>
            </div>
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
