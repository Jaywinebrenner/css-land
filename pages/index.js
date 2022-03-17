
import React, {useEffect, useState} from 'react';
import Modal from './components/Modal';
import TopNav from './components/TopNav';

export default function Home({weatherData, props}) {
  const [description, setDescription] = useState();
  const [temp, setTemp] = useState();
  const [weatherIcon, setWeatherIcon] = useState();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!modalVisible);

  useEffect(() => {
    setDescription(capitalizeFirstLetter(weatherData.weather[0].description));
    setTemp(weatherData.main.temp);
    setWeatherIcon("http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png");
  });
  

  return (
    <div className="home">
      <TopNav props={props}/>

      <div className="home__hero">
        <div className="home__hero-left">
          <div className="home__hero-left-top">
              <h1>JAY</h1><h2>WINEBR</h2><h2>ENNER</h2>
              <div onClick={()=> toggleModal()} className="img-link-wrapper">
                <p>&lt;img/&gt;</p>
              </div>
          </div>
          <div>

     
          <div className="home__hero-left-bottom--one">
            <div >
                  <h3>THIS SITE USES WORDPRESS AS HEADLESS CMS WITH NEXT.JS</h3>
              </div>
              <div className="home__hero-left-bottom--two">
                <div className="weather-wrapper">
                  <p>Based in <strong>Portland, Oregon</strong></p>
                   <p>{description}</p>
                   <p>{temp}° F</p>
                   <div className="icon-wrapper">
                      <img src={weatherIcon}/>
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
            <p>Full stack developer with a passion for code, problem solving and creative collaboration with an award winning background in filmmaking and advertising.</p>
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

  const weatherRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Portland&units=imperial&APPID=${process.env.WEATHER_API}`)
  let weatherData = await weatherRes.json();


  const res = await fetch('http://localhost:8888/jay-winebrenner-resume-3.0/wp-json/wp/v2/pages');
  const props = await res.json()

  return {
    props: {
      weatherData, 
      props
    },
  };
}
