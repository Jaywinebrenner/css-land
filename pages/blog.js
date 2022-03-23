import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Blog = ({posts}) => {

    console.log("Posts", posts);
    return (
        <div className="blog">
            <div className="blog__top">
                <Link href="/">
                    <FontAwesomeIcon className="blog-arrow" icon={faArrowLeft} />
                </Link>
                <h1>BLOG</h1>
            </div>
            <div className="blog__post-wrapper">
            {posts.map((p)=> {
                return (
                    <div className="post">
                        <h1>{p.title.rendered}</h1>
                        <p>{p.content.rendered}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Blog;

export async function getServerSideProps() {


  
  
    const res = await fetch('http://localhost:8888/jay-winebrenner-resume-3.0/wp-json/wp/v2/posts');
    const posts = await res.json()
  
    return {
      props: {
        posts
      },
    };
  }