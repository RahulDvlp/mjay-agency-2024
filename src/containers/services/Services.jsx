import React from "react";
import "./services.css";
import { ServiceCard } from "../../components";
import design from "../../assets/design.svg";
import development from "../../assets/development.svg";
import seo from "../../assets/seo.svg";

const Services = () => {
  return (
    <div className="services">
      <div className="title">
        <h1>Services</h1>
        <div className="bar"></div>
      </div>
      <div className="services_cards">
        <ServiceCard
          serviceImg={design}
          serviceTitle="Design"
          serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet,"
        />
        <ServiceCard
          serviceImg={development}
          serviceTitle="Development"
          serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet,"
        />
        <ServiceCard
          serviceImg={seo}
          serviceTitle="SEO"
          serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet,"
        />
      </div>
    </div>
  );
};

export default Services;
