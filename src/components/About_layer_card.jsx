import React from 'react'

const About_layer_card = () => {
    const layer_card = [
        {
            icon: 'aboutus-detail-icon-01.png',
            name: 'Best Fast Food',
            txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            icon: 'aboutus-detail-icon-02.png',
            name: '100% ISO Certification',
            txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ]
    return (
        layer_card.map((elem, idx) => {
            return (
                <div className='w-full flex mt-8 items-center flex-wrap' key={idx}>
                    <div className='w-1/6'>
                        <img src={elem.icon} alt="#" />
                    </div>
                    <div className='w-5/6'>
                        <h3 className='text-2xl uppercase font-semibold font-[oswald]'>{elem.name}</h3>
                        <p className='text-lg w-5/6'>{elem.txt}</p>
                    </div>
                </div>
            )
        })
    )
}

export default About_layer_card
