import React from 'react'
import BlogOneBanner from './BlogOneBanner'
import ShopDetailArea from './ShopDetailArea'
import ShopInfoArea from './ShopInfoArea'
import Footer from './Footer'

const ShopDetails = ({mainTitle}) => {
  return (
    <>
        <BlogOneBanner  title={mainTitle}/>
        <ShopDetailArea/>
        <ShopInfoArea/>
        <Footer/>
    </>
  )
}

export default ShopDetails
