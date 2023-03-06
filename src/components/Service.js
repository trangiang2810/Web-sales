import React from 'react'
import Service1 from '../img/icon/service1.png'
import Service2 from '../img/icon/service2.png'
import Service3 from '../img/icon/service3.png'

const Service = () => {
  return (
    <from className='w-full'>
      <div style={{background:'#f6ebdf'}} className=' px-4 xs:px-10 py-8 xs:py-12 block'>
        <div className='flex max-sm:flex-col max-w-[1740px] sm:px-6 m-auto'>
          <div className=' w-1/3 py-14 px-5 max-sm:w-full max-sm:border-x-2 max-sm:border-y-2 max-sm:border-gray-400'>
              <img className='block m-auto pb-5' src={Service1} alt="" />
              <h2 className='text-[1.1rem] text-center py-4 font-medium'>GIAO HÀNG TRÊN TOÀN QUỐC </h2>
              <p className='text-center text-[#6d6d6d]'>   
                <span>
                    Ngồi lại và thư giãn!
                    Chúng tôi sẽ mang sản phẩm tốt nhất đến với bạn .
                </span>
              </p>
          </div>
          <div className=' w-1/3 py-14 px-5 max-sm:w-full  max-sm:border-x-2 max-sm:border-gray-400'>
              <img className='block m-auto pb-5' src={Service2} alt="" />
              <h2 className='text-[1.1rem] text-center py-4 font-medium'>MUA HÀNG KHÔNG LO LẮNG</h2>
              <p className=' text-center text-[#6d6d6d]'>   
                <span>
                  Sản phẩm được bảo hành 3 năm, bao gồm cả dịch vụ sửa chữa tại nhà .
                </span>
              </p>
          </div>
          <div className=' w-1/3 py-14 px-5 max-sm:w-full max-sm:border-x-2 max-sm:border-y-2 max-sm:border-gray-400'>
              <img className='block m-auto pb-5' src={Service3} alt="" />
              <h2 className='text-[1.1rem] text-center py-4 font-medium'>TỪ HƠN 100 LOẠI VẢI</h2>
              <p className=' text-center text-[#6d6d6d]'>   
                <span>
                    Được lựa chọn và kết hợp. Tạo ra món đồ nội thất có một không hai cho bạn .
                </span>
              </p>
          </div>
        </div>
      </div>
    </from>
  )
}

export default Service