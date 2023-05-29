import React from "react";

import "./style.css";
import Header from "../Header/Header";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
<button type="button" class="btn btn-primary" style={{display: 'none'}}>
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body text-center">
        <CheckCircleOutlineIcon fontSize="large" className="mt-5" style={{color: '#f2a154', width: '5rem', height: '5rem'}}/>
        <div className="row">
        <h4 className="mt-4">Thank You!</h4>
        <h6 className="mt-3">Your Order has been placed</h6>
        <div className="col-4 offset-4">
                  <button
              type="button"
              className="btn btn-primary btn-sm me-3 mt-4 mb-5"
              style={{ fontSize: "1rem", padding: '2px 20px 2px 20px'}}
              data-bs-dismiss="modal" aria-label="Close"
              onClick={() => navigate('/')}
            >
              OK
            </button>            
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
    <div className="row">
      <div className="col-4 offset-4">
    <div className="card shadow text-dark bg-light mt-5 mb-4">
      <div className="card-header"><h4 className="text-center">Payment Method</h4></div>
    <form className="card-body">
          <div className="row mt-3">
            <div className="col-10 offset-1">
              <div class="mb-3">
                <label for="phone" className="form-label">
                  Phone Number
                </label>
                <input type="text" className="form-control" id="phone" />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-10 offset-1">
              <label for="payment-method" className="form-label">
                Select Payment Method
              </label>
              <div class="form-check mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="jazzcash"
                />
                <label class="form-check-label" for="jazzcash">
                  Jazzcash
                </label>
              </div>
              <div class="form-check mt-1">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="easypaisa"
                />
                <label class="form-check-label" for="easypaisa">
                  Easypaisa
                </label>
              </div>
              <div class="form-check mt-1">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="sadapay"
                />
                <label class="form-check-label" for="sadapay">
                  Sadapay
                </label>
              </div>
            </div>
          </div>
          <div className="row text-center mt-2 mb-4">
            <div className="col-10 offset-1">
            <button
              type="button"
              className="btn btn-primary btn-sm mt-4"
              style={{ fontSize: "1.2rem", padding: '2px 20px 2px 20px'}}
              data-bs-toggle="modal" data-bs-target="#exampleModal"
            >
              Place Order
            </button>            
            </div>
          </div>
        </form>

    </div>
      </div>
    </div>
    </>
  );
};

export default Checkout;
