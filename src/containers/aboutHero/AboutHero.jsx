import React, { useEffect } from "react";
import "./aboutHero.css";
import AOS from "aos";

const AboutHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 180 });
  }, []);
  return (
    <div className="about_hero">
      <h1 data-aos="fade-up">welcome to</h1>
      <h1 data-aos="fade-right">lofty design studio</h1>
      <p data-aos="fade-up">
        At Lofty Design Studio, we're committed to helping you thrive online.
        Our mission is to elevate your business with our UI/UX design, brand
        identity design, web development, and expert SEO services. Let’s turn
        your vision into reality and take your business to new heights together.
      </p>
    </div>
  );
};

export default AboutHero;
