import React from 'react';
import Slider from "react-slick";
import gallery_img_1 from "../assets/gallery-img-1.jpg"
import gallery_img_2 from "../assets/gallery-img-2.jpg"
import gallery_img_3 from "../assets/gallery-img-3.jpg"
import gallery_img_4 from "../assets/gallery-img-4.jpg"
import gallery_img_5 from "../assets/gallery-img-5.jpg"
import gallery_img_6 from "../assets/gallery-img-6.jpg"
import gallery_img_7 from "../assets/gallery-img-7.jpg"
import gallery_img_8 from "../assets/gallery-img-8.jpg"
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
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <Slider {...settings}>
                <div className="p-2 sm:p-4">
                    <img
                        src={gallery_img_1}
                        alt=""
                        className="rounded-lg w-full h-auto sm:h-48 md:h-64 lg:h-72 object-cover"
                    />
                </div>
                <div className="p-2 sm:p-4">
                    <img
                        src={gallery_img_2}
                        alt=""
                        className="rounded-lg w-full h-auto sm:h-48 md:h-64 lg:h-72 object-cover"
                    />
                </div>
                <div className="p-2 sm:p-4">
                    <img
                        src={gallery_img_3}
                        alt=""
                        className="rounded-lg w-full h-auto sm:h-48 md:h-64 lg:h-72 object-cover"
                    />
                </div>
                <div className="p-2 sm:p-4">
                    <img
                        src={gallery_img_4}
                        alt=""
                        className="rounded-lg w-full h-auto sm:h-48 md:h-64 lg:h-72 object-cover"
                    />
                </div>
            </Slider>
            <Slider {...settings}>
                <div className="p-2 sm:p-4">
                    <img
                        src={gallery_img_5}
                        alt=""
                        className="rounded-lg w-full h-auto sm:h-48 md:h-64 lg:h-72 object-cover"
                    />
                </div>
                <div className="p-2 sm:p-4">
                    <img
                        src={gallery_img_6}
                        alt=""
                        className="rounded-lg w-full h-auto sm:h-48 md:h-64 lg:h-72 object-cover"
                    />
                </div>
                <div className="p-2 sm:p-4">
                    <img
                        src={gallery_img_7}
                        alt=""
                        className="rounded-lg w-full h-auto sm:h-48 md:h-64 lg:h-72 object-cover"
                    />
                </div>
                <div className="p-2 sm:p-4">
                    <img
                        src={gallery_img_8}
                        alt=""
                        className="rounded-lg w-full h-auto sm:h-48 md:h-64 lg:h-72 object-cover"
                    />
                </div>
            </Slider>
        </>
    );
};

export default GallerySlider_8;