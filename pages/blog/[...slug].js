import React, { useEffect } from 'react';



const BlogPost = ({params, posts, test}) => {

  console.log("params", params);
  console.log("posts", posts);
  console.log("test", test);

  return (

      <div>
        <h1>BLOG POST</h1>
      </div>

  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch('http://localhost:8888/jay-winebrenner-resume-3.0/wp-json/wp/v2/posts');
  const posts = await res.json();


  const test = params.slug;

  return {
    props: {
      posts,
      params,
      test
    },
  };
}



export default BlogPost;
