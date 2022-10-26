
import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import { faFaceLaughSquint, faCircleQuestion, faDrum, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Laugh = () => {

    const [currentJoke, setCurrentJoke ] = useState();
    const [twoPartStep, setTwoPartStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const audio = useRef(
        typeof Audio !== "undefined" ? new Audio("../rimshot.mp3") : "undefined"
      );
      
      const start = () => {
        audio.current?.play();
      };


console.log("joke", currentJoke)

    const getJoke = async () => {
        setLoading(true);
        const response = await fetch('https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
        const json = await response.json();
        if (json.type === 'twopart') {
            setTwoPartStep(2)
        } else {
            getJoke()
        }
        setCurrentJoke(json);
        setLoading(false)
    }

    useEffect(() => {
    }, []);

    return (
        
        <div className="laugh">
            <div className='laugh__top'>
                <Link href="/bored">
                <div className="arrow-wrapper">
                    <FontAwesomeIcon className="draw-arrow" icon={faArrowLeft} />
                </div>
                </Link>
                <h1>HA HA</h1>
            </div>
            {loading && <div className='laugh__icon-wrapper'>
                <img src="/loader.gif"/>
            </div>}
            {twoPartStep === 1 && !loading &&  <div onClick={()=>getJoke()} className='laugh__icon-wrapper'>
                <FontAwesomeIcon color={"black"} className="laugh__icon-wrapper-icon" size={"7x"}icon={faFaceLaughSquint} />
            </div>}
            {currentJoke && currentJoke.type === 'twopart' &&!loading && 
            <>
            {twoPartStep === 2 && !loading && <div onClick={() => { setTwoPartStep(3); start();}} className='laugh__icon-wrapper'>
                <FontAwesomeIcon color={"black"} className="laugh__icon-wrapper-icon" size={"7x"}icon={faCircleQuestion} />
            </div>}
            {twoPartStep === 3 && !loading && <div onClick={()=>getJoke()}  className='laugh__icon-wrapper'>
                <FontAwesomeIcon color={"black"} className="laugh__icon-wrapper-icon" size={"7x"}icon={faDrum} />
            </div>}
            {twoPartStep === 2 && !loading && <div className='laugh__setup-wrapper'>
                <h2>{currentJoke.setup}</h2>
            </div>}
            {twoPartStep === 3 && !loading && <div className='laugh__delivery'>
                <h2>{currentJoke.delivery}</h2>
            </div>}
            </>}

        </div>
      )
}

export default Laugh;

