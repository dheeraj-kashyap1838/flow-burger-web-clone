import React from 'react';
import aboutus_detail_1 from '../assets/aboutus-detail-icon-01.png'
import aboutus_detail_2 from '../assets/aboutus-detail-icon-02.png'

const About_layer_card = () => {
    const layer_card = [
        {
            icon: aboutus_detail_1,
            name: 'Best Fast Food',
            txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            icon: aboutus_detail_2,
            name: '100% ISO Certification',
            txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ];

    return (
        layer_card.map((elem, idx) => {
            return (
                <div
                    className="w-full flex flex-wrap items-center mt-8 sm:mt-10 md:mt-12 lg:mt-14"
                    key={idx}
                >
                    {/* Icon Section */}
                    <div className="w-1/6 sm:w-2/12 md:w-1/5 lg:w-1/6 flex justify-center">
                        <img
                            src={elem.icon}
                            alt={elem.name}
                            className="w-12 sm:w-16 md:w-20 lg:w-24"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-5/6 sm:w-10/12 md:w-4/5 lg:w-5/6">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase font-semibold font-[oswald]">
                            {elem.name}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-11/12 md:w-10/12">
                            {elem.txt}
                        </p>
                    </div>
                </div>
            );
        })
    );
};

export default About_layer_card;
