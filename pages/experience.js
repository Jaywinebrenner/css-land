
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { faArrowLeft, faWrench, faDownload} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from './components/Modal';
import otherExperienceData from '../data/otherExperienceData';
import experienceData from '../data/experienceData';

const Experience = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [otherExperience, setOtherExperience] = useState();

  console.log("experienceData", experienceData);

  const toggleModal = () => setModalVisible(!modalVisible);

  console.log("modal vis?", modalVisible)


    useEffect(() => {
      setOtherExperience(otherExperienceData)
      
    }, []);

    return (
        <div className="experience">
          <div className="experience__top">
            <div className="experience__top-left">
                <h1>DEVELOPMENT</h1>
                <h2>EXPERIENCE</h2>
            </div>
            <Link href="/">
              <div className="experience__top-right">
                  <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
              </div>
            </Link>
          </div>
        <div className="experience__middle">
          {experienceData && experienceData.map((exp, i)=> {
            return (
              <div key={`exp-item-key=${i}`} className="experience__item">
                <a style={{color: i === 0 ? "white" : "black"}} href={exp.link} target="_blank" rel="noopener noreferrer">
                  {exp.job}
                </a>
                {exp.subtitle && <p className='subtitle'>(Recently rebranded as DGSF)</p>}
                <h2 style={{color: i === 0 ? "white" : "black"}}>{exp.year}</h2> 
                <ul>
                {exp.details.map((d, j) => (
                  <li style={{color: i === 0 ? "white" : "black"}} key={`detail-key=${j}`}>{d}</li>
                ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="experience__footer">
          <div className="experience__other-exp-wrapper">
           <FontAwesomeIcon className="gear" icon={faWrench} />
            <h1 onClick={()=> toggleModal()}>Non-Dev Experience</h1>
            <FontAwesomeIcon className="download" icon={faDownload} />
            <a className='download-a-tag' href="/resume.pdf" download target="_blank"><h1>Download Current Resume</h1></a>
          </div>
        </div>
        <Modal otherExperience={otherExperience} modalVisible={modalVisible} title="Other Experience" toggleModal={toggleModal}></Modal>

            
        </div>
      )
}

export default Experience;


export async function getServerSideProps() {

  // const res = await fetch(`${process.env.API_BASE_JAYTOWN_TANNER_EUSTICE_DOT_COM}pages`);
  // let props = await res.json();

  // props.map((x) => {
  //   if(x.slug === "experience") {
  //     props = x.acf;
  //     props = props;
  //   }
  //  })

  return {
    props: {
      // props
    },
  };
}