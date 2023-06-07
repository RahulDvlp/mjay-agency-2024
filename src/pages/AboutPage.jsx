import React from "react";
import { AboutHero, Values } from "../containers";
import { Navbar, FAQ, CTA2, Footer } from "../components";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <Values />
      <FAQ />
      <CTA2 />
      <Footer />
    </div>
  );
};

export default AboutPage;
