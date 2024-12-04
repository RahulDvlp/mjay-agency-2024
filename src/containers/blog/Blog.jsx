import React, { useState, useEffect } from "react";
import "./blog.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/blogs?populate=*")
      .then((response) => {
        console.log(response);
        if (response.data && response.data.data) {
          setBlogs(response.data.data);
        } else {
          console.error("Unexpected API response structure:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const getTruncatedContent = (contentArray, maxLength) => {
    if (!contentArray || contentArray.length === 0)
      return "No content available.";

    const fullText = contentArray
      .map((node) =>
        node.type === "paragraph"
          ? node.children.map((child) => child.text).join("")
          : ""
      )
      .join(" ");

    return fullText.length > maxLength
      ? fullText.substring(0, maxLength) + "..."
      : fullText;
  };

  return (
    <div className="blog_div">
      <div className="blog_posts">
        {blogs.length > 0 ? (
          blogs.map((blog) => {
            const { id, title, alttext, content, coverimage, published, slug } =
              blog || {};

            const coverImageUrl = coverimage?.[0]?.url
              ? `http://localhost:1337${coverimage[0].url}`
              : null;

            const altText = alttext || "Blog Image";

            return (
              <div key={id} className="blog_card">
                {coverImageUrl && (
                  <img
                    src={coverImageUrl}
                    alt={altText}
                    className="blog_cover_image"
                  />
                )}
                <h2>{title || "Untitled"}</h2>
                <p>{getTruncatedContent(content, 200)}</p>
                <Link to={`/blogs/${slug}`} className="read_more_btn">
                  Read More
                </Link>
                {/* {published && <small>Published on: {published}</small>} */}
              </div>
            );
          })
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
