import React, { useEffect } from "react";
import { Navbar, Footer, CTA, FAQ } from "../components";
import { Header, Mission, Services, Testimonials } from "../containers";
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
      <Navbar />
      <Header />
      <Mission />
      <Services />
      <Testimonials />
      <FAQ items={items} />
      <CTA
        ctaHeading="Let's Collaborate and Bring Your Project to Life."
        btnText="let's connect"
        ctaBg="cta_yellow_bg"
        ctaPadding="5rem 0"
        CtabtnColor="#fff"
      />
      <Footer />
    </div>
  );
};

export default HomePage;
