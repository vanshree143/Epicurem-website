import React from 'react'
import { Link } from 'react-router-dom'
import shopimg1 from '../Assets/image/shopimg-1.png'
import shopimg2 from '../Assets/image/shop-thumb-1.png'
import shopimg3 from '../Assets/image/shop-thumb-2.png'
import shopimg4 from '../Assets/image/shop-thumb-3.png'
import shopimg5 from '../Assets/image/shop-thumb-4.png'


const ShopDetailArea = () => {
  return (
    <>
    <div className="shopDetailsArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="shopMainImg">
                        <Link to={shopimg1}>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </Link>
                        <img src={shopimg1} alt="" className='w-100'/>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-3">
                            <div className="shopSlideImg position-relative">
                                <img src={shopimg2} alt="" className='w-100' />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="shopSlideImg position-relative">
                                <img src={shopimg3} alt="" className='w-100' />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="shopSlideImg position-relative">
                                <img src={shopimg4} alt="" className='w-100' />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="shopSlideImg position-relative">
                                <img src={shopimg5} alt="" className='w-100' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="shopInfoWrap">
                        <h2 className='title'>Pepperoni Perfection Pizza</h2>
                        <div className="reviewNumber">
                            <div className="rating">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <p className='fs-7'>2 REVIEWS</p>
                        </div>
                        <h3 className='fs-2'>$25.00</h3>
                        <p className='stock mt-4 mb-4'>
                            <b>In Stock</b>
                            <span>12 Available</span>
                        </p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since .</p>
                        <div className="sizeWrap d-flex flex-wrap mt-4" style={{gap:"24px"}}>
                            <p><b>size:</b></p>
                            <div className="sizeGroup d-flex flex-wrap">
                                <label className='sizeGroupBtn'>
                                    <input type="radio" name='size' checked/>
                                    <p className='sizeBox'>
                                        <span>Short</span>
                                        8fl oz
                                    </p>
                                </label>
                                <label className='sizeGroupBtn'>
                                    <input type="radio" name='size' checked/>
                                    <p className='sizeBox'>
                                        <span>Tall</span>
                                        12fl oz
                                    </p>
                                </label>
                                <label className='sizeGroupBtn'>
                                    <input type="radio" name='size' checked/>
                                    <p className='sizeBox'>
                                        <span>Grande</span>
                                        16fl oz
                                    </p>
                                </label>
                                <label className='sizeGroupBtn'>
                                    <input type="radio" name='size' checked/>
                                    <p className='sizeBox'>
                                        <span>Venti</span>
                                        20fl oz
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div className="sizeWrapInclude d-flex flex-wrap"  style={{gap:"24px"}}>
                            <p className='flex-shrink-0'><b>What to Include:</b></p>
                            <div className="shopCatagorySelect d-flex flex-wrap">
                                <span>
                                <select>
                                    <option value="0">Select Ingredient</option>
                                    <option value="1">Category 1</option>
                                    <option value="2">Category 2</option>
                                    <option value="3">Category 3</option>
                                </select>
                                </span>
                                <span>
                                <select>
                                    <option value="0">Select Quantity</option>
                                    <option value="1">Category 1</option>
                                    <option value="2">Category 2</option>
                                    <option value="3">Category 3</option>
                                </select>
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <p><b>Quantity:</b></p>
                            </div>
                            <div className="col-lg-4">
                            <div className="numberInput pe-2">
                                        <span><i class="fa-solid fa-minus"></i></span>
                                        <h6 style={{color:"#270A05"}}>100rp</h6>
                                        <span><i class="fa-solid fa-plus"></i></span>
                            </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="commonBtn mt-2">
                                    <button className='w-100'>Add to Cart
                                    <span><i class="fa-solid fa-arrow-right-long"></i></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul className="wishList mt-4 p-0 m-0 d-flex">
                            <li><i class="fa-regular fa-heart"></i>
                                 Add to wishlist
                            </li>
                            <li><i class="fa-solid fa-arrow-right-arrow-left"></i>
                                 Compare
                            </li>
                        </ul>
                        <div className="detailsInfoWrap d-flex flex-column flex-md-row pt-3">
                            <span><b>Categories:</b></span>
                            <ul className="sidebarTag d-flex flex-wrap">
                            <li><Link to='#'>Healthy</Link></li>
                            <li><Link to='#'>Food</Link></li>
                            <li><Link to='#'>Beverage</Link></li>
                            <li><Link to='#'>Dessert</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default ShopDetailArea
