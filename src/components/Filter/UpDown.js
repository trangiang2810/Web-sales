import React, { useContext } from 'react'
import { ProductContext } from '../ProductsContextProvider'


const ColorFilter = () => {
  const {handleDown, handleUp} = useContext(ProductContext)
  return (
    <div> 
        <div className='pt-3 justify-center sm:justify-end flex gap-4 text-white font-semibold'>
          <div className='boxShadow py-1 px-4 bg-black hover:bg-white hover:text-black'>
            <button onClick={handleUp} >Giảm dần</button>
          </div>
          <div className=' boxShadow py-1 px-4 bg-black hover:bg-white hover:text-black'>
            <button onClick={handleDown}>Tăng dần</button>
          </div>
        </div>
    </div>
  )
}

export default ColorFilter