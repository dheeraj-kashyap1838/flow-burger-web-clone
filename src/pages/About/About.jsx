import React from 'react'
import PageHead from '../../components/PageHead'
import About_chek from '../../components/About_chek'
import About_layer_card from '../../components/About_layer_card'

const About = () => {

  return (
    <>
      <PageHead page_name='About us' />
      <section className='w-full py-24 px-12 bg-zinc-600 flex flex-wrap'>
        <div className='w-1/2 '>
          {/* <img src="aboutus-detail-img.jpg" alt="#" /> */}
        </div>
        <div className='w-1/2 flex flex-col justify-center'>
          <h2 className='text-5xl uppercase font-[oswald] w-[70%] font-semibold'>Layesrs Of Delicious Unexpected Flavor</h2>
          <p className='mt-7 font- text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <p className='mt-2 font- text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley.</p>
          <About_chek check_txt='What is Lorem Ipsum Lorem Ipsum is simply.' />
          <About_chek check_txt='Dummy text of the printing text.' />
          <About_layer_card/>
        </div>
      </section>
    </>
  )
}

export default About