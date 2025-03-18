import React from 'react'
import Slider from "react-slick";
import '../QuteSlider/QuteSlider.css'


const QuteSlider = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const QuteSL_data = [
        {
            para: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.Bunya nuts h fjfj fjfmf jflsl black- eyed pea prairie turnip leek lentil turnip greens parsnip.",
            name: "Pratham",
            desg: "CEO"
        },
        {
            para: "Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheesy grin airedale cheese port-salut.",
            name: "dheeraj Kashyap",
            desg: "Founder"
        },
        {
            para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates deleniti molestias hic a. Deleniti distinctio, possimus ex porro consequatur sapiente!",
            name: "Ankit",
            desg: "Web Designer"
        },
    ]

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {QuteSL_data.map((elem, idx) => (
                    <div className='px-16' key={idx}>
                        <p className='text-lg'>{elem.para}</p>
                        <h2 className='mt-5 text-4xl font-bold uppercase'>{elem.name}</h2>
                        <p>{elem.desg}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default QuteSlider