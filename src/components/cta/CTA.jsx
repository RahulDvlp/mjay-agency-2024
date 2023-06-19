import React, { useState } from "react";
import "./cta.css";
import { ContactForm } from "../../components";

const CTA = (props) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleOpenContactForm = () => {
    setShowContactForm(true);
  };

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
            <button
              onClick={handleOpenContactForm}
              style={{ backgroundColor: props.CtabtnColor }}
            >
              {props.btnText}
            </button>
          </div>
        </div>
      </div>
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </>
  );
};

export default CTA;
