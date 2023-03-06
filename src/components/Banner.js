import React from 'react'
import Banner1 from '../img/banner1.jpg'
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <section className='w-full relative'>
        <img className='w-full' src={Banner1} alt="" />
        <div className=' absolute w-full text-center mt-[-40%]' >
            <h1 className='text-[2rem] max-sm:text-[1.1rem] font-normal max-xs:hidden'>Bộ sưu tập ghế ngồi</h1>
            <h5 className='text-[2.2rem] xs:text-[3rem] sm:text-[4.5rem] lg:text-[6rem] font-extralight uppercase'>ĐIỂM ĐẾN MỚI</h5>
            <Link to='/sanpham'> 
              <button className='bg-black uppercase text-[0.9rem] xs:text-[1rem] sm:text-[1.3rem] lg:text-[1.6rem] text-white xs:mt-4 px-3 py-2 xs:py-4 animate-pulse rounded-md'>Đi đến cửa hàng</button>
            </Link>
        </div>
    </section>
  )
}

export default Banner