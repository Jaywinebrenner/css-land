

import React, {useRef, useEffect} from 'react'

const Modal = ({ modalVisible, toggleModal, title, props, otherExperience }) => {
    const ref = useRef();

    // let audio = new Audio("/christmas.mp3")
    // const start = () => {
    //   audio.play()
    // }

    console.log("PROPS ON MODAL", props)

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


  return (
    <>
     {
     modalVisible ?
     
     <div  className="modalContainer">
        <div ref={ref} className="modal" >
          <main  className="modal_content">
              <div onClick={()=> toggleModal()} className="x">x</div>
              <div className={`other-experience-wrapper ${title === "Awards" ? "awards-wrapper" : ""}`}>

                 {title === "Awards" && props ? 
                  props.award.map((e, i) => {
                    return (
                          <div key={`award-info-key=${i}`} dangerouslySetInnerHTML={{ __html: e.award_info}}/>

                        )
                      })
                      
                      : null}


                 {title === "Other Experience" && otherExperience ? 
                  otherExperience.map((e, i) => {
                    return (
                       <div key={`other-exp-key=${i}`} >
                          <h1>{e.title}</h1>
                          <div dangerouslySetInnerHTML={{ __html: e.body}}/>
                        </div>
                        )
                      })
                      
                      : null}
                    </div>
                {title === "Image" && props ? <img src="jay.jpeg"/> : null}
                {title === "Education" && props ? 
                  <div className="education-modal">
                      <h3>EDUCATION</h3>
                      <h1>{props && props.education.title}</h1>
                      <div dangerouslySetInnerHTML={{ __html: props.education.body}}/>
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