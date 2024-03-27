import React, { useEffect } from "react";
import "./services.css";
import { ServiceCard } from "../../components";
import design from "../../assets/ui-ux.png";
import development from "../../assets/development.png";
import seo from "../../assets/seo.png";
import AOS from "aos";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 180 });
  }, []);
  return (
    <div className="services">
      <div className="title" data-aos="fade-right">
        <h1>Services</h1>
        <div className="bar"></div>
      </div>
      <div className="services_cards" data-aos="fade-up">
        <ServiceCard
          serviceImg={design}
          serviceTitle="UI/UX Design"
          alt="Best Website Development Company in Tamilnadu"
          serviceDescription="Crafting smooth digital experiences with the best UI/UX design service by expert designers. Improve your user experience right now!"
        />
        <ServiceCard
          serviceImg={development}
          serviceTitle="Web Development"
          alt="Effective Social Media Marketing Strategies"
          serviceDescription="It's not only about designing. It's about developing responsive, easy-to-navigate, and fast websites. Discover our web development services!"
        />
        <ServiceCard
          serviceImg={seo}
          serviceTitle="SEO"
          alt="Targeted Online Advertising"
          serviceDescription="Dominate search rankings and increase organic traffic with our best SEO services, as the trusted SEO company in Salem, India. We boost your visibility."
        />
      </div>
    </div>
  );
};

export default Services;
