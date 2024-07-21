import React from 'react'
import InstagramArea from './InstagramArea'

import BlogSection2 from './BlogSection2'
import Footer from './Footer'
import BlogOneBanner from './BlogOneBanner'

const BlogDetails = ({mainTitle}) => {
  return (
    <>
  
     <BlogOneBanner title={mainTitle} />
     <BlogSection2 />
     <InstagramArea />
     <Footer />
    </>
  )
}

export default BlogDetails
