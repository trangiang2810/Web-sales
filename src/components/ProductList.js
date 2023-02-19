import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from './ProductsContextProvider'
import Product from './Product'
import Icon from '../img/sorry.png'
import {ImSpinner2} from 'react-icons/im'

const Products = () => {
  const {products, loading} = useContext(ProductContext)
  if(loading) {
     return(<ImSpinner2 className='mx-auto animate-spin text-violet-700 text-[3rem] mt-[150px]' />)
  }
  if(products.length < 1) {
    return <div className='w-full text-center'>
      <div className='m-auto w-[50%]'>
        <img className='m-auto' src={Icon} />
      </div>
      <h1 className='text-[1.3rem] sm:text-[1.8rem] text-gray-500'> Rất tiếc, Không có sản phẩm bạn đang tìm kiếm</h1> 
    </div>
  }
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 '>
        {products.map((product, index)=>{
            return(
                <Product key={index} product={product}/>
            )
          })} 
    </div>
  )
}


export default Products

