import React from 'react';
import Slider from 'react-slick';

const Bannerstart = () => {
    const img=[
        {
            "id":"1",
            "url":"https://i.ibb.co/xmH5xfX/Screenshot-20230215-070607.png"
        }
        ,
        {
            "id":"2",
            "url":"https://i.ibb.co/Hx2grC5/Screenshot-20230301-041329.png"
        }
        ,
        {
            "id":"3",
            "url":"https://i.ibb.co/Ny7WJz1/Screenshot-20230301-041536.png"
        }
        ,
        {
            "id":"4",
            "url":" https://i.ibb.co/HgJwxd0/Screenshot-20230215-070740.png"
        }
        ,
        {
            "id":"5",
            "url":"https://i.ibb.co/JRpnhS6/Screenshot-20230215-070627.png"
        }
        ,
        {
            "id":"6",
            "url":"https://i.ibb.co/kmDY3s2/Screenshot-20230215-070641.png"
        }
        ,
        {
            "id":"7",
            "url":"https://i.ibb.co/qdww3jk/Screenshot-20230215-070717.png"
        }
        ,
        {
            "id":"8",
            "url":"https://i.ibb.co/23fVtRn/Screenshot-20230215-070700.png"
        }
        ,
        {
            "id":"9",
            "url":"https://i.ibb.co/T4Gtr1s/Screenshot-20230215-070805.png"
        }
    ]
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
    return (
        <div className="overflow-hidden w-full">
            <Slider {...settings}>
                {
                    img.map(x=>
                        <div>
                        <img src={x.url} alt="" className="w-full h-96"></img>
                        </div>
                        )
                }
           
                </Slider>
            
        </div>
    );
};

export default Bannerstart;