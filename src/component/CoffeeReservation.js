import React from 'react'

const CoffeeReservation = () => {
  return (
    <>
      <div className="coffeeReservation">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="sectionTitle section">
                        <p>Blog & News</p>
                        <h2 className="title mb-4 mt-2" style={{color:"#86371C"}}>Book Table Now & Get Up to 30% Discount</h2>
                        <span className='text_color_coffee'>Epicurean takes pride in the art of roasting, transforming raw coffee beans into a symphony of aromatic notes and rich flavors.</span>
                    </div>
                    <ul className='checkList mt-4 m-0 p-0'>
                        <li><i class="fa-regular fa-circle-check"></i>
                            Free Sign Up Now
                        </li>
                        <li><i class="fa-regular fa-circle-check"></i>
                            No Credit Card Needed
                        </li>
                        <li><i class="fa-regular fa-circle-check"></i>
                            We Give You The Best Deal Ever.
                        </li>
                    </ul>
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
                                <button type='submit' className='commonBtn' style={{backgroundColor:"#270A05"}}>Conform Reservation
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

export default CoffeeReservation
