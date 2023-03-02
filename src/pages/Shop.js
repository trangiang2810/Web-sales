import React, { useRef } from 'react'
// import ProductFilter from '../components/ProductFilter'
import Products from '../components/ProductList'
import { Link } from 'react-router-dom'
import {BiChevronRight} from 'react-icons/bi'


import {FiFilter, FiArrowLeft} from 'react-icons/fi'
import PropertyFilter from '../components/Filter/PropertyFilter'
import ColorFilter from '../components/Filter/ColorFilter'
import UpDown from '../components/Filter/UpDown'


const Shop = () => {

  const filterRef = useRef(null)
  const filterToggle = () => filterRef.current.classList.toggle('max-sm:hidden')


  return (
    <div className='mb-24'>
        <div className="banner max-md:py-[80px] max-lg:py-[100px] lg:py-[135px] text-center text-white ">
          <h1 className='text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xxl:text-[80px]'>
            Cửa hàng
          </h1>
          <ul className='flex justify-center items-center gap-1'>
            <Link to="/">
              <li className='md:text-[1.3rem]'>Nhà</li>
            </Link>
            <li>
                <BiChevronRight />
            </li>
            <li>
              <span className='md:text-[1.3rem]'>Của hàng</span>
            </li>
          </ul>
        </div>

      <div 
      className='flex my-6 max-w-[1740px] max-xs:p-3 xs:max-w-[540px] sm:max-w-[720px] 
      md:max-w-[960px] lg:max-w-[1200px] xl:max-w-[1400px] xxl:max-w-[1740px] mx-auto'
      >
        <div 
        className='sm:w-[18%] max-sm:hidden h-full z-[999] bg-white max-sm:pr-[10%] max-sm:pl-[2%] max-sm:fixed top-0 left-0' 
        ref={filterRef} 
        > 

          <div className='mt-4 max-sm:pt-[20%]'>
            <FiArrowLeft className='sm:hidden ml-[80%]' onClick={filterToggle} />
            <div className='flex max-sm:hidden items-center border gap-3 font-semibold'>
              <FiFilter />
              <span className='text-[1.3rem]'>BỘ LỌC</span>
            </div>
            <div>
                <PropertyFilter />
                <ColorFilter />
            </div>
          </div>
        </div> 

        <div className='w-full m-auto'>
                <UpDown />
          <Products />
            <div 
            className='flex sm:hidden bg-gray-500 text-white font-semibold boxShadow 
            rounded-md items-center gap-2 fixed z-[9999999999] bottom-[8%] right-[3%] px-5 py-2 animate-bounce'
            >
              <FiFilter />
              <span onClick={filterToggle}>BỘ LỌC</span>
            </div>
        </div>
      </div>
      {/* <ProductsList /> */}
    </div>
  )
}

export default Shop