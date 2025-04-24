import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";


const IconCards = () => {
    const Icards = [
        {
            name: 'Free Delivery',
            icon: FaTruckFast
        },
        {
            name: 'Secure Payment',
            icon: TbMoneybag
        },
        {
            name: 'Free Returns',
            icon: FaTruckFast
        },
        {
            name: 'Gift Service',
            icon: FaTruckFast
        }
    ]

    return (
        <>
            {Icards.map((elem, id) => (
                <div className=' md:w-[45%] w-full   md:flex flex-wrap' key={id}>
                    <div className='md:w-[20%] w-full  flex  ' >
                        <elem.icon className=' md:w-full mx-auto w-[20%] h-auto bg-yellow-400 text-8xl text-black rounded-xl py-4 px-4 ' />
                    </div>
                    <div className='md:px-6 px-3 md:text-left mx-auto text-center w-[80%] '>
                        <h2 className='text-xl pb-1 font-semibold relative uppercase after:absolute after:bottom-0 after:left-0 md:after:w-[80%] after:w-[100%] mx-auto after:h-1 after:bg-yellow-500 '>{elem.name}</h2>
                        <p className='mt-2 font-semibold md:text-md'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default IconCards