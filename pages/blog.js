import { faArrowLeft, faCropSimple, faEject } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Blog = ({posts, cats, obj }) => {

    const [categories, setCategories] = useState();
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeName, setActiveName] = useState("all");

    console.log("All Posts", posts);
    // console.log("posts on blog", posts[0]._embedded['wp:term'][0][0].name);
    console.log("cats", categories);
    // console.log("cats from API", cats);
    console.log("obj", obj);
    // console.log("post cats", postCats)
    // console.log("sortedCategory", sortedCategory)
    // console.log("active Index", activeIndex)
    // console.log("active name", activeName)

    const clickCategory = (index, name) => {
        name = name.toLowerCase();
        setActiveIndex(index);
        setActiveName(name);
    }

    useEffect(() => {
        let catArr = [];
        cats.filter(function(c) {
            return c.slug !== 'uncategorized';
        }).map(function(c) {
            catArr.push(c.slug)
        })
        catArr.unshift("all");
        setCategories(catArr);
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

            {
                obj[activeName].map((p, i) => {
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
            }     
            </div>
        </div>
    )
}

export default Blog;

export async function getServerSideProps() {

    // Create Data object like the following: 
    //  obj = {
    //     “javascript”: [],
    //     “ruby”: [],
    //     "dracula": []
    //     "ect...": []
    //  }

    const obj = {}
    const catRes = await fetch('http://localhost:8888/jay-winebrenner-resume-3.0/wp-json/wp/v2/categories');
    const cats = await catRes.json();

    for (let i = 0; i < cats.length; i++) {
        let catName = cats[i].slug;
        obj[catName] = [];
    }
    obj['all'] = [];

    const res = await fetch('http://localhost:8888/jay-winebrenner-resume-3.0/wp-json/wp/v2/posts?_embed');
    const posts = await res.json();

    for (let i = 0; i < posts.length; i++) {
        let postCats = posts[i]._embedded['wp:term'][0];
        for(let j = 0; j < postCats.length; j++) {
          let currentCat = postCats[j].slug;
          if (obj[currentCat]) {
            let arr = obj[currentCat];
            arr.push(posts[i]);
            obj[currentCat] = arr;
          }
        }
    }
    obj["all"] = posts;

    return {
      props: {
        posts, 
        cats,
        obj
      },
    };
  }

  