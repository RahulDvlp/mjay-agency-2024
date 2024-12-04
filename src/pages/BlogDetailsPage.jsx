import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import { BlogDetails } from "../containers";

const BlogDetailsPage = () => {
  return (
    <div>
      <Navbar />
      <BlogDetails />
      <Footer />
    </div>
  );
};

export default BlogDetailsPage;
