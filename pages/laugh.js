
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { faFaceLaughSquint, faCircleQuestion, faArrowRotateRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Laugh = () => {

    const [currentJoke, setCurrentJoke ] = useState();
    const [onePartStep, setOnePartStep] = useState(1);
    const [twoPartStep, setTwoPartStep] = useState(1);
    const [loading, setLoading] = useState(false)

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
        console.log("joke use", json)
        setCurrentJoke(json);
        setLoading(false)
    }

    useEffect(() => {
      
    }, []);

    return (
        
        <div className="laugh">
            <div className='laugh__top'>
                <div className="arrow-wrapper">
                <Link href="/bored">
                    <FontAwesomeIcon className="draw-arrow" icon={faArrowLeft} />
                </Link>
                </div>
                <h1>LAUGH</h1>
            </div>
            {twoPartStep === 1 &&!loading &&  <div onClick={()=>getJoke()} className='laugh__icon-wrapper'>
                <FontAwesomeIcon color={"black"} className="laugh__icon-wrapper-icon" size={"7x"}icon={faFaceLaughSquint} />
            </div>}
            {currentJoke && currentJoke.type === 'twopart' &&!loading && 
            <>
            {twoPartStep === 2 && !loading && <div onClick={()=>setTwoPartStep(3)} className='laugh__icon-wrapper'>
                <FontAwesomeIcon color={"black"} className="laugh__icon-wrapper-icon" size={"7x"}icon={faCircleQuestion} />
            </div>}
            {twoPartStep === 3 && !loading && <div onClick={()=>getJoke()}  className='laugh__icon-wrapper'>
                <FontAwesomeIcon color={"black"} className="laugh__icon-wrapper-icon" size={"7x"}icon={faArrowRotateRight} />
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
