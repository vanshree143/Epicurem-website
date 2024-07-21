import React from 'react'
import pblog1 from '../Assets/image/piza-blog-1.png'
import { pizzaBlog } from './Users';

const PizzaBlog = (Props) => {
    const {image,name,food,info}=Props;
  return (
    <>
      <div className="pizzaBlog">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="sectionTitle text-center">
                        <p>Blog & News</p>
                        <h2 className='title mt-3'>Our Latest News & Blogs</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
            {
                pizzaBlog?.map((item) =>{
                    return(
                        <div className="col-lg-4">
                    <div className="pizzaBlogWrapper">
                        <div className="pizzaBlogImg position-relative overflow-hidden">
                            <img src={item.image} alt="" className='w-100' />
                            <div className="blogInfo d-flex justify-content-between align-items-center">
                            <ul className='custom d-flex'>
                                <li>{item.name}</li>
                                <li>{item.food}</li>
                            </ul>
                        </div>
                        </div>
                        <h4 className='mt-3'>{item.info}</h4>
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

export default PizzaBlog
