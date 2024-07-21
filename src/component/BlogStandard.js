import React from 'react'

import BlogSection from './BlogSection'
import InstagramArea from './InstagramArea'
import Footer from './Footer'
import BlogOneBanner from './BlogOneBanner'

const BlodStandard = ({mainTitle}) => {
  return (
    <>
      
      <BlogOneBanner  title={mainTitle} />
      <BlogSection />
      <InstagramArea />
      <Footer />
    </>
  )
}

export default BlodStandard
