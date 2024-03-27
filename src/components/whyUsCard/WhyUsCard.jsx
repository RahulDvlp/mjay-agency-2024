import React from "react";
import "./whyUsCard.css";

const WhyUsCard = (props) => {
  return (
    <div className="whyUsCard" data-aos="fade-up">
      <img src={props.whyUsImg} alt={props.whyUsAlt} />
      <h2>{props.whyUs}</h2>
      <p>{props.whyUsDesc}</p>
    </div>
  );
};

export default WhyUsCard;
