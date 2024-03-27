import React, { useEffect } from "react";
import "./services2.css";
import { ServiceCard2 } from "../../components";
import design from "../../assets/ui-ux.png";
import development from "../../assets/development.png";
import seo from "../../assets/seo.png";
import AOS from "aos";

const Services2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 180 });
  }, []);
  return (
    <div className="services2">
      <div className="title" data-aos="fade-right">
        <h2>Services</h2>
        <div className="bar"></div>
      </div>
      <div className="services_cards2" data-aos="fade-up">
        <ServiceCard2
          serviceImg={design}
          alt=" ui-ux-design-services-agency"
          service="UI/UX Design"
          serviceDesc="Crafting smooth digital experiences with the best UI/UX design service by expert designers. Improve your user experience right now!"
          servicesLink="#"
        />
        <ServiceCard2
          serviceImg={development}
          alt="website-development-company-India"
          service="Web Development"
          serviceDesc="It's not only about designing. It's about developing responsive, easy-to-navigate, and fast websites. Discover our web development services!"
          servicesLink="#"
        />
        <ServiceCard2
          serviceImg={seo}
          alt="seo-services-agency-salem"
          service="SEO"
          serviceDesc="Dominate search rankings and increase organic traffic with our best SEO services, as the trusted SEO company in Salem, India. We deliver results that boost your website visibility to the top."
          servicesLink="#"
        />
      </div>
    </div>
  );
};

export default Services2;
