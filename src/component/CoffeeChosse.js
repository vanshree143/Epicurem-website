import React from 'react'
import coffe1 from '../Assets/image/chose-img.png'
import cup from '../Assets/image/cup.png'

const CoffeeChosse = () => {
  return (
    <>
      <div className="coffeChosseArea">
        <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-lg-7 col-xl-6">
                    <div className="sectionTitle section ">
                        <p>Why Choose Us</p>
                        <h2 className='title mt-2 mb-4' style={{color:"#86371C"}}>Choosing Epicurean, A Taste of Perfection</h2>
                        <span className="text_color_coffee">Epicurean takes pride in the art of roasting, transforming raw coffee beans into a symphony of aromatic notes and rich flavors.</span>
                    </div>
                    <div className="chooseInfo mt-4 mb-4">
                        <div className="chooseInfoCount text-center">
                            <h2 className='text_color_coffee title'>
                                <span>15</span>
                                <em className='fs-4'>+</em>
                            </h2>
                            <p className='text_color_coffee fs-5'>Years Experience</p>
                        </div>
                        <div className="chooseInfoCount text-center">
                            <h2 className='text_color_coffee title'>
                                <span>5</span>
                                <em className='fs-4'>+</em>
                            </h2>
                            <p className='text_color_coffee fs-5'>Master Chefs</p>
                        </div>
                        <div className="chooseInfoCount text-center">
                            <h2 className='text_color_coffee title'>
                                <span>30</span>
                                <em className='fs-4'>+</em>
                            </h2>
                            <p className='text_color_coffee fs-5'>Achievements</p>
                        </div>
                    </div>
                    <p>Your choice to savor our coffee is an invitation to experience the epitome of craftsmanship, flavor, and dedication.</p>
                    <div className="commonBtn orange mt-5">
                        <button>Explore Our Menus</button>
                    </div>
                </div>
                <div className="col-lg-5 col-xl-5">
                    <div className="coffeeImgBox position-relative">
                        <img src={coffe1} alt="" className='w-100'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="cup">
            <img src={cup} alt="" />
        </div>
      </div>
    </>
  )
}

export default CoffeeChosse
