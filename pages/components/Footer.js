

import React, {useEffect} from 'react';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {

    useEffect(() => {

      }, [])


  return (
    <div className="footer">
        <div className="footer__top">
            <Link href="https://www.linkedin.com/in/jaywinebrenner/">
                <a target="_blank"> <FontAwesomeIcon color={"black"} className="social" size={"2x"}icon={faLinkedin} /> </a>
            </Link>
            <Link href="https://www.linkedin.com/in/jaywinebrenner/">
                <a target="_blank"> <FontAwesomeIcon color={"black"} className="social" size={"2x"}icon={faGithubSquare} /> </a>
            </Link>
            <Link href="/draw">
                <a> <FontAwesomeIcon color={"black"} className="social" size={"2x"}icon={faSquarePen} /> </a>
            </Link>
        </div>
        <div className="footer__bottom">
            <div className="footer__bottom-left">
                <Link href="/blog">
                    <p>BLOG</p>
                </Link>
            </div>
            <div className="footer__bottom-middle">
                <Link href="/blog">
                    <p>MIDDLE</p>
                </Link>
            </div>
            <div className="footer__bottom-right">
                <Link href="/blog">
                    <p>RIGHT</p>
                </Link>
            </div>
        </div>

    </div>
  );
};

export default Footer;