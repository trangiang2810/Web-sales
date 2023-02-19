import React from 'react'
import {BsStarFill, BsCartPlus, BsStarHalf, BsCart2} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import {toast} from 'react-toastify'


const Product = ({product}) => {
    const {id,image, name, price, reviews} = product

    const dispatch = useDispatch()

    const addToCart = () =>{
        dispatch(
            cartActions.addItem({
                id,
                image,
                price,
                name,
            })
        ) 
        toast.success('Thêm sản phẩm thành công')

    }

  return (
    <div className='xs:p-3 my-8 mx-2 hover:shadow-lg'>
        <Link to={`/sanpham/${product.id}`}>
            <div className='relative '>
                <img className=' w-full hover:scale-95' src={image} alt="" />
            </div>
            <div className=' text-center mt-4 leading-6 xs:leading-7 sm:leading-8'>
                <div className='gap-[2px] xs:gap-1  flex justify-center text-yellow-400 font-ligh items-center'>
                    <BsStarFill className='text-[0.6rem] xs:text-[0.7rem] md:text-[0.9rem] ' />
                    <BsStarFill className='text-[0.6rem] xs:text-[0.7rem] md:text-[0.9rem]' />
                    <BsStarFill className='text-[0.6rem] xs:text-[0.7rem] md:text-[0.9rem]' />
                    <BsStarFill className='text-[0.6rem] xs:text-[0.7rem] md:text-[0.9rem]' />
                    <BsStarHalf className='text-[0.6rem] xs:text-[0.7rem] md:text-[0.9rem]' />
                    <span className='text-gray-500 text-[0.9] max-xs:leading-4 max-xs:text-[0.6rem] max-md:text-[0.7rem]'>{`(${reviews} đánh giá)`}</span>
                </div>
                <h2 className='text-[0.9rem] md:text-[1.3rem] xs:text-[1.1rem] text-gray-700 capitalize'>{name}</h2>
                <h4 className='text-[0.9rem] xs:text-[1.1rem]'>{price}. đ</h4>
            </div>
        </Link>
            <div className='flex justify-center'>
                <button onClick={addToCart} className='bg-black flex text-white py-2 px-1 xs:px-3 gap-1 xs:gap-2 rounded-md boxShadow active:scale-75 hover:bg-white hover:text-black hover:border border-black '>
                    <BsCartPlus className= 'text-[0.8rem] xs:text-[1.1rem]'  />
                    <span className='text-[0.7rem] xs:text-[1.1rem]'>Thêm vào giỏ hàng</span>
                </button>
            </div>
    </div>
  )
}

export default Product