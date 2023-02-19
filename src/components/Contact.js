import React from 'react'
import Banner from '../img/banner2.jpg'
import {GrMap} from 'react-icons/gr'


const Contact = () => {
  return (
    <div className='mt-16 max-w-[1740px] mx-auto relative'>
        <div className='bg-[#f4edf3] -mt-16 -z-50 h-56 xs:h-[28rem] w-full absolute'>
        </div>
        <img className='w-full p-6 sm:p-16 z-50' src={Banner} alt="" />
        <div className='bg-white sm:absolute bottom-16 right-16 flex flex-col px-16 xs:px-24 pb-12 pt-12 gap-y-4'>
          <GrMap className='text-[2rem]' />
          <h2 className='font-semibold text-[1.3rem]'>GHÉ THĂM CỬA HÀNG CỦA CHÚNG TÔI</h2>
          <div className='flex flex-col gap-y-4 text-[1rem] text-gray-500'>
            <span>Vĩnh Tuy - Hai Bà Trưng - Hà Nội</span>
            <span>
              Điện thoại :  
              <a href="tel:0987654321"> 0987654321</a>
            </span>
            <span>
              Email : 
                <a href="mailto:xyz@gmail.com"> xyz@gmail.com</a>
            </span>
          </div>
        </div>
    </div>
  )
}

export default Contact