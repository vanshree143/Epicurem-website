import React from 'react'

const ReservationSection = () => {
  return (
    <>
      <div className="reservationSection">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8 col-xl-6 text-center">
                    <p className='name'>Reservation</p>
                    <h2 className='title'>Create Unforgettable Moments By Reserve a Table Now</h2>
                </div>
            </div>
            <div className="row mt-5 text-center justify-content-center">
                <div className="col-lg-8">
                <form className='bookingForm text-center justify-content-center'>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input1">
                                    <input type="text" className='input' placeholder='Your Name' required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input2">
                                    <input type="text" className='input' placeholder='Phone' required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input3">
                                    <input type="text" className='input' placeholder='Email Address' required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input4">
                                    <input type="text" className='input' placeholder='Date' required/>
                                    <span className='icons'><i class="fa-solid fa-calendar-days"></i></span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input5 position-relative">
                                    <input type="text" className='input' placeholder='Persons' required/>
                                    <span className='icons'><i class="fa-solid fa-people-group"></i></span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input6 position-relative">
                                    <input type="text" className='input' placeholder='Time' required/>
                                    <span className='icons'><i class="fa-regular fa-clock"></i></span>
                                </div>
                            </div>
                            <div className="col-md-12 ms-2 mt-2 text-center">
                                <button type='text' className='commonBtn mt-3'>Book Now
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ReservationSection
