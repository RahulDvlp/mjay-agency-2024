import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
import { Navbar, Footer } from "../components";
import { Contact } from "../containers";

const ContactPage = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Contact Page",
    });
  });
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <title>Contact Us-Best Website Designers in Tamilnadu</title>
        <meta
          name="description"
          content="Quality SEO services, web development in Tamilnadu. Boost online presence with expert digital solutions. Contact us for free consultation!"
        />
        <link rel="canonical" href="https://mjaydigitalsolutions.com/contact" />
      </Helmet>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
