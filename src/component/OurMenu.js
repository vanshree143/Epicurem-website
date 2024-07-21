import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import menutwo1 from '../Assets/image/menu-two-1.png'
import menutwo2 from '../Assets/image/menu-two-2.png'
import menutwo3 from '../Assets/image/menu-two-3.png'
import menutwo4 from '../Assets/image/menu-two-4.png'
import menutwo5 from '../Assets/image/menu-two-5.png'
import menutwo6 from '../Assets/image/menu-two-6.png'
import menutwo7 from '../Assets/image/menu-two-7.png'
import menutwo8 from '../Assets/image/menu-two-8.png'
import menutwo9 from '../Assets/image/menu-two-9.png'
import bgimg2 from "../Assets/image/slider-bg-2.png"
import bgimg3 from "../Assets/image/slider-bg-3.png"
import { ourMenu2, ourmenu21, ourmenu22 } from './Users';



const OurMenu = (Props) => {
    const {image,foodName,quntity,rate,info,price,icon}=Props;

    const responsive = {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        700: {
          items: 1,
        },
        1000: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      };

      const options = {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        700: {
          items: 1,
        },
        1000: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      };
      
      const slide3 = {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        700: {
          items: 1,
        },
        1000: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      };
  return (
    <>
      <div className="ourMenu">
        <div className="container">
        <div className="row">
                <div className="col-lg-12">
                    <div className="subTitle text-center">
                        <p className='name'>Menu Book</p>
                        <h2 className='title'>Our Main Menu</h2>
                    </div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-lg-12 pb-5">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="foodCategory d-flex flex-column align-items-center justify-content-between h-100">
                             <h2 className='text-white'>Break-fast</h2>
                             <div className="sliderButton"></div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                        <OwlCarousel className='owl-theme' loop margin={10} nav dots={false} responsive={responsive} items={3} navText={['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>']}>

                        {
                            ourMenu2?.map((item)=>{
                                return(
                                    <div class='item'>
                            <div className="foodeMenu2Box overflow-hidden">
                                <div className="foodMenu2Img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="foodMenu2Info">
                                    <h5 className='foodName'>{item.foodName}</h5>
                                    <p className='quntity'>{item.quntity}</p>
                                    <div className="rating mb-2">
                                    <span>{item.rate}</span>
                                    <span>{item.rate}</span>
                                    <span>{item.rate}</span>
                                    <span>{item.rate}</span>
                                    <span>{item.rate}</span>
                            </div>
                            <p>{item.info}</p>
                            <div className='d-flex justify-content-between align-items-center'>
                            <div className="price">
                                <span className='fs-3 fw-bold'>{item.price}</span>                               
                            </div>
                            <span className='icon'>{item.icon}</span>
                            </div>
                                </div>
                            </div>
                        </div>
                                )
                            })
                        }
                     
                    </OwlCarousel>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 pb-5">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="foodCategory d-flex flex-column align-items-center justify-content-between h-100" style={{backgroundImage:`url(${bgimg2})`}}>
                             <h2 className='text-white'>Break-fast</h2>
                             <div className="sliderButton"></div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                        <OwlCarousel className='owl-theme' loop margin={10} nav dots={false} items={3} responsive={options} navText={['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>']}>

                        {
                            ourmenu21?.map((item)=>{
                                return(
                                    <div class='item'>
                            <div className="foodeMenu2Box overflow-hidden">
                                <div className="foodMenu2Img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="foodMenu2Info">
                                    <h5 className='foodName'>{item.foodName}</h5>
                                    <p className='quntity'>{item.quntity}</p>
                                    <div className="rating mb-2">
                                    <span>{item.rate}</span>
                                    <span>{item.rate}</span>
                                    <span>{item.rate}</span>
                                    <span>{item.rate}</span>
                                    <span>{item.rate}</span>
                            </div>
                            <p>{item.info}</p>
                            <div className='d-flex justify-content-between align-items-center'>
                            <div className="price">
                                <span className='fs-3 fw-bold'>{item.price}</span>                               
                            </div>
                            <span className='icon'>{item.icon}</span>
                            </div>
                                </div>
                            </div>
                        </div>
                                )
                            })
                        }
                     
                    </OwlCarousel>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 pb-5">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="foodCategory d-flex flex-column align-items-center justify-content-between h-100" style={{backgroundImage:`url(${bgimg3})`}}>
                             <h2 className='text-white'>Break-fast</h2>
                             <div className="sliderButton"></div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                        <OwlCarousel className='owl-theme' loop margin={10} nav dots={false} items={3} responsive={slide3} navText={['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>']}>

                        {
                            ourmenu22?.map((item)=>{
                                return(
                                    <div class='item'>
                            <div className="foodeMenu2Box overflow-hidden">
                                <div className="foodMenu2Img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="foodMenu2Info">
                                    <h5 className='foodName'>{item.foodName}</h5>
                                    <p className='quntity'>{item.quntity}</p>
                                    <div className="rating mb-2">
                                    <span>{item.rate}</span>
                                    <span>{item.rate}</span>
                                    <span>{item.rate}</span>
                                    <span>{item.rate}</span>
                                    <span>{item.rate}</span>
                            </div>
                            <p>{item.info}</p>
                            <div className='d-flex justify-content-between align-items-center'>
                            <div className="price">
                                <span className='fs-3 fw-bold'>{item.price}</span>                               
                            </div>
                            <span className='icon'>{item.icon}</span>
                            </div>
                                </div>
                            </div>
                        </div>
                                )
                            })
                        }
                    </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default OurMenu
