

import React, {useRef, useEffect} from 'react'

const Modal = ({ modalVisible, toggleModal, title }) => {
    const ref = useRef();

  console.log("title", title);

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
              <img src="jay.jpeg"/>
          </main>
  
          
        </div>
      </div>
      : null
     }
    </>
  );
};

export default Modal;