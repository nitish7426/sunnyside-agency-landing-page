import React, { useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["About", "Services", "Projects", "Contact"];
  return (
    <nav className="absolute flex items-center justify-between w-full px-4 md:px-6 lg:px-8 h-20 md:h-28 z-10">
      <a href="">
        <img className="h-6 md:h-8" src={logo} alt="" />
      </a>
      {/* desktop nav */}
      <div className="space-x-12 text-white hidden md:block">
        {navLinks.map((value, i) => (
          <a
            className={`${
              value == "Contact" &&
              "py-4 px-6 rounded-full bg-white text-neutral1 font-f uppercase hover:bg-white/30 hover:text-white"
            } transition-colors`}
            key={i}
            href=""
          >
            {value}
          </a>
        ))}
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <img src={hamburger} alt="" />
      </button>

      {/* hamburger */}
      {isOpen && (
        <div className="absolute bg-white m-6 inset-x-0 flex flex-col top-16 items-center text-lg py-8 space-y-6 text-neutral3">
          {navLinks.map((value, i) => (
            <a
              className={`${
                value == "Contact" &&
                "py-4 px-6 rounded-full bg-primary2 text-neutral1 font-f uppercase"
              } transition-colors`}
              key={i}
              href=""
            >
              {value}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
