import React from "react";
import "./serviceCard.css";

const ServiceCard = (props) => {
  return (
    <div className="serviceCard">
      <img src={props.serviceImg} alt="mjay-digital-agency" />
      <h1>{props.serviceTitle}</h1>
      <p>{props.serviceDescription}</p>
    </div>
  );
};

export default ServiceCard;
