import "./App.css";
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
import logo from "./assets/logo.svg";

const HomePage = lazy(() => import("./pages/HomePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

const TRACKING_ID = "UA-274093549-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div>
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
