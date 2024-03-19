import Head from 'next/head';
import Script from 'next/script'
import { useEffect, useState } from "react";


const Bird = () => {

  const [isMobile, setIsMobile] = useState(false);

  // const reload = () => {
  //   console.log("HI")
  //   if (window !== undefined) {
  //     // browser code
  //     window.location.reload()
  //   }
    
  // }
  // reload();
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
        <div className="background"></div>
        <div className="container">
          {isMobile &&
            <h3 className="message-wrapper">Please view this experience on desktop</h3>
          }
          {!isMobile &&
            <>
              <img loading="lazy" className="bird" src="/flying-crow.gif" alt="bird-img" />
              <div className="message-wrapper">
                <h2 className="message">
                  Press Enter To Start Game
                </h2>
                <p style={{fontSize: "14px", margin: "0"}}>*Click Mouse to Jump</p>
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

export default Bird;
