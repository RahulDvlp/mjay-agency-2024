import React, { useState, useEffect } from "react";
import "./portfolio.css";
import { RiCloseLine } from "react-icons/ri";
import { PortfolioData } from "./PortfolioData";

const Portfolio = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(PortfolioData);
  }, []);

  const [model, setModel] = useState(false);
  const [tempImage, setTempImage] = useState("");

  const getImg = (image) => {
    setTempImage(image);
    setModel(true);
  };

  return (
    <div className="portfolio">
      <div className={model ? "model open" : "model"}>
        <img src={tempImage} alt="" loading="lazy" />
        <RiCloseLine onClick={() => setModel(false)} size={50} />
      </div>
      <div className="title">
        <h1>Portfolio</h1>
        <div className="bar"></div>
      </div>
      <div className="portfolio_gallery">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="portfolio_pics"
              onClick={() => getImg(item.image)}
            >
              <img src={item.image} alt="img" loading="lazy" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
