import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GallerySlider_8 = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        row: 2,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
            <Slider {...settings} >
                <div className='p-4'>
                    <img src='gallery-img-1.jpg' alt="" className="rounded-lg" />
                </div>
                <div className='p-4'>
                    <img src='gallery-img-2.jpg' alt="" className="rounded-lg" />
                </div>
                <div className='p-4'>
                    <img src='gallery-img-3.jpg' alt="" className="rounded-lg" />
                </div>
                <div className='p-4'>
                    <img src='gallery-img-4.jpg' alt="" className="rounded-lg" />
                </div>
            </Slider>
            <Slider {...settings} >
                <div className='p-4'>
                    <img src='gallery-img-5.jpg' alt="" className="rounded-lg" />
                </div>
                <div className='p-4'>
                    <img src='gallery-img-6.jpg' alt="" className="rounded-lg" />
                </div>
                <div className='p-4'>
                    <img src='gallery-img-7.jpg' alt="" className="rounded-lg" />
                </div>
                <div className='p-4'>
                    <img src='gallery-img-8.jpg' alt="" className="rounded-lg" />
                </div>
            </Slider>
        </>
    )
}

export default GallerySlider_8