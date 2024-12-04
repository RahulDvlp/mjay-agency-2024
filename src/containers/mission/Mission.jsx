import React, { useEffect } from "react";
import "./mission.css";
import AOS from "aos";

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 180 });
  }, []);
  return (
    <div className="mission">
      <div className="mission_content" data-aos="fade-up">
        <h1>
          our mission is to Transform B2C businesses with{" "}
          <span>future-proof</span> d&d solutions and strategies
          <span>.</span>
        </h1>
      </div>
    </div>
  );
};

export default Mission;
