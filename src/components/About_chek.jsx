import React from 'react';
import { IoCheckmark } from "react-icons/io5";

const About_chek = ({ check_txt }) => {
    return (
        <div className="w-full flex flex-wrap items-center mt-6">
            {/* Icon Section */}
            <div className="w-1/12 sm:w-2/12 pr-4 flex justify-center">
                <IoCheckmark className="border-2 border-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
            </div>
            {/* Text Section */}
            <div className="w-11/12 sm:w-10/12 text-sm sm:text-base md:text-lg lg:text-xl">
                {check_txt}
            </div>
        </div>
    );
};

export default About_chek;