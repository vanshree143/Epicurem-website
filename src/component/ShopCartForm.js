import React from 'react'
import cartimg from '../Assets/image/cart-img-1.png'
import CoffeeProducts from './CoffeeProducts'

const ShopCartForm = () => {
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
            <div className="row pt-5">
                <div className="col-lg-12">
                    <div className="cartProDetails responsive">
                        {/* <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="cartProImg">
                                            <div className="singleCartBox d-flex justify-content-between align-items-center">
                                                <div className="singleCartImg">
                                                    <img src={cartimg} alt="" />
                                                    <h2 className='title fs-4'>Coconut Milk Macchiato</h2>
                                                </div>
                                                <div className="cartXicon">
                                                <i class="fa-solid fa-xmark"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <b>$10.00</b>
                                    </td>

                                    <td>
                                    <div className="numberInput pe-2">
                                        <span><i class="fa-solid fa-minus"></i></span>
                                        <h6 style={{color:"#270A05"}}>100rp</h6>
                                        <span><i class="fa-solid fa-plus"></i></span>
                                    </div>
                                    </td>

                                    <td>
                                        <b>$10.00</b>
                                    </td>
                                </tr>
                            </tbody>
                        </table> */}
                    </div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-lg-12">
                    <form className='cartFormWrap'>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className='d-inline-block mb-3'>Order Special Instructions</label>
                                <textarea name="" id="" cols="30" rows="3"></textarea>
                            </div>
                            <div className="col-lg-4">
                                <label className='d-inline-block mb-3'>Order Special Instructions</label>
                                <p className='mb-2'>*Discount will be calculated and applied at checkout</p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <div className="twoBtns d-flex" style={{gap:"10px"}}>
                                    <div className='commonBtn' >
                                    <button >Update Cart</button>
                                    </div>
                                    <div className='commonBtn styleborder'>
                                    <button>Checkout</button>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <CoffeeProducts/>
      </div>
    </>
  )
}

export default ShopCartForm
