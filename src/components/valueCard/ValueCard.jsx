import React from "react";
import "./valueCard.css";

const ValueCard = (props) => {
  return (
    <div className="value_card">
      <img src={props.valueImg} alt={props.alt} loading="lazy" />
      <h2>{props.value}</h2>
    </div>
  );
};

export default ValueCard;
