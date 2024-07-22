import { useState } from "react";
import "./Header.css";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-white pt-2 flex justify-between items-center">
      <img src="/logo.png" alt="Logo" />
      <nav>
        <section className="flex lg:hidden">
          <button
            className="HAMBURGER-ICON space-y-2 cursor-pointer transition-all"
            aria-label="Toggle navigation"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-1 w-12 rounded-sm animate-pulse bg-black"></span>
            <span className="block h-1 w-12 rounded-sm animate-pulse bg-black"></span>
            <span className="block h-1 w-12 rounded-sm animate-pulse bg-black"></span>
          </button>

          <div className={isNavOpen ? "menuBackground menuBackgroundVisible" : "menuBackground"} onClick={() => setIsNavOpen(false)}></div>

          <div className={isNavOpen ? "menuSlide menuSlideOpen" : "menuSlide"}>
            <button
              className="absolute top-4 right-4 z-50 cursor-pointer"
              aria-label="Close navigation"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="p-12 bg-white w-full h-full text-center flex flex-col justify-center gap-14 shadow-2xl">
              <li>
                <a className="text-red-600 hover:bg-red-100 hover:p-5 hover:px-14 hover:rounded hover:font-bold" href="#inicio">Inicio</a>
              </li>
              <li>
                <a className="text-red-600  hover:bg-red-100 hover:p-5 hover:px-5 hover:rounded p-5 hover:font-bold" href="#quienes-somos">¿Quienes Somos?</a>
              </li>
              <li>
                <a className="text-red-600  hover:bg-red-100 p-5 hover:p-5 hover:px-14 hover:rounded hover:font-bold" href="#testimonios">Testimonios</a>
              </li>
              <li>
                <a className="text-red-600  hover:bg-red-100 p-5 hover:p-5 hover:px-14 hover:rounded hover:font-bold" href="#contactanos">Nueva Ley</a>
              </li>
              <li>
                <a className="bg-neutral-800 rounded-md font-semibold text-white px-4 p-4 hover:bg-red-300" href="#haz-una-cita">Haz una cita</a>
              </li>
            </ul>
          </div>
        </section>
        <ul className="hidden space-x-8 lg:flex">
          <li>
            <a className="text-red-600" href="#inicio">Inicio</a>
          </li>
          <li>
            <a className="text-red-600" href="#quienes-somos">¿Quienes Somos?</a>
          </li>
          <li>
            <a className="text-red-600" href="#testimonios">Testimonios</a>
          </li>
          <li>
            <a className="text-red-600" href="#contactanos">Nueva Ley</a>
          </li>
          <li>
            <a className="bg-neutral-800 rounded-md font-semibold text-white px-4 p-4" href="#haz-una-cita">Haz una cita</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};