import React from 'react'
import cimg1 from '../Assets/image/cart-img-1.png'
import cimg2 from '../Assets/image/cart-img-2.png'

const ShopCheckForm = () => {
  return (
    <>
       <div className="shopFromWrap">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <ul className="shopFormBox d-flex justify-content-between">
                        <li className='active'>
                            <span></span>
                            Cart
                        </li>
                        <li>
                            <span></span>
                            Customer Info
                        </li>
                        <li>
                            <span></span>
                            Payment Method
                        </li>
                        <li>
                            <span></span>
                            Payment Info
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row pt-5 d-flex justify-content-between">
                <div className="col-lg-6">
                    <form className='checkoutFormWrap'>
                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <h2 className='title fs-4'>Customer Info</h2>
                            </div>
                            <div className="col-md-12 mt-3">
                                <div className="input1">
                                    <input type="text" className='input' placeholder='Email Address'/>
                                </div>
                            </div>
                            <div className="col-lg-12 mt-5">
                                <h2 className='title fs-4'>Shipping Address</h2>
                            </div>
                            <div className="col-md-6">
                            <div className="input1">
                                    <input type="text" className='input' placeholder='First Name'/>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input1">
                                    <input type="text" className='input' placeholder='Last Name'/>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div className="input1">
                                    <input type="text" className='input' placeholder='Company (Optional)'/>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div className="input1">
                                    <input type="text" className='input' placeholder='Address Line 1'/>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div className="input1">
                                    <input type="text" className='input' placeholder='Address Line 2'/>
                                </div>
                            </div>
                            <div className="col-md-6 mt-3">
                                <div className="selecet1">
                                    <select name="" id="">
                                        <option value="0">Country</option>
                                        <option value="1">Country 1</option>
                                        <option value="2">Country 2</option>
                                        <option value="3">Country 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input1">
                                    <input type="text" className='input' placeholder='Region'/>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input1">
                                    <input type="number" className='input' placeholder='Postal Code'/>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input1">
                                    <input type="tel" className='input' placeholder='Phone Number'/>
                                </div>
                            </div>
                            <div className="col-lg-12 mt-4">
                                <div className="twoBtns d-flex" style={{gap:"20px"}}>
                                    <div className='commonBtn' >
                                    <button >Return to Cart</button>
                                    </div>
                                    <div className='commonBtn styleborder'>
                                    <button>Proceed</button>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-5 mt-4">
                    <h2 className='title fs-4 mb-3'>Your Cart</h2>
                    <div className="checkoutInfoWrap d-flex flex-column pt-4 pb-4">
                        <div className="singleCheckout d-flex flex-wrap">
                            <img src={cimg1} alt="" />
                            <div className="checkoutShopInfo flex-grow-1">
                                <h5 className='d-flex justify-content-between align-items-center'>
                                Coconut Milk Macchiato
                                <span className='dotCheck d-inline-block'></span>
                                <span>$10.00</span>
                                 </h5>
                                 <p>With extra milk / sugar / coconut....</p>
                            </div>
                        </div>
                        <div className="singleCheckout d-flex flex-wrap">
                            <img src={cimg2} alt="" style={{maxWidth:"100px"}} />
                            <div className="checkoutShopInfo flex-grow-1">
                                <h5 className='d-flex justify-content-between align-items-center'>
                                Coconut Milk Dingo
                                <span className='dotCheck d-inline-block'></span>
                                <span>$8.00</span>
                                 </h5>
                                 <p>With extra milk / sugar / coconut....</p>
                            </div>
                        </div>
                    </div>
                    <div className="couponWrap mt-5 mb-4">
                        <input type="text" placeholder='Discount Coupon (Optional)' className='w-100'/>
                        <div className="commonBtn flex-shrink-0 ">
                            <button>Apply Code</button>
                        </div>
                    </div>
                    <ul className="checkoutList pt-3 pb-3">
                        <li>Item Subtotal
                        <span>$10.00</span>
                        </li>
                        <li>Shipping
                        <span>$8.00</span>
                        </li>
                    </ul>
                    <h2 className='title fs-3 d-flex justify-content-between'>Total
                    <span>$20.00</span>
                    </h2>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ShopCheckForm
