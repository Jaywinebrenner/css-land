
import React, {useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link'

export default function ProjectSlider({props}) {
    console.log("props on slider", props[0].acf.slider);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div id="projects-id" className="slider">
            <h1 className="slider__title">Projects</h1>
            <div className="slider__checkout-circle">
                {/* <h6>Check this project out!</h6> */}
            </div>
            <div className="slider__checkout-inner-circle"></div>
            <div className="slider__line-one"></div>
            <div className="slider__line-two"></div>
            {/* <Slider {...settings}>
     
            <div className="slider__slide">
                RENDERED
             
                <div className="slider__text-wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png"/>
                 <h2>zFART</h2>
        
                    <p>AFART</p>
                </div>
            </div>
            <div className="slider__slide">
                RENDERED
             
                <div className="slider__text-wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png"/>
                 <h2>zFART</h2>
        
                    <p>AFART</p>
                </div>
            </div>

                </Slider>  */}


            <Slider {...settings}>
                {
                    props &&
                    props[0].acf.slider.map((s) => {
                        return (
                            <div className="slider__slide">
                                <img src={s.image.url}/>
                                <div className="slider__text-wrapper">
                                <Link href={s.url}>
                                    <a target="_blank"><h2>{s.title}</h2></a>
                                </Link>
                                <div dangerouslySetInnerHTML={{ __html: s.body}}/>
                                </div>
                            </div>
                        )
                    })
                }
                </Slider> 

        </div>
    )
  }