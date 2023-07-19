import React, { useEffect } from "react";
import { PortfolioHero, Works } from "../containers";
import { Navbar, CTA, Footer } from "../components";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

const PortfolioPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio-Best Website Designers in Tamilnadu</title>
        <meta
          name="description"
          content="Quality SEO services, web development in Tamilnadu. Boost online presence with expert digital solutions. Contact us for free consultation!"
        />
        <link
          rel="canonical"
          href="https://mjaydigitalsolutions.com/portfolio"
        />
      </Helmet>
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
