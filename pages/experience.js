
import React, {useState} from 'react';
import Link from 'next/link';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Experience = () => {

  

    return (
        <div className="experience">
          <div className="experience__top">
            <div className="experience__top-left">
                <h1>DEVELOPMENT</h1>
                {/* <br/> */}
                <h2>EXPERIENCE</h2>
            </div>
            <div className="experience__top-right">
              <Link href="/">
                <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
              </Link>
                
            </div>

          </div>
            
        </div>
      )
}

export default Experience;