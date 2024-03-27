import React from "react";
import "./packageCard.css";
import { Link } from "react-router-dom";

const PackageCard = (props) => {
  return (
    <div className="package_card" style={{ backgroundColor: props.color }}>
      <img src={props.packageImg} alt={props.packageAlt} />
      <h2
        style={{
          background: props.packageNameBgColor,
          color: props.packageNameColor,
        }}
      >
        {props.packageName}
      </h2>
      <ul>
        {props.features.map((feature, index) => (
          <li key={index}>
            {Array.isArray(feature) ? (
              <>
                <div style={{ display: "flex" }}>
                  <div>
                    <svg
                      style={{ marginRight: "1rem" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_760_1706)">
                        <path
                          d="M2.89444 4.81478L2.54213 4.46247L2.18858 4.81353L1.59692 5.40103L1.24086 5.75458L1.59567 6.10938L3.92483 8.43855L4.27839 8.7921L4.63194 8.43855L9.63194 3.43855L9.98549 3.085L9.63194 2.73144L9.04444 2.14394L8.69105 1.79056L8.3375 2.14378L4.27855 6.19889L2.89444 4.81478Z"
                          fill="#4028BD"
                          stroke="#4028BD"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_760_1706">
                          <rect
                            x="0.529297"
                            y="0.168335"
                            width="10"
                            height="10"
                            rx="5"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>{feature[0]}</div>
                </div>

                <ul style={{ marginTop: "1rem" }}>
                  {feature.slice(1).map((nestedFeature, nestedIndex) => (
                    <li key={nestedIndex} style={{ paddingLeft: "1.8rem" }}>
                      <div style={{ display: "flex" }}>
                        <div>
                          <svg
                            style={{ marginRight: "8px" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_760_1710)">
                              <path
                                d="M2.89444 4.81478L2.54213 4.46247L2.18858 4.81353L1.59692 5.40103L1.24086 5.75458L1.59567 6.10938L3.92483 8.43855L4.27839 8.7921L4.63194 8.43855L9.63194 3.43855L9.98549 3.085L9.63194 2.73144L9.04444 2.14394L8.69105 1.79056L8.3375 2.14378L4.27855 6.19889L2.89444 4.81478Z"
                                fill="#73BD28"
                                stroke="#73BD28"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_760_1710">
                                <rect
                                  x="0.529297"
                                  y="0.168335"
                                  width="10"
                                  height="10"
                                  rx="5"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>{nestedFeature}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div style={{ display: "flex" }}>
                <div className="svg">
                  <svg
                    style={{ marginRight: "1rem" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_760_1706)">
                      <path
                        d="M2.89444 4.81478L2.54213 4.46247L2.18858 4.81353L1.59692 5.40103L1.24086 5.75458L1.59567 6.10938L3.92483 8.43855L4.27839 8.7921L4.63194 8.43855L9.63194 3.43855L9.98549 3.085L9.63194 2.73144L9.04444 2.14394L8.69105 1.79056L8.3375 2.14378L4.27855 6.19889L2.89444 4.81478Z"
                        fill="#4028BD"
                        stroke="#4028BD"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_760_1706">
                        <rect
                          x="0.529297"
                          y="0.168335"
                          width="10"
                          height="10"
                          rx="5"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>{feature}</div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="price">
        <h3>{props.offPrice}</h3>
        <h3>{props.origPrice}</h3>
      </div>
      <Link
        to="/contact"
        style={{ background: props.btnBackground, color: props.btnTxtColor }}
      >
        Get this Deal now!
      </Link>
    </div>
  );
};

export default PackageCard;
