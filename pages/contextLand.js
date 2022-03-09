
import React, {useState} from 'react';
import Link from 'next/link';

const ContextLand = () => {

    return (
        <div className="contextland">

          <div className="contextland__left-col">
            <div className="contextland__home-wrapper">
              <Link href="/">
                <h3>HOME</h3>
              </Link>
            </div>
          </div>    


          <div className="contextland__right-col">
          
          </div>       

        </div>
      )
}

export default ContextLand;