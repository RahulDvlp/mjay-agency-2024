import React, { useEffect } from "react";
import { AboutHero, Values } from "../containers";
import { Navbar, CTA, Footer, FAQ } from "../components";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  const items = [
    {
      title: "What makes your agency different from others in the industry? ",
      content:
        "Our agency stands out for its creative approach, technical expertise, and a deep focus on client success. We prioritize your unique goals, delivering customized solutions that drive exceptional results and exceed expectations.",
    },
    {
      title: "Can you explain your agency's design and development process? ",
      content:
        "Our design and development process is a collaborative journey. We start with in-depth discussions to understand your vision and requirements. Then, our experts employ best practices, iterative design, and rigorous testing to deliver a website that exceeds your expectations.",
    },
    {
      title:
        "How do you ensure the security and confidentiality of client information?",
      content:
        "We prioritize the security and confidentiality of client information. We implement robust security measures, including data encryption, secure servers, and strict access controls, to safeguard your sensitive data at all times.",
    },
    {
      title: "Do you offer ongoing support after the website is launched? ",
      content:
        "Absolutely! We provide ongoing support to ensure your website continues to perform optimally. From regular maintenance, updates, and security enhancements to addressing any technical issues, we're here to support your online presence every step of the way.",
    },
    {
      title: "Can you assist with website hosting and domain registration? ",
      content:
        "Yes, we offer comprehensive assistance with website hosting and domain registration. We guide you through the process, ensuring seamless setup and optimal performance for your website.",
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <title>About-Best Website Designers in Tamilnadu</title>
        <meta
          name="description"
          content="Quality SEO services, web development in Tamilnadu. Boost online presence with expert digital solutions. Contact us for free consultation!"
        />
        <link rel="canonical" href="https://mjaydigitalsolutions.com/about" />
      </Helmet>
      <Navbar />
      <AboutHero />
      <Values />
      <FAQ items={items} />
      <CTA
        ctaHeading="READY TO WORK WITH US?"
        btnText="say hi"
        ctaBg="cta_white_bg"
        ctaPadding="0"
        CtabtnColor="var(--brand-yellow)"
      />
      <Footer />
    </div>
  );
};

export default AboutPage;
