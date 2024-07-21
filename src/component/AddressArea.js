import React from "react";
// import { Link } from 'react-router-dom'

const AddressArea = () => {
  return (
    <>
      <div className="addressArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="addressBox text-center">
                <div className="addIcon">
                  <i class="fa-regular fa-envelope"></i>
                </div>
                <p className="mt-3 mb-0">Email Us</p>
                <div className="addLink">support@epicurean.com</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="addressBox text-center">
                <div className="addIcon">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <p className="mt-3 mb-0">Call Us</p>
                <div className="addLink">(684) 555-0102</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="addressBox text-center">
                <div className="addIcon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <p className="mt-3 mb-0">Location</p>
                <div className="addLink">1616 Broadway NY, New York</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressArea;
