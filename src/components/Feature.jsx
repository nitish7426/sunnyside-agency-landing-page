import React from "react";
import gd_mobile from "../assets/mobile/image-graphic-design.jpg";
import gd_desktop from "../assets/desktop/image-graphic-design.jpg";
import photography_mobile from "../assets/mobile/image-photography.jpg";
import transform_mobile from "../assets/mobile/image-transform.jpg";
import standout_mobile from "../assets/mobile/image-stand-out.jpg";
import photography_desktop from "../assets/desktop/image-photography.jpg";
import transform_desktop from "../assets/desktop/image-transform.jpg";
import standout_desktop from "../assets/desktop/image-stand-out.jpg";

const Feature = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:order-2">
          <img className="md:hidden" src={transform_mobile} alt="" />
          <img className="hidden md:block" src={transform_desktop} alt="" />
        </div>

        <div className="px-6 flex flex-col items-center justify-center py-12 space-y-6">
          <h2 className="text-4xl font-f text-neutral1 max-w-sm text-center md:text-start">
            Transform your brand
          </h2>
          <p className="text-neutral3 text-center md:text-start max-w-sm">
            We are full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a
            className="uppercase text-neutral1 font-f after:h-2 after:w-full after:rounded-full after:inset-x-0 after:top-3.5 after:-z-10 after:bg-primary2 after:absolute relative px-2 after:bg-primary2/30 hover:after:bg-primary2"
            href=""
          >
            learn more
          </a>
        </div>
      </div>

      {/* 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <img className="md:hidden" src={standout_mobile} alt="" />
          <img className="hidden md:block" src={standout_desktop} alt="" />
        </div>

        <div className="px-6 flex flex-col items-center justify-center py-12 space-y-6">
          <h2 className="text-4xl font-f text-neutral1 max-w-sm text-center md:text-start">
            Stand out to the right audience
          </h2>
          <p className="text-neutral3 text-center md:text-start max-w-sm">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <a
            className="uppercase text-neutral1 font-f after:h-2 after:w-full after:rounded-full after:inset-x-0 after:top-3.5 after:-z-10 after:bg-primary1 after:absolute relative px-2 after:bg-primary1/30 hover:after:bg-primary1"
            href=""
          >
            learn more
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        {/* graphic design */}
        <div className="relative">
          <div className="absolute inset-0 px-6 flex flex-col justify-end py-16 space-y-8 text-primary3 text-lg">
            <h2 className="text-4xl font-f text-center">Graphic Design</h2>
            <p className="text-center">
              Great design makes your memorable. We deliver artwork that
              underscores your brand message and captures potential client
              attention.
            </p>
          </div>
          <img className="md:hidden" src={gd_mobile} alt="" />
          <img className="hidden md:block" src={gd_desktop} alt="" />
        </div>
        {/* photography */}
        <div className="relative">
          <div className="absolute inset-0 px-6 flex flex-col justify-end py-16 space-y-8 text-primary4 text-lg">
            <h2 className="text-4xl font-f text-center">Photography</h2>
            <p className="text-center">
              Increase your creadibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
          <img className="md:hidden" src={photography_mobile} alt="" />
          <img className="hidden md:block" src={photography_desktop} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
