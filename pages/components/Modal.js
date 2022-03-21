

import React, {useRef, useEffect} from 'react'

const Modal = ({ modalVisible, toggleModal, title, props }) => {
    const ref = useRef();


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

                {title === "Image" && props ? <img src="jay.jpeg"/> : null}
                {title === "Education" && props ? 
                  <div className="education-modal">
                      <h3>EDUCATION</h3>
                      <h1>{props && props[0].acf.education.title}</h1>
                      <div dangerouslySetInnerHTML={{ __html: props[0].acf.education.body}}/>
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