import React, { useState, useEffect } from "react";
import "./header.css";
import backgroundImage from "../../assets/header-bg.png";

const Header = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setIsImageLoaded(true);
    image.src = backgroundImage;
  }, []);

  return (
    <div
      className="header"
      style={{
        backgroundColor: isImageLoaded ? "" : "#fad22f",
        backgroundImage: isImageLoaded ? `url(${backgroundImage})` : "none",
        opacity: isImageLoaded ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      <div className="header__content">
        <h1>BREAK THROUGH LIMITATIONS!</h1>
        <h1>
          GROW YOUR BUSINESS <span>DIGITALLY</span>
        </h1>
        <p>
          We help B2B & B2C businesses thrive in the digital world through our
          expert website design and SEO services that generate leads, drive
          conversions and growth.
        </p>
        <a href="tel:+916374233813" target="_blank" rel="noreferrer">
          <button>
            <i className="fa-solid fa-phone-volume fa-shake fa-lg"></i>
            Free Consultation
          </button>
        </a>
        <div className="mouse-scroll"></div>
        <div className="arrow-scroll">
          <div className="arrow"></div>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
