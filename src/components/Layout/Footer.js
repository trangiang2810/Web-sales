import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import payImg from '../../img/footer-payment.png'

const Footer = () => {

  return (
    <footer className='w-full bg-[#f8f8f8] text-gray-500 px-[8%] sm:px-24'>
      <div className='grid max-w-[1740px] mx-auto grid-cols-4 py-12 w-full max-md:grid-cols-2 gap-y-12'>
        <div className='px-4 leading-8'>
          <div className='pb-8'>
                <Link to = '/'>
                    {/* <img className='max-sm:w-40' src={Logo} alt="" /> */}
                        <h1 className='sm:text-[3rem] text-[2.5rem] text-yellow-700 font-bold textShadow pt-[%]'>TrG .</h1>
                </Link>
          </div>
          <div>
            <p>Vĩnh Tuy- Hai Bà Trưng - Hà Nội</p>
            <p>
              <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
            </p>
            <p>
              <a href="tel:0987654321">0987654321</a>
            </p>
          </div>
          <div className='flex gap-4 text-black'>
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

        <div className='px-4 leading-8'>
          <div className='text-black pb-4 font-medium flex items-center'>
            <h5>THÔNG TIN</h5>
          
          </div>
          <div>
            <ul>
              <li>
                <a href="/goccamhung">Câu chuyện của chúng tôi</a>
              </li>
              <li>
                <a href="/goccamhung">Thiết kế</a>
              </li>
              <li>
                <a href="/goccamhung">Tài liệu của chúng tôi</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='px-4 leading-8'>
          <div className='text-black pb-4 font-medium'>
            <h5>TRỢ GIÚP</h5>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">Liên hệ & Hỏi đáp</a>
              </li>
              <li>
                <a href="#">Theo dõi đơn hàng</a>
              </li>
              <li>
                <a href="#">Trả lại & Hoàn tiền</a>
              </li>
              <li>
                <a href="#">Vận chuyển & Giao hàng</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='px-4 leading-8'>
          <div className='text-black pb-4 font-medium'>
            <h5>DỊCH VỤ</h5>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">Vận chuyển nhanh</a>
              </li>
              <li>
                <a href="/goccamhung">Những thiết kế mới</a>
              </li>
              <li>
                <a href="#">Chăm sóc nội thất</a>
              </li>
              <li>
                <a href="#">Thẻ quà tặng</a>
              </li>
            </ul>
          </div>
        </div>



      </div>


      

      <div className=' md:flex justify-between max-w-[1740px] mx-auto px-7 py-3 border-y text-center'>
        <div className='lg:flex gap-32'>
          <h4>© 2023 TrG .  xyz Store</h4>
          <ul className='flex text-black gap-8 font-semibold justify-center'>
            <li className='text-[12px]'>PRIVACY</li>
            <li className='text-[12px]'>TERMS</li>
            <li className='text-[12px]'>*PROMO T&CS APPLY</li>
          </ul>
        </div>
          <img className='h-6 max-md:mx-auto' src={payImg} alt="" />
      </div>
      
    </footer>
  )
}

export default Footer

