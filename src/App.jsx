import React from "react";
import Footer from "./components/Footer";
import ImageGrid from "./components/ImageGrid";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import Feature from "./components/Feature";

const App = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Testimonials />
      <ImageGrid />
      <Footer />
    </div>
  );
};

export default App;
