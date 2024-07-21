import React from 'react'
import CoffeeBanner from './CoffeeBanner'
import CoffeeCta from './CoffeeCta'
import CoffeeProducts from './CoffeeProducts'
import CoffeeAbout from './CoffeeAbout'
import CoffeeChosse from './CoffeeChosse'
import CoffeeFoodMenu from './CoffeeFoodMenu'
import CoffeeChefs from './CoffeeChefs'
import CoffeePro from './CoffeePro'
import CoffeeReservation from './CoffeeReservation'
import CofeeBlog from './CofeeBlog'
import Footer from './Footer'


const CoffeeHome = () => {
  return (
    <>
      <CoffeeBanner />
      <CoffeeCta />
      <CoffeeProducts/>
      <CoffeeAbout />
      <CoffeeChosse />
      <CoffeeFoodMenu/>
      <CoffeeChefs/>
      <CoffeePro/>
      <CoffeeReservation/>
      <CofeeBlog />
      <Footer />
    </>
  )
}

export default CoffeeHome
