import React, { useEffect, useState } from "react";
import "./blogHero.css";
import backgroundImage from "../../assets/portfolio-bg.png";
import AOS from "aos";

const BlogHero = (props) => {
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
      className="blogHero"
      style={{
        backgroundColor: isImageLoaded ? "" : "#fad22f",
        backgroundImage: isImageLoaded ? `url(${backgroundImage})` : "none",
        opacity: isImageLoaded ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      <h1 data-aos="fade-up">
        {props.BlogHero} <span style={{ color: "#fff" }}>.</span>
      </h1>
    </div>
  );
};

export default BlogHero;
