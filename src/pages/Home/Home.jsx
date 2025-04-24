import React from 'react'
import FloatBurger from '../../components/FloatBurger'
import IconCards from '../../components/IconCards'
import GallerySlider_8 from '../../components/gallerySlider_8'
import QuteSlider from '../../components/QuteSlider/QuteSlider'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className='hero w-full min-h-screen relative text-white overflow-x-hidden'>
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8'>
          <h1 className='text-4xl sm:text-6xl lg:text-9xl uppercase font-semibold mb-6'>Burger</h1>
          <p className='text-sm sm:text-lg md:text-xl leading-6 md:leading-8 hidden md:block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. It is a long established fact that a reader will be distracted by the layout.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className='w-full py-12 sm:py-24 px-6 sm:px-12 text-black md:flex items-center flex-wrap'>
        <div className='md:w-1/2 mb-8 md:mb-0 flex justify-center'>
          <FloatBurger burgerlink='tb-about-images.png' />
        </div>
        <div className='md:w-1/2 text-center md:text-left leading-7 sm:leading-10'>
          <h2 className='uppercase font-semibold text-lg sm:text-xl'>About Us</h2>
          <p className='text-3xl sm:text-4xl lg:text-5xl font-[oswald] leading-8 sm:leading-[4rem]'>
            Grilled <span className='block text-5xl sm:text-6xl lg:text-9xl font-semibold'>BURGER</span> Limited Offer
          </p>
          <p className='text-sm sm:text-base md:text-lg font-semibold mt-4'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className='mt-4 space-y-1'>
            <h4 className='text-sm sm:text-base md:text-lg'>Mon-Fri: 9 AM – 22 PM</h4>
            <h4 className='text-sm sm:text-base md:text-lg'>Saturday: 9 AM – 20 PM</h4>
          </div>
          <button
            className='bg-yellow-400 hover:bg-yellow-500 transition duration-300 rounded-xl font-semibold px-6 py-3 mt-8 text-sm sm:text-md'
            aria-label='Read more about us'
          >
            Read More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className='w-full lg:flex px-6 sm:px-12'>
        <div className='lg:w-2/3 w-full flex flex-wrap py-16 sm:py-32 gap-6 sm:gap-12'>
          <IconCards />
        </div>
        <div className='lg:w-1/3 w-full flex justify-center items-center py-12'>
          <FloatBurger burgerlink='tb-services-img.png' />
        </div>
      </section>

      {/* Specials Section */}
      <section className='special w-full text-white flex flex-wrap py-12 sm:py-24 px-6 sm:px-12'>
        <div className='md:w-1/2 w-full flex flex-wrap'>
          {['special-img-01.jpg', 'special-img-02.jpg'].map((img, idx) => (
            <div className='w-1/2 px-2' key={idx}>
              <div className='rounded-xl overflow-hidden'>
                <img
                  className='w-full hover:scale-105 transition-transform duration-300'
                  src={img}
                  alt={`Special ${idx + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className='md:w-1/2 w-full text-center md:text-left px-6'>
          <h2 className='text-3xl sm:text-5xl font-semibold'>Weekend's</h2>
          <h2 className='text-5xl sm:text-7xl lg:text-9xl mt-4 font-[oswald] font-semibold uppercase'>Special</h2>
          <h2 className='text-2xl sm:text-4xl mt-4 font-semibold'>Dinner for you...</h2>
          <p className='text-sm sm:text-lg mt-4'>
            It is a long established fact that a reader will be distracted by the layout.
          </p>
          <p className='text-sm sm:text-lg mt-4'>
            Lorem Ipsum is simply dummy text of the printing industry.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='w-full py-12 sm:py-24 px-6 sm:px-12 flex flex-col  items-center justify-center'>
        <div className='text-center md:w-3/4 lg:w-1/2'>
          <h3 className='mb-5 uppercase font-semibold text-base sm:text-lg'>Album</h3>
          <h2 className='text-4xl sm:text-6xl uppercase font-[oswald] font-semibold mb-4'>Our Gallery</h2>
          <p className='text-sm sm:text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className='w-full overflow-hidden mt-8 sm:mt-16'>
          <GallerySlider_8 />
        </div>
        <button
          className='bg-yellow-400 hover:bg-yellow-500 transition duration-300 rounded-xl font-semibold px-6 py-3 mt-8 text-sm sm:text-md'
          aria-label='Read more from gallery'
        >
          Read More
        </button>
      </section>

      {/* Testimonial Section */}
      <section
        className='w-full text-white py-12 sm:py-24 px-6 sm:px-12 bg-cover bg-center'
        style={{ backgroundImage: "url('/testimonial-bg.jpg')" }}
      >
        <div className='w-full md:w-1/2 mx-auto text-center'>
          <i className='ri-double-quotes-r text-6xl text-yellow-500 sm:text-8xl'></i>
          <QuteSlider />
        </div>
      </section>
    </>
  )
}

export default Home
