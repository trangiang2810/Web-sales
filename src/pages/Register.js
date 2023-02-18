import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const[phone, setPhone] = useState('')
  const[pass, setPass] = useState('')
  const[error, setError] = useState(false)
  const[error2, setError2] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(phone.length==0 || pass.length == 0){
      setError(true)
    }else if(phone.length<10){
      setError2(true)
    }
    
  }
  return (
    <form onSubmit={handleSubmit} className='py-24 px-8 leading-8'>
      <div className='w-full xs:w-96 boxShadow m-auto px-10 py-14 rounded-lg'>
        <h1 className='text-[1.5rem] text-center font-semibold py-3'>Đăng Ký</h1>
        <div className='my-4'>
          <div>
            <input className='border w-full p-2' type="number" placeholder='Số điện thoại' onChange={e=>setPhone(e.target.value)} />
            {
              (
                error && phone.length <=0 
                ? 
                <span className='text-[0.7rem] text-red-500 font-medium'>Vui lòng nhập số điện thoại</span>
                : 
                ''  
              )     
                ||
              (
                error2 && phone.length <10 || phone.length > 10 
                ? 
                <span className='text-[0.7rem] text-red-500 font-medium'>Số điện thoại không hợp lệ</span>
                : 
                ''
              )
            }
          </div>
          <div>
            <input className='border w-full p-2' type="password" placeholder='Mật khẩu ' onChange={e=>setPass(e.target.value)} />
            {
                error && pass.length <=0 
                ? 
                <span className='text-[0.7rem] text-red-500 font-medium'>Vui lòng nhập mật khẩu</span>
                : 
                ''  
            }
          </div>
        </div>

        <div className='flex justify-center'>
          <button className='bg-black text-white font-semibold w-full my-5 mx-8 py-1 rounded-lg boxShadow active:scale-95'>ĐĂNG NHẬP</button>
        </div>
        <div className='flex justify-center'>
          <span>Bạn đã có tài khoản? </span>
          <Link className=' text-blue-700' to='/dangnhap'>Đăng Nhập</Link>
        </div>
      </div>
    </form>
  )
}

export default Register