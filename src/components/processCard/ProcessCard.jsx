import React, { useEffect } from "react";
import "./processCard.css";
import AOS from "aos";

const ProcessCard = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 180 });
  }, []);

  return (
    <div className="processCard">
      <img src={props.proccessImg} alt={props.alt} />
      <h2>{props.process}</h2>
      <p>{props.processDesc}</p>
    </div>
  );
};

export default ProcessCard;
