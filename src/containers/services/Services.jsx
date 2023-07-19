import React from "react";
import "./services.css";
import { ServiceCard } from "../../components";
import design from "../../assets/design.svg";
import development from "../../assets/development.svg";
import seo from "../../assets/seo.svg";
import ecommerce from "../../assets/ecommerce.svg";

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
          alt="Best Website Development Company in Tamilnadu"
          serviceDescription="Intuitive and visually appealing user interface & Branding design that enhances user experience and drive conversions."
        />
        <ServiceCard
          serviceImg={development}
          serviceTitle="Development"
          alt="Effective Social Media Marketing Strategies"
          serviceDescription="We forge customized websites with seamless functionality, responsive design, and user-friendly interfaces."
        />
        <ServiceCard
          serviceImg={seo}
          serviceTitle="SEO"
          alt="Professional Digital Marketing Agency"
          serviceDescription="Boost your online presence with strategic SEO techniques to improve visibility and drive organic traffic."
        />
        <ServiceCard
          serviceImg={ecommerce}
          serviceTitle="Ecommerce"
          alt="Targeted Online Advertising"
          serviceDescription="Scale your business to online with our tailored ecommerce solution. Focused on sales and conversion"
        />
      </div>
    </div>
  );
};

export default Services;
