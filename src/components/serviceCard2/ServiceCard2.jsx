import React, { useEffect } from "react";
import "./serviceCard2.css";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import AOS from "aos";

const ServiceCard2 = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 180 });
  }, []);
  return (
    <div className="serviceCard2" data-aos="fade-up">
      <img src={props.serviceImg} alt={props.alt} />
      <h2>{props.service}</h2>
      <p>{props.serviceDesc}</p>
      {/* <a href={props.servicesLink}>
        view <HiOutlineArrowNarrowRight size={16} color="#000" />
      </a> */}
    </div>
  );
};

export default ServiceCard2;
