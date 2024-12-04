import React, { useState, useEffect } from "react";
import "./header.css";
import backgroundImage from "../../assets/header-bg.png";
import AOS from "aos";
import { motion } from "framer-motion";
import TagManager from "react-gtm-module"; // Import TagManager

const Header = () => {
  const [headerParagraph, setHeaderParagraph] = useState("");

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 180 });

    const image = new Image();
    image.onload = () => setIsImageLoaded(true);
    image.src = backgroundImage;
    image.alt = "best-website-design-company";
    fetchHeaderParagraph();
  }, []);

  const fetchHeaderParagraph = async () => {
    try {
      const response = await fetch(
        "http://localhost:1337/api/landing-page-contents"
      );
      const data = await response.json();
      console.log("Response:", data); // Log response data for debugging

      if (
        data &&
        data.data[0] &&
        data.data[0].attributes &&
        data.data[0].attributes.headerParagraph
      ) {
        const newHeaderParagraph = data.data[0].attributes.headerParagraph;
        console.log("New Header Paragraph:", newHeaderParagraph); // Log updated headerParagraph state
        setHeaderParagraph(newHeaderParagraph);
      }
    } catch (err) {
      console.log(
        "Error in fetching headerParagraph from strapi. err--> ",
        err
      );
    }
  };

  const handleConsultationClick = () => {
    // Track the click event when the "Free Consultation" button is clicked
    TagManager.dataLayer({
      dataLayer: {
        event: "FreeConsultation_Click",
      },
    });
  };

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
      <motion.div
        className="header__content"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1,
        }}
      >
        <h1>BREAK THROUGH LIMITATIONS!</h1>
        <h1>
          GROW YOUR BUSINESS <span>DIGITALLY</span>
        </h1>
        <p>
          {/* We as the best website design agency in Salem, Tamil Nadu. We
          specialize in helping B2C businesses succeed online with our
          responsive web design services, top-notch UI/UX design and
          development, and search engine optimization services, making us the
          best website design company in India. */}
          {headerParagraph ||
            "We are a growing design studio in Salem, Tamil Nadu. We offer top-notch UI/UX Design, Web Development, Brand Identity Design, and SEO services, making us the leading website design company in India."}
        </p>
        <a
          href="https://calendly.com/manikandan13103/consultation-1"
          target="_blank"
          rel="noreferrer"
          // data-aos="fade-right"
          onClick={handleConsultationClick} // Add onClick handler to track the click event
        >
          <button>
            <i className="fa-solid fa-calendar-days fa-lg"></i>
            Free Consultation
          </button>
        </a>
        <div className="mouse-scroll"></div>
        <div className="arrow-scroll">
          <div className="arrow"></div>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
