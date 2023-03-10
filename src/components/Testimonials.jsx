import React from "react";
import emily from "../assets/image-emily.jpg";
import thomas from "../assets/image-thomas.jpg";
import jennie from "../assets/image-jennie.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily R.",
      position: "Marketing Director",
      image: emily,
      testimonial:
        "We put out trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    },
    {
      name: "Thomas S,",
      position: "Chief Operataing Officer",
      image: thomas,
      testimonial:
        "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    },
    {
      name: "Jennie F.",
      position: "Business Owner",
      image: jennie,
      testimonial:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    },
  ];
  return (
    <section className="px-6 py-12 min-h-screen flex flex-col justify-center text-lg">
      <h2 className="font-f uppercase tracking-[0.2em] md:text-lg text-neutral4 text-center mb-8 md:mb-16">
        client testimonials
      </h2>
      <div className="grid md:grid-cols-3 gap-x-6 place-items-center">
        {testimonials.map((value, i) => (
          <div className="flex flex-col items-center py-6 max-w-sm">
            <img
              className="h-16 w-16 rounded-full mb-8 md:mb-12"
              src={value.image}
              alt=""
            />
            <p className="text-neutral2 mb-6 text-center md:mb-12">
              {value.testimonial}
            </p>
            {/* name */}
            <p className="font-f text-lg text-neutral1 mb:md-2">{value.name}</p>
            {/* position */}
            <p className="text-sm text-neutral4">{value.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
