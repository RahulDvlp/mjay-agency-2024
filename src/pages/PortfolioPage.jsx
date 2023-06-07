import React from "react";
import { PortfolioHero, Works } from "../containers";
import { Navbar, CTA2, Footer } from "../components";

const PortfolioPage = () => {
  return (
    <div>
      <Navbar />
      <PortfolioHero />
      <Works />
      <CTA2 />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
