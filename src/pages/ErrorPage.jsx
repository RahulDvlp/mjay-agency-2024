import React, { useEffect } from "react";
import "./errorPage.css";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

const ErrorPage = () => {
  useEffect(() => {
    // ReactGA.pageview(window.location.pathname);
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Home Page",
    });
  });
  return (
    <div className="ErrorPage">
      <h4>404 Error Page</h4>
      <h5>This Page doesn't exist.</h5>
      <Link to="/" style={{ color: "#fff", fontSize: "18px" }}>
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;
