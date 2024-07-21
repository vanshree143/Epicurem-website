import React from 'react';
import disimg1 from '../Assets/image/discount-1-1.png'
import disimg2 from '../Assets/image/discount-2-2.png'
import disimg3 from '../Assets/image/discount-3.png'
import disimg4 from '../Assets/image/discount-4.png'
import disimg5 from '../Assets/image/discount-5.png'
import disimg6 from '../Assets/image/discount-6.png'
import { discount } from './Users';


const Discount = (Propps) => {
    const {image,foodInfo,rating,info,price,oldPrice,btn}=Propps;
  return (
    <>
      <div className="discountArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="sectionTitle text-center">
                        <p className='name'>Discount Menu</p>
                        <h2 className='title'>Today Discount Menu</h2>
                    </div>
                </div>
            </div>
            <div className="row pt-5">

                {
                    discount?.map((item)=>{
                        return(
                            <div className="col-lg-4 col-sm-6 col-xl-6">
                    <div className="dicountMenuBox d-flex flex-column flex-xl-row align-itmes-center">
                        <div className="disMenuImg">
                            <img src={item.image} alt="" className='w-100' />
                        </div>
                        <div className="disMenuInfo">
                            <h3>{item.foodInfo}</h3>
                            <div className="rating">
                               <span>{item.rating}</span>
                               <span>{item.rating}</span>
                               <span>{item.rating}</span>
                               <span>{item.rating}</span>
                               <span>{item.rating}</span>
                            </div>
                            <p className='mt-3'>{item.info}</p>
                            <div className="price">
                                <span className='fs-3 fw-bold'>{item.price}</span>
                                <span className='ms-3'><del>{item.oldPrice}</del></span>
                            </div>
                            <div className="commonBtn mt-3">
                                <button className='fw-bold'>{item.btn}</button>
                            </div>
                        </div>
                    </div>
                </div>
                        )
                    })
                }                
            </div>
        </div>
      </div>
    </>
  )
}

export default Discount
