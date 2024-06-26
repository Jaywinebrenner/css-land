
import React, {useEffect, useState} from 'react';
import Modal from './components/Modal';
import TopNav from './components/TopNav';
import Tools from './components/Tools';
import Footer from './components/Footer';
import { useSpring, animated, flip } from 'react-spring'


export default function Home({weatherData}) {
  const [description, setDescription] = useState();
  const [temp, setTemp] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  // const [allPropData, setAllPropData] = useState();
  
  // console.log("props on HOME", props);


  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!modalVisible);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    weatherData && setDescription(capitalizeFirstLetter(weatherData.weather[0].description));
    weatherData && setTemp(weatherData.main.temp);
    weatherData && setWeatherIcon("http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png");
    // setAllPropData(props);
  }, []);


  const springProps = useSpring({ 
    to: {  marginLeft: 0, }, 
    from: { marginLeft: -1200,  },
    delay: 300,
    reverse: flip,
  })

  return (
    <div className="home">
      <TopNav/>
      <div className="home__hero">
        <div className="home__hero-left">
          <div className="home__hero-left-top">
          <animated.div style={springProps}><h1>JAY</h1><h2>WINEBRENNER</h2></animated.div>
              <div onClick={()=> toggleModal()} className="img-link-wrapper">
                <p>&lt;img/&gt;</p>
              </div>
          </div>
          <div>

     
          <div className="home__hero-left-bottom--one">
            <div className='deployed'>
                  <h3>WEB DEVELOPER SPECIALIZING IN REACT & WORDPRESS</h3>
                  <p>*Well, NextJs and Custom WordPress Theme Development to be specific</p>
              </div>
              <div className="home__hero-left-bottom--two">
                <div className="weather-wrapper">
                  <p>Based in <strong>Portland, Oregon</strong></p>
                   {description && <p>{description}</p>}
                   {temp && <p>{temp}° F</p>}
                   {weatherIcon && <div className="icon-wrapper">
                      <img loading="lazy" src={weatherIcon}/>
                   </div>}
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
            {/* <h4>{props && props.intro.title}</h4> */}
            <h4>HELLO</h4>
            {/* <div dangerouslySetInnerHTML={{ __html: props && props.intro.body}}/> */}
            <div><p>I am a passionate code lover and Full Stack Developer with an award winning background in filmmaking and advertising production. I specialize in Next.js / React and Custom WordPress Theme creation for dynamic, beautiful and performant web applications.</p></div>
                           
        </div>
        <div className="home__main-right">
          <Tools/>
        </div>
      </div>
      <Modal modalVisible={modalVisible} title="Image" toggleModal={toggleModal}></Modal>
      <Footer/>
    </div>
  )
}


export async function getServerSideProps() {

  const weatherRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Portland&units=imperial&APPID=${process.env.WEATHER_API}`)
  let weatherData = await weatherRes.json();

  // const marsRes = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${process.env.MARS_API}&feedtype=json&ver=1.0`)
  // let marsData = await marsRes.json();


  // const res = await fetch(`${process.env.API_BASE_JAYTOWN_TANNER_EUSTICE_DOT_COM}pages`);
  // let props = await res && res.json()

  // This is to ensure we are getting the correct array object from the pages props call
  // console.log("props", props)
  // props && props.map((x) => {
  //   if(x.slug === "home") {
  //     props = x.acf;
  //   }
  //  })

  return {
    props: {
      weatherData, 
      // props
    },
  };
}
