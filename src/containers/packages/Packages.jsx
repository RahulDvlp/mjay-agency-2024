import React, { useEffect } from "react";
import "./packages.css";
import { PackageCard } from "../../components";
import packageImg1 from "../../assets/package1.svg";
import packageImg2 from "../../assets/package2.svg";
// import packageImg3 from "../../assets/package3.svg";
import AOS from "aos";

const Packages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 180 });
  }, []);
  return (
    <div className="packages">
      <div className="title" data-aos="fade-right">
        <h2>Packages</h2>
        <div className="bar"></div>
      </div>
      <div className="packages_container">
        <div className="package_wrapper" data-aos="fade-up">
          {/* <PackageCard
            color="#fff"
            packageImg={packageImg3}
            packageAlt="custom-websites-salem-starter-package"
            packageName="ECOMMERCE"
            packageNameBgColor="#FFF38C"
            packageNameColor="#000b33"
            features={[
              "Ecommerce functionality",
              "Premium UI/UX Design (conversion focused)",
              "Site development",
              "SEO optimized content for Google ranking",
              "Google analytics setup",
              "Social media links",
              "Social media button integration",
              "Call button integration",
              "Contact form with CRM integration",
              [
                "Full suite social media setup",
                "Setting up Facebook, Instagram, LinkedIn, Whatsapp Business profiles",
                "Branding the profiles with client's logo and cover images",
                "Providing guidelines for posting content and strategy",
                "Ensuring consistent branding across all social media platforms",
                "Connecting social media profiles to the website for easy access",
              ],
              "Banner design",
              "Google business account setup",
              "Social media profile optimization",
              "Domain integration",
              "Free customer support for 5 months",
            ]}
            offPrice="₹69,999"
            origPrice="₹90,000"
            btnBackground="#ffe500"
            btnTxtColor="#000"
          /> */}
        </div>
        <div className="package_wrapper" data-aos="fade-up">
          <PackageCard
            color="#fff"
            packageImg={packageImg2}
            packageAlt="ui-design-agency-premium-package"
            packageName="PREMIUM"
            packageNameBgColor="#D4C8FE"
            packageNameColor="#000b33"
            features={[
              "Premium UI Design",
              "Site Development",
              "Tailored Site Structure and Components",
              "On-page SEO",
              "Off-page SEO",
              "SEO Optimized Content for Google Ranking",
              "Monthly SEO Report",
              "Google analytics setup",
              "Social media links",
              "Social media button integration",
              "Call button integration",
              "Contact form with CRM integration",
              // [
              //   "Full suite social media setup",
              //   "Setting up Facebook, Instagram, LinkedIn, Whatsapp Business profiles",
              //   "Branding the profiles with client's logo and cover images",
              //   "Providing guidelines for posting content and strategy",
              //   "Ensuring consistent branding across all social media platforms",
              //   "Connecting social media profiles to the website for easy access",
              // ],
              // "Banner design",
              // "Google business account setup",
              // "Social media profile optimization",
              "Free Hosting",
              "Domain integration",
              "Free customer support for 3 months",
            ]}
            offPrice="₹19,999"
            origPrice="₹35,000"
            btnBackground="#4218DA"
            btnTxtColor="#fff"
          />
        </div>
        <div className="package_wrapper" data-aos="fade-up">
          <PackageCard
            color="#fff"
            packageImg={packageImg1}
            packageAlt="high-quaity-websites-ecommerce"
            packageName="STARTER"
            packageNameBgColor="#D8F5FF"
            packageNameColor="#000b33"
            features={[
              "Basic UI Design",
              "Site Development",
              "8 Components",
              "Basic Content",
              "Google Analytics Setup",
              "Social Media Links",
              "Contact Form",
              // [
              //   "Social Media Profile Setup",
              //   "Setting Up Facebook, Instagram, LinkedIn, Whatsapp Business profiles",
              // ],
              "Free Hosting",
              "Domain Integration",
              "Free Customer Support For 1 Month",
            ]}
            offPrice="₹11,999"
            origPrice="₹20,000"
            btnBackground="#1EA2D1"
            btnTxtColor="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default Packages;
