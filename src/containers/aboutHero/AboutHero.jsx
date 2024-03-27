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
      <h1 data-aos="fade-right">mjay digital solutions</h1>
      <p data-aos="fade-up">
        At Mjay Digital Solutions, we are dedicated to helping you succeed
        online. We're on a mission to let everyone access technology to grow
        their business. With our responsive web design, creative UI/UX design,
        and professional SEO services, we're here to make your digital dreams a
        reality. Let's work together to take your business to the top.
      </p>
    </div>
  );
};

export default AboutHero;
