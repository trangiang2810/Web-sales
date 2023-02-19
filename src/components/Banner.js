import React from 'react'
import Banner1 from '../img/banner1.jpg'
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <section className='w-full relative'>
        <img className='w-full' src={Banner1} alt="" />
        <div className=' absolute w-full text-center' style={{marginTop: '-35%'}} >
            <h1 className='text-[2rem] max-sm:text-[1.1rem] font-normal max-xs:hidden'>Bộ sưu tập ghế ngồi</h1>
            <h5 className='text-[6rem] max-lg:text-[3rem] max-sm:text-[2rem] font-extralight uppercase'>ĐIỂM ĐẾN MỚI</h5>
            <Link to='/sanpham'> 
              <button className='bg-black uppercase text-white mt-4 px-5 py-4 animate-pulse rounded-md'>Đi đến cửa hàng</button>
            </Link>
        </div>
    </section>
  )
}

export default Banner