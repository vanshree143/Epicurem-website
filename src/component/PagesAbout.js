import React from 'react'
import { users } from './Users'
import PagesBanner from './PagesBanner'
import AboutArea from './AboutArea'
import Trending from './Trending'
import Chefs from './Chefs'
import PagesVideo from './PagesVideo'
import VisitArea from './VisitArea'
import Cta from './Cta'
import Testimonials2 from './Testimonials2'
import InstagramArea from './InstagramArea'
import Footer from './Footer'
// import Data from './Data'

const PagesAbout = ({ mainTitle }) => {
  console.log("users", users);
  return (
    <>
      <PagesBanner title={mainTitle} />
      <AboutArea />
      <Trending />
      <Chefs />
      <PagesVideo />
      <VisitArea />
      <Cta />
      <Testimonials2 />
      <InstagramArea />
      <Footer />
    </>
  )
}

export default PagesAbout
