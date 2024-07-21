import React from 'react'
import PagesBanner from './PagesBanner'
import { MenuBook } from './Users'
import FoodMenuBook from './FoodMenuBook'
import Recepies from './Recepies'
import InstagramArea from './InstagramArea'
import Footer from './Footer'



const FoodMenu1 = ({mainTitle}) => {
  return (
    <>
      <PagesBanner title={mainTitle}/>
       <FoodMenuBook />
       <FoodMenuBook />
       <FoodMenuBook />
       <FoodMenuBook />
       <Recepies />
       <InstagramArea />
       <Footer />
    </>
  )
}

export default FoodMenu1
