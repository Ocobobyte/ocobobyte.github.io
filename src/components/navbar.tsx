import React from "react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-20">
      <img
        className="w-max h-max"
        src="/ocobobyte.github.io/ocobobyte-logo.svg"
        alt=""
      />
      <ul className="flex gap-12">
        <li>
          <a className="text-green-500" href="#who-we-are">
            Quiénes Somos
          </a>
        </li>
        <li>
          <a className="text-green-500" href="#sponsors">
            Sponsors
          </a>
        </li>
        <li>
          <a className="text-green-500" href="#events">
            Eventos
          </a>
        </li>
        <li>
          <a className="text-green-500" href="#organizers">
            Organizadores
          </a>
        </li>
      </ul>
      <Button
        className="text-pink-100 bg-pink-500 rounded-full"
        onClick={() =>
          window.open("https://forms.gle/fJRKkGKc4D4awkpA8", "_blank")
        }
      >
        ser colaborador
      </Button>
      {/* <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </nav>
  );
};
