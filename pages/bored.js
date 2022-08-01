
import React, {useState, useEffect} from 'react';
import Link from 'next/link';

const Bored = () => {


    useEffect(() => {
      
    }, []);

    return (
        <div className="bored">
            <Link href="/">
                <h1>HOME</h1>
            </Link>
            <Link href="/draw">
                <h1>DRAW</h1>
            </Link>
            <Link href="/laugh">
                <h1>LAUGH</h1>
            </Link>
            <Link href="/movies">
                <h1>CINEMA</h1>
            </Link>
            
        </div>
      )
}

export default Bored;

