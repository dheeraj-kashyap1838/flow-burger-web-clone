import React from 'react'
import PageHead from '../../components/PageHead'
import About_chek from '../../components/About_chek'
import About_layer_card from '../../components/About_layer_card'

const About = () => {
  return (
    <>
      <PageHead page_name='About us' />
      <section className='w-full py-12 px-4 md:px-12 bg-zinc-600 flex flex-col md:flex-row flex-wrap gap-8 md:gap-0'>
        <div className='w-full md:w-1/2'>
          <img src="aboutus-detail-img.jpg" alt="About Us" className='w-full h-auto rounded-lg' />
        </div>
        <div className='w-full md:w-1/2 flex flex-col justify-center'>
          <h2 className='text-3xl md:text-5xl uppercase font-[oswald] md:w-[70%] font-semibold'>
            Layers Of Delicious Unexpected Flavor
          </h2>
          <p className='mt-6 text-base md:text-lg'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <p className='mt-2 text-base md:text-lg'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley.
          </p>
          <div className='mt-4'>
            <About_chek check_txt='What is Lorem Ipsum Lorem Ipsum is simply.' />
            <About_chek check_txt='Dummy text of the printing text.' />
          </div>
          <div className='mt-6'>
            <About_layer_card />
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
