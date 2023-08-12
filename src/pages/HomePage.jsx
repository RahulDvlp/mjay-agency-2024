import React, { useEffect } from "react";
import { Navbar, Footer, CTA, FAQ } from "../components";
import {
  Header,
  Mission,
  Services,
  Testimonials,
  Works,
  Packages,
} from "../containers";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

const HomePage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  const items = [
    {
      title: "Do I really need a website for my business? ",
      content:
        "Yes, in today's digital era, a website is essential for your business. It establishes credibility, expands your reach, and enables potential customers to find and learn more about your products or services.",
    },
    {
      title: "What services do you provide? ",
      content:
        "We offer a comprehensive range of services including web design, web development, SEO, and branding. Our expert team ensures cohesive and results-driven solutions that elevate your online presence and drive business growth.",
    },
    {
      title: "What is the cost of your services?",
      content:
        "We offer tailored solutions to meet your business needs. Our pricing reflects the expertise, quality, and value we bring to each project. Rest assured, our focus is on delivering exceptional results that help your business succeed.",
    },
    {
      title: "What is Branding? ",
      content:
        "Branding encompasses the unique identity and perception of your business. It includes your logo, messaging, and overall visual representation. Effective branding creates a memorable impression and builds trust with your target audience.",
    },
    {
      title: "What is SEO and why is it important? ",
      content:
        "SEO stands for Search Engine Optimization. It's the process of optimizing your website to rank higher in search engine results. SEO is crucial as it increases visibility, drives organic traffic, and helps potential customers find your website easily.",
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Mjay Digital Solutions-Best Website Designers in Tamilnadu
        </title>
        <meta
          name="description"
          content="Quality SEO services, web development in Tamilnadu. Boost online presence with expert digital solutions. Contact us for free consultation!"
        />
        <link rel="canonical" href="https://mjaydigitalsolutions.com/" />
      </Helmet>
      <Navbar />
      <Header />
      <Mission />
      <Services />
      <Works />
      {/* <Testimonials /> */}
      <Packages />
      <CTA
        ctaHeading="Don't know where to start? Let us help!"
        btnText="let's connect!"
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
