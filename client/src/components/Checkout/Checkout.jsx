import React from "react";

import "./style.css";

const Checkout = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-5 offset-1">
          <h3>Checkout Details</h3>
        </div>
        <div className="col-5 offset-1">
          <h3>Billing Details</h3>
        </div>
      </div>
      <form>
        <div className="row mt-4 mb-5">
          <div className="col-5 offset-1">
            <div className="row mb-4">
              <div className="col-6">
                <label htmlFor="first-name" className="form-label">
                  First Name
                </label>
                <input
                  class="form-control"
                  type="text"
                  id="first-name"
                  placeholder="First Name"
                  aria-label="input"
                />
              </div>
              <div className="col-6">
                <label htmlFor="last-name" className="form-label">
                  Last Name
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Last Name"
                  aria-label="input"
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-6">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select City</option>
                  <option value="lahore">Lahore</option>
                  <option value="multan">Multan</option>
                  <option value="sialkot">Sialkot</option>
                  <option value="karachi">Karachi</option>
                  <option value="islamabad">Islamabad</option>
                  <option value="multan">Multan</option>
                  <option value="faisalabad">Faislabad</option>
                  <option value="gujranwala">Gujranwala</option>
                  <option value="quetta">Quetta</option>
                  <option value="sargodha">Sargodha</option>
                  <option value="okara">Okara</option>
                  <option value="peshawar">Peshawar</option>
                </select>{" "}
              </div>
              <div className="col-6">
                <label htmlFor="province" className="form-label">
                  Province
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Province</option>
                  <option value="sindh">Sindh</option>
                  <option value="punjab">Punjab</option>
                  <option value="Khyber Pakhtoon Khawan">
                    Khyber Pakhtoon Khawan
                  </option>
                  <option value="Balouchistan">Balouchistan</option>
                  <option value="Gilgit Baltistan">Gilgit Baltistan</option>
                </select>{" "}
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Address"
                  aria-label="input"
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-6">
                <label htmlFor="zip-code" className="form-label">
                  Zip Code
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Zip Code"
                  aria-label="input"
                />
              </div>
              <div className="col-6">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Phone Number"
                  aria-label="input"
                />
              </div>
            </div>
          </div>
          <div className="col-4 offset-1">
            <label className="form-label" htmlFor="SelectPaymentMethod">
              Select Payment Method
            </label>
            <div class="form-check mb-2">
              <input
                class="form-check-input radio-button"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Jazzcash
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input radio-button"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Easypaisa
              </label>
            </div>
            <div className="row mt-4">
              <div className="col-9">
                <label htmlFor="address" className="form-label">
                  Phone Number
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Phone Number"
                  aria-label="input"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-9">
              <button
              type="button"
              className="btn btn-primary mt-4"
              style={{ fontSize: "1rem" , padding: '2px 10px 2px 10px'}}
              >
              Confirm Order
            </button>
              </div>
            </div>

          </div>
        </div>
      </form>
    </>
  );
};

export default Checkout;
