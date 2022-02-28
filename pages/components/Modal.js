

import React, {useRef, useEffect} from 'react'

const Modal = ({ show, close }) => {
    const ref = useRef()

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (show && ref.current && !ref.current.contains(e.target)) {
              console.log("made it");
            close()
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [show])


  return (
    <>
     {
     show ?
     
     <div  className="modalContainer">
        <div ref={ref} className="modal" >
          <main  className="modal_content">
              <div onClick={()=> close()} className="x">x</div>
          </main>
        </div>
      </div>
      : null
     }
    </>
  );
};

export default Modal;