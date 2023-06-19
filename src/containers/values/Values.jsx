import React from "react";
import "./values.css";
import { ValueCard } from "../../components";
import roi from "../../assets/roi.svg";
import honest from "../../assets/honest.svg";
import innovation from "../../assets/innovation.svg";
import flexibility from "../../assets/flexibility.svg";
import passion from "../../assets/passion.svg";
import excellence from "../../assets/excellence.svg";

const Values = () => {
  return (
    <div className="values">
      <div className="title">
        <h1>core values</h1>
        <div className="bar"></div>
      </div>
      <div className="value_cards">
        <ValueCard valueImg={roi} value="roi focused" />
        <ValueCard valueImg={honest} value="honest" />
        <ValueCard valueImg={innovation} value="innovation" />
        <ValueCard valueImg={flexibility} value="flexibility" />
        <ValueCard valueImg={passion} value="passion" />
        <ValueCard valueImg={excellence} value="excellence" />
      </div>
    </div>
  );
};

export default Values;
