
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { faFaceLaughSquint, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from './components/Modal';

const Bored = () => {


    useEffect(() => {
      
    }, []);

    return (
        <div className="bored">
            <Link href="/draw">
                <h1>DRAW</h1>
            </Link>
            <Link href="/laugh">
                <h1>LAUGH</h1>
            </Link>
            <Link href="/movies">
                <h1>CINEMA</h1>
            </Link>
            <Link href="/">
                <h1>HOME</h1>
            </Link>
            
        </div>
      )
}

export default Bored;

