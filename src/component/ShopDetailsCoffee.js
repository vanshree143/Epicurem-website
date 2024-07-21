import React from 'react'
import BlogOneBanner from './BlogOneBanner'
import ShopCoffeeDetailsArea from './ShopCoffeeDetailsArea'
import ShopInfoArea from './ShopInfoArea'
import Footer from './Footer'



 const ShopDetailsCoffee = ({mainTitle}) => {
  return (
    <>
     <BlogOneBanner  title={mainTitle}/>
      <ShopCoffeeDetailsArea/>
      <ShopInfoArea/>
      <Footer/>
    </>
  )
}

export default ShopDetailsCoffee
