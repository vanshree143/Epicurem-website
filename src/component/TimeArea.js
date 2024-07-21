import React, { useEffect, useState } from 'react'


const TimeArea = () => {
  const [count, setcount] = useState(0);

    useEffect(() => {
      setTimeout(()=>{
        setcount((count) => count+1);
      },1000)
    })
  return (
    <>
      <div className="timeArea">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-5 text-center text-lg-start">
                    <div className="sectionTitle">
                        <h2 className='title text-white'>We Offer You More Than 50% Discount in</h2>
                    </div>
                    <div className="commonBtn mt-4">
                        <button>Get Now</button>
                    </div>
                </div>
                <div className="col-lg-6">
                  <div className="row justify-content-start">
                    <div className="col-lg-4 col-6 boderLine">
                      <div className="timeWrap">
                        <div className="singleTime">
                          <div className="time">
                            <h2 className='text-white'>06</h2>
                          </div>
                          <h4 className='text-white'>Hours</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 boderLine">
                      <div className="timeWrap">
                        <div className="singleTime">
                          <div className="time">
                            <h2 className='text-white'>10</h2>
                          </div>
                          <h4 className='text-white'>Miniutes</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6">
                      <div className="timeWrap">
                        <div className="singleTime">
                          <div className="time">
                            <h2 className='text-white'>{count}</h2>
                          </div>
                          <h4 className='text-white'>Seconds</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default TimeArea
