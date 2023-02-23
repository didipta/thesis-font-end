import React from 'react';
import img1 from "../img/anthony-tran-vXymirxr5ac-unsplash.jpg"
import img2 from "../img/baylee-gramling-aMPjULm0XzI-unsplash.jpg"
import img3 from "../img/brooke-cagle-oTweoxMKdkA-unsplash.jpg"
import img4 from "../img/eric-ward-akT1bnnuMMk-unsplash.jpg"
import img5 from "../img/francisco-gonzalez-M8UEJd58GcE-unsplash.jpg"
import img6 from "../img/kristina-tripkovic-nwWUBsW6ud4-unsplash.jpg"
import img7 from "../img/pexels-pixabay-256455.jpg"
import img8 from "../img/sydney-sims-fZ2hMpHIrbI-unsplash.jpg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  const image=[img1,img2,img3,img4,img5,img6,img7,img8]
    return (
        <div className="overflow-hidden">
            <Slider {...settings}>
            <div>
          <img src={img1} alt="" className="w-full h-96"></img>
          </div>
            <div>
          <img src={img2} alt="" className="w-full h-96"></img>
          </div>
            <div>
          <img src={img3} alt="" className="w-full h-96"></img>
          </div>
            <div>
          <img src={img4} alt="" className="w-full h-96"></img>
          </div>
            <div>
          <img src={img5} alt="" className="w-full h-96"></img>
          </div>
            <div>
          <img src={img6} alt="" className="w-full h-96"></img>
          </div>
            <div>
          <img src={img7} alt="" className="w-full h-96"></img>
          </div>
            <div>
          <img src={img8} alt="" className="w-full h-96"></img>
          </div>
        </Slider>
        </div>
    );
};

export default Banner;