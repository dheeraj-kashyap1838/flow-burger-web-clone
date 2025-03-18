import React from 'react'
import FloatBurger from '../../components/FloatBurger'
import IconCards from '../../components/IconCards'
import GallerySlider_8 from '../../components/gallerySlider_8';
import QuteSlider from '../../components/QuteSlider/QuteSlider';



const Home = () => {



  return (
    <>
      <section className='hero w-full min-h-screen relative text-white overflow-x-hidden'>
        <div className='text-center absolute top-1/2 left-1/2 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
          <h1 className='text-4xl sm:text-6xl lg:text-9xl uppercase font-semibold mb-6'>Burger</h1>
          <p className='text-sm sm:text-lg md:text-xl leading-6 md:leading-8 hidden md:block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
      </section>

      <section className='w-full py-12 sm:py-24 px-6 sm:px-12 bg-zinc-500 text-black items-center md:flex flex-wrap'>
        <div className='md:w-1/2 mb-8 md:mb-0 flex justify-center'>
          <FloatBurger burgerlink={'tb-about-images.png'} />
        </div>
        <div className='md:w-1/2 leading-7 sm:leading-10 text-center md:text-left'>
          <h2 className='uppercase font-semibold text-lg sm:text-xl'>About Us</h2>
          <p className='text-3xl sm:text-4xl lg:text-5xl font-[oswald] leading-8 sm:leading-[4rem]'>
            Grilled <span className='block text-5xl sm:text-6xl lg:text-9xl font-semibold'>BURGER</span> Limited Offer
          </p>
          <p className='text-sm sm:text-base md:text-lg font-semibold mt-4'>
            Lorem Ipsum is simply dummy text of the printing and unknown printer typesetting industry.
          </p>
          <h4 className='text-sm sm:text-base md:text-lg mt-4'>Mon-Fri: 9 AM – 22 PM</h4>
          <h4 className='text-sm sm:text-base md:text-lg'>Saturday: 9 AM – 20 PM</h4>
          <button className='bg-yellow-400 rounded-xl font-semibold px-4 sm:px-6 py-2 sm:py-3 mt-8 text-sm sm:text-md'>Read More</button>
        </div>
      </section>

      <section className='w-full lg:flex px-6 sm:px-12 bg-zinc-600'>
        <div className='lg:w-2/3 w-full flex flex-wrap py-16 sm:py-32 gap-6 sm:gap-12 box-border'>
          <IconCards />
        </div>
        <div className='lg:w-1/3 w-full relative py-12'>
          <div className='w-full flex justify-center items-center'>
            <FloatBurger burgerlink={'tb-services-img.png'} />
          </div>
        </div>
      </section>

      <section className='special w-full text-white flex flex-wrap bg-zinc-500 py-12 sm:py-24 px-6 sm:px-12'>
        <div className='md:w-1/2 w-full flex flex-wrap'>
          <div className='w-1/2 px-2'>
            <div className='rounded-xl overflow-hidden'>
              <img className='self-center m-auto w-full hover:scale-105 ease-in duration-300' src='special-img-01.jpg' alt='Special' />
            </div>
          </div>
          <div className='w-1/2 px-2'>
            <div className='rounded-xl overflow-hidden'>
              <img className='self-center m-auto w-full hover:scale-105 ease-in duration-300' src='special-img-02.jpg' alt='Special' />
            </div>
          </div>
        </div>
        <div className='md:w-1/2 w-full text-center md:text-left px-6'>
          <h2 className='text-3xl sm:text-5xl font-semibold'>Weekend's</h2>
          <h2 className='text-5xl sm:text-7xl lg:text-9xl mt-4 font-[oswald] font-semibold uppercase'>Special</h2>
          <h2 className='text-2xl sm:text-4xl mt-4 font-semibold'>Dinner for you...</h2>
          <p className='text-sm sm:text-lg mt-4'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <p className='text-sm sm:text-lg mt-4'>
            Lorem Ipsum is simply dummy text of the printing and unknown printer typesetting industry.
          </p>
        </div>
      </section>

      <section className='w-full py-12 sm:py-24 px-6 sm:px-12 flex flex-col bg-zinc-500 items-center justify-center'>
        <div className='text-center md:w-3/4 lg:w-1/2'>
          <h3 className='mb-5 uppercase font-semibold text-base sm:text-lg'>Album</h3>
          <h2 className='text-4xl sm:text-6xl uppercase font-[oswald] font-semibold mb-4'>Our Gallery</h2>
          <p className='text-sm sm:text-lg'>Lorem Ipsum is simply dummy text of the printing and unknown printer typesetting industry.</p>
        </div>
        <div className='w-full overflow-hidden mt-8 sm:mt-16'>
          <GallerySlider_8 />
        </div>
        <button className='bg-yellow-400 rounded-xl font-semibold px-4 sm:px-6 py-2 sm:py-4 mt-8 text-sm sm:text-md'>Read More</button>
      </section>

      <section className='w-full bg-[url(./public/testimonial-bg.jpg)] text-white py-12 sm:py-24 px-6 sm:px-12'>
        <div className='w-1/2 text-center'>
          <i className='ri-double-quotes-r  text-6xl text-yellow-500 sm:text-8xl'></i>
          <QuteSlider/>
        </div>
      </section>
    </>
  )
}
export default Home