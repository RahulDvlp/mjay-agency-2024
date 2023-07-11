import React from "react";
import "./contactForm.css";
import { FaTimes } from "react-icons/fa";
import HubspotForm from "react-hubspot-form";

const ContactForm = ({ onClose }) => {
  return (
    <div className=" mjay_contact_form_container">
      <div className="mjay_contact_form_div">
        <div className="close_button" onClick={onClose}>
          <FaTimes />
        </div>
        <h1>Queries</h1>
        <div className="hubspot-form-wrapper">
          <HubspotForm
            region="na1"
            portalId="40205859"
            formId="34eb18e8-abbc-4143-ba95-76addf8952dc"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
