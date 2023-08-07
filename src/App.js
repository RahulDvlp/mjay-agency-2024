import "./App.css";
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
import { WhatsappBtn } from "./components";
import ErrorPage from "./pages/ErrorPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const TRACKING_ID = "UA-274093549-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div class="container">
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      <WhatsappBtn />
    </div>
  );
}

export default App;
