import React from "react";
import "./ourTeamCard.css";

const OurTeamCard = (props) => {
  return (
    <div className="ourTeamCard" data-aos="fade-up">
      <img src={props.teamImg} alt={props.teamAlt} loading="lazy" />
      <h2>{props.teamName}</h2>
      <h3>{props.teamRole}</h3>
    </div>
  );
};

export default OurTeamCard;
