import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Blog = ({posts}) => {
    console.log("posts", posts);
    console.log("URL", posts[0]._embedded['wp:featuredmedia'][0].source_url);
    return (
        <div className="blog">
            <div className="blog__top">
                <Link href="/">
                    <FontAwesomeIcon className="blog-arrow" icon={faArrowLeft} />
                </Link>
                <h1>BLOG</h1>
            </div>
            <div className="blog__filter-wrapper"><h2>FILTER BY CATAGORY</h2></div>
            <div className="blog__post-wrapper">
            {posts.map((p, i)=> {
                return (
                    <div key={`post-key=${i}`} className="post">
                        <div className="post-title-wrapper">
                            <h1>{p.title.rendered}</h1>
                        </div>
                        {/* <p>{p.content.rendered}</p> */}
                        <div className="post-image-wrapper">
                            <img src={p._embedded['wp:featuredmedia'][0].source_url}/>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Blog;

export async function getServerSideProps() {


  
  
    const res = await fetch('http://localhost:8888/jay-winebrenner-resume-3.0/wp-json/wp/v2/posts?_embed');
    const posts = await res.json()
  
    return {
      props: {
        posts
      },
    };
  }