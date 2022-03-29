

import React, {useEffect, useState} from 'react';
import { faSquarePen, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Modal from './Modal';

const Footer = ({props}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

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
            
                <FontAwesomeIcon onClick={()=> toggleModal()} color={"black"} className="trophy" size={"1.5x"}icon={faTrophy} /> 
            
        </div>
        <div className="footer__bottom">
            <div className="footer__bottom-left">
                <Link href="/blog">
                    <h3>BLOG</h3>
                </Link>
            </div>
        </div>
        <Modal props={props} modalVisible={modalVisible} title="Awards" toggleModal={toggleModal}></Modal>
    </div>
  );
};

export default Footer;