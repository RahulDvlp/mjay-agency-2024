import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const [navColor, setNavColor] = useState(false);

  useEffect(() => {
    // Navbar background color change on scrool
    const navbarBackgroundColor = () => {
      if (window.scrollY >= 30) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    };
    window.addEventListener("scroll", navbarBackgroundColor);
  });

  // Toggle menu
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    // Toggler Icon
    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };

  return (
    <div className={navColor ? "_navbar bg" : "_navbar"}>
      <div className="mjay_logo">
        <a href="/">
          <img src={logo} alt="MJAY DIGITAL SOLUTIONS" loading="lazy" />
        </a>
      </div>
      <div className="nav_menu-bg">
        <div className={active}>
          <p>
            <Link to="/">HOME</Link>
          </p>
          <p>
            <Link to="/portfolio">WORK</Link>
          </p>
          <p>
            <Link to="/about">ABOUT</Link>
          </p>
          <Link to="/contact">
            <button>Let's Talk</button>
          </Link>
        </div>
      </div>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default Navbar;
