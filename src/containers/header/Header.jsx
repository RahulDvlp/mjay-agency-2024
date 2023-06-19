import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
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
        <a href="tel:+916374233813">
          <button>Book Consultation</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
