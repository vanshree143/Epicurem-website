import React from 'react'

const ContactArea = () => {
  return (
    <>
      <div className="contactArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <p className='name'>Contact Us</p>
                <h2 className='title'>Have Any Questions?</h2>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-lg-8">
              <form className='contentWrap'>
                <div className="row">
                <div className="col-lg-12 mt-3">
                  <label className='d-inline-block'>Write comment</label>
                  <textarea type="text" placeholder='Type your comment' />
                  </div>
                  <div className="col-lg-4 mt-2">
                  <label className='d-inline-block'>Full Name</label>
                  <input type="text" placeholder='Enter your name' />
                  </div>
                  <div className="col-lg-4 mt-2">
                  <label className='d-inline-block'>Email</label>
                  <input type="text" placeholder='Enter your email input' />
                  </div>
                  <div className="col-lg-4 mt-2">
                  <label className='d-inline-block'>Phone Number</label>
                  <input type="text" placeholder='Enter your email input' />
                  </div>
                  <div className="col-lg-12 mt-4">
                     <div className="commonBtn">
                       <button className='w-100'>Submitted Now</button>
                      </div>
                  </div>
                </div>
              </form>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ContactArea
