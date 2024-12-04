import React, { useEffect } from "react";
import { AboutHero, Values, OurTeam, WhyUs } from "../containers";
import { Navbar, CTA, Footer, FAQ } from "../components";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "About Page",
    });
  });

  const items = [
    {
      title:
        "What makes your design studio different from others in the industry?",
      content:
        "Our Studio differentiates itself with a creative approach, technical expertise, and a strong focus on our clients' success. We emphasize your unique goals and provide responsive design solutions as a leading website design studio. Our tailored approach guarantees outstanding outcomes that exceed your expectations.",
    },
    {
      title: "Can you explain your studio's design and development process?",
      content:
        "Our design and development process is a collaborative journey. We start with in-depth discussions to understand your vision and requirements and prioritize the user experience. Our experts use constant design processes and rigorous testing to ensure your website exceeds expectations.",
    },
    {
      title: "Do you offer ongoing support after the website is launched?",
      content:
        "Absolutely! We provide ongoing support to optimize your website's performance. From regular maintenance and updates to security enhancements and technical troubleshooting, our goal is to ensure your online presence remains strong.",
    },
    {
      title: "Can you assist with website hosting and domain registration?",
      content:
        "Yes, we offer complete assistance with website hosting and domain registration. We'll guide you through the process and make sure your website works smoothly and performs at its best.",
    },
    {
      title: "What industries do you typically work with?",
      content:
        "We primarily work with B2C businesses across various industries in India, offering our expertise in the best website design and development services as well as extensive SEO services.",
    },
    {
      title: "Are your services customizable to fit my specific needs?",
      content:
        "Yes, our services are fully customizable to meet your specific needs. We tailor our solutions to ensure they are interactive, responsive, and SEO-friendly, providing you with a personalized experience that aligns perfectly with your requirements.",
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <title>Lofty Design Studio: about us</title>
        <meta
          name="description"
          content="Welcome to Mjay Digital Solutions, Our enthusiastic team is dedicated to creating innovative digital solutions that are personalized to meet your specific needs. Check out our services, mission, and Portfolio here"
        />
        <link rel="canonical" href="https://loftydesignstudio.com/.com/about" />
      </Helmet>
      <Navbar />
      <AboutHero />
      <Values />
      <OurTeam />
      <WhyUs />
      <CTA
        ctaHeading="READY TO WORK WITH US?"
        btnText="say hi!"
        ctaBg="cta_white_bg"
        ctaPadding="0"
        CtabtnColor="var(--brand-yellow)"
      />
      <FAQ items={items} />
      <Footer />
    </div>
  );
};

export default AboutPage;
