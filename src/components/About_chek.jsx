import React from 'react'
import { IoCheckmark } from "react-icons/io5";


const About_chek = ({ check_txt }) => {
    return (
        <div className='w-full flex flex-wrap items-center mt-6'>
            <div className='w-1/7 pr-4'>
                <IoCheckmark className='border-2 border-black text-4xl' />
            </div>
            <div className='w-6/7'>
                {check_txt}
            </div>
        </div>
    )
}

export default About_chek