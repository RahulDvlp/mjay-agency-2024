import React from "react";
import "./packages.css";
import { PackageCard } from "../../components";
import packageImg1 from "../../assets/package1.svg";
import packageImg2 from "../../assets/package2.svg";
import packageImg3 from "../../assets/package3.svg";

const Packages = () => {
  return (
    <div className="packages">
      <div className="title">
        <h1>Pricing</h1>
        <div className="bar"></div>
      </div>
      <div className="packages_container">
        <div className="package_wrapper">
          <PackageCard
            color="#fff"
            packageImg={packageImg3}
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
              "14 Digital content for each social media platform",
              "Google business account setup",
              "Social media profile optimization",
              "Domain integration",
              "Free customer support for 5 months",
            ]}
            offPrice="₹79,999"
            origPrice="₹110,000"
            btnBackground="#ffe500"
            btnTxtColor="#000"
          />
        </div>
        <div className="package_wrapper">
          <PackageCard
            // color="#FFFEFC"
            color="#fff"
            packageImg={packageImg2}
            packageName="PREMIUM"
            packageNameBgColor="#D4C8FE"
            packageNameColor="#000b33"
            features={[
              "Premium UI Design",
              "Site Development",
              "Tailored Site Structure and Components",
              "SEO Optimized Content for Google Ranking",
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
              "7 Digital content for each social media platform",
              "Google business account setup",
              "Social media profile optimization",
              "Domain integration",
              "Free customer support for 3 months",
            ]}
            offPrice="₹49,999"
            origPrice="₹80,000"
            btnBackground="#4218DA"
            btnTxtColor="#fff"
          />
        </div>
        <div className="package_wrapper">
          <PackageCard
            color="#fff"
            packageImg={packageImg1}
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
              [
                "Social Media Profile Setup",
                "Setting Up Facebook, Instagram, LinkedIn, Whatsapp Business profiles",
              ],
              "Domain Integration",
              "Free Customer Support For 1 Month",
            ]}
            offPrice="₹24,999"
            origPrice="₹40,000"
            btnBackground="#1EA2D1"
            btnTxtColor="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default Packages;
