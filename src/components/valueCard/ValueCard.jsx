import React from "react";
import "./valueCard.css";

const ValueCard = (props) => {
  return (
    <div className="value_card">
      <img src={props.valueImg} alt="" loading="lazy" />
      <h1>{props.value}</h1>
    </div>
  );
};

export default ValueCard;
