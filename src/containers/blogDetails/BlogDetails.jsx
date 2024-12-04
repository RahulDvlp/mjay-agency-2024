import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./blogDetails.css";

const BlogDetails = () => {
  const { id: slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://localhost:1337/api/blogs?populate=*&filters[slug][$eq]=${slug}`
      )
      .then((response) => {
        const blogData = response?.data?.data?.[0];
        if (blogData) {
          console.log("Fetched Blog Data:", blogData); // Debug log
          setBlog(blogData);
        } else {
          console.error("Blog data not found:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching blog details:", error));
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  const { title, alttext, content, coverimage, published, blogcontent } =
    blog || {};
  const coverImageUrl = coverimage?.[0]?.url
    ? `http://localhost:1337${coverimage[0].url}`
    : null;

  const renderInline = (node, key) => {
    if (!node) return null;

    if (node.type === "link") {
      const { url, children } = node;
      if (!url) return null;

      return (
        <a
          href={url}
          key={key}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          {children &&
            children.map((child, childKey) => renderInline(child, childKey))}
        </a>
      );
    }

    if (node.text) {
      let content = node.text;

      if (node.bold) content = <strong key={key}>{content}</strong>;
      if (node.italic) content = <em key={key}>{content}</em>;
      if (node.underline) content = <u key={key}>{content}</u>;

      return <span key={key}>{content}</span>;
    }

    return null;
  };

  const renderContent = (contentArray) => {
    if (!contentArray || contentArray.length === 0) {
      return <p>No content available.</p>;
    }

    return contentArray.map((block, index) => {
      const { type, children, format, level } = block;

      switch (type) {
        case "heading":
          const HeadingTag = `h${level}`;
          return (
            <div className="content_block" key={index}>
              <HeadingTag>
                {children.map((child, childKey) =>
                  renderInline(child, childKey)
                )}
              </HeadingTag>
            </div>
          );

        case "paragraph":
          return (
            <div className="content_block" key={index}>
              <p>
                {children.map((child, childIndex) =>
                  renderInline(child, childIndex)
                )}
              </p>
            </div>
          );

        case "list": // Handle lists using the format property
          if (format === "unordered") {
            return (
              <div className="content_block" key={index}>
                <ul>
                  {children.map((listItem, listItemIndex) => (
                    <li key={listItemIndex}>
                      {listItem.children.map((child, childIndex) =>
                        renderInline(child, childIndex)
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          } else if (format === "ordered") {
            return (
              <div className="content_block" key={index}>
                <ol>
                  {children.map((listItem, listItemIndex) => (
                    <li key={listItemIndex}>
                      {listItem.children.map((child, childIndex) =>
                        renderInline(child, childIndex)
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            );
          }
          break;

        default:
          console.warn("Unhandled block type:", block);
          return null;
      }
    });
  };

  const renderDynamicZone = (zone) => {
    console.log("Dynamic Zone Item:", zone);

    if (!zone || zone.length === 0) return null;

    return zone.map((item, index) => {
      const { __component } = item;

      console.log("Dynamic Zone Item+=:", item); // Debugging log

      switch (__component) {
        case "image-container.image-container":
          console.log("Image Block Item Details--:", item); // Log the image block details.
          const imageUrl = item?.image?.url
            ? `http://localhost:1337${item.image.url}`
            : null;

          return (
            <div key={index} className="dynamic_image_block">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={item?.image?.alternativeText || "Blog Image"}
                  className="blog_dynamic_image"
                />
              ) : (
                <p>Image not available</p>
              )}
            </div>
          );

        case "text-block.text-block":
          return (
            <div key={index} className="dynamic_text_block">
              {item.textblock.map((textItem, textIndex) => (
                <div key={textIndex}>{renderContent([textItem])}</div>
              ))}
            </div>
          );

        default:
          console.warn("Unhandled dynamic zone component:", __component);
          return (
            <p key={index} style={{ color: "red" }}>
              Unsupported component: {__component}
            </p>
          );
      }
    });
  };

  return (
    <div className="blog_details">
      {coverImageUrl && (
        <img
          src={coverImageUrl}
          alt={alttext || "Blog Image"}
          className="blog_cover_image"
        />
      )}
      <h1>{title}</h1>
      {renderContent(content)}
      {renderDynamicZone(blogcontent)}
      {published && <small>Published on: {published}</small>}
    </div>
  );
};

export default BlogDetails;
