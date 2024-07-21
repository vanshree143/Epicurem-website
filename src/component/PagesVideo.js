import React from 'react'
import { Link } from 'react-router-dom'

const PagesVideo = () => {
  return (
    <>
      <div className="pagesVideoArea">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                    <div className='sectionTitle text-center text-white'>
                        <h2 className='title text-white'>Explore Our Fine Decoration</h2>
                        <p>There are many variations of passages of Lorem Ipsum form any injected humour, or randomized words which don't look slightly believable.</p>
                    </div>
                    <div className="aboutVideoIcon mt-3 mt-lg-5">
                        <Link to='https://vimeo.com/225811446' className='vid'><i class="fa-solid fa-circle-play"></i></Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default PagesVideo
