import React from 'react'
import CoffeeProducts from './CoffeeProducts'

const ShopInfoArea = () => {
  return (
    <>
      <div className="shopInfoArea">
        <div className="container">
            <div className="row pb-0">
                <div className="col-lg-12">
                    <ul className="shopInfoTabs">
                        <li className='navItem'>
                            <button className='navLink active position-relative'>
                             Description
                            </button>
                        </li>
                        <li className='navItem'>
                            <button className='navLink position-relative'>
                            Nutrition Fact
                            </button>
                        </li>
                        <li className='navItem'>
                            <button className='navLink  position-relative'>
                            Reviews
                            </button>
                        </li>
                    </ul>
                    <div className="tabContent mt-5">
                        <div className="tabPane">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                            <p className='mt-3'>
                            Remaining essentially unchanged. It was popularized in the 1960s with the release of Learjet sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Lauds PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <p className='mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <ul className="shopInfoCta pt-4  m-0 p-0 d-flex">
                        <li><i class="fa-solid fa-truck-fast"></i>
                        <span>Shipping & Returns</span>
                        </li>
                        <li><i class="fa-solid fa-medal"></i>
                        <span>Warranty</span>
                        </li>
                        <li><i class="fa-solid fa-shield-halved"></i>
                        <span>Secure Payment</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <CoffeeProducts/>
      </div>
    </>
  )
}

export default ShopInfoArea
