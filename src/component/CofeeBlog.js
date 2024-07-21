import React from 'react'
import cblog1 from '../Assets/image/cofee-blog-1.png';
import { coffeeBlog } from './Users';

const CofeeBlog = (Props) => {
    const {image,btn,usericon,name,cal,date,food,info}=Props;
  return (
    <>
        <div className="coffeeBlog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p  style={{color:"#86371C"}}>Blog & News</p>
                        <h2 className="title" style={{color:"#86371C"}}>Epicurean, From Beans to Blogs</h2>
                    </div>
                </div>
                <div className="row mt-5">
                {
                    coffeeBlog?.map((item)=>{
                        return(
                            <div className="col-lg-4">
                        <div className="coffeeBlogBox">
                        <div className="coffeeBlogImg">
                            <img src={item.image} alt="" />
                            <div className="metaTag">{item.btn}
                            </div>
                        </div>
                        <div className="coffeeBlogInfo">
                            <ul className='metaInfo d-flex justify-content-between p-0 m-0 mt-2'>
                                <li>
                                {item.usericon}
                                {item.name}
                                </li>
                                <li>
                                {item.cal}
                                {item.date}
                                </li>
                            </ul>
                            <h2 className='title fs-3 mt-3' style={{color:"#270a05"}}>{item.info}</h2>
                        </div>
                        </div>
                    </div>
                        )
                    })
                }
                    
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center mt-4">
                        <div className="commonBtn coffee">
                            <button>View All News</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default CofeeBlog
