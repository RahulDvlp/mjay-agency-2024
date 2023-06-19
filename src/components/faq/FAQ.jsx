import React from "react";
import "./faq.css";
import { FAQCard } from "..";

const FAQ = (props) => {
  return (
    <div className="faq">
      <div className="title">
        <h1>General FAQ's</h1>
        <div className="bar"></div>
      </div>
      <div className="_accordion">
        <FAQCard items={props.items} />
      </div>
    </div>
  );
};

export default FAQ;
