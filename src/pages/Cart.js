import React from 'react'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import FromCart from '../components/FromCart'

const Cart = () => {
  const cartItems = useSelector((state)=> state.cart.cartItems)
  const  totalAmount = useSelector((state)=> state.cart.totalAmount)
  const totalQuantity = useSelector(state=> state.cart.totalQuantity)

  return (

      <div className='w-full max-w-[1740px] mx-auto mt-6 '>
        <h1 className=' py-8 text-[2rem] flex justify-center font-semibold'>Sản phẩm đã thêm</h1>

        {
          (cartItems.length === 0) 
          ?
            <div className=' text-center'>
              <h1 className='text-[1.7rem] text-gray-500 p-16'>
                Giỏ hàng của bạn hiện đang trống
              </h1>
              {/* <Link to='/sanpham'>
                <button className='bg-black text-white p-4 active:scale-75 '>TIẾP TỤC MUA SẮM</button>
              </Link> */}
            </div>
          :
            <div className='flex justify-center sm:px-[10%]'>
              <table className='mx-2 w-full'>
                <thead>
                  <tr className='font-semibold '>
                    <td className='px-3 text-center py-5 border xs:text-[1.2rem]'>CÁC SẢN PHẨM</td>
                    <td className='px-3 text-center py-5 border xs:text-[1.2rem]'>GIÁ BÁN</td>
                    <td className='px-3 text-center py-5 border xs:text-[1.2rem]'>SL</td>
                    <td className='px-3 text-center py-5 border xs:text-[1.2rem]'>XÓA</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.map((item,index)=>(
                      <FromCart item={item} key={index} />
                     ))
                  }
                </tbody>
              </table>
            </div>
        }
            <div className='flex justify-center pt-8' >
              <Link to='/sanpham'>
                  <button className='hover:bg-black boxShadow border hover:text-white p-4 active:scale-75 '>TIẾP TỤC MUA SẮM</button>
              </Link>

            </div>
            {/* <p>(totalQuantity) </p> */}
            <div className='flex justify-between border-y-2 items-center py-4 px-[2%] my-16 bottom-0'>
              <div className='flex sm:gap-4 gap-2 items-center'>
                <h1 className='text-[1.4rem] sm:text-[1.8rem] flex items-center'>Thành tiền: </h1>
                <p className='text-[1.2rem] sm:text-[1.8rem]'>{totalAmount}.000đ</p>
              </div>
              <Link to='/thanhtoan'>
                  <button className='sm:text-[1.7rem] text-[1.1rem] hover:bg-black h-full bg-gray-900 font-bold border border-gray-600 rounded-md boxShadow text-white p-3 active:scale-75 '>
                    THANH TOÁN
                  </button>
              </Link>
            </div>   
      </div>
  )
}
export default Cart