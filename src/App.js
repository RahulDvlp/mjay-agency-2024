import "./App.css";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import { WhatsappBtn, BgMusic } from "./components";
import ErrorPage from "./pages/ErrorPage";
import loaderLogo from "./assets/logo.png";
import { motion } from "framer-motion";
import TagManager from "react-gtm-module";

const HomePage = lazy(() => import("./pages/HomePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

// const TRACKING_ID = "UA-274093549-1"; old ga
const TRACKING_ID = "G-5T8JFYDFPC";

const tagManagerArgs = {
  gtmId: "GTM-K4L8JMTR",
};

TagManager.initialize(tagManagerArgs);

ReactGA.initialize(TRACKING_ID);

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  const variants = {
    default: {
      y: mousePosition.y - 10,
      x: mousePosition.x - 10,
      backgroundColor: "#ffe604",
      mixBlendMode: "difference",
    },
  };

  return (
    <div>
      <Suspense
        fallback={
          <div className="container">
            <div className="loader_logo">
              <img src={loaderLogo} alt="" />
            </div>
            <div className="loader"></div>
          </div>
        }
      >
        <motion.div
          className="cursor"
          variants={variants}
          animate="default"
          transition={{
            duration: 0.1,
          }}
        ></motion.div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      <BgMusic />
      <WhatsappBtn />
    </div>
  );
}

export default App;
