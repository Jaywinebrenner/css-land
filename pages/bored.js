
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { faArrowLeft, faFileArrowDown, faTrashCan, faUpDownLeftRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Bored = () => {


    useEffect(() => {
      
    }, []);

    return (
        <div className="bored">
            <div className='bored-link-wrapper'>
                <Link href="/">
                    <FontAwesomeIcon className="bored-arrow" icon={faArrowLeft} />
                </Link>
            </div>
            <div className='bored-link-wrapper'>
                <Link href="/today">
                    <h1>TODAY</h1>
                </Link>
            </div>
            <div className='bored-link-wrapper'>
                <Link href="/hugging-face">
                    <h1>IMAGE</h1>
                </Link>
            </div>
            <div className='bored-link-wrapper'>
                <Link href="/draw">
                    <h1>DRAW</h1>
                </Link>
            </div>
            
            <div className='bored-link-wrapper'>
                <Link href="/laugh">
                    <h1>HA HA</h1>
                </Link>
            </div>
            <div className='bored-link-wrapper'>
                <Link href="/movies">
                    <h1>CINEMA</h1>
                </Link>
            </div>
            <div className='bored-link-wrapper'>
                <Link href="/bird">
                    <h1>BIRD</h1>
                </Link>
            </div>
            
        </div>
      )
}

export default Bored;

