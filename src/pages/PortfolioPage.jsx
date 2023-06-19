import React, { useEffect } from "react";
import { PortfolioHero, Works } from "../containers";
import { Navbar, CTA, Footer } from "../components";
import ReactGA from "react-ga";

const PortfolioPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <div>
      <Navbar />
      <PortfolioHero />
      <Works />
      <CTA
        ctaHeading="LIKE WHAT YOU SEE? LET’S MAKE ONE FOR YOU!"
        btnText="contact us"
        ctaBg="cta_white_bg"
        ctaPadding="0"
        CtabtnColor="var(--brand-yellow)"
      />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
