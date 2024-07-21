import React from 'react';

const Reservation = () => {
  return (
    <>
      <div className="reservationArea">
        <div className="container">
            <div className="row pt-5 d-flex justify-content-between align-items-center">
                <div className="col-lg-5">
                    <div className="sectionTitle">
                        <p className='name'>Testimonials</p>
                        <h2 className='title text-white'>Hello, Reserve Your Own Private Table</h2>
                        <p className='text-white mt-3'>There are many variations of passages of Lorem Ipsum form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <form className='bookingForm'>
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
                            <div className="col-md-12 ms-2 mt-2">
                                <button type='submit' className='commonBtn'>Conform Reservation
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

export default Reservation
