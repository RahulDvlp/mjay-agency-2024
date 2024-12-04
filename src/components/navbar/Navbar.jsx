import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const [navColor, setNavColor] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 500, damping: 80 }); //adding spring effect
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#FBE27B", "#FAD22F"]
  );

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

    setMenuOpened(!menuOpened);
  };

  // Close the menu on link click
  const closeMenuOnClick = () => {
    setActive("nav_menu");
    setToggleIcon("nav_toggler");
    setMenuOpened(false);
  };

  return (
    <>
      <div className={navColor ? "_navbar bg" : "_navbar"}>
        <div className="mjay_logo">
          <a href="/">
            <img
              // style={{ width: "120px", height: "auto" }}
              className="logo"
              src={logo}
              alt="website-design-development-agency"
              loading="lazy"
            />
          </a>
        </div>
        <div className="nav_menu-bg">
          <div className={active}>
            <p>
              <Link onClick={closeMenuOnClick} to="/">
                HOME
              </Link>
            </p>
            <p>
              <Link onClick={closeMenuOnClick} to="/portfolio">
                WORK
              </Link>
            </p>
            <p>
              <Link onClick={closeMenuOnClick} to="/about">
                ABOUT
              </Link>
            </p>
            <Link onClick={closeMenuOnClick} to="/contact">
              <button>Let's Talk</button>
            </Link>
          </div>
        </div>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        {!menuOpened && (
          <motion.div
            style={{
              scaleX,
              transformOrigin: "left",
              background,
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "3px",
              borderRadius: "999px",
            }}
          ></motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
