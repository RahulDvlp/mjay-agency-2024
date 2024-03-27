import React from "react";
import "./result.css";
import result from "../../assets/result.png";

const Result = () => {
  return (
    <div className="results">
      <div className="title">
        <h1>Results</h1>
        <div className="bar"></div>
      </div>
      <div className="result_container">
        <div className="results_content">
          <h1>Increased Visibility</h1>
          <p>
            We go beyond traditional web design, implementing industry-standard
            methodologies and integrating social media strategies. This not only
            enhances your web pages but also secures your brand's standing in
            the competitive digital space.
          </p>
          <br />
          <p>
            Utilizing a dynamic duo of SEO and SMO, we specialize in boosting
            visibility and fostering user recognition. Elevate your brand's
            online presence, captivate your audience, and solidify your position
            in the ever-evolving digital landscape with our holistic approach.
          </p>
          <br />
          <h2>
            "Wanna increase your visibility and reach a broader audience?"
          </h2>
          <br />
          <a href="#">Contact us</a>
        </div>
        <div className="results_image">
          <img src={result} alt="results" />
        </div>
      </div>
    </div>
  );
};

export default Result;
