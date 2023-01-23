import React, { useState } from "react";

import { useParams } from "react-router-dom";

import tshirt from "../../assets/tshirt.jpg";
import Casual from "../../assets/Casual.jpg";
import Casuals from "../../assets/Casuals.jpg";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


import "./style.css";

const PostDetail = () => {
  const { id } = useParams();

  const [image, setImage] = useState(tshirt);
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [isOpenThird, setIsOpenThird] = useState(false);

  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const[startDate, setStartDate] = useState(new Date());
  const[returnDate, setReturnDate] = useState(new Date());
  const[rangeDate, setRangeDate] = useState(new Date());

  const [post, setPost] = useState({
    image: [],
    name: "Plain T-shirt",
    description: "Female plain T-shirt with high qaulity fabric",
    sale_price: 8000.0,
    rent_sale_price: 8000.0,
    actual_price: 8900.0,
    rent_price: 2500.0,
    sale: true,
    color: ["red", "green"],
    sleeve: "full-sleeve",
    brand: "limelight",
    size: ["XS US/6", "S US/8", "M US/10", "L US/12"],
    securityDeposit: 700.0,
  });

  const handleAccordian = (div_id) => {
    const id = document.getElementById(div_id);
    if (id.style.display === "none") {
      if (div_id === "product-details") {
        setIsOpenFirst(true);
      } else if (div_id === "stylish-notes") {
        setIsOpenSecond(true);
      } else if (div_id === "size") {
        setIsOpenThird(true);
      }
      id.style.display = "block";
    } else {
      id.style.display = "none";
      if (div_id === "product-details") {
        setIsOpenFirst(false);
      } else if (div_id === "stylish-notes") {
        setIsOpenSecond(false);
      } else if (div_id === "size") {
        setIsOpenThird(false);
      }
    }
  };

  const handleRent = () => {
    const id_1 = document.getElementById('rent');
    const id_2 = document.getElementById('sale');
    if(id_1.style.display === "none"){
      id_2.style.display = 'none';
      id_1.style.display = 'block';
    }
  }

  const handleSale = () => {
    const id_1 = document.getElementById('rent');
    const id_2 = document.getElementById('sale');
    if(id_2.style.display === "none"){
      id_1.style.display = 'none';
      id_2.style.display = 'block';
    }
  }

  const calculateDate = (date) => {
    var someDate = date;
    var numberOfDaysToAdd = 20;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    setRangeDate(new Date(result))    
  }

  const handleChangeDate = (e) => {
    setStartDate(new Date(e.target.value))
    calculateDate(new Date(e.target.value));
  }

  return (
    <>
    <div className="row mt-5 mb-5">
      <div className="col-10 col-md-5 col-lg-6 offset-1">
        <img
          src={image}
          alt="hoodie"
          width="100%"
          height="auto"
          style={{ borderRadius: "20px" }}
        />
        <div className="row mt-4">
          <div className="col-4" onClick={() => setImage(tshirt)}>
            <img
              src={tshirt}
              alt="hoodie"
              width="100%"
              height="auto"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className="col-4" onClick={() => setImage(Casual)}>
            <img
              src={Casual}
              alt="hoodie"
              width="100%"
              height="auto"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className="col-4" onClick={() => setImage(Casuals)}>
            <img
              src={Casuals}
              alt="hoodie"
              width="100%"
              height="auto"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
      </div>

      <div className="col-10 offset-1 col-md-5 col-lg-4 offset-md-0 ms-5">
        <div className="row">
          <p
            className="h3 mt-1 text-center text-md-start mt-5 mt-md-0"
            style={{
              overflow: "hidden",
              color: "#f2a154",
              letterSpacing: "0.9px",
            }}
          >
            {post.name}
          </p>
          <p
            className="text-center text-md-start"
            style={{ color: "GrayText", marginBottom: "4px" }}
          >
            {post.description}
          </p>
          <p
            className="text-center text-md-start"
            style={{ fontWeight: "600" }}
          >
            Rs. {post.actual_price}
          </p>
        </div>

        <div className="card" style={{overflowX: 'hidden'}}>
          <div
            className="row align-items-center mt-0"
            style={{
              borderRadius: "15px",
              backgroundColor: "#e0e0e0",
              borderColor: "#e0e0e0",
            }}
          >
            <div className="col-1 ms-3">
              <span class="form-check">
                <input
                  class="form-check-input radio-button"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onClick={handleRent}
                />
              </span>
            </div>
            <div className="col-10 mt-2">
              <p className="h6 mt-2 mb-0 pb-0" style={{ overflow: "hidden" }}>
                One Time Rent
              </p>
              <p className="mb-0 pb-0" style={{ color: "GrayText" }}>
                Reserve an item for 4-8 days
              </p>
              <p className="pt-0" style={{ color: "GrayText" }}>
                Rs. {post.rent_price}
              </p>
            </div>
          </div>

          <div className="card-body" id="rent" style={{ height: "300px", display: 'none' }}>
            <p>
              <strong>Security Deposit:</strong>&nbsp;&nbsp;&nbsp;&nbsp;Rs.{" "}
              {post.securityDeposit}
            </p>
            <div className="row mt-4 text-center">
              <div className="col-6">
                <select
                  class="form-select mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option selected>{size}</option>
                  {post.size.map((item, i) => (
                    <option value={i + 1} onClick={() => setSize(item)}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-6">
                <select
                  class="form-select mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option selected>{color}</option>
                  {post.color.map((item, i) => (
                    <option value={i + 1} onClick={() => setColor(item)}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-6">
                <label htmlFor="rent-date" style={{fontWeight: '500'}}>Rent Date</label>
                <input type="date" className="date" min={new Date().toISOString().split('T')[0]} onChange={handleChangeDate}/>
              </div>

              <div className="col-6">
                <label htmlFor="return-date" style={{fontWeight: '500'}}>Return Date</label>
                <input type="date" className="date" min={startDate.toISOString().split('T')[0]} max={rangeDate.toISOString().split('T')[0]} onChange={(e) => setReturnDate(new Date(e.target.value))}/>
              </div>
            </div>

            <div className="row text-center" style={{marginTop: '10px'}}>
              <div className="col-6">
              <button
              type="button"
              className="btn btn-primary btn-lg mt-4"
              style={{ fontSize: "1.2rem", padding: '2px 20px 2px 20px', zIndex: '-1'}}
            >
              Rent Now
            </button>            
            </div>
              <div className="col-6">
              <button
              type="button"
              className="btn btn-primary btn-lg mt-4"
              style={{ fontSize: "1.2rem", padding: '2px 20px 2px 20px'}}
            >
              Add to Cart
            </button>            
            </div>
            </div>

          </div>
        </div>

        <div className="card mt-4" style={{overflowX: 'hidden'}}>
          <div
            className="row align-items-center mt-0"
            style={{
              borderRadius: "15px",
              backgroundColor: "#e0e0e0",
              borderColor: "#e0e0e0",
            }}
          >
            <div className="col-1 ms-3">
              <span class="form-check">
                <input
                  class="form-check-input radio-button"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onClick={handleSale}
                />
              </span>
            </div>
            <div className="col-10 mt-2">
              <p className="h6 mt-2 mb-0 pb-0" style={{ overflow: "hidden" }}>
                Buy now
              </p>
              <p className="mb-0 pb-0" style={{ color: "GrayText" }}>
                Pre-loved items in excellent condition
              </p>
              <p className="pt-0" style={{ color: "GrayText" }}>
                Rs. {post.actual_price}
              </p>
            </div>
          </div>

          <div className="card-body" id="sale" style={{ height: "380px", display: 'none'}}>
            <p style={{fontWeight: '500', marginTop: '1rem'}}>
              Shop with confidence
            </p>
            <hr />

            <div className="row mt-4" style={{lineHeight: '30px'}}>
              <ul>
                <li><strong>✓</strong> &nbsp;Highest quality and cleanliness standards</li>
                <li><strong>✓</strong> &nbsp;Authenticity guaranteed</li>
                <li><strong>✓</strong> &nbsp;Returns accepted within 7 days, restocking fee applies</li>
              </ul>
            </div>
            
            <div className="row mt-4 text-center">
              <div className="col-6">
                <select
                  class="form-select mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option selected>{size}</option>
                  {post.size.map((item, i) => (
                    <option value={i + 1} onClick={() => setSize(item)}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-6">
                <select
                  class="form-select mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option selected>{color}</option>
                  {post.color.map((item, i) => (
                    <option value={i + 1} onClick={() => setColor(item)}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row text-center" style={{marginTop: '10px'}}>
              <div className="col-6">
              <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{ fontSize: "1.2rem", padding: '2px 20px 2px 20px', zIndex: '-1'}}
            >
              Buy Now
            </button>            
            </div>
              <div className="col-6">
              <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{ fontSize: "1.2rem", padding: '2px 20px 2px 20px'}}
            >
              Add to Cart
            </button>            
            </div>
            </div>

          </div>
        </div>

        <div
          className="row mt-5 align-self-center"
          onClick={() => handleAccordian("product-details")}
        >
          <div className="col-6">
            <p style={{ fontSize: "1.1rem" }}>Product Details</p>
          </div>
          <div className="col-6 text-end">
            {isOpenFirst ? <RemoveIcon /> : <AddIcon />}
          </div>
        </div>
        <div className="row" id="product-details" style={{ display: "none" }}>
          <p>
            <strong>Brand:</strong>&nbsp;&nbsp;&nbsp;&nbsp;{post.brand}
          </p>
          <p>
            <strong>Sleeve:</strong>&nbsp;&nbsp;&nbsp;&nbsp;{post.sleeve}
          </p>
        </div>
        <hr className="mt-0 pt-0" />

        <div
          className="row mt-1 align-self-center"
          onClick={() => handleAccordian("stylish-notes")}
        >
          <div className="col-6">
            <p style={{ fontSize: "1.1rem" }}>Stylish Notes</p>
          </div>
          <div className="col-6 text-end">
            {isOpenSecond ? <RemoveIcon /> : <AddIcon />}
          </div>
        </div>
        <div className="row" id="stylish-notes" style={{ display: "none" }}>
          <p
            style={{ marginBottom: "5px" }}
          >
            {post.description}
          </p>
        </div>
        <hr className="mt-0" />

        <div
          className="row mt-1 align-self-center"
          onClick={() => handleAccordian("size")}
        >
          <div className="col-6">
            <p style={{ fontSize: "1.1rem" }}>Size & Fits</p>
          </div>
          <div className="col-6 text-end">
            {isOpenThird ? <RemoveIcon /> : <AddIcon />}
          </div>
        </div>
        <div className="row" id="size" style={{ display: "none" }}>
          <p>
            <strong>Sized: </strong>&nbsp;&nbsp;&nbsp;&nbsp;{post.size[0]}
            &nbsp;-&nbsp;{post.size[post.size.length - 1]}
          </p>
        </div>
        <hr className="mt-0" />
      </div>
    </div>
  </>
  );
};

export default PostDetail;
