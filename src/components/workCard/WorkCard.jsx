import React from "react";
import "./workCard.css";

const WorkCard = (props) => {
  const workContentClass = `workImg ${props.workBg}`;

  return (
    <div className="workCard">
      <div className={workContentClass}>
        <img src={props.work} alt="" loading="lazy" />
      </div>
      <div className="workName">
        <h1>{props.workName}</h1>
      </div>
    </div>
  );
};

export default WorkCard;
