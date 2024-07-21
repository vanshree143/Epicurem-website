import React from 'react'
import PagesBanner from './PagesBanner'
import AddressArea from './AddressArea'
import ContactPage from './ContactPage'
import ContactMap from './ContactMap'
import InstagramArea from './InstagramArea'
import Footer from './Footer'

const ContactTwo = ({mainTitle}) => {
  return (
    <>
      <PagesBanner title={mainTitle} />
      <AddressArea />
      <ContactPage/>
      <ContactMap />
      <InstagramArea />
      <Footer />
    </>
  )
}

export default ContactTwo
