import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import "./workCard.css";
import { useNavigate } from "react-router-dom";

const WorkCard = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const workContentClass = `workImg ${props.workBg}`;

  const handleClick = () => {
    navigate("/portfolio");
  };

  return (
    <div className="workCard">
      <div className={workContentClass}>
        {isLoading ? (
          <TailSpin color="#ffff" height={40} width={40} />
        ) : (
          <img
            src={props.work}
            alt={props.alt}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onClick={handleClick}
          />
        )}
      </div>
      <div className="workName">
        <h2>{props.workName}</h2>
      </div>
    </div>
  );
};

export default WorkCard;
