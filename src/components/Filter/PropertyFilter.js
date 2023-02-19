import React, { useState, useContext } from 'react'
import { ProductContext } from '../ProductsContextProvider'
// import '@headlessui/react'


const PropertyFilter = () => {
  const {properties,setProperty, handleClick, loading} = useContext(ProductContext)

  return (
    <div> 
        <div className='pb-2 pt-8 text-[1.2rem] border-b font-semibold'>
            <h2 >DANH MỤC</h2>
        </div>
        <div className='pt-5 pl-4'>
            {properties.map((property, index)=>{
                return (
                    <div key={index}>
                        <label onClick={handleClick()} className=' cursor-pointer' >
                            <input 
                            className='mr-2'
                            type="radio" name='p' 
                            onClick={()=> setProperty(property)}
                            /> 
                             {property}
                        </label>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default PropertyFilter