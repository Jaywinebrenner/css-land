

import React, {useRef, useEffect} from 'react'

const Modal = ({ modalVisible, toggleModal }) => {
    const ref = useRef()

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
          </main>
        </div>
      </div>
      : null
     }
    </>
  );
};

export default Modal;