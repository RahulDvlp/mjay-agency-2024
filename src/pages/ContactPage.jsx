import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import { Navbar, Footer } from "../components";
import { Contact } from "../containers";

const ContactPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
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
