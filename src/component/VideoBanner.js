import React from 'react'
import bgvideo from '../Assets/image/hero-bg-video.mp4'

const VideoBanner = () => {
  return (
    <>
      <div className="videoArea position-relative">
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="bannerInfo position-relative">
                    <span className='tag text-white'>WELCOME TO EPICUREAN</span>
                    <h1 className='title text-white'>Our Stunning Kitchen</h1>
                    <p>We Serve Finest Food, Genuine Service Since 1998</p>
                    <div className="commonBtn mt-5">
                      <button>BOOK TABLE</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        <video className='videoPlayer' playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source  src={bgvideo} type='video/mp4'/>
        </video>
      </div>
    </>
  )
}

export default VideoBanner
