import React from "react";
import "./testimonials.css";
import { TestimonialCard } from "../../components";
import test1 from "../../assets/testimonial-pic-1.png";
import test2 from "../../assets/testimonial-pic-2.png";
import test3 from "../../assets/testimonial-pic-3.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="title">
        <h1>Client Testimony</h1>
        <div className="bar"></div>
      </div>
      <div className="testimonial_cards">
        <div className="testimonial-wrapper">
          <TestimonialCard
            testiImg={test1}
            testiReview="Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu."
            testiClient="Adam"
            testiPosition="CEO"
          />
        </div>
        <div className="testimonial-wrapper">
          <TestimonialCard
            testiImg={test2}
            testiReview="Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu."
            testiClient="Eve"
            testiPosition="Photographer"
          />
        </div>
        <div className="testimonial-wrapper">
          <TestimonialCard
            testiImg={test3}
            testiReview="Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu."
            testiClient="Ema"
            testiPosition="Designer"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
