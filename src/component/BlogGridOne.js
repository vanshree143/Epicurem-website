import React from 'react'
import BlogOneBanner from './BlogOneBanner'
import BlogGridArea from './BlogGridArea'
import Footer from './Footer'
import InstagramArea from './InstagramArea'

const BlogGridOne = ({ mainTitle}) => {
  return (
    <>
      <BlogOneBanner  title={mainTitle}/>
      <BlogGridArea />
      <InstagramArea />
      <Footer />
    </>
  )
}

export default BlogGridOne
