import React from 'react';
import img1 from "../img/anthony-tran-vXymirxr5ac-unsplash.jpg"
import img2 from "../img/baylee-gramling-aMPjULm0XzI-unsplash.jpg"
import img3 from "../img/brooke-cagle-oTweoxMKdkA-unsplash.jpg"
import img4 from "../img/eric-ward-akT1bnnuMMk-unsplash.jpg"
import img5 from "../img/francisco-gonzalez-M8UEJd58GcE-unsplash.jpg"
import img6 from "../img/kristina-tripkovic-nwWUBsW6ud4-unsplash.jpg"
import img7 from "../img/pexels-pixabay-256455.jpg"
import img8 from "../img/sydney-sims-fZ2hMpHIrbI-unsplash.jpg"
const Banner = () => {
    return (
        <div>
  <div className="carousel w-full h-[30vh] lg:h-[60vh]  border-rose-300 border-4">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src={img1} className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-rose-500 border-none btn-sm">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-rose-500 border-none btn-sm">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img8} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-rose-500 border-none btn-sm">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-rose-500 border-none btn-sm">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-rose-500 border-none btn-sm">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-rose-500 border-none btn-sm">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img5} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle bg-rose-500 border-none btn-sm">❮</a> 
      <a href="#slide5" className="btn btn-circle bg-rose-500 border-none btn-sm">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src={img6} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-rose-500 border-none btn-sm">❮</a> 
      <a href="#slide6" className="btn btn-circle bg-rose-500 border-none btn-sm">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img src={img7} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle bg-rose-500 border-none btn-sm">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-rose-500 border-none btn-sm">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;