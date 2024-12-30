import React from "react";
import "./Blog.css"; // Update this file for vertical layout

const blogs = [
  {
    id: 1,
    title: "Blog Title 1",
    image: "image/lnmu.webp",
  },
  {
    id: 2,
    title: "Blog Title 2",
    image: "image/Darbhanga-pond.jpg",
  },
  {
    id: 3,
    title: "Blog Title 3",
    image: "image/Fort.jpg",
  },
  {
    id: 4,
    title: "Blog Title 4",
    image: "image/Darbhanga-ghat.webp",
  },
];

const BlogGrid = () => {
  return (
    <div className="blog-grid">
      <h2>Blogs</h2>
      <div className="vertical-grid-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="vertical-blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3 className="blog-title">{blog.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
