import React, { useState } from 'react'
import { BsStarFill, BsStarHalf, BsCheck2Square, BsFacebook, BsTwitter } from 'react-icons/bs'
import { BiChevronRight } from 'react-icons/bi'
import {FaArrowLeft, FaArrowRight, FaLinkedinIn} from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { productsData } from '../Data'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import {toast} from 'react-toastify'


const ProductDetails = () => {
    const {id} = useParams()
    const product = productsData.find(product => product.id === parseInt(id))
    const {image, name, price } = product
    const [slideNumber, setSlideNumber] = useState(0)

    const handleOpen = (index) => {
        setSlideNumber(index)
    }

    const handleSlide = (direction)=>{
        let newSlideNumber
        if(direction === 'l'){
            newSlideNumber = slideNumber === 0 ? product.imgChildren.length-1 : slideNumber - 1
        } else {
            newSlideNumber = slideNumber === product.imgChildren.length-1 ? 0 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber)
    }
  
    const dispatch = useDispatch()
    const addToCart = () =>{
        dispatch(
            cartActions.addItem({
                id,
                image,
                name,
                price,
            })
            )
             toast.success('Thêm sản phẩm thành công')
        }

  return (
    <div className='pb-24'>
        <div className='justify-center flex pb-32'>
            <div className='flex max-md:flex-col mt-[50px] 
            xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] 
            xl:max-w-[1400px] xxl:max-w-[1740px]'>
                <div className='w-1/2 max-md:w-full px-4 relative'>
                    <FaArrowLeft onClick={()=>handleSlide('l')} className=' cursor-pointer absolute left-0 top-[40%] text-[2rem] text-gray-400' />
                    <img className='w-full' src={product.imgChildren[slideNumber].image} alt="" />
                    <FaArrowRight onClick={()=>handleSlide('r')} className=' cursor-pointer absolute right-0 top-[40%] text-[2rem] text-gray-400' />
                <div className='flex pt-2 gap-2'>

                            {
                            product.imgChildren.map((item, index)=>(
                                <div className='w-[20%] border cursor-pointer hover:opacity-80' key={index}>
                                    <img onClick={()=>handleOpen(index)} src={item.image} alt="" />
                                </div> 
                            ))
                            }    
                    </div>
                </div>
                <div className='w-1/2 max-md:w-full px-4 pl-[65px] max-md:p-4'>
                    <div>
                        <ul className='flex items-center text-gray-500 gap-2'>
                            <li>
                                <Link className='hover:text-gray-900' to="/">Nhà</Link>
                            </li>
                            <li>
                                <BiChevronRight />
                            </li>
                            <li>
                                <Link className='hover:text-gray-900' to='/sanpham'>
                                    <span>Của hàng</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className='flex gap-3 items-center font-ligh leading-10'>
                        <div className='gap-1 flex text-yellow-400'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarHalf />
                        </div>
                        <span className='text-gray-500'>{`(${product.reviews} đánh giá)`}</span>
                    </div>
                    <h1 className='text-[2.2rem]'>{product.name}</h1>
                    <h3 className='text-[2rem] border-b pb-5'>{product.price}</h3>
                    <p className='text-gray-500 text-[1.2rem] pt-8'>{product.description}</p>
                    <div className='flex gap-1 text-lime-600 py-5'>
                        <BsCheck2Square />
                        <h3 className=' uppercase'>TRONG KHO</h3>
                    </div>
                        <button 
                            onClick={addToCart} 
                            className='bg-black text-white p-4 ml-2 font-semibold hover:bg-white
                            hover:text-black hover:border border-black ' title='Thêm vào giỏ hàng'
                            >
                            THÊM VÀO GIỎI HÀNG
                        </button>
                        <hr className='w-full mt-10 mb-5'/>
                            <div className='flex gap-3'>    
                                <h3 className='uppercase font-medium text-gray-500'>
                                    Mã Sản Phẩm :  
                                </h3>
                                <span className='text-black'>
                                    {product.id}
                                </span>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <h3 className=' text-gray-500 text-[1.2rem]'>Chia sẻ: </h3>
                                <ul className='flex gap-4'>
                                    <li>
                                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fm2.alothemes&picture=">
                                            <BsFacebook className='text-[1.4rem]' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/intent/tweet?text=Fashion%20full%20width%20Chair">
                                            <BsTwitter className='text-[1.5rem] bg-black rounded-full text-white p-1' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fm2.alothemes.com%2Ffunio%2Fenglish_7%2Ffashion-full-width.html%26title%3DFashion%2520full%2520width%2520Chair">
                                            <FaLinkedinIn className='text-[1.5rem] bg-black rounded-full text-white p-[2px]'  />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    
            </div>
        </div>


        <div className='m-auto px-8  xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] 
        lg:max-w-[1200px] xl:max-w-[1400px] xxl:max-w-[1740px]'
        >
            <h2 className='text-[2.2rem] font-semibold pb-4'>Thêm thông tin</h2>
            <div className='md:grid grid-cols-5 '>
                <div className='col-span-1'>
                    <h3 className='text-[1.5rem] pb-1 font-semibold text-gray-600 underline'>Chi tiết</h3>
                </div>
                <div className='col-span-4'>
                    <div>
                        <h4 className='text-[1.3rem]'>Giới thiệu: </h4>
                        <span className='text-[1.2rem] text-gray-500 pl-8'>{product.intro}</span>
                    </div>
                    <div className='flex gap-4 items-center pt-4'>
                        <h4 className='text-[1.3rem]'>Màu: </h4>
                        <span className='text-[1.2rem] text-gray-500'>{product.Details.color}</span>
                    </div>
                    <div className='flex gap-4 items-center pt-4'>
                        <h4 className='text-[1.3rem]'>Kích Thước: </h4>
                        <span className='text-[1.2rem] text-gray-500'>{product.Details.size}</span>
                    </div>
                    <div className='flex gap-4 items-center pt-4'>
                        <h4 className='text-[1.3rem] '>Chất liệu: </h4>
                        <span className='text-[1.2rem] text-gray-500'>{product.Details.material}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductDetails