import React from 'react'
import PagesBanner from './PagesBanner'
import FaqArea from './FaqArea'
import InstagramArea from './InstagramArea'
import Footer from './Footer'

const PageFaq = ({mainTitle}) => {
  return (
    <>
      <PagesBanner title={mainTitle} />
      <FaqArea />
      <InstagramArea />
      <Footer />
    </>
  )
}

export default PageFaq



