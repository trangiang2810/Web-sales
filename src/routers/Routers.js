
import {Routes, Route, Navigate} from 'react-router-dom'
import { ProductContext } from '../components/ProductsContextProvider';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Shop from '../pages/Shop';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
// import Category from '../components/Category';
import Inspiration from '../pages/Inspiration';
import Checkout from '../pages/Checkout';
import Register from '../pages/Register';


const Routers = () => {
  return (
    <Routes>
          <Route path='/' element={<Navigate to='trangchu' />} />
          <Route path='trangchu' element={<Home />} />
          <Route path='Web-sales' element={<Home />} />
          <Route path='sanpham' element={<Shop />} />
          <Route path='giohang' element={<Cart />} />
          <Route path='sanpham/:id' element={<ProductDetails />} />
          <Route path={'goccamhung'} element={<Inspiration />} />
          <Route path={'thanhtoan'} element={<Checkout />} />
          <Route path={'dangnhap'} element={<Login />} />
          <Route path={'dangky'} element={<Register />} />

    </Routes>
  )
}

export default Routers