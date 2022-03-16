import Head from 'next/head';
import Script from 'next/script'
import { useEffect, useState } from "react";
import Link from 'next/link';


const BirdLand = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth <= 800);
    }

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [])

  return (
    <>
      {!isMobile &&
          <Script src="/birdgame.js" />
      }
      <div className="hc-bird">
        {/* <div className="background"></div> */}
        <div className="container">
          {isMobile &&
            <h3 className="message-wrapper">Please view this experience on desktop</h3>
          }
          {!isMobile &&
            <>
              <img className="bird" src="/gallagher2.png" alt="bird-img" />
              <div className="bird-home">
                  <Link href="/">
                    <h3>HOME</h3>
                </Link>
              </div>
              <div className="message-wrapper">
                <h2 className="message">
                  Press Enter To Start Game
                </h2>
              </div>
              <div className="score">
                <span className="score_title"></span>
                <span className="score_val"></span>
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
};

export default BirdLand;