import React from "react";

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
                  <option value="Khyber Pakhtoon Khawan">Khyber Pakhtoon Khawan</option>
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
        <div className="col-5 offset-1">
          <label className="form-label" htmlFor="SelectPaymentMethod">Select Payment Method</label>
          <div className="form-check">
            <input className="form-check-input" type='radio' id="radio1" />
            <label className="form-check-label" htmlFor="radio1">Jazzcash</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type='radio' id="radio1" />
            <label className="form-check-label" htmlFor="radio1">Easypaisa</label>
          </div>
        </div>
      </div>
          </form>
    </>
  );
};

export default Checkout;
