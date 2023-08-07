import React from "react";
import "./errorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
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
