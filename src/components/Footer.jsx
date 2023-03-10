import React from "react";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import logo from "../assets/logo2.svg";

const Footer = () => {
  const links = ["About", "Services", "Projects"];
  const socials = [facebook, instagram, twitter, pinterest];
  return (
    <footer className="grid place-items-center text-primary3 px-6 py-20 bg-primary5/60">
      <img className="h-8 mb-8 " src={logo} alt="" />

      <div className="space-x-12 text-lg mb-16">
        {links.map((value, i) => (
          <a
            className="hover:text-white ease-linear duration-150"
            key={i}
            href="#"
          >
            {value}
          </a>
        ))}
      </div>
      <div className="flex gap-6">
        {socials.map((value, i) => (
          <a className="hover:opa" key={i} href="#">
            <img src={value} alt="" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
