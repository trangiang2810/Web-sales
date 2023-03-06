import React, { useContext } from 'react'
import {BsStarFill, BsCartPlus, BsStarHalf} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { cartActions } from '../redux/slices/cartSlice'
import { ProductContext } from './ProductsContextProvider'


const Besstellers = () => {

    const {bestsellersSofa} = useContext(ProductContext)

        return (
            <div className='w-full px-3 xs:px-6 py-6 xs:py-12 '>
                <h1 className='text-[1.9rem] sm:text-[2.2rem] md:text-[2.6rem] xl:text-[3rem] block text-center mt-8'>
                    Bán chạy nhất
                </h1>
                <Link to='/sanpham'>
                    <h1 className='text-[0.9rem] md:text-[1.5rem] absolute right-[2%] animate-bounce '>
                        Xem thêm...
                    </h1>
                </Link>
                <div className='grid grid-cols-4'>
                {
                    bestsellersSofa.map((item,index)=>(
                            <div key={index} className='sm:p-3 my-8 mx-2 xs:mx-4 hover:shadow-lg'>
                                <Link to={`/sanpham/${item.id}`}>
                                    <div className='relative '>
                                        <img className='w-full hover:scale-95' src={item.image} alt="" />
                                    </div>
                                    <div className='text-center leading-5 md:leading-7'>
                                        <div className='max-sm:gap-0  gap-2 flex justify-center text-yellow-400 font-ligh items-center'>
                                            <div className='flex mb-1'>
                                                <BsStarFill className='text-[0.9rem] max-sm:text-[0.4rem] max-md:text-[0.7rem]' />
                                                <BsStarFill className='text-[0.9rem] max-sm:text-[0.4rem] max-md:text-[0.7rem]' />
                                                <BsStarFill className='text-[0.9rem] max-sm:text-[0.4rem] max-md:text-[0.7rem]' />
                                                <BsStarFill className='text-[0.9rem] max-sm:text-[0.4rem] max-md:text-[0.7rem]' />
                                                <BsStarHalf className='text-[0.9rem] max-sm:text-[0.4rem] max-md:text-[0.7rem]' />
                                            </div>
                                            <span className='text-gray-500 text-[0.9] max-sm:hidden max-md:text-[0.7rem]'>{`(${item.reviews} đánh giá)`}</span>
                                            <span className='text-gray-500 sm:hidden max-sm:text-[0.6rem]'>{`(${item.reviews}rv)`}</span>

                                        </div>
                                        <h2 className='text-[0.7rem] sm:text-[1rem] md:text-[1.4rem] text-gray-500 capitalize'>{item.name}</h2>
                                        <h4 className='text-[0.7rem] md:text-[1.2rem]'>{item.price}</h4>
                                    </div>
                                </Link>
                            </div>
                    ))
                }
                </div>
            </div>
            )
        }

export default Besstellers