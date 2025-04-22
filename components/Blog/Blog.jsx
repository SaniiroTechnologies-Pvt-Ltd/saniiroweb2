import React from "react";
import BlogBanner from "./parts/BlogBanner";
import Nav from "../Navbar/Nav"; 
import BlogFeed from "./parts/BlogFeed";

const Blog = () => {
  return (
    <>
      <Nav />
      <BlogBanner GrayBanner={false} />
      <BlogFeed />
    </>
  );
};

export default Blog;
