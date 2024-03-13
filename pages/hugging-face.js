import Link from 'next/link';
import React, {useState} from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HfInference } from "@huggingface/inference";



const HuggingFace = () => {

    const [imageUrl, setImageUrl] = useState(null);
    const [textInput, setTextInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)


    const handleInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            processImage();
        }
    };

    const handleSubmit = () => {
        processImage();

    };

    const processImage = async () => {
        setIsLoading(true);
        setImageUrl(null);
        setIsError(false)
        const hf = new HfInference(process.env.HUGGING_FACE_API);
    
        try {

            const result = await hf.textToImage({
                inputs: textInput,
                model: 'runwayml/stable-diffusion-v1-5',
                parameters: {
                  negative_prompt: 'blurry',
                }
              })
              const imageUrl = URL.createObjectURL(result);
              setImageUrl(imageUrl);
              setIsLoading(false);
            console.log("result", result);
        } catch (error) {
            console.error("Error:", error);
            setIsLoading(false)
            setIsError(true)
        }
    };

    return (
        <section className='hugging-face'>
            <div className="draw__top">
                <Link href="/bored">
                    <FontAwesomeIcon className="draw-arrow" icon={faArrowLeft} />
                </Link>
                <h1>CREATE AN IMAGE WITH A.I.</h1>
            </div>
            <div className='container'>
                <p className='details'>*This was created using the HuggingFace model runwayml/stable-diffusion-v1-5</p>
                <div className='hf-top'>
                    <input 
                        type="text" 
                        value={textInput} 
                        onChange={handleInputChange} 
                        placeholder="Describe something..." 
                        onKeyDown={handleKeyPress}
                    />
                    <button className={`${isLoading ? 'disabled' : ''}`} onClick={handleSubmit} disabled={isLoading}>SUBMIT</button>
                </div>
                <div className='hf-bottom'>
                {isLoading ? <p>Loading...</p> : null}
                {imageUrl &&
                    <img src={imageUrl} alt="Result Image" /> 
                }
                {isError ? <p>Hmm. The HuggyFace model didn't like those words for some reason. Please try again.</p> : null}
                </div>
            </div>


        </section>
    )
}

export default HuggingFace;