import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import img1 from "../img/pexels-pixabay-256455.jpg"

const ReactBanner = () => {
    
    return (
        <div>
            
            <Slider autoplay={2000}>
            <div>
            <img src={img1} className="w-full " />  
            </div>
            <div>
            <img src={img1} className="w-full  " />  
            </div>
            <div>
            <img src={img1} className="w-full " />  
            </div>
           </Slider>
           
          
        </div>
    );
};

export default ReactBanner;