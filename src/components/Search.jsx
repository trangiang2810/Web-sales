import React, { useContext } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Icon from '../img/sorry.png'
import { ProductContext } from './ProductsContextProvider'
const Search = ({searchToggle}) => {
    const {handleSearch, products} = useContext(ProductContext)
    
    return (
        <section className='pt-32 bgSearch fixed top-0 w-full h-full z-[9999999999999999999]' >
            <div className='fixed top-5 right-8'>
                <AiFillCloseCircle onClick={searchToggle} className='text-[2.5rem] cursor-pointer' />
            </div>
            
            <div className='w-full px-8 sm:w-[70%] m-auto'>
                <div className='flex gap-2 items-center p-[1%] bg-[#767676] rounded-md'>
                    <input onChange={handleSearch} type="text" placeholder='Search' className='w-full h-14 text-[1.2rem] xs:text-[1.5rem] outline-none px-3' />
                    <BsSearch className='text-white text-[2rem] bg-zinc-900 h-12 w-16 p-3' />
                </div>
                {
                    (products.length < 1) ?
                        <div className='w-full text-center'>
                          <div className='m-auto w-[50%]'>
                            <img className='m-auto' src={Icon} />
                          </div>
                          <h1 className='text-[1.3rem] sm:text-[1.8rem] text-gray-700'> Rất tiếc, Không có sản phẩm bạn đang tìm kiếm</h1> 
                        </div>
                      :
                      
                
                    <div className='h-[60vh] overflow-x-scroll rounded-b-md'>
                        {products.map((item, index)=>(   
                            <Link onClick={searchToggle} key={index} to={`/sanpham/${item.id}`}>
                                <div className='flex scroll-m-60 items-center gap-4 bg-white p-2 border border-gray-300 hover:bg-gray-100'>
                                    <img className='w-[10%] max-w-[10rem] rounded-md' src={item.image} alt="" />
                                    <div className=' leading-6'>
                                        <h2 className='text-[1.2rem] xs:text-[1.7rem] sm:text-[2rem] font-semibold'>{item.name}</h2>
                                        <span className='text-[0.8rem] xs:text-[1.2rem] font-medium text-gray-500'>{item.price}đ</span>
                                    </div>
                                </div>
                            </Link> 
                        ))}
                    </div>
                }
            </div>
        </section>
  )
}

export default Search