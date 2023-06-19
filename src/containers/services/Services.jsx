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
          serviceDescription="Intuitive and visually appealing user interface design that enhances user experience and drive conversions."
        />
        <ServiceCard
          serviceImg={development}
          serviceTitle="Development"
          serviceDescription="We forge customized websites with seamless functionality, responsive design, and user-friendly interfaces."
        />
        <ServiceCard
          serviceImg={seo}
          serviceTitle="SEO"
          serviceDescription="Boost your online presence with strategic SEO techniques to improve visibility and drive organic traffic."
        />
      </div>
    </div>
  );
};

export default Services;
