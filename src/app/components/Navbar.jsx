"use client"
import React from "react";
// import logo from "../assets/logos/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="" className="h-10 w-20" alt="Logo Yme" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Zona Vip
          </span> */}
        </a>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a
                href="#home"
                className="block py-2 px-3 text-text rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-secondary md:border-0 md:p-0 "
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="block py-2 px-3 text-text rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-secondary md:border-0 md:p-0 "
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#testimonios"
                className="block py-2 px-3 text-text rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-secondary md:border-0 md:p-0 "
              >
                Testimonios
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
