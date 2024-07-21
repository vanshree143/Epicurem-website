import React from 'react'
import BlogOneBanner from './BlogOneBanner'
import ShopArea from './ShopArea'
import InstagramArea from './InstagramArea'
import Footer from './Footer'

const ShopHome = ({mainTitle}) => {
  return (
    <>
      <BlogOneBanner  title={mainTitle}/>
      <ShopArea />
      <InstagramArea />
      <Footer /> 
    </>
  )
}

export default ShopHome
