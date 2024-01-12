
import { faArrowLeft, faFileArrowDown, faTrashCan, faUpDownLeftRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Blog = () => {
    return (
        <section className="blog">
            <div className="blog__wrapper">
            <div className='arrow-wrapper'>            
                <Link href="/">
                    <FontAwesomeIcon className="blog-arrow" icon={faArrowLeft} />
                </Link>
            </div>

            <h1>COMING</h1>
            <h1>SOON</h1>
            </div>

        </section>

    )
}

export default Blog;