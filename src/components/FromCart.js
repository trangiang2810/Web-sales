import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'

      
const FromCart = ({item}) => {
    const dispatch = useDispatch()
    const deleteProduct = () =>{
      if(window.confirm('Bạn muốn xóa sản phẩm ?')){
      dispatch(cartActions.deleteItem(item.id))
      } else{
        return
      }
    }
    return (
        <tr>         
            <td className='flex items-center gap-4 p-[0.5rem] border'>
              <img className='sm:w-20 w-16 rounded-sm' src={item.image} alt="" />
              <h2 className='max-xs:text-[1rem] leading-5 text-[1.3rem] w-full'>{item.name}</h2>
            </td>
            <td className='sm:px-8 px-4 max-xs:text-[1rem] text-[1.3rem] text-center border'>{item.price}</td>
            <td className='sm:px-6 px-4 max-xs:text-[1rem] text-[1.3rem] text-center border'>{item.quantity}</td>
              <td className='sm:px-8 px-2 border'>
                <AiOutlineDelete className='cursor-pointe max-xs:text-[1rem] text-[1.3rem] m-auto' onClick={deleteProduct} />
              </td>
        </tr>
    )
}
      
export default FromCart