import React from 'react'

const ContactPage = () => {
  return (
    <>
      <div className="contactPage">
        <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-lg-4">
                    <div className="sectionTitle">
                        <p className='name'>Contact Us</p>
                        <h2 className='title mt-3'>We Are Here to Listen From You.</h2>
                    </div>
                </div>
                <div className="col-lg-7">
                    <form className='submitForm'>
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" placeholder='Your First Name' />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" placeholder='Your Last Name' />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" placeholder='Your Email' />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" placeholder='Your Phone' />
                            </div>
                            <div className="col-lg-12">
                                <textarea cols="30" rows="6" placeholder='Type Your Comment'></textarea>
                            </div>
                            <div className="col-lg-12 mt-3">
                                <div className="commonBtn">
                                <button>Submmited Now</button>
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

export default ContactPage
