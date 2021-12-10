import React from 'react'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'
import Products from '../components/Products/Products'
import Promo from '../components/Promo/Promo'
import Devices from '../components/Devices/Devices'

const Home = () => {
    return (
        <>
          <Header />
          <Banner/>
          <Promo />
          <Products />
          <Devices/>
        </>
    )
}

export default Home