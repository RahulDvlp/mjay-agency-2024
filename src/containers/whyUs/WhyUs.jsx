import React from "react";
import "./whyUs.css";
import { WhyUsCard } from "../../components";
import transparent from "../../assets/transparent.png";
import detail from "../../assets/detail.png";
import tailored from "../../assets/tailored.png";
import satisfaction from "../../assets/satisfaction.png";

const WhyUs = () => {
  return (
    <div className="why_us">
      <div className="title" data-aos="fade-right">
        <h2>Why Us?</h2>
        <div className="bar"></div>
      </div>
      <div className="why_us_container">
        <WhyUsCard
          whyUsImg={transparent}
          whyUsAlt="development-services-transparent-pricing"
          whyUs="Transparent Pricing"
          whyUsDesc="We offer a straightforward pricing structure. Our pricing model is crystal clear, ensuring no surprises or hidden fees. You can rely on us to deliver honest and up-front pricing for our website services."
        />
        <WhyUsCard
          whyUsImg={detail}
          whyUsAlt="quality-ui-ux-design-attention-to-detail"
          whyUs="Attention to Detail"
          whyUsDesc="We are proud of the careful attention to detail we possess in web design. It's not just about getting the job done; it's about getting it done right. We carefully analyze each detail of your project to make sure nothing gets overlooked."
        />
        <WhyUsCard
          whyUsImg={tailored}
          whyUsAlt="best-price-websites-tailored-budget"
          whyUs="Tailored to your Budget"
          whyUsDesc="Your budget is just as important to us as the success of your project. We adapt our services to your budget without compromising on the quality of our work. With us, you can be sure that you get the most value for your investment in website solutions."
        />
        <WhyUsCard
          whyUsImg={satisfaction}
          whyUsAlt="premier-web-agency-client-satisfaction"
          whyUs="Dedication to Client Satisfaction"
          whyUsDesc="Our primary goal is client satisfaction, and we work to earn your trust. Our team is dedicated to building lasting relationships with our clients. From the first interaction to the completion of the project, we are committed to your success and satisfaction."
        />
      </div>
    </div>
  );
};

export default WhyUs;
