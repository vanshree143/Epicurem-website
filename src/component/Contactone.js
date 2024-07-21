import React from 'react'
import PagesBanner from './PagesBanner'
import AddressArea from './AddressArea'
import ContactArea from './ContactArea'
import InstagramArea from './InstagramArea'
import Footer from './Footer'

const Contactone = ({mainTitle}) => {
  return (
    <>
      <PagesBanner title={mainTitle} />
      <AddressArea />
      <ContactArea />
      <InstagramArea />
      <Footer />
    </>
  )
}

export default Contactone
