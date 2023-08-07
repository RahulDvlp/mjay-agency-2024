import React, { useRef } from "react";
import "./works.css";
import { WorkCard } from "../../components";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const Works = () => {
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
    event.preventDefault();
    if (!isMouseDown) return;
    const x = event.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1;
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
      className="works"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="title">
        <h1>upcoming works</h1>
        <div className="bar"></div>
      </div>
      <div className="work_cards" ref={scrollRef}>
        <div className="work-wrapper">
          <WorkCard
            workName="sam creations"
            alt="E-commerce Website Development"
            workBg="work_bg_1"
            work={work1}
          />
        </div>
        <div className="work-wrapper">
          <WorkCard
            workName="dj photo stories"
            alt="SEO Optimization for Small Businesses"
            workBg="work_bg_2"
            work={work2}
          />
        </div>
        <div className="work-wrapper">
          <WorkCard
            workName="marketing agency"
            alt="Responsive Website Design"
            workBg="work_bg_3"
            work={work3}
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

export default Works;
