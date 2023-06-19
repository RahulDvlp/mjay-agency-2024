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
            <img src={logo} alt="" loading="lazy" />
            <p>
              Welcome to MJay Digital Solutions, a professional digital agency
              adept at providing honest, bespoke digital solutions to businesses
              of all sizes.
            </p>
            <div className="socials">
              <Link to="">
                <i class="fa-brands fa-linkedin-in fa-lg"></i>
              </Link>
              <Link to="">
                <i class="fa-brands fa-facebook-f fa-lg"></i>
              </Link>
              <Link to="">
                <i class="fa-brands fa-instagram fa-lg"></i>
              </Link>
              <Link to="wa.me/+916374233813">
                <i class="fa-brands fa-whatsapp fa-lg"></i>
              </Link>
            </div>
          </div>
          <div className="footer_content">
            <div className="footer_services">
              <h1>
                services
                <div className="horizontal_row_sm"></div>
              </h1>
              <h2>Design</h2>
              <h2>Development</h2>
              <h2>SEO</h2>
            </div>
            <div className="footer_links">
              <h1>
                links
                <div className="horizontal_row_sm"></div>
              </h1>
              <Link to="/">
                <h2>home</h2>
              </Link>
              <Link to="/portfolio">
                <h2>work</h2>
              </Link>
              <Link to="/about">
                <h2>about</h2>
              </Link>
              <Link to="/">
                <h2>contact</h2>
              </Link>
            </div>
            <div className="footer_contact">
              <h1>
                contact
                <div className="horizontal_row_sm"></div>
              </h1>
              <h2>Call Us:</h2>
              <h2>+91 6374233813</h2>
              <h2>Mail Us:</h2>
              <h2>info@info.com</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <div className="horizontal_row_lg"></div>
        <p>Copyright © 2023 – Mjay Digital Solutions. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
