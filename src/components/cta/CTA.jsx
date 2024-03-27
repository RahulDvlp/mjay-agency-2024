import React, { useEffect } from "react";
import "./cta.css";
import { Link } from "react-router-dom";
import AOS from "aos";

const CTA = (props) => {
  const ctaContentClass = `home_cta-content ${props.ctaBg}`;
  const ctaStyle = {
    padding: props.ctaPadding,
  };

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 180 });
  }, []);

  return (
    <>
      <div className="home_cta" style={ctaStyle} data-aos="fade-up">
        <div className={ctaContentClass}>
          <div className="home_cta-h1">
            <h1>{props.ctaHeading}</h1>
          </div>
          <div className="home_cta-btn">
            <Link to="/contact">
              <button style={{ backgroundColor: props.CtabtnColor }}>
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
