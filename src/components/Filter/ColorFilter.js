import React, { useState, useContext } from 'react'
import { ProductContext } from '../ProductsContextProvider'
// import '@headlessui/react'


const ColorFilter = () => {
  const {colors,setColor, handleClick, loading} = useContext(ProductContext)

  return (
    <div> 
        <div className='pb-2 pt-8 text-[1.2rem] border-b font-semibold'>
            <h2>MÀU SĂC</h2>
        </div>
        <div className='pt-5 pl-4'>
            {colors.map((color, index)=>{
                return (
                    <div  key={index}>
                        <label onClick={handleClick()} className=' cursor-pointer' >
                            <input 
                            className='mr-2'
                            type="radio" name='c' 
                            onClick={()=> setColor(color)}
                            /> 
                             {color}
                        </label>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ColorFilter