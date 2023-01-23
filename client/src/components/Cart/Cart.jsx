import React, { useEffect, useState } from "react";
import tshirt from "../../assets/tshirt.jpg";

import { Link } from "react-router-dom";

import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CallIcon from '@mui/icons-material/Call';

import './style.css';

const Cart = () => {
  const [subTotal, setSubTotal] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [total, setTotal] = useState(null);
  const [cartData, setCartData] = useState([
    {
      name: "Plain T-shirt",
      description: "Female plain T-shirt with high qaulity fabric",
      price: 8900.0,
      size: "M",
      color: "yellow",
      number_of_items: 4,
      quantity: 1
    },
    {
      name: "Plain T-shirt",
      description: "Female plain T-shirt with high qaulity fabric",
      price: 8900.0,
      size: "M",
      color: "yellow",
      number_of_items: 4,
      quantity: 1
    },
    {
      name: "Plain T-shirt",
      description: "Female plain T-shirt with high qaulity fabric",
      price: 8900.0,
      size: "M",
      color: "yellow",
      number_of_items: 4,
      quantity: 1
    },
  ]);

  const [voucher, SetVoucher] = useState(20);

  useEffect(() => {
    calculateSubtotal();
    calculateDiscount();
    calculateTotal();
  })

  const calculateSubtotal = () => {
    let sub_total = 0
    cartData.map((item) => {
        sub_total += (item.price * item.quantity)   
    })
    setSubTotal(sub_total)
  }

  const calculateDiscount = () => {
    let discount = subTotal * voucher/100;
    setDiscount(discount);
  }

  const calculateTotal = () => {
    let total = subTotal-discount;
    setTotal(total);
  }

  const decrementQuantity = (_quantity, index) => {
    let new_quantity = 0;
    if (_quantity > 0) {
        new_quantity = _quantity - 1;
    }
    const newState = cartData.map((item, i) => {
        if(index === i) {
            return {name: item.name, description: item.description, price: item.price, size: item.size, color: item.size, number_of_items: item.number_of_items, quantity: new_quantity}
        }

        return item;
    })

    setCartData(newState);
  }

  const incrementQuantity = (_quantity, index, no_of_items) => {
    let new_quantity = no_of_items;
    if (_quantity < no_of_items) {
        new_quantity = _quantity + 1;
    }
    const newState = cartData.map((item, i) => {
        if(index === i) {
            return {name: item.name, description: item.description, price: item.price, size: item.size, color: item.size, number_of_items: item.number_of_items, quantity: new_quantity}
        }

        return item;
    })

    setCartData(newState);
  }

  return (
    <div className="row mt-5 mb-5">
      <div className="offset-1 col-10 col-lg-7">
        <div className="card" style={{borderRadius: '0'}}>
          <div className="card-header" style={{backgroundColor: '#f2a154', color: 'white',fontWeight: '500', fontSize: '1.1rem', borderRadius: '0', border: 'none'}}>Items in your cart</div>
          <div className="card-body mt-3">
            {cartData.map((item, i) => (
                <>
              <div className="row mb-2">
                <div className="col-lg-2 col-3">
                  <img src={tshirt} alt="image" height="auto" width="100%" />
                </div>
                <div className="col-6 col-lg-5 col-xl-6">
                  <h5 className="card-title mb-1" style={{color: '#f2a154'}}>{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <span className="card-text">
                    <strong >Size: </strong>&nbsp;{item.size}&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="card-text">
                    <strong>Color: </strong>&nbsp;{item.color}
                  </span>
                </div>
                <div className="col-lg-5 col-xl-4 offset-3 offset-lg-0 text-lg-end">
                  <span className="card-text">
                    <strong>Price: </strong>&nbsp;Rs. {item.price}
                  </span>
                  <p className="card-text mt-2 mb-2"><strong>Quantity: &nbsp;</strong><RemoveIcon style={{color: '#f2a154'}} fontSize="small" onClick={() => decrementQuantity(item.quantity, i)}/>&nbsp;{item.quantity}&nbsp;<AddIcon style={{color: '#f2a154'}} fontSize="small" onClick={() => incrementQuantity(item.quantity, i, item.number_of_items)}/></p>
                  <DeleteOutlineSharpIcon/>
                </div>
              </div>
              {
                i === cartData.length - 1? null : <hr className="mb-4"/>
              }
            </>
            ))}
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-10 offset-1 offset-lg-0 mt-5 mt-lg-0">
      <div className="card" style={{borderRadius: '0'}}>
          <div className="card-header" style={{backgroundColor: '#f2a154', color: 'white',fontWeight: '500', fontSize: '1.1rem', borderRadius: '0', border: 'none'}}>Summary</div>
          <div className="card-body">
            <label htmlFor="offer" style={{fontWeight: '500'}}>Apply a voucher</label>
            <div className="row mt-2 align-items-center">
            <div className="col-7">
            <input class="form-control form-control-sm" type="text" placeholder="Coupon Code" aria-label=".form-control-sm example"/>            </div>
            <div className="col-5 text-end">
            <button className="btn btn-primary apply-button">Apply</button>
            </div>
            </div>
            <hr />
            <div className="row gx-0">
            <div className="col-6">
            <p style={{fontSize: '1.2rem'}}><strong>Sub-Total </strong></p>
            <p style={{fontSize: '1.2rem'}}><strong>Discount </strong></p>
            <hr />
            <p style={{fontSize: '1.2rem'}}><strong>Total </strong></p>
            </div>
            <div className="col-6">
            <p className="text-end" style={{fontSize: '1.2rem'}}>Rs. {subTotal}</p>
            <p className="text-end" style={{fontSize: '1.2rem'}}>- Rs. {discount}</p>
            <hr />
            <p className="text-end" style={{fontSize: '1.2rem'}}>Rs. {total}</p>
            </div>
            </div>

            <div className="row mt-3 text-center">
                <div className="col-10 offset-1">
                    <Link to='/checkout'><button className="btn btn-primary checkout-button">Checkout</button></Link>
                </div>
            </div>
          </div>
          </div>

          <div className="card mt-3" style={{borderRadius: '0'}}>
          <div className="card-header" style={{backgroundColor: '#f2a154',color: 'white',fontWeight: '500', fontSize: '1.1rem', borderRadius: '0', border: 'none'}}>Support</div>
          <div className="card-body mt-3">
            <p className="card-text text-center" style={{fontWeight: '500', fontSize: '1.1rem'}}><CallIcon/>&nbsp;&nbsp;&nbsp;+92-322-4562345</p>
            <p className="text-center card-text" style={{fontWeight: '500'}}>Contact us if you have any query we are available 24 hours.</p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Cart;
