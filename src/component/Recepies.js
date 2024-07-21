import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import trending1 from '../Assets/image/trending-two-1.png';
import trending2 from '../Assets/image/trending-two-2.png';
import trending3 from '../Assets/image/trending-two-3.png';

const Recepies = () => {
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
  return (
    <>
       <div className="Recepies">
        <div className="container">        
                <div className="row d-flex justify-content-between ">
                    <div className="col-lg-4">
                        <div className="sectionTitle">
                            <p className='name'>New Recipes</p>
                            <h2 className='title'>Taste Our New Recipe</h2>
                            <p>There are many variations of passages of Lorem Ipsum form any injected humour, or randomized words which don't look slightly believable.</p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                    <OwlCarousel className='owl-theme' loop margin={10} 
                    nav={true} dots={false} responsive={responsive} items={3} navText={['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>']}>
                        <div class='item'>
                            <div className="trendImg position-relative overflow-hidden ">
                            <img src={trending1} alt="" className='w-100'/>
                            
                            <div className="trendingHoverInfo text-center">                                                       
                            <p className='peralink'>Chocolate Cream Dessert</p>
                            </div>
                            </div>                          
                        </div>
                        <div class='item'>
                            <div className="trendImg position-relative overflow-hidden ">
                            <img src={trending2} alt="" className='w-100'/>
                           
                            <div className="trendingHoverInfo text-center">
                            
                            
                            <p className='peralink'>Chocolate Cream Dessert</p>
                            </div>
                            </div>                          
                        </div>
                        <div class='item'>
                            <div className="trendImg position-relative overflow-hidden ">
                            <img src={trending3} alt="" className='w-100'/>
                          
                            <div className="trendingHoverInfo text-center">
                            
                            <p className='peralink'>Chocolate Cream Dessert</p>
                            </div>
                            </div>                          
                        </div>
                        <div class='item'>
                            <div className="trendImg position-relative overflow-hidden ">
                            <img src={trending3} alt="" className='w-100'/>
                          
                            <div className="trendingHoverInfo text-center">
                            <i class="fa-solid fa-bowl-food"></i>
                            <span className='name d-block'>Vegetable</span>
                            <h5 className='text-white'>Tomato Salad</h5>
                            <div className="line"></div>
                            <p className='peralink'>Vegetable salad with Tomato</p>
                            </div>
                            </div>                          
                        </div>
                        <div class='item'>
                            <div className="trendImg position-relative overflow-hidden ">
                            <img src={trending2} alt="" className='w-100'/>
                           
                            <div className="trendingHoverInfo text-center">
                            <i class="fa-solid fa-trophy"></i>
                            <span className='name d-block'>DRINKS</span>
                            <h5 className='text-white'>Mint Mojito</h5>
                            <div className="line"></div>
                            <p className='peralink'>Cold fresh mojito with ice mint</p>
                            </div>
                            </div>                          
                        </div>
                       
                       
                    </OwlCarousel>
                </div>
                </div>
           
    
        </div>
      </div>
    </>
  )
}

export default Recepies
