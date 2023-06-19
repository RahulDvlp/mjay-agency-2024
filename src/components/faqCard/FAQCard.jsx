import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./faqCard.css"; // Import the CSS file for styling

const FAQCard = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderItems = () => {
    return items.map((item, index) => {
      const isActive = index === activeIndex;
      const contentClass = isActive ? "content active" : "content";
      const borderBottomClass = isActive
        ? "accordion-title active"
        : "accordion-title";

      return (
        <div key={index} className="accordion-item">
          <div className={borderBottomClass} onClick={() => handleClick(index)}>
            <span className="accordion-icon">
              {isActive ? <FaMinus /> : <FaPlus />}
            </span>
            <h1>{item.title}</h1>
          </div>
          {isActive && (
            <div className={contentClass}>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      );
    });
  };

  return <div className="accordion-container">{renderItems()}</div>;
};

export default FAQCard;
