import React from 'react'
import { Link } from 'react-router-dom'
import shopCta from '../Assets/image/shop-cta.svg'
import { ourMenu } from './Users';
import menu1 from '../Assets/image/menu-1.png';
import menu2 from '../Assets/image/menu-2.png';


const ShopArea = (Props) => {
  const {image,menuName,quntity,price,content,btn}=Props;
  return (
    <>
    <div className="shopArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="shopCatagory flex-wrap">
                      <select>
                        <option value="0">Sort By</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                      </select>
                      <p className='fw-bold mt-3'>Showing 1-10 Of 15 results</p>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="sidebarWrap">
                  <div className="sidebarItem">
                    <h2 className="sidebarTitle">Search</h2>
                    <form className='sideBarForm position-relative'>
                        <input type="email" placeholder='Search Here' />
                        <button className='commonBtn'>
                         <i class="fa-solid fa-magnifying-glass"></i> <span>Search</span>
                        </button>
                            </form>
                  </div>
                  <div className="sidebarItem">
                  <h2 className="sidebarTitle">Menu Bar</h2>
                  <div className="shopCatagorySelect d-flex flex-column">
                    <select>
                      <option value="0">Breakfast</option>
                      <option value="1">Breakfast 1</option>
                      <option value="2">Breakfast 2</option>
                      <option value="3">Breakfast 3</option>
                    </select>
                    <select>
                      <option value="0">Lunch</option>
                      <option value="1">Lunch 1</option>
                      <option value="2">Lunch 2</option>
                      <option value="3">Lunch 3</option>
                    </select>
                    <select>
                      <option value="0">Dinner</option>
                      <option value="1">Dinner 1</option>
                      <option value="2">Dinner 2</option>
                      <option value="3">Dinner 3</option>
                    </select>
                    <select>
                      <option value="0">Desserts</option>
                      <option value="1">Desserts 1</option>
                      <option value="2">Desserts 2</option>
                      <option value="3">Desserts 3</option>
                    </select>
                    <select>
                      <option value="0">Special Item</option>
                      <option value="1">Special Item 1</option>
                      <option value="2">Special Item 2</option>
                      <option value="3">Special Item 3</option>
                    </select>
                  </div>
                  </div>
                  <div className="sidebarItem">
                  <h2 className="sidebarTitle">Price Range</h2>
                  <div className="priceRange">
                    <div className="priceSlider uiWidget position-relative" id='slider'>
                      <span className='priceValue'>
                        <input type="range" min={1000} max={10000}/>
                        
                      </span>
                    </div>                   
                  </div>
                  </div>
                  <div className="sidebarItem">
                  <h2 className='sidebarTitle'>Popular Tags</h2>
                        <ul className="sidebarTag d-flex flex-wrap">
                            <li><Link to='#'>Lunch</Link></li>
                            <li><Link to='#'>Steak Burger</Link></li>
                            <li><Link to='#'>Drinks</Link></li>
                            <li><Link to='#'>Vegetables</Link></li>
                            <li><Link to='#'>Sea Foods</Link></li>
                            <li><Link to='#'>Sandwich</Link></li>
                        </ul>
                  </div>
                    <Link to='#'>
                      <img src={shopCta} alt="" className='w-100' />
                    </Link>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row mt-5">
                {
                              ourMenu?.map((item) =>{
                                return(
                                    <div className="col-xxl-4 col-md-6" style={{marginBottom:"80px"}}>
                                <div className="foodMenuInfo">
                                    <div className="foodImg">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <h2 className="foodMenuTitle" style={{fontSize:"20px"}}>
                                    {item.menuName}
                                    </h2>
                                    <p className='quntity'>{item.quntity}</p>
                                    <h2 className='foodMenuPrice'>{item.price}
                                    </h2>
                                    <p>{item.content}</p>
                                    <div className="commonBtn mt-5">
                                    <button>{item.btn}</button>
                                    </div>
                                </div>
                            </div>
                                )
                            })
                        }
                        <div className="col-xxl-4 col-md-6"
                          style={{marginBottom:"80px"}}>
                                <div className="foodMenuInfo">
                                    <div className="foodImg">
                                        <img src={menu1} alt="" />
                                    </div>
                                    <h2 className="foodMenuTitle" style={{fontSize:"20px"}}>
                                    Delicious Ebony Steak
                                    </h2>
                                    <p className='quntity'>Quantity (250 gm)</p>
                                    <h2 className='foodMenuPrice'>$28.00
                                    </h2>
                                    <p>There are many variations of Lorem Ipsum form</p>
                                    <div className="commonBtn mt-5">
                                    <button>Order Now</button>
                                    </div>
                                </div>
                        </div>
                        <div className="col-xxl-4 col-md-6"
                          style={{marginBottom:"80px"}}>
                                <div className="foodMenuInfo">
                                    <div className="foodImg">
                                        <img src={menu2} alt="" />
                                    </div>
                                    <h2 className="foodMenuTitle" style={{fontSize:"20px"}}>
                                    Hot Spicy Chicken
                                    </h2>
                                    <p className='quntity'>Quantity (250 gm)</p>
                                    <h2 className='foodMenuPrice'>$28.00
                                    </h2>
                                    <p>There are many variations of Lorem Ipsum form</p>
                                    <div className="commonBtn mt-5">
                                    <button>Order Now</button>
                                    </div>
                                </div>
                        </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                  <ul className="pagination d-flex text-start ">
                        <li>
                            <Link to='#'><i class="fa-solid fa-angle-left"></i></Link>
                        </li>
                        <li>
                            <Link>1</Link>
                        </li>
                        <li className='active'>
                            <Link>2</Link>
                        </li>
                        <li><Link>3</Link></li>
                        <li> <Link><i class="fa-solid fa-angle-right"></i></Link></li>
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

export default ShopArea
