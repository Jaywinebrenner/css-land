// pages/blog/[...slug].js

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

// Example usage: If the URL is "/blog/post-1/post-2", `slug` will be ["post-1", "post-2"]





// import React, { useEffect } from 'react';
// import Link from 'next/link';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useSpring, animated } from 'react-spring';

// const BlogPost = ({postData}) => {

//   console.log("postData", postData);

//   const springProps = useSpring({ 
//     to: {  transform: "translateY(0%)" }, 
//     from: { transform: "translateY(140%)"  },
//     delay: 100,
//   })

//   return (
    
//     <div className="post">
//       <div className="post__top">
//         <Link href="/blog">
//             <FontAwesomeIcon className="post-arrow" icon={faArrowLeft} />
//         </Link>
//       </div>
//       <animated.div style={springProps}>
//       <div className="post__body">
//         <div className="title-wrapper">
//           <h1>{postData.title.rendered.toUpperCase()}</h1>
//         </div>
//           <img src={postData.acf.image.url}/>
//           <div dangerouslySetInnerHTML={{ __html: postData.acf.body}}/>
//       </div>
//     </animated.div>
    
//     </div>
//   )
// }

// export async function getServerSideProps({ params }) {
//   const res = await fetch(`${process.env.API_BASE_JAYTOWN_TANNER_EUSTICE_DOT_COM}posts?_embed`);

//   const posts = await res.json();

//   let postData = []
//   posts.map((p)=> {
//     if(params.slug[0] === p.slug)
//       postData = p;
//   })

//   return {
//     props: {
//       posts,
//       params,
//       postData
//     },
//   };
// }



// export default BlogPost;
