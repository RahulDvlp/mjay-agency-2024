import React from "react";
import "./testimonialCard.css";

const TestimonialCard = (props) => {
  return (
    <div className="testimonialCard">
      <img src={props.testiImg} alt="" loading="lazy" />
      <p>{props.testiReview}</p>
      <div className="testi_founder">
        <h1>{props.testiClient}</h1>
        <h2>{props.testiPosition}</h2>
      </div>
    </div>
  );
};

export default TestimonialCard;
