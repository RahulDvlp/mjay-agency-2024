import React from "react";
import "./cta.css";
import { Link } from "react-router-dom";

const CTA = (props) => {
  const ctaContentClass = `home_cta-content ${props.ctaBg}`;
  const ctaStyle = {
    padding: props.ctaPadding,
  };

  return (
    <>
      <div className="home_cta" style={ctaStyle}>
        <div className={ctaContentClass}>
          <div className="home_cta-h1">
            <h1>{props.ctaHeading}</h1>
          </div>
          <div className="home_cta-btn">
            <Link to="/contact">
              <button style={{ backgroundColor: props.CtabtnColor }}>
                {/* <i className="fa-regular fa-envelope fa-lg"></i> */}
                {props.btnText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
