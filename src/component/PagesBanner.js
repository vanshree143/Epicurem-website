import React from 'react'
import { Link } from 'react-router-dom'

const PagesBanner = ({ title }) => {
  return (
    <>
      <div className="pagesBanner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bannerInfo">
                <h1 className='text-white'>{title}</h1>
                <p className='text-white mt-3'>
                  <Link to='/'>Home</Link>
                  <i class="fa-solid fa-angle-right"></i>
                  {title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default PagesBanner
