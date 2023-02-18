import React, { useContext } from 'react'
import { ProductContext } from '../ProductsContextProvider'

const PriceFilter = () => {

  const {setPrice, handleClick} = useContext(ProductContext)

    const prices = [
        {
          value: '',
        },
        {
          value: '0 - 450.000',
        },
        {
          value: '130000 - 160000',
        },
        {
          value: '160000 - 190000',
        },
        
      ]
  return (
    <div> 
        <div className='pb-2 pt-8 border-b font-semibold'>
            <h2 onClick={handleClick()}>MÀU SĂC</h2>
        </div>
        <div className='pt-5 pl-4'>
            {prices.map((price, index)=>{
                return (
                    <div key={index}>
                        <label >
                            <input className='mr-2'
                            type="radio" name='c' 
                            onClick={()=> setPrice(price.value)}
                            /> 
                             {price.value}
                        </label>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default PriceFilter