import React from 'react';

const BlogPost = ({ slug }) => {
  // `slug` will be an array containing the dynamic segments of the URL
  return (
    <div className="post">
      <h1>My Blog Post</h1>
      <p>This is the content of my blog post with slug: {slug.join('/')}</p>
    </div>
  );
}

export default BlogPost;