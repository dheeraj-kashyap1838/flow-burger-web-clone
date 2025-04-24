import React from 'react'
import { Link } from 'react-router'

const PageHead = ({page_name}) => {
    return (
        <div className='w-full relative top-0  after:absolute after:w-full after:h-2 after:bg-yellow-500 bottom-0 right-0'>
            <img className='w-full relative' src="bread-crumb-img.jpg" alt="#" />
            <div className='w-1/2 text-center flex flex-col justify-center items-center absolute top-1/2  left-1/2 text-white  -translate-x-1/2 -translate-y-1/2'>
                <h1 className='font-[oswald] md:text-5xl text-2xl font-semibold uppercase'>{page_name}</h1>
                <div className='flex text-center font-semibold'>
                    <Link to="/">Home /</Link>
                    <h3 className='text-yellow-500'>{page_name}</h3>
                </div>
            </div>
        </div>
    )
}

export default PageHead