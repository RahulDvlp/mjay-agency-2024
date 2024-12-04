import React, { useEffect } from "react";
import { Navbar, Footer, CTA, FAQ } from "../components";
import {
  Header,
  Mission,
  Services2,
  // Testimonials,
  Works,
  // Result,
  Packages,
} from "../containers";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";

const HomePage = () => {
  useEffect(() => {
    // ReactGA.pageview(window.location.pathname);
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Home Page",
    });
  });

  const items = [
    {
      title: "What is a website? ",
      content:
        "A website serves as a home for your social media and marketing efforts. It's a platform to showcase your brand, establish business credibility, raise brand awareness, and generate leads, making it an essential tool for your online success.",
    },
    {
      title: "Do I really need a website for my business?",
      content:
        "Having a website for your business is crucial, as it delivers powerful social proof, builds credibility, provides potential customers with further information about your goods and services, and increases your visibility, ultimately enhancing your online presence.",
    },
    {
      title: "What services do you provide?",
      content:
        "We provide a wide range of services, covering UI/UX design, website development, brand identity design, and SEO services. Our team of experts provides successful and results-driven solutions that improve your online presence and boost your business growth.",
    },
    {
      title: "What is the cost of your services? ",
      content:
        "We offer tailored solutions to meet your business needs. Our prices for the website may vary depending on the scope of the project. Our prices reflect the expertise, quality, and value we bring to every project. Our focus is delivering exceptional results for your business's success.",
    },
    {
      title: "Do you offer consultations or free assessments? ",
      content:
        "Yes, our free consultations offer the benefit of understanding your business, gaining valuable insights, and building a personal relationship.",
    },
    {
      title: "What is SEO, and why is it important? ",
      content:
        "SEO stands for Search Engine Optimization. It is the process of optimizing your website so that it ranks better in search engine results. SEO is crucial as it increases visibility, drives organic traffic, and helps potential customers find your website easily.",
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Lofty Design Studio: Best website design agency In Tamilnadu
        </title>
        <meta
          name="description"
          content="We are the Best Website Design Company in Salem, Tamilnadu With top-notch web design & development, UI UX design, and search engine optimization."
        />
        <link rel="canonical" href="https://loftydesignstudio.com/" />
      </Helmet>
      <Navbar />
      <Header />
      <Mission />
      <Services2 />
      <Works />
      {/* <Result /> */}
      {/* <Testimonials /> */}
      <Packages />
      <CTA
        ctaHeading="ready to scale your business to the digital world?"
        btnText="get started!"
        ctaBg="cta_yellow_bg"
        ctaPadding="5rem 0"
        CtabtnColor="#fff"
      />
      <FAQ items={items} />
      <Footer />
    </div>
  );
};

export default HomePage;
