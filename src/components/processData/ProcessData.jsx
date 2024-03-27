import React from "react";
import ProcessSeperator from "../processSeperator/ProcessSeperator";
import ProcessCard from "../processCard/ProcessCard";

import discovery from "../../assets/discovery.png";
import research from "../../assets/research.png";
import design from "../../assets/design.png";
import approval from "../../assets/approval.png";
import development from "../../assets/development.png";
import review from "../../assets/review.png";
import launch from "../../assets/launch.png";
import support from "../../assets/ongoing-support.png";

const ProcessData = () => {
  return (
    <>
      <ProcessCard
        proccessImg={discovery}
        alt="fast-loading-website-development-services-discovery"
        process="Discovery"
        processDesc="In the discovery phase, we focus on understanding your goals, challenges, and vision for your website design project. We lay the foundation for an impactful outcome by ensuring that these align with your goals."
      />
      <ProcessSeperator />
      <ProcessCard
        data-scroll
        data-scroll-speed={-5}
        proccessImg={research}
        alt=" seo-services-company-salem-research"
        process="Research"
        processDesc="In our research, we analyze market trends, conduct competitor analysis, and study user preferences to gain valuable insights. We refine our strategies, focusing on conversion-focused design, to ensure the success of your project."
      />
      <ProcessSeperator />
      <ProcessCard
        proccessImg={design}
        alt="web-design-services-agency-salem"
        process="Design"
        processDesc="In our design process, we focus on responsive design for a seamless user experience. We integrate research insights and UI UX principles to create visually appealing interfaces, ensuring an enjoyable browsing journey across all devices."
      />
      <ProcessSeperator />
      <ProcessCard
        proccessImg={approval}
        alt="best-responsive-web-development-services-approval"
        process="Approval"
        processDesc="In the stage of approval, we present our website design concepts and strategies for your review and feedback. Before moving forward, your feedback is essential to ensuring that we understand your goals and fulfill them."
      />
      <ProcessSeperator />
      <ProcessCard
        proccessImg={development}
        alt="website-development-company-India"
        process="Development"
        processDesc="Our team of experts will turn your website design into a living reality. By focusing on responsive and optimized performance, we ensure fast loading times and high-quality solutions. Experience customized website development according to your needs."
      />
      <ProcessSeperator />
      <ProcessCard
        proccessImg={review}
        alt="ui-ux-design-development-services-review"
        process="Review"
        processDesc="At Mjay Digital Solutions, we carefully review every aspect of your website design, exposing it to rigorous testing to ensure an impressive user experience. As a result, users are delighted, and the website exceeds expectations."
      />
      <ProcessSeperator />
      <ProcessCard
        proccessImg={launch}
        alt="best-search-engine-optimization-services-launch"
        process="Launch"
        processDesc="After thorough testing, we'll launch your website, ensuring it delivers a seamless user experience and making it open to the public. Our team is dedicated to ensuring a smooth and effective launch."
      />
      <ProcessSeperator />
      <ProcessCard
        proccessImg={support}
        alt="mobile-friendly-website-design-ongoing-support"
        process="Ongoing Support"
        processDesc="At Mjay Digital Solutions, our commitment doesn't stop at launch. We provide continuous support to keep your website performing at its best. We assist you at every stage, from maintenance to technical assistance. This makes us the leading website design company in Salem, India."
      />
    </>
  );
};

export default ProcessData;
