import React from 'react'
import BlogOneBanner from './BlogOneBanner'
import ShopCartForm from './ShopCartForm'
import Footer from './Footer'



const ShopCart = ({mainTitle}) => {
  return (
    <>
       <BlogOneBanner  title={mainTitle}/>
       <ShopCartForm/>
       <Footer/>
    </>
  )
}

export default ShopCart
