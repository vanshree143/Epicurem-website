import React from 'react'
import PagesBanner from './PagesBanner'
import OurMenu from './OurMenu'
import Recepies from './Recepies'
import InstagramArea from './InstagramArea'
import Footer from './Footer'

const FoodMenu2 = ({mainTitle}) => {
  return (
    <>
      <PagesBanner  title={mainTitle}/>
      <OurMenu />
      <Recepies />
      <InstagramArea />
      <Footer />
    </>
  )
}

export default FoodMenu2
