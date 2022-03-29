
import React, {useEffect, useState} from 'react';
import Modal from './components/Modal';
import TopNav from './components/TopNav';
import Tools from './components/Tools';
import Footer from './components/Footer'


export default function Home({weatherData, props}) {
  const [description, setDescription] = useState();
  const [temp, setTemp] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [allPropData, setAllPropData] = useState();
  
  console.log("props on HOME", props);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!modalVisible);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setDescription(capitalizeFirstLetter(weatherData.weather[0].description));
    setTemp(weatherData.main.temp);
    setWeatherIcon("http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png");
    setAllPropData(props);
  }, []);


  return (
    <div className="home">
      <TopNav props={props}/>

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
                  <h3>THIS SITE USES WORDPRESS AS A HEADLESS CMS WITH NEXT.JS</h3>
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
            <h3>FEEL FREE TO REACH OUT ABOUT ANYTHING</h3>
            <p>jaywinebrenner@gmail.com</p>
        </div>
      </div>

      <div className="home__main">
        <div className="home__main-left">
            <h4>{props.intro.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: props.intro.body}}/>
                           
        </div>
        <div className="home__main-right">
          <Tools props={props}/>
        </div>
      </div>
      <Modal props={props} modalVisible={modalVisible} title="Image" toggleModal={toggleModal}></Modal>
      <Footer props={props} />
    </div>
  )
}


export async function getServerSideProps() {

  const weatherRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Portland&units=imperial&APPID=${process.env.WEATHER_API}`)
  let weatherData = await weatherRes.json();


  const res = await fetch('http://localhost:8888/jay-winebrenner-resume-3.0/wp-json/wp/v2/pages');
  let props = await res.json()

  // This is to ensure we are getting the correct array object from the pages props call
  props.map((x) => {
    if(x.slug === "home") {
      props = x.acf;
    }
   })

  return {
    props: {
      weatherData, 
      props
    },
  };
}
