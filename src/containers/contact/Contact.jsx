import React from "react";
import "./contact.css";
import HubspotForm from "react-hubspot-form";

const Contact = () => {
  return (
    <div className="contact_page">
      <div className="contact_heading">
        <h1>Contact Us Directly</h1>
        <p>Our team would love to hear from you!</p>
      </div>
      <div className="contact_content">
        <div className="contact_form">
          <div className="hubspot-form-wrapper">
            <HubspotForm
              region="na1"
              portalId="40205859"
              formId="34eb18e8-abbc-4143-ba95-76addf8952dc"
            />
          </div>
        </div>
        <div className="fade_rule_vr"></div>
        <div className="contact_info">
          <h2>Get in Touch</h2>
          <div className="info">
            <h3>
              <i className="fa-solid fa-earth-asia"></i> Work Inquiries
            </h3>
            <p>+91 6374233813</p>
            <p>info@mjaydigitalsolutions.com</p>
          </div>
          <div className="info">
            <h3>
              <i className="fa-regular fa-clock"></i> Working Hours
            </h3>
            <p>Monday - Saturday</p>
            <p>9:00 am - 6:00 pm</p>
          </div>
          <div className="info">
            <h3>
              <i className="fa-solid fa-hashtag"></i> Socials
            </h3>
            <div className="social_links">
              <a
                href="https://wa.me/+916374233813"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp fa-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/mjay_digital_solutions/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram fa-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/mjay-digital-solutions/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin-in fa-xl"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100094270606814"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook-f fa-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fade_rule_hr"></div>
    </div>
  );
};

export default Contact;
