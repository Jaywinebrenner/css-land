import { faArrowLeft, faCropSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Blog = ({posts, cats }) => {

    const [categories, setCategories] = useState();
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeName, setActiveName] = useState();
    const [allPosts, setAllPosts] = useState(posts)

    console.log("All Posts", posts);
    console.log("posts on blog", posts[0]._embedded['wp:term'][0][0].name);
    console.log("cats", categories);
    // console.log("cats from API", cats);
    console.log("active Index", activeIndex)
    console.log("active name", activeName)

    const clickCategory = (index, name) => {
        setActiveIndex(index);
        setActiveName(name);
    }



    useEffect(() => {
        setActiveName("All");
        //Remove duplicate instances of Categories from the WP Object.
        // const getArrayOfUniqueCats = () => {
        //     let arr = []
        //     posts.map((p) => {
        //         // console.log("cat?", p._embedded['wp:term'][0])

        //         arr.push(p._embedded['wp:term'][0][0].name)
        //     })
        //     arr = arr.filter((item, 
        //         index) => arr.indexOf(item) === index);
        //         arr.unshift("All")
        //     setCategories(arr)
        // }
        // getArrayOfUniqueCats()

        let catArr = [];
        cats.filter(function(c) {
            return c.name !== 'Uncategorized';
        }).map(function(c) {
            catArr.push(c.name)
        })
        setCategories(catArr)

      }, []);

    return (
        <div className="blog">
            <div className="blog__top">
                <Link href="/">
                    <FontAwesomeIcon className="blog-arrow" icon={faArrowLeft} />
                </Link>
                <h1>BLOG</h1>
            </div>
            <div className="blog__filter-wrapper">
                <h2>FILTER BY CATEGORY</h2>

                {categories && categories.map((c, i)=> {
                    return (
                        <p onClick={() => clickCategory(i, c)} key={`category-key=${i}`} className={`category ${activeIndex === i ? "active" : ""}`}>{c}</p>
                    )
                })}
            </div>
            <div className="blog__post-wrapper">
            {/* {allPosts && allPosts.map((p, i)=> {
                return (
                    <div key={`post-key=${i}`} className="blog__post">
                        <div className="post-title-wrapper">
                           
                            <Link href={`/blog/${p.slug}`}>
                                <a>
                                    <h1>{p.title.rendered}</h1>
                                </a>
                            </Link>
                        </div>
                        <div className="post-image-wrapper">
                           {<img src={p.acf.image.url}/>}
                        </div>
                    </div>
                )
            })} */}
            {
                activeName === "All" ? 
                allPosts && allPosts.map((p, i)=> {
                    return (
                        <div key={`post-key=${i}`} className="blog__post">
                            <div className="post-title-wrapper">
                               
                                <Link href={`/blog/${p.slug}`}>
                                    <a>
                                        <h1>{p.title.rendered}</h1>
                                    </a>
                                </Link>
                            </div>
                            <div className="post-image-wrapper">
                               {<img src={p.acf.image.url}/>}
                            </div>
                        </div>
                    )
                })

                :
            
            allPosts && allPosts.filter(post => post._embedded['wp:term'][0][0].name === activeName).map((p, i) => {
                return (
                    <div key={`post-key=${i}`} className="blog__post">
                        <div className="post-title-wrapper">
                           
                            <Link href={`/blog/${p.slug}`}>
                                <a>
                                    <h1>{p.title.rendered}</h1>
                                </a>
                            </Link>
                        </div>
                        <div className="post-image-wrapper">
                           {<img src={p.acf.image.url}/>}
                        </div>
                    </div>
                )
            }
            )}

                
            </div>
        </div>
    )
}

export default Blog;

export async function getServerSideProps() {

    const res = await fetch('http://localhost:8888/jay-winebrenner-resume-3.0/wp-json/wp/v2/posts?_embed');
    const posts = await res.json();

    const catRes = await fetch('http://localhost:8888/jay-winebrenner-resume-3.0/wp-json/wp/v2/categories');
    const cats = await catRes.json();

    return {
      props: {
        posts, 
        cats 

      },
    };
  }

  