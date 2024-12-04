import React from "react";
import { Helmet } from "react-helmet";
import { Blog, BlogHero } from "../containers";
import { Footer, Navbar } from "../components";
const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <BlogHero BlogHero="Our Blog" />
      <Blog />
      <Footer />
    </div>
  );
};

export default BlogPage;
