import React from "react";
import cone_mobile from "../assets/mobile/image-gallery-cone.jpg";
import bottle_mobile from "../assets/mobile/image-gallery-milkbottles.jpg";
import orange_mobile from "../assets/mobile/image-gallery-orange.jpg";
import sugar_mobile from "../assets/mobile/image-gallery-sugarcubes.jpg";
import cone_desktop from "../assets/desktop/image-gallery-cone.jpg";
import bottle_desktop from "../assets/desktop/image-gallery-milkbottles.jpg";
import orange_desktop from "../assets/desktop/image-gallery-orange.jpg";
import sugar_desktop from "../assets/desktop/image-gallery-sugarcubes.jpg";

const ImageGrid = () => {
  const images = [
    {
      mobile: bottle_mobile,
      desktop: bottle_desktop,
    },
    {
      mobile: orange_mobile,
      desktop: orange_desktop,
    },
    {
      mobile: cone_mobile,
      desktop: cone_desktop,
    },
    {
      mobile: sugar_mobile,
      desktop: sugar_desktop,
    },
  ];
  return (
    <section className="grid grid-cols-2 md:grid-cols-4">
      {images.map((value, i) => (
        <div key={i}>
          <img className="md:hidden" src={value.mobile} alt="" />
          <img className="hidden md:block" src={value.desktop} alt="" />
        </div>
      ))}
    </section>
  );
};

export default ImageGrid;
