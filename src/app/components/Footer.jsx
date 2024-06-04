import footerLogo from "../../../public/assets/svg/footerLogo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background text-text min-h-[50vh] relative">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between gap-5">
          <div className="flex flex-col justify-center items-center gap-3 w-full sm:w-1/4 ">
            <div className="flex flex-col justify-center items-center">
              <Image src={footerLogo} alt="logo yme" width={90} height={90} />
              <h3 className="text-2xl text-center font-medium">YMe</h3>
              <p className="text-center font-medium">Recruitment</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl">Navegación</h3>
            <ul className="">
              <Link href="/#home">
                <li>Inicio</li>
              </Link>
              <Link href="/#about">
                <li>Nosotros</li>
              </Link>
              <Link href="/#expertise">
                <li>Expertise</li>
              </Link>
              <Link href="/#charlas">
                <li>Charlas</li>
              </Link>
              <Link href="/#contact">
                <li>Contacto</li>
              </Link>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-2xl">Servicios</h3>
            <ul className="">
              <a href="Corte1">
                <li>Corte1</li>
              </a>
              <a href="corte2">
                <li>corte2</li>
              </a>
              <a href="corte3">
                <li>corte3</li>
              </a>
            </ul>
          </div> */}
          <div>
            <h3 className="text-2xl">Contacto</h3>
            <ul className="">
              <li className="flex items-center gap-2">+5698765432</li>
              <li className="flex items-center gap-2">
                <a href="mailto:diego.campuzano@yme.cl">diego.campuzano@yme.cl</a>
              </li>
              <li className="flex items-center gap-2">Iquique</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full pb-4 text-center text-sm text-secondary bottom-0 absolute">
        <p>© 2024 Copyright: YMe Recruitment</p>
      </div>
    </footer>
  );
};

export default Footer;
