import React, { createContext, useEffect, useState } from 'react'
import { productsData } from '../Data'

export const ProductContext = createContext()

const ProductContextProvider = ({children}) => {
  const [products, setProducts] = useState(productsData)
  const [property, setProperty] = useState('all')
  const [properties,setProperties] = useState([])
  const [color, setColor] = useState('all')
  const [colors, setColors] = useState([])
  const [loading, setLoading] =useState(false)


  const [bestsellersSofa, setBestsellersSofa] =useState([])


  
  useEffect(()=> {
    const allProperties = products.map((product)=> {
      return product.type
    });
    const allColors = products.map((product)=> {
      return product.Details.color
    });
    
    const uniqueProperties = ['all', ... new Set(allProperties)]
    setProperties(uniqueProperties)

    const uniqueColors = ['all', ... new Set(allColors)]
    setColors(uniqueColors)
  },[])
  
  
  useEffect(()=>{
    const filterBestsellersSofa = products.filter(
      (item) => item.type === 'Sofa'
      );
      setBestsellersSofa(filterBestsellersSofa)
    },[])
    
    
    const handleClick = ()=>{
      // setLoading(true)
      const isDefault = (str) => {
        return str.split(' ').includes('all')
      }
      const newProducts = productsData.filter((product) => {
        if(product.type === property && product.Details.color === color){
          return product
        }
        if(isDefault(property) && isDefault(color)){
        return product
      }
      if(!isDefault(property) && isDefault(color)){
        return product.type === property
      }
      if(!isDefault(color) && isDefault(property)){
        return product.Details.color === color
      }
      if(!isDefault(color) && !isDefault(property)){
        return product.Details.color === color && product.type === property
      }
    })
    
    setTimeout(()=>{
      setProducts(newProducts)
    },[])
  }
  
  
  // handle Increase and decrease
  const handleDown = () =>{
    productsData.sort((a,b)=>a.price - b.price)
  } 
  const handleUp = () =>{
    productsData.sort((a,b)=>b.price - a.price)
  }

  
  //handle Search
  const handleSearch = e =>{
    const searchItem = e.target.value
    const searchedProducts = productsData.filter(item => item.name.toLowerCase().includes(searchItem.toLowerCase()))
    setProducts(searchedProducts)
  }


  return (
   <ProductContext.Provider value={{
    products,
    setProducts,
    properties,
    colors,
    setColor,
    property,
    setProperty,
    bestsellersSofa,
    loading,
    handleClick,
    handleDown,
    handleUp,
    handleSearch

   }}>
    {children}
   </ProductContext.Provider>
  )
}

export default ProductContextProvider