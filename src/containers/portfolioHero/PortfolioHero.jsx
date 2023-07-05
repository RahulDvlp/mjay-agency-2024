import React, { useEffect, useState } from "react";
import "./portfolioHero.css";
import backgroundImage from "../../assets/portfolio-bg.png";

const PortfolioHero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setIsImageLoaded(true);
    image.src = backgroundImage;
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
      <h1>
        We don't just design websites. We forge online experiences that ignite
        brands and conquer search engine dominance.
      </h1>
    </div>
  );
};

export default PortfolioHero;
