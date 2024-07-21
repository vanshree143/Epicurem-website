import React from 'react'
import PagesBanner from './PagesBanner'
import AddressArea from './AddressArea'
import ReservationSection from './ReservationSection'
import InstagramArea from './InstagramArea'
import Footer from './Footer'

const pageReservation = ({mainTitle}) => {
  return (
    <>
      <PagesBanner title={mainTitle} />
      <AddressArea />
      <ReservationSection/>
      <InstagramArea />
      <Footer />
    </>
  )
}

export default pageReservation
