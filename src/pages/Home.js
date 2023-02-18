import React from 'react'
import Banner from '../components/Banner'
import Collect from '../components/Collect'
import Besstellers from '../components/Bestsellers'
import Service from '../components/Service'
import Subscribe from '../components/Subscribe'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
        <Banner />
        <Besstellers />
        <Service/>
        <Collect/>
        <Subscribe />
        <Contact />
    </div>
  )
}

export default Home