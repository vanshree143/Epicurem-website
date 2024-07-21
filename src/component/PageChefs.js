import React from 'react'
import PagesBanner from './PagesBanner'
import Chefs from './Chefs'
import InstagramArea from './InstagramArea'
import Footer from './Footer'

const PageChefs = ({mainTitle}) => {
  return (
    <>
      <PagesBanner title={mainTitle} />
      <Chefs />
      <InstagramArea />
      <Footer />
    </>
  )
}

export default PageChefs
