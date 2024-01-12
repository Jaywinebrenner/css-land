
import React, {useState, useEffect} from 'react';
import Link from 'next/link';

const Bored = () => {


    useEffect(() => {
      
    }, []);

    return (
        <div className="bored">
            <div className='bored-link-wrapper'>
                <Link href="/">
                    <h1>HOME</h1>
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

