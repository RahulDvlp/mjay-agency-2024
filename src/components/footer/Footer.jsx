import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_container">
          <div className="footer_logo">
            <img
              src={logo}
              alt="Tamilnadu Digital Marketing Solutions"
              loading="lazy"
            />
            <p>
              Lofty Design Studio in Salem, Tamil Nadu, offers clear, tailored
              D&D solutions for businesses of all sizes.
            </p>
            <div className="socials">
              <a href="https://wa.me/+916374233813">
                <i className="fa-brands fa-whatsapp fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/lofty_design_studio_offl/">
                <i className="fa-brands fa-instagram fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/company/lofty-design-studio/about/">
                <i className="fa-brands fa-linkedin-in fa-lg"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61563782476370">
                <i className="fa-brands fa-facebook-f fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="footer_content">
            <div className="footer_services">
              <h2>
                services
                <div className="horizontal_row_sm"></div>
              </h2>
              <h3>UI/UX</h3>
              <h3>Brand Identity Design</h3>
              <h3>Web Development</h3>
              <h3>SEO</h3>
            </div>
            <div className="footer_links">
              <h2>
                links
                <div className="horizontal_row_sm"></div>
              </h2>
              <Link to="/">
                <h3>home</h3>
              </Link>
              <Link to="/portfolio">
                <h3>work</h3>
              </Link>
              <Link to="/about">
                <h3>about</h3>
              </Link>
            </div>
            <div className="footer_contact">
              <h2>
                contact
                <div className="horizontal_row_sm"></div>
              </h2>
              <h3>Call Us:</h3>
              <h3>+91 6374233813</h3>
              <h3>Mail Us:</h3>
              <h3>info@loftydesignstudio.com</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <div className="horizontal_row_lg"></div>
        <p>Copyright © 2023 – Lofty Design Studio. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
