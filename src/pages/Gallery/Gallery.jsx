import React, { useEffect, useState } from 'react'
import PageHead from '../../components/PageHead'

const Gallery = () => {
  const [data, setData] = useState([])

  const picture = async () => {
    try {
      const picData = await fetch('https://picsum.photos/v2/list')
      const data = await picData.json()
      setData(data)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    picture()
  }, [])

  return (
    <>
      <PageHead page_name='Gallery' />
      <section className='w-full px-4 md:px-10 lg:px-20 py-8'>
        <div className='flex flex-wrap gap-y-6 -mx-2'>
          {data.map((elem, idx) => (
            <div
              key={idx}
              className='w-full sm:w-1/2 lg:w-1/3 px-2 flex justify-center'
            >
              <div className='w-full max-w-sm bg-white rounded-lg shadow overflow-hidden'>
                <img
                  src={elem.download_url}
                  alt={`by ${elem.author}`}
                  className='w-full h-60 object-cover'
                />
                <div className='p-4'>
                  <h2 className='text-lg font-semibold text-gray-800'>{elem.author}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Gallery
