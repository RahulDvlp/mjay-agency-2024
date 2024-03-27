import React, { useEffect } from "react";
import "./faq.css";
import { FAQCard } from "..";
import AOS from "aos";

const FAQ = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 180 });
  }, []);
  return (
    <div className="faq">
      <div className="title" data-aos="fade-right">
        <h2>General FAQ's</h2>
        <div className="bar"></div>
      </div>
      <div className="_accordion" data-aos="fade-up">
        <FAQCard items={props.items} />
      </div>
    </div>
  );
};

export default FAQ;
