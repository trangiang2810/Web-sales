import React, { useState } from 'react'
import {FiMail, FiMapPin, FiSearch,FiStar} from 'react-icons/fi'
import {FaRegUser, FaBars, FaHome} from 'react-icons/fa'
import {BsCart2} from 'react-icons/bs'
import { NavLink, Link } from 'react-router-dom'
import { useRef } from 'react'
import { useEffect } from 'react'


import { useSelector } from 'react-redux'
import Search from '../Search'

const Header = () => {
    const nav__links = [
        {
          path: '/trangchu',
          display: 'TRANG CHỦ' 
        },
        {
          path: '/sanpham',
          display: 'SẢN PHẨM'
        },
        {
            path: '/goccamhung',
            display: 'GÓC CẢM HỨNG'
        },
      ]
    const totalQuantity = useSelector(state=> state.cart.totalQuantity)
    // menu
    const menuRef = useRef(null)
    const menuToggle = () => menuRef.current.classList.toggle('hidden')


    // Search 
    const searchRef = useRef(null)
    const searchToggle = () => searchRef.current.classList.toggle('hidden')


    // navbar
    const headerRef = useRef(null)
    const fixedHeader = () => {
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop
              >100){
                headerRef.current.classList.add('fixed')
              }else{
                headerRef.current.classList.remove('fixed')
              }
          })
        }

    useEffect(() => {
        fixedHeader() 
        return ()=> window.removeEventListener('scroll', fixedHeader)
    })

  return (
    <header className='max-h-[120px]'>
        <div style={{background:'rgba(0, 0, 0, .5)'}} className=' hidden fixed w-full h-full z-[99999]' ref={menuRef} onClick={menuToggle}>
            <div className='fixed bg-white h-full w-[40%]'>
                <h1  className='bg-black text-[1.3rem] text-white w-full text-center py-4 font-extrabold'>MENU</h1>
                <ul className='text-gray-700 uppercase font-semibold p-[10%]'>
                    {nav__links.map((item,index)=>(
                        <NavLink key={index} to={item.path}>
                            <li className='pt-6 pb-2 border-b border-gray-300 hover:font-extrabold'>
                                {item.display}
                            </li>
                        </NavLink>
                    ))} 
                </ul>
            </div>
        </div>
        {/* top */}
        <div className='flex w-full md:justify-between justify-center sm:max-w-[720px] 
        md:max-w-[960px] lg:max-w-[1170px] xl:max-w-[1200px] xxl:max-w-[1740px] 
        items-center mx-auto  text-gray-400 border-b py-1'>
            {/* left */}
            <div className='flex gap-2 items-center font-medium'>
                <div className='flex items-center gap-1 border-r-2 cursor-pointer'>
                    <FiMapPin className='text-[0.7rem] xs:text-[0.8rem]' />
                    <span className='pr-2 text-[0.7rem] xs:text-[0.8rem]'>Vị trí cửa hàng</span>
                </div>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <FiMail className='text-[0.7rem] xs:text-[0.8rem]' />
                    <a className='text-[0.7rem] xs:text-[0.8rem]' href="mailto:xyz@gmail.com">xyz@gmail.com</a>
                </div>
            </div>
            {/* right */}
            <div className='md:flex p-4 gap-10 hidden'>
                <span className='text-xs cursor-pointer'>Thẻ quà tặng</span>
                <span className='text-xs cursor-pointer'>Liên hệ & Hỏi đáp</span>
            </div>
        </div>
        {/* bottom */}
        <div className='z-[9999999999] bg-white shadow top-0 flex w-full justify-between py-1 px-[2%] xs:px-[5%] mx-auto items-center' ref={headerRef}>
            {/* LOGO */}
        
            <div className='max-w-[100%] px-2'>
                <Link to = '/'>
                        <h1 className='text-[2rem] sm:text-[3rem] xs:text-[2.5rem] text-yellow-700 font-bold textShadow pt-[%]'>TrG .</h1>
                </Link>
            </div>
            {/* list*/}
            <div className='mx-auto flex'>
                <ul className='hidden md:flex gap-8 text-gray-700 font-normal  uppercase'>
                    {nav__links.map((item, index)=>(
                        <li key={index}>
                            <NavLink to={item.path} className={(navClass)=> navClass.isActive ? 'font-bold text border-b border-stone-900 pb-2' : ''}>{item.display}</NavLink>
                        </li>
                    ))}
                    
                </ul>
            </div>


            {/* icons */}

            <div className='flex gap-4 xs:gap-6 text-gray-700'>
                <div>
                    <FiSearch onClick={searchToggle} className='text-[1.7rem] xs:text-[2rem] cursor-pointer' />
                </div>

                <Link to='/giohang' className='relative'>
                    <BsCart2 className='text-[1.7rem] xs:text-[2rem] ' />
                    <span className=' absolute bottom-4 left-5 bg-black text-white text-[0.9rem] w-5 h-5 text-center rounded-full'>
                        {totalQuantity}
                    </span>
                </Link>
                <div>
                    <Link to='/dangnhap'>
                        <FaRegUser className='text-[1.7rem] xs:text-[2rem]' />
                    </Link>
                </div>
                <div className='relative md:hidden'>
                    <FaBars className='cursor-pointer text-[1.7rem] xs:text-[2rem]' onClick={menuToggle} />
                </div>
               



            </div>
        </div>



            {/*reposive mobile */}
        <div className=' z-[999999999999] p-3 md:hidden fixed bottom-0 boxShadow bg-white w-full flex justify-between'>
            <Link to='/' >
                <FaHome className='text-[2rem]' />
            </Link>

            <FaBars onClick={menuToggle} className='text-[2rem]' />

            <FiSearch onClick={searchToggle} className='text-[2rem] cursor-pointer' />

            <Link to='/giohang' className='relative'>
                <BsCart2 className='text-[2rem] ' />
                <span className=' absolute bottom-4 left-5 bg-black text-white text-[0.9rem] w-5 h-5 text-center rounded-full'>
                    {totalQuantity}
                </span>
            </Link>

            <Link to='/dangnhap' >
                <FaRegUser className='text-[2rem]' />
            </Link>
        </div>



        <div className='hidden' ref={searchRef}  >
            <Search searchToggle={searchToggle}/>
        </div>
    </header>
  )
}

export default Header