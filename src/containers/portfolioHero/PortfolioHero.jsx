import React, { useEffect, useState } from "react";
import "./portfolioHero.css";
import backgroundImage from "../../assets/portfolio-bg.png";
import AOS from "aos";

const PortfolioHero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 180 });
    const image = new Image();
    image.onload = () => setIsImageLoaded(true);
    image.src = backgroundImage;
    image.alt = "ui-ux-design-development-agency-salem";
  }, []);

  return (
    <div
      className="protfolioHero"
      style={{
        backgroundColor: isImageLoaded ? "" : "#fad22f",
        backgroundImage: isImageLoaded ? `url(${backgroundImage})` : "none",
        opacity: isImageLoaded ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      <h1 data-aos="fade-up">
        We turn your vision into beautiful website designs. explore a collection
        of incredible works <span style={{ color: "#fff" }}>.</span>
      </h1>
    </div>
  );
};

export default PortfolioHero;
