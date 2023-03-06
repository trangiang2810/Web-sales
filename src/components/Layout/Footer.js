import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import payImg from '../../img/footer-payment.png'

const Footer = () => {

  return (
    <footer className='w-full bg-[#f8f8f8] text-gray-500 px-[8%] sm:px-24'>
      <div className='grid max-w-[1740px] mx-auto grid-cols-4 py-8 w-full max-md:grid-cols-2 gap-y-6'>
        <div className='px-4 leading-7'>
          <div className='pb-4'>
                <Link to = '/'>
                  <h1 className='text-[2rem] sm:text-[3rem] xs:text-[2.5rem] text-yellow-700 font-bold textShadow pt-[%]'>TrG .</h1>
                </Link>
          </div>
          <div>
            <p className='text-[0.8rem]'>Vĩnh Tuy- Hai Bà Trưng - Hà Nội</p>
            <p>
              <a className='text-[0.8rem]' href="mailto:xyz@gmail.com">xyz@gmail.com</a>
            </p>
            <p className='text-[0.8rem]'>
              <a className='text-[0.8rem]' href="tel:0987654321">0987654321</a>
            </p>
          </div>
          <div className='flex gap-2 text-black'>
            <div className=' border rounded-full p-2'>
              <a href="https://www.facebook.com/profile.php?id=100021358124881">
                <FaFacebookF />
              </a>
            </div>
            <div className='border rounded-full p-2'>
              <a href="https://twitter.com/trntrng63635646">
              <FaTwitter />
              </a>
            </div>
            <div className=' border rounded-full p-2'>
              <a href="https://www.instagram.com/tr.giangg02/">
                <FaInstagram />
              </a>
            </div>
            <div className=' border rounded-full p-2'>
              <a href="https://www.youtube.com/@giangtrantruong5879/featured"></a>
              <FaYoutube />
            </div>
          </div>
        </div>

        <div className='px-2 xs:px-4 leading-6 xs:leading-7'>
          <div className='text-black pb-1 font-medium flex items-center'>
            <h5 className='text-[0.9rem] xs:text-[1rem]'>THÔNG TIN</h5>
          </div>
          <div>
            <ul>
              <li>
                <a className='text-[0.8rem]' href="/goccamhung">Câu chuyện của chúng tôi</a>
              </li>
              <li>
                <a className='text-[0.8rem]' href="/goccamhung">Thiết kế</a>
              </li>
              <li>
                <a className='text-[0.8rem]' href="/goccamhung">Tài liệu của chúng tôi</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='px-2 xs:px-4 leading-6 xs:leading-7'>
          <div className='text-black pb-1 font-medium'>
            <h5 className='text-[0.9rem] xs:text-[1rem]'>TRỢ GIÚP</h5>
          </div>
          <div>
            <ul>
              <li>
                <a className='text-[0.8rem]' href="#">Liên hệ & Hỏi đáp</a>
              </li>
              <li>
                <a className='text-[0.8rem]' href="#">Trả lại & Hoàn tiền</a>
              </li>
              <li>
                <a className='text-[0.8rem]' href="#">Vận chuyển & Giao hàng</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='px-2 xs:px-4 leading-6 xs:leading-7'>
          <div className='text-black pb-1 font-medium'>
            <h5 className='text-[0.9rem] xs:text-[1rem]'>DỊCH VỤ</h5>
          </div>
          <div>
            <ul>
              <li>
                <a className='text-[0.8rem]' href="#">Vận chuyển nhanh</a>
              </li>
              <li>
                <a className='text-[0.8rem]' href="#">Chăm sóc nội thất</a>
              </li>
              <li>
                <a className='text-[0.8rem]' href="#">Thẻ quà tặng</a>
              </li>
            </ul>
          </div>
        </div>



      </div>


      

      <div className=' md:flex justify-between max-w-[1740px] mx-auto px-7 py-3 border-y text-center'>
        <div className='lg:flex gap-32'>
          <h4 className='text-[0.7rem]'>© 2023 TrG .  xyz Store</h4>
          <ul className='flex justify-center text-black gap-4 sm:gap-8 font-semibold'>
            <li className='text-[0.7rem]'>PRIVACY</li>
            <li className='text-[0.7rem]'>TERMS</li>
            <li className='text-[0.7rem]'>*PROMO T&CS APPLY</li>
          </ul>
        </div>
          <img className='h-6 max-md:mx-auto' src={payImg} alt="" />
      </div>
      
    </footer>
  )
}

export default Footer

