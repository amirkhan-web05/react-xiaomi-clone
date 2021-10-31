import React from 'react'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Products from '../Products/Products'
import Promo from '../Promo/Promo'
import Devices from '../Devices/Devices'

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