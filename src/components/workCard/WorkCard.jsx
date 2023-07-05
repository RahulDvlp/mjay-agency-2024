import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import "./workCard.css";

const WorkCard = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const workContentClass = `workImg ${props.workBg}`;

  return (
    <div className="workCard">
      <div className={workContentClass}>
        {isLoading ? (
          <TailSpin color="#ffff" height={40} width={40} />
        ) : (
          <img
            src={props.work}
            alt=""
            loading="lazy"
            onLoad={() => setIsLoading(false)}
          />
        )}
      </div>
      <div className="workName">
        {/* <a href="https://samcreations-co-in.onrender.com/"> */}
        <h1>{props.workName}</h1>
        {/* </a> */}
      </div>
    </div>
  );
};

export default WorkCard;
