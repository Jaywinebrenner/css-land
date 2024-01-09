

import React, {useRef, useEffect} from 'react'

import awardsData from '../../data/awardsData';
import otherExperienceData from '../../data/otherExperienceData';

const Modal = ({ modalVisible, toggleModal, title  }) => {
    const ref = useRef();

    console.log("title", title);

    // let audio = new Audio("/christmas.mp3")
    // const start = () => {
    //   audio.play()
    // }

    // console.log("PROPS ON MODAL", props)

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (modalVisible && ref.current && !ref.current.contains(e.target)) {
              toggleModal();
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [modalVisible])

      const renderOtherExperienceLinks = (e) => {
        if (e.links) {
          return e.links.map((link, index) => (
            <a target="_blank" className='other-exp-a-tag' key={`link-${index}`} href={link.url}>
              {link.name}
            </a>
          ));
        } else {
          return null;
        }
      };

      const renderOtherExperienceBullets = (b) => {
        return b.map((bullet, index) => (
          <li key={`bullet-${index}`}>{bullet}</li>
        ));
      };
      


  return (
    <>
     {
     modalVisible ?
     
     <div  className="modalContainer">
        <div ref={ref} className="modal" >
          <main  className="modal_content">
              <div onClick={()=> toggleModal()} className="x">x</div>
              <div 
              className={`other-experience-wrapper ${title === "Awards" ? "awards-wrapper" : ""}`}
              style={{ display: title === "Education" ? 'none' : 'block' }}
              >

                    {title === "Awards" && <h1>AWARDS:</h1>}
                    <ul>
                  {title === "Awards" ? 
                  awardsData.map((e, i) => {
                    return (
                        <li key={`award-info-key=${i}`}>{e}</li>
                          
                          )
                        })
                        
                        : null}
                        </ul>

                 {title === "Other Experience" && otherExperienceData ? 
                  otherExperienceData.map((e, i) => {
                    console.log("exp",e )
                    return (
                       <div key={`other-exp-key=${i}`} >
                          <h1>{e.title}</h1>
                          {e.links && renderOtherExperienceLinks(e)}
                          <h3>{e.year} </h3>
                          <ul>{renderOtherExperienceBullets(e.bullet)}</ul>
                          <div>

                          </div>
                        </div>
                        )
                      })
                      
                      : null}
                    </div>
                {title === "Image" ? <img src="jay.jpeg"/> : null}
                {title === "Education" ? 
                  <div className="education-modal">
                      <h3>EDUCATION</h3>
                      <h1>Epicodus</h1>
                      <p>2019 - 2020</p>
                      <div>
                        <ul>
                          <li>Completed a full-time, 27 week program in web and open source development</li>
                          <li>Developed strong problem solving , interpersonal and communication skills</li>
                          <li>Learned the tools of open source development in order to succeed.</li>
                          <li>Reinforced my love of technology and passion for the world of code</li>
                        </ul>
                      </div>
                  </div>
                  
                : null
                  }
          </main>
  
          
        </div>
      </div>
      : null
     }
    </>
  );
};

export default Modal;