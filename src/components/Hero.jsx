import React from "react";
import Navbar from "./Navbar";
import hero_mobile from "../assets/mobile/image-header.jpg";
import hero_desktop from "../assets/desktop/image-header.jpg";
import arrow from "../assets/icon-arrow-down.svg";

const Hero = () => {
  return (
    <section className="relative">
      <Navbar />
      <div className="absolute h-full inset-x-0 flex justify-center items-center flex-col space-y-16">
        <h1 className="text-5xl lg:text-5xl font-f text-white uppercase tracking-widest text-center leading-tight">
          we are creatives
        </h1>
        <img className="animate-bounce" src={arrow} alt="" />
      </div>
      <img className="md:hidden" src={hero_mobile} alt="" />
      <img className="hidden md:block" src={hero_desktop} alt="" />
    </section>
  );
};

export default Hero;
