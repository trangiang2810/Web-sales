import React from 'react'
import Mail from '../img/icon/mail.png'

const Subscribe = () => {
  return ( 
    <div className='mt-20 my-36 w-full bg-[#edf2f4] py-14 sm:py-24'>
        <div className='flex max-md:flex-col w-full gap-4 mx-auto px-4 xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] xl:max-w-[1400px] xxl:max-w-[1740px]'>
            <div className='flex max-xs:flex-col max-xs:items-center w-1/2 max-md:w-full'>
                <div className='m-4 max-w-full'>
                    <img src={Mail} alt="" />
                </div>
                <div className=' pl-6 max-xs:text-center'>
                    <h1 className='text-[1.8rem] text-gray-900'>Đăng ký email Funio</h1>
                    <p className='text-gray-500 text-[1rem]'>Ngoài ra, hãy lắng nghe về những điều mới nhất và tuyệt vời nhất từ gia đình thương hiệu của chúng tôi</p>
                </div>
            </div>
            
        
            <div className='w-1/2 max-md:w-full'>
                <div className='w-full flex'>
                    <input onChange={(e)=>console.log(e.target.value)} className='outline-none text-[1.1rem] border-b-2 bg-transparent border-black basis-full mr-3 mt-8 max-w-[600px]' type="email" placeholder='Nhập email của bạn'/>
                    <button className='border-b-2 text-[0.8rem] w-[70px] font-medium border-black '>ĐẶT MUA</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe