
import React, {useEffect, useState} from 'react';
import Modal from './components/Modal';
import Link from 'next/link';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TopNav from './components/TopNav';

export default function Home({weatherData}) {
  const [description, setDescription] = useState();
const [temp, setTemp] = useState();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



console.log("weather", weatherData)
  
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!modalVisible);

  useEffect(() => {
    setDescription(capitalizeFirstLetter(weatherData.weather[0].description))
    setTemp(weatherData.main.temp)
  });
  

console.log("modal", modalVisible); 
  return (
    <div className="home">

      {/* <div className='home__top'>
        <div className='home__top-left'>
          <Link href="/contextLand">
            <h3>EMPTY</h3>
          </Link>
        </div>
        <div className='home__top-middle'>
          <div onClick={() => toggleModal()} className='home__top-right'>
            <h3>MIDDLE</h3>
          </div>
        </div>
        <div onClick={() => toggleModal()} className='home__top-right'>
          <h3>RIGHT</h3>
        </div>
      </div> */}
      <TopNav/>

      <div className="home__hero">
        <div className="home__hero-left">
          <div className="home__hero-left-top">
              <h1>JAY</h1><h2>WINEBRENNER</h2>
              <div onClick={()=> toggleModal()} className="img-link-wrapper">
                <p>&lt;img/&gt;</p>
              </div>
          </div>
          <div>

     
          <div className="home__hero-left-bottom--one">
            <div >
                  <h3>FULL STACK DEVELOPER SPECIALIZING IN HEADLESS DEVELOPMENT</h3>
              </div>
              <div className="home__hero-left-bottom--two">
                <div className="weather-wrapper">
                  <p>Based in <strong>Portland, Oregon</strong></p>
                   <p>{description}</p>
                   <p>{temp}° F</p>
                   <div className="icon-wrapper">
                   {description && description.toLowerCase().includes("cloud") ?
                   <FontAwesomeIcon className="weather-icon" icon={faCloud} />
                   :
                   <FontAwesomeIcon className="weather-icon"  icon={faSun} />
                  }
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="home__hero-right">
            <h3>LOREM IPSOM IG NAS TOFURM</h3>
        </div>
      </div>

      <div className="home__main">
        <div className="home__main-left">
            <h4>Odio dignissimos</h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        </div>
        <div className="home__main-right">
            <h4>Dolores et quas molestias</h4>
            <p>Oorrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            <h4>Uas molestias</h4>
            <p>Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>

        </div>

      </div>

      <Modal modalVisible={modalVisible} title="Image Modal" toggleModal={toggleModal}></Modal>

    </div>
  )
}


export async function getServerSideProps() {

  const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Portland&units=imperial&APPID=${process.env.WEATHER_API}`)
  let weatherData = await res.json();

  return {
    props: {
      weatherData, 
    },
  };
}
