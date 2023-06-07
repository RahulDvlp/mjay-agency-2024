import React from "react";
import { Navbar, Footer, CTA1, FAQ } from "../components";
import { Header, Mission, Services, Testimonials } from "../containers";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Mission />
      <Services />
      <Testimonials />
      <FAQ />
      <CTA1 />
      <Footer />
    </div>
  );
};

export default HomePage;
