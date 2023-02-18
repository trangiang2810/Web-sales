import React, { createContext, useEffect, useState } from 'react'
import { productsData } from '../Data'
import Product from './Product'
export const ProductContext = createContext()

const ProductContextProvider = ({children}) => {
  const [products, setProducts] = useState(productsData)
  const [properties,setProperties] = useState([])
  const [property, setProperty] = useState('')
  const [color, setColor] = useState('')
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

    const allPrices = products.map((product)=> {
      return product.price
    });
    


    const uniqueProperties = ['', ... new Set(allProperties)]
    setProperties(uniqueProperties)

    const uniqueColors = ['', ... new Set(allColors)]
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
      return str.split(' ').includes('')
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
      return setProducts(newProducts)

      
    },0)
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
    
   }}>
    {children}
   </ProductContext.Provider>
  )
}

export default ProductContextProvider