import React, { useEffect, useState } from 'react'
import PageHead from '../../components/PageHead'



const Gallery = () => {
  const [data, setData] = useState([])
  const picture = async () => {
    try {
      const picData = await fetch('https://picsum.photos/v2/list')
      const data = await picData.json()
      setData(data)
    }
    catch (error) {
      console.error(error.message);
    }
  }


  useEffect(() => {
    picture()
  }, [])

  return (
    <>
      <PageHead page_name='Gallery' />
      <section className='w-full px-20'>
        <div className='w-full flex flex-wrap  '>{data.map((elem, idx) => (
          <div className='w-1/3 flex mb-4 items-center justify-center' key={idx}>
            <div className='w-[95%] bg-slate-500 rounded overflow-hidden'>
              <img className='' src={elem.download_url} alt="" />
              <h1>{elem.author}</h1>
            </div>
          </div>
        ))}</div >
      </section>
    </>
  )
}

export default Gallery