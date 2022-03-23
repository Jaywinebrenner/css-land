
import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link';
import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Draw = () => {

    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const start = () => {
        if(isMobile){
            return;
        }
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext("2d");
        context.scale(2,2)
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        contextRef.current = context;
    }

    useEffect(() => {
        window.innerWidth <= 700 ? setIsMobile(true) : null;

        // function checkMobile() {
        //     setIsMobile(window.innerWidth <= 800);
        //   }
        //   checkMobile();
        //   window.addEventListener('resize', checkMobile);
          start();
        //   return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX,offsetY)
        setIsDrawing(true)
    }

    const finishDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false)
    }

    const draw = ({nativeEvent}) => {
        if(!isDrawing) {
            return;
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX,offsetY);
        contextRef.current.stroke();
    }

    function startOver() {
        start();
      }

    // function downloadCanvas() {
    //     var imageData = canvasRef.toDataURL("image/png");
    //     let anchorTag = document.createElement("a");
    //     document.body.appendChild(anchorTag);
    //     anchorTag.href = imageData;
    //     anchorTag.download = "imageData";
    //     anchorTag.click();
    //     document.body.removeChild(anchorTag);
    // }

  

    return (
        <>
       {!isMobile ? <div className="draw">
            <div className="draw__top">
                <Link href="/">
                <FontAwesomeIcon className="draw-arrow" icon={faArrowLeft} />
              </Link>
                <h1>DRAW SOMETHING IF YOU LIKE</h1>
            </div>
            {/* <button onClick={startOver}>Erase Your Masterpiece</button> */}
            <FontAwesomeIcon onClick={startOver} className="draw-trash" icon={faTrashCan} />
            {/* <button className="download" onClick={downloadCanvas}>Download Your Masterpiece</button> */}
            <canvas
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            />
        </div>
        : 
        <div className="use-desktop">
            <h1>Please use a desktop for this drawing experience.</h1>
            <Link href="/">
                <FontAwesomeIcon className="draw-arrow" icon={faArrowLeft} />
            </Link>
        </div>    
    }
        </>
      )
}

export default Draw;