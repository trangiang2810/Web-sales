import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdPayment, MdOutlinePayments } from 'react-icons/md'
import { FaCcPaypal } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import FromCart from '../components/FromCart'
import {toast} from 'react-toastify'


const Checkout = () => {
    const[name, setName]= useState('')
    const[phone, setPhone] = useState('')
    const[email, setEmail] = useState('')
    const[address, setaddress] = useState('')

    const[error, setError] = useState(false)
    const[error2, setError2] = useState(false)


    const cartItems = useSelector((state)=> state.cart.cartItems)
    const totalQuantity = useSelector(state=> state.cart.totalQuantity)
    const totalAmount = useSelector(state=> state.cart.totalAmount)

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(name.length == 0 || phone.length==0 || email.length==0 || address.length==0){
            setError(true)
        }
        else if(phone.length<10 || phone.length > 10){
            setError2(true)
        }
        else {
            toast.success('Đặt hàng thành công')
            console.log(name,phone,email,address)
        }
        
    }

  return (
    <form onSubmit={handleSubmit}  className='my-16 md:grid grid-cols-3 gap-16 sm:px-[10%] px-[5%]'>
        <div className='px-4 '>
            <h1 className=' font-semibold text-[1.4rem] pb-4'>ĐỊA CHỈ GIAO HÀNG</h1>
                <label className='flex flex-col pt-4'>
                    <span className='text-[0.7rem]'>Họ và tên*</span>
                    <input className='border p-2' type="text" placeholder='Nhập họ tên' onChange={e=>setName(e.target.value)} />
                    {error && name.length <=0 ? 
                    <span className='text-[0.7rem] text-red-500 font-medium'>Vui lòng nhập họ tên</span>
                    :
                    ''
                    }
                </label>
                <label className='flex flex-col pt-4'>
                    <span className='text-[0.7rem]'>Số điện thoại*</span>
                    <input className='border p-2' type="number" placeholder='Số điện thoại' onChange={e=>setPhone(e.target.value)} />
                    {
                        error && phone.length <=0 
                        ? 
                        <span className='text-[0.7rem] text-red-500 font-medium'>Vui lòng nhập số điện thoại</span>
                        : 
                        ''
                    
                    ||
                        error2 && phone.length <10 || phone.length > 10 
                        ? 
                        <span className='text-[0.7rem] text-red-500 font-medium'>Số điện thoại không hợp lệ</span>
                        : 
                        ''
                    }   
                </label>
                <label className='flex flex-col pt-4'>
                    <span className='text-[0.7rem]'>Địa chỉ email*</span>
                    <input className='border p-2' type="email" placeholder='Nhập email' onChange={e=>setEmail(e.target.value)} />
                    {
                        error && email.length <=0 
                        ? 
                        <span className='text-[0.7rem] text-red-500 font-medium'>Vui lòng nhập số email</span>
                        :
                        ''
                    }
                </label>
                <label className='flex flex-col pt-4'>
                    <span className='text-[0.7rem]'>Địa chỉ*</span>
                    <input className='border p-3' type="text" placeholder='Nhập địa chỉ' onChange={e=>setaddress(e.target.value)} />
                    {
                        error && address.length <=0 
                        ? 
                        <span className='text-[0.7rem] text-red-500 font-medium'>Vui lòng nhập địa chỉ</span>
                        :
                        ''
                    }
                </label>
                
          
        


            <div className='pt-8'>
                <h1>PHƯƠNG THỨC THANH TOÁN</h1>
                <div className='flex items-center gap-1'>
                    <input type="radio" name='pay' />
                    <FaCcPaypal className='ml-2' />
                    <span>Thanh toán thẻ(ATM, Visa)</span>
                </div>
                <div className='flex items-center gap-1'>
                    <input type="radio" name='pay' />
                    <MdPayment className='ml-2' />
                    <span>Thanh toán ví Momo</span>
                </div>
                <div className='flex items-center gap-1'>
                    <input type="radio" name='pay' />
                    <MdOutlinePayments className='ml-2' />
                    <span>Thanh toán khi nhận hàng</span>
                </div>
            </div>
        </div>


        <div className='p-4 col-span-2'> 
            <h1 className='font-semibold text-[1.4rem] pb-4'>TÓM TẮT ĐƠN HÀNG</h1>
            <div className='leading-8'>
                <table className='m-auto w-full'>
                    {
                        cartItems.map((item,index)=>(
                        <FromCart item={item} key={index} />
                        ))
                    }
                </table>
                <div className='p-4'>
                    <div className='justify-between flex'>
                        <span>Tổng sản phẩm: </span>
                        <span>{totalQuantity}sp</span>
                    </div>
                    <div className='justify-between flex'>
                        <span>Thành tiền: </span>
                        <span>{totalAmount}.000đ</span>
                    </div>
                    <div className='justify-between flex'>
                        <span>Vận chuyển: </span>
                        <span className='font-light'>Liên hệ phí vận chuyển sau</span>
                    </div>
                    <div className='justify-between flex pt-6'>
                        <span className='text-[1.1rem] font-semibold'>TỔNG TIỀN: </span>
                        <span className='font-semibold text-[1.2rem]'>{totalAmount}.000đ</span>
                    </div>
                </div>

                <hr className='h-[0.1rem] my-8 bg-gray-400' ></hr>
            </div>
            <h3>Thông tin giao hàng :</h3>
            <span className='font-light text-[0.8rem] p-5'>Đối với những sản phẩm có sẵn tại khu vực, TrG . sẽ giao hàng trong vòng 2-7 ngày. 
                Đối với những sản phẩm không có sẵn, thời gian giao hàng sẽ được nhân viên TrG . thông báo đến quý khách.
            </span>
            <div className=' justify-center flex mt-8'>
                <a href='#'>
                    <button type='submit' className='bg-black text-white px-10 py-3 border rounded-md'>ĐẶT HÀNG</button>
                </a>
            </div>
        </div>
    </form>
  )
}

export default Checkout