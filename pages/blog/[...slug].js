import React, { useEffect } from 'react';
import Link from 'next/link';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BlogPost = ({postData}) => {

  console.log("postData", postData);

  return (
    <div className="post">
      <div className="post__top">
        <Link href="/blog">
            <FontAwesomeIcon className="post-arrow" icon={faArrowLeft} />
        </Link>
      </div>
      <div className="post__body">
        <div className="title-wrapper">
          <h1>{postData.title.rendered.toUpperCase()}</h1>
        </div>
          <img src={postData._embedded['wp:featuredmedia'][0].source_url}/>
          <p>{postData.content.rendered}</p>
      </div>
      
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch('http://localhost:8888/jay-winebrenner-resume-3.0/wp-json/wp/v2/posts?_embed');
  const posts = await res.json();

  let postData = []
  posts.map((p)=> {
    if(params.slug[0] === p.slug)
      postData = p;
  })

  return {
    props: {
      posts,
      params,
      postData
    },
  };
}



export default BlogPost;
