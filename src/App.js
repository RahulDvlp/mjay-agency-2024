import "./App.css";
import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
import logo from "./assets/logo.svg";

const HomePage = lazy(() => import("./pages/HomePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

const TRACKING_ID = "UA-274093549-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px"
      );
    });
    const dot = document.querySelector(".dot");
    document.addEventListener("mousemove", (e) => {
      dot.setAttribute(
        "style",
        "top: " + (e.pageY - 4) + "px; left: " + (e.pageX - 4) + "px"
      );
    });
    document.addEventListener("click", () => {
      cursor.classList.add("expand");
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    });
  }, []);

  return (
    <div>
      <div className="cursor"></div>
      <div className="dot"></div>
      <Suspense
        fallback={
          <div className="loader">
            <img className="blink-animation" src={logo} alt="" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
