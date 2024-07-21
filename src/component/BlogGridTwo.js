import React from 'react'
import BlogOneBanner from './BlogOneBanner'
import Blog2 from './Blog2'
import InstagramArea from './InstagramArea'
import Footer from './Footer'

const BlogGridTwo = ({ mainTitle}) => {
  return (
    <>
      <BlogOneBanner  title={mainTitle}/>
      <Blog2 />
      <InstagramArea />
      <Footer />
    </>
  )
}

export default BlogGridTwo
