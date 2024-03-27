import React, { useEffect } from "react";
import "./values.css";
import { ValueCard } from "../../components";
import roi from "../../assets/roi.svg";
import honest from "../../assets/honest.svg";
import innovation from "../../assets/innovation.svg";
import flexibility from "../../assets/flexibility.svg";
import passion from "../../assets/passion.svg";
import excellence from "../../assets/excellence.svg";
import AOS from "aos";

const Values = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 180 });
  }, []);

  return (
    <div className="values">
      <div className="title" data-aos="fade-right">
        <h2>core values</h2>
        <div className="bar"></div>
      </div>
      <div className="value_cards">
        <div data-aos="fade-up">
          <ValueCard
            valueImg={roi}
            alt="best-seo-agency-india-roi"
            value="roi focused"
          />
        </div>
        <div data-aos="fade-up">
          <ValueCard
            valueImg={honest}
            alt="user-interface-design-salem-honest"
            value="honest"
          />
        </div>
        <div data-aos="fade-up">
          <ValueCard
            valueImg={innovation}
            alt="interactive-web-design-services-innovation"
            value="innovation"
          />
        </div>
        <div data-aos="fade-up">
          <ValueCard
            valueImg={flexibility}
            alt=" website-design-agency-india-flexibility"
            value="flexibility"
          />
        </div>
        <div data-aos="fade-up">
          <ValueCard
            valueImg={passion}
            alt="user-experience-design-agency-passion"
            value="passion"
          />
        </div>
        <div data-aos="fade-up">
          <ValueCard
            valueImg={excellence}
            alt=" ui-ux-design-services-salem-excellence"
            value="excellence"
          />
        </div>
      </div>
    </div>
  );
};

export default Values;
