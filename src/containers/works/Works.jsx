import React from "react";
import "./works.css";
import { WorkCard } from "../../components";
import work1 from "../../assets/work1.svg";
import work2 from "../../assets/work2.svg";
import work3 from "../../assets/work3.svg";

const Works = () => {
  return (
    <div className="works">
      <div className="title">
        <h1>our works</h1>
        <div className="bar"></div>
      </div>
      <div className="work_cards">
        <div className="work-wrapper">
          <WorkCard workName="sam creations" workBg="work_bg_1" work={work1} />
        </div>
        <div className="work-wrapper">
          <WorkCard
            workName="dj photo stories"
            workBg="work_bg_2"
            work={work2}
          />
        </div>
        <div className="work-wrapper">
          <WorkCard
            workName="marketing agency"
            workBg="work_bg_3"
            work={work3}
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
