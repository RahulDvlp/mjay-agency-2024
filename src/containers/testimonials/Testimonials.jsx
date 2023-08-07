import React, { useRef } from "react";
import "./testimonials.css";
import { TestimonialCard } from "../../components";
import test1 from "../../assets/testimonial-pic-1.png";
import test2 from "../../assets/testimonial-pic-2.png";
import test3 from "../../assets/testimonial-pic-3.png";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const Testimonials = () => {
  const scrollRef = useRef(null);
  let startX = 0;
  let scrollLeft = 0;
  let isMouseDown = false;

  const handleMouseDown = (event) => {
    isMouseDown = true;
    startX = event.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (event) => {
    if (!isMouseDown) return;
    const x = event.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isMouseDown = false;
  };

  const handleScrollLeft = () => {
    scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
  };

  return (
    <div
      className="testimonials"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      <div className="title">
        <h1>Client Testimony</h1>
        <div className="bar"></div>
      </div>
      <div className="testimonial_cards" ref={scrollRef}>
        <div className="testimonial-wrapper">
          <TestimonialCard
            testiImg={test1}
            testiReview="Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu."
            alt="Lead Generation Strategies"
            testiClient="Adam"
            testiPosition="CEO"
          />
        </div>
        <div className="testimonial-wrapper">
          <TestimonialCard
            testiImg={test2}
            testiReview="Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu."
            alt="Lead Generation Strategies"
            testiClient="Eve"
            testiPosition="Photographer"
          />
        </div>
        <div className="testimonial-wrapper">
          <TestimonialCard
            testiImg={test3}
            testiReview="Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu."
            alt="Custom Web Design Solutions"
            testiClient="Ema"
            testiPosition="Designer"
          />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-button" onClick={handleScrollLeft}>
          <HiOutlineArrowNarrowLeft size={30} color="#000" />
        </button>
        <button className="nav-button" onClick={handleScrollRight}>
          <HiOutlineArrowNarrowRight size={30} color="#000" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
