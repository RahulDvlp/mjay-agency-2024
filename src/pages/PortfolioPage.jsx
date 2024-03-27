import React, { useEffect } from "react";
import { PortfolioHero, Portfolio, Process } from "../containers";
import { Navbar, CTA, Footer } from "../components";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";

const PortfolioPage = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Portfolio Page",
    });
  });
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mjay Digital Solutions: Our Works</title>
        <meta
          name="description"
          content="Mjay Digital Solutions is a leading web design and development company in Salem, Tamilnadu. We are happy to showcase our best recent work."
        />
        <link
          rel="canonical"
          href="https://mjaydigitalsolutions.com/portfolio"
        />
      </Helmet>
      <Navbar />
      <PortfolioHero />
      <Portfolio />
      <Process />
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
