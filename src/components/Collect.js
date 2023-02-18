import React from 'react'
import Collect1 from '../img/collect1.jpg'
import Collect2 from '../img/collect2.jpg'
import {Link} from 'react-router-dom'

const Collect = () => {
  return (
    <div className='flex max-sm:flex-col max-w-[1740px] mx-auto mt-16'>
      <div className='w-1/2 max-sm:w-full'>
        <img className='w-full' src={Collect1} alt="img" />
      </div>

      <div className='w-1/2 flex flex-col max-sm:w-full max-md:pl-[50px] max-md:pt-[50px] max-xl:pl-[100px] max-xl:pt-[60px] xl:pl-[192px] xl:pt-[120px] leading-tight'>
        <div className='max-xl:mb-[60px] xl:mb-[115px]'>
          <p className=' text-gray-500 mb-3 font-medium'>GIẢM GIÁ TỚI 30% TẤT CẢ CÁC MẶT HÀNG</p>
          <h1 className=' text-[3.5rem] max-md:text-[2.3rem]'>Nội thất hiện đại</h1>
          <h1 className=' text-[3.5rem] max-md:text-[2.3rem]'>Bộ sưu tâp</h1>
          <button className=' bg-black border-black border text-white px-7 py-3 
          mt-6 hover:bg-white hover:text-black rounded-md '>
          <Link to='/sanpham'>
            MUA NGAY
          </Link>
          </button>
        </div>
          
        <img className='w-full' src={Collect2} alt="img" />

      </div>
    </div>
  )
}

export default Collect