import React, { useEffect } from "react";
import "./ourTeam.css";
import AOS from "aos";
import { OurTeamCard } from "../../components";
import Mani from "../../assets/mani-b&w.png";
import Abu from "../../assets/abu-b&w.png";

const OurTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 180 });
  }, []);
  return (
    <div className="ourTeam">
      <div className="title" data-aos="fade-right">
        <h2>Our Team</h2>
        <div className="bar"></div>
      </div>
      <div className="teamCards">
        <OurTeamCard
          teamImg={Mani}
          teamAlt="ui-ux-developer-design-strategist"
          teamName="Mani"
          teamRole="Tech lead & design strategist"
        />
        <OurTeamCard
          teamImg={Abu}
          teamAlt="best-website-seo-specialist"
          teamName="Abu"
          teamRole="SEO Specialist"
        />
      </div>
    </div>
  );
};

export default OurTeam;
