import React from 'react'
import BlogOneBanner from './BlogOneBanner'
import ShopCheckForm from './ShopCheckForm'
import Footer from './Footer'


const ShopCheckout = ({mainTitle}) => {
  return (
    <>
       <BlogOneBanner  title={mainTitle}/>
       <ShopCheckForm/>
       <Footer />
    </>
  )
}

export default ShopCheckout
