
import React, {useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';
import projectsData from '../../data/projectsData';

export default function ProjectSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div id="projects-id" className="slider">
            <div className="slider__title-wrapper">
                <h1 className="slider__title">PROJECTS</h1>
            </div>

            <Slider {...settings}>
                {
                    projectsData &&
                    projectsData.map((s, i) => {
                        return (
                            <div key={`slider-key=${i}`} className="slider__slide">
                                <img src={s.image}/>
                                <div className="slider__text-wrapper">
                                <Link href={s.url}>
                                    <a target="_blank" rel="noreferrer"><h2>{s.title}</h2></a>
                                </Link>
                                <div>
                                    <p>{s.body}{s.link && <a target="_blank" rel="noreferrer" href={s.link.url}>{s.link.text}</a>}</p>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }
                </Slider> 

        </div>
    )
  }