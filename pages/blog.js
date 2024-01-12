import React from 'react';

const Blog = ({ slug }) => {
  // `slug` will be an array containing the dynamic segments of the URL
  return (
    <div className="post">
      <h1>My Blog Post</h1>
      <p>This is the content of my blog post with slug: {slug.join('/')}</p>
    </div>
  );
}

export default Blog;




// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { useSpring, animated } from 'react-spring';

// const Blog = ({posts, cats, obj }) => {

//     // const [categories, setCategories] = useState();
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [activeName, setActiveName] = useState("all");

//     const clickCategory = (index, name) => {
//         name = name.toLowerCase();
//         setActiveIndex(index);
//         setActiveName(name);
//     }

//     useEffect(() => {
//         let catArr = [];
//         cats.filter(function(c) {
//             return c.slug !== 'uncategorized';
//         }).map(function(c) {
//             catArr.push(c.slug)
//         })
//         catArr.unshift("all");
//         setCategories(catArr);
//       }, []);

//       const springProps = useSpring({ 
//         to: {  opacity: 1 }, 
//         from: { opacity: 0 },
//         delay: 300,

//       })

//     return (
//         <div className="blog">
//             <div className="blog__top">
//                 <Link href="/">
//                     <FontAwesomeIcon className="blog-arrow" icon={faArrowLeft} />
//                 </Link>
//                 <h1>BLOG</h1>
//             </div>
//             <div className="blog__filter-wrapper">
//                 <h2>FILTER BY CATEGORY</h2>

//                 {categories && categories.map((c, i)=> {
//                     return (
//                         <p onClick={() => clickCategory(i, c)} key={`category-key=${i}`} className={`category ${activeIndex === i ? "active" : ""}`}>{c}</p>
//                     )
//                 })}
//             </div>
//             <div className="blog__post-wrapper">

//             {
//                 obj[activeName].map((p, i) => {
//                     return (
//                         <Link key={`blog-post-key=${i}`} href={`/blog/${p.slug}`}>
//                             <animated.div style={springProps} key={`post-key=${i}`} className="blog__post">
//                                 <div className="post-title-wrapper">
//                                     <a>
//                                         <h1>{p.title.rendered}</h1>
//                                     </a>
//                                 </div>
//                                 <div className="post-image-wrapper">
//                                 {<img src={p.acf.image.url}/>}
//                                 </div>
//                             </animated.div>
//                         </Link>
//                     )
//                 })
//             }     
//             </div>
//         </div>
//     )
// }

// export default Blog;

// export async function getServerSideProps() {

//     // Create Data object like the following: 
//     //  obj = {
//     //     “javascript”: [],
//     //     “ruby”: [],
//     //     "dracula": []
//     //     "ect...": []
//     //  }
//     // in order to filter posts

//     const obj = {}
//     const catRes = await fetch(`${process.env.API_BASE_JAYTOWN_TANNER_EUSTICE_DOT_COM}categories`);
//     const cats = await catRes.json();

//     for (let i = 0; i < cats.length; i++) {
//         let catName = cats[i].slug;
//         obj[catName] = [];
//     }
//     obj['all'] = [];

//     const res = await fetch(`${process.env.API_BASE_JAYTOWN_TANNER_EUSTICE_DOT_COM}posts?_embed`);
    
//     const posts = await res.json();

//     // Push Posts into corresponding Blog Category array: 
//     //  obj = {
//     //     “javascript”: [],
//     //     “ruby”: [],
//     //     "dracula": []
//     //     "ect...": []
//     //  }
//     // in order to filter posts

//     for (let i = 0; i < posts.length; i++) {
//         let postCats = posts[i]._embedded['wp:term'][0];
//         for(let j = 0; j < postCats.length; j++) {
//           let currentCat = postCats[j].slug;
//           if (obj[currentCat]) {
//             let arr = obj[currentCat];
//             arr.push(posts[i]);
//             obj[currentCat] = arr;
//           }
//         }
//     }
//     // Put all the posts into the "all" section which was created / didn't come from the BE
//     obj["all"] = posts;

//     return {
//       props: {
//         posts, 
//         cats,
//         obj
//       },
//     };
//   }

  