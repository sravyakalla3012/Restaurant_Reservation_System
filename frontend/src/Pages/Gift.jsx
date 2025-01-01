import React, { useState } from "react"; 
import './Gift.css';
import { useNavigate } from "react-router-dom";

const Gift = () => {
  const navigate = useNavigate();
  const [isVoucherVisible, setVoucherVisible] = useState(false);

  const handleRedeemClick = () => {
    setVoucherVisible(true);
  };

  const handleCloseClick = () => {
    setVoucherVisible(false);
  };
  const goToHome = () => {
    navigate("/"); // Navigate back to the home page
  };

  return (
    <div className="thanking-customers-section pt-5 pb-5">
      <div className="container">
        <div className="row">
          {/* Text on the left */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <h1 className="thanking-customers-section-heading">
              <p>Thank you</p> 
              <p>for being a</p> 
              <p>valuable customer</p> 
              <p>to us.</p>
            </h1>
            <p className="thanking-customers-section-description">
              <p>We have a surprise gift</p> <p>for you</p>
            </p>
            <div className="text-center">
            
                <button type="button" className="custom-button"
                 onClick={handleRedeemClick}
                >
                Redeem Gift
                </button>
            </div>
            <div className="full-page-center">
                <button onClick={goToHome} className="backToHomepageBtn">
                Back to Home Page
                </button>
            </div>
          </div>


          

          {/* Image on the right */}
          <div className="col-12 col-md-6 text-center d-flex align-items-center justify-content-center">
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" alt="Customer Appreciation"
            className="thanking-customers-section-img"/>
            </div>
        </div>
      </div>

      {isVoucherVisible && (
        <div className="voucher-overlay">
          <div className="voucher-container">
            <h5 className="thanking-customers-section-modal-title">Gift Voucher</h5>
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/gift-voucher-img.png"
              alt="Gift Voucher"
              className="w-100 voucher-image"
            />
            <button
              type="button"
              className="btn btn-secondary mt-3"
              onClick={handleCloseClick}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gift;
