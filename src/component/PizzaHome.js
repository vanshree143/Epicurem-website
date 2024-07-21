import React from 'react'
import PizzaBanner from './PizzaBanner'
import TimeArea from './TimeArea'
import ChoosePizzaArea from './ChoosePizzaArea'
import PizzaArea from './PizzaArea'
import PizzaAboutArea from './PizzaAboutArea'
import OurMenuPizza from './OurMenuPizza'
import PizzaChefs from './PizzaChefs'
import PizzaTestimonial from './PizzaTestimonial'
import PizzaReservation from './PizzaReservation'
import PizzaBlog from './PizzaBlog'
import Footer from './Footer' 

const PizzaHome = () => {
  return (
    <>
      <PizzaBanner />
      <TimeArea />
      <ChoosePizzaArea />
      <PizzaArea />
      <PizzaAboutArea />
      <OurMenuPizza />
      <PizzaChefs />
      <PizzaTestimonial />
      <PizzaReservation />
      <PizzaBlog />
      <Footer />
    </>
  )
}

export default PizzaHome
