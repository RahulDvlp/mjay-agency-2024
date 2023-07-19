import React from "react";
import "./whatsappBtn.css";

const WhatsappBtn = () => {
  return (
    <>
      <a
        href="https://wa.me/+916374233813"
        target="_blank"
        rel="noreferrer"
        className="btn-whatsapp-pulse btn-whatsapp-pulse-border"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default WhatsappBtn;
