import React from 'react'
import ctarate from '../Assets/image/cta-rate.svg'
import { Link } from 'react-router-dom'

const PizzaReservation = () => {
  return (
    <>
      <div className="pizzaReservation">
        <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-lg-6 text-white">
                    <div className="sectionTitle ">
                        <p>Book a Table</p>
                        <h2 className='title text-white'>Get Unlimited Discount and Offers on Reservation</h2>
                    </div>
                    <p className='mt-4 mb-4'>There are many variations of passages of Lorem Ipsum form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <img src={ctarate} alt="" className='mb-3 mb-lg-5' />
                    <Link to='#'>
                        <div className="commonBtn orange mb-5">
                            <button>Get The Coupon Code</button>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-5">
                <form className='bookingForm'>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input1">
                                    <input type="text" className='input' placeholder='Your Name' required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input2">
                                    <input type="text" className='input' placeholder='Last Name' required/>
                                </div>
                            </div>
                          
                            <div className="col-md-6">
                                <div className="input3">
                                    <input type="text" className='input' placeholder='Phone' required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input4">
                                    <input type="text" className='input' placeholder='Date' required/>
                                    <span className='icons'><i class="fa-solid fa-calendar-days"></i></span>
                                </div>
                            </div>
                            <div className="col-md-12 ms-2 mt-2 mb-2">
                                <div className="input5">
                                    <input type="text" className='input' placeholder='Email Address' required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input6 position-relative">
                                    <input type="text" className='input' placeholder='Persons' required/>
                                    <span className='icons'><i class="fa-solid fa-people-group"></i></span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input7 position-relative">
                                    <input type="text" className='input' placeholder='Time' required/>
                                    <span className='icons'><i class="fa-regular fa-clock"></i></span>
                                </div>
                            </div>
                            <div className="col-md-12 ms-2 mt-2">
                                <button type='submit' className='commonBtn bg-black'>Conform Reservation
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

export default PizzaReservation
