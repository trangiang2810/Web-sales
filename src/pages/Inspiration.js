import React from 'react'
import { Link } from 'react-router-dom'
import { inspirationData } from '../Data'
import Banner1 from '../img/inspiration/inspiration1.jpg'
import Banner2 from '../img/inspiration/inspiration2.jpg'
import Banner3 from '../img/inspiration/inspiration3.jpg'

const Inspiration = () => {
  return (
    <div className='max-w-[1740px] m-auto pb-24'>
        <div className='grid grid-cols-5 grid-rows-2 items-center gap-4' >
          <div className='w-full col-span-4 row-span-2 relative overflow-hidden' >
            <img src={Banner1} alt="" />
            <div className='absolute top-0 text-white p-[19%]'>
              <h1 style={{fontFamily: 'Great Vibes, cursive'}} className='pb-2 text-[0.8rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.8rem] xl:text-[2.2rem] font-extralight'>
                Góc cảm hứng
              </h1>
              <p className='uppercase text-[1.4rem] xs:text-[1.8rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.7rem] xl:text-[4.2rem] xxl:text-[4.8rem] font-semibold'>Ý TƯỞNG KHÔNG GIAN SỐNG</p>
            </div>
          </div>
            <img src={Banner2} alt="" />
            <img src={Banner3} alt="" />
        </div>

        <div className='mt-24 md:grid grid-cols-2 gap-y-6'>
          {inspirationData.map((item,index)=>{
            return (
              <div key={index} className='m-auto text-center p-5'>
                <Link to='#'>
                <img src={item.image} alt="" />
                  <h2 className='text-[1.6rem]'>{item.title}</h2>
                </Link>
                <p className='text-[1.2rem] '>{item.content}</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Inspiration