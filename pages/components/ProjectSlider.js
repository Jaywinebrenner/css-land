
import React, {useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link'

export default function ProjectSlider({props}) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div id="projects-id" className="slider">
            <h1 className="slider__title">PROJECTS</h1>
            <div className="slider__checkout-inner-circle"></div>
            <div className="slider__line-one"></div>
            <div className="slider__line-two"></div>
 


            <Slider {...settings}>
                {
                    props &&
                    props[0].acf.slider.map((s, i) => {
                        return (
                            <div key={`slider-key=${i}`} className="slider__slide">
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