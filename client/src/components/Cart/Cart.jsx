import React, { useEffect, useState } from "react";
import tshirt from "../../assets/tshirt.jpg";

import { Link } from "react-router-dom";

import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CallIcon from '@mui/icons-material/Call';

import './style.css';
import Header from "../Header/Header";

const Cart = () => {
  const [subTotal, setSubTotal] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [total, setTotal] = useState(null);
  const [data, setData] = useState([]);
  const [DeleteFlag, setDeleteFlag] = useState(0);
  
useEffect(() => {
let allItems = [];
for(var index=0; index < localStorage.length; index++) {
var key = localStorage.key(index);
var item = JSON.parse(localStorage.getItem(key))
if(data.indexOf(item) === -1) {
allItems.push(item);
}
}
setData(allItems);
}, [DeleteFlag])


  const decrementQuantity = (_quantity, index) => {
    let new_quantity = 0;
    if (_quantity > 0) {
        new_quantity = _quantity - 1;
    }
    const newState = data.map((item, i) => {
        if(index === i) {
            return {
              image: [],
              name: item.name,
              description: item.description,
              sale_price: item.sale_price,
              rent_sale_price: item.rent_sale_price,
              actual_price: item.actual_price,
              rent_price: item.rent_price,
              sale: item.sale,
              highlight: item.highlight,
              category: item.category,
              size: item.size,
              securityDeposit: item.securityDeposit,
              quantity: new_quantity,
              number_of_items: item.number_of_items
            }
        }

        return item;
    })

    setData(newState);
  }

  const incrementQuantity = (_quantity, index, no_of_items) => {
    let new_quantity = no_of_items;
    if (_quantity < no_of_items) {
        new_quantity = _quantity + 1;
    }
    const newState = data.map((item, i) => {
        if(index === i) {
            return {    image: [],
              name: item.name,
              description: item.description,
              sale_price: item.sale_price,
              rent_sale_price: item.rent_sale_price,
              actual_price: item.actual_price,
              rent_price: item.rent_price,
              sale: item.sale,
              highlight: item.highlight,
              category: item.category,
              size: item.size,
              securityDeposit: item.securityDeposit,
              quantity: new_quantity,
              number_of_items: item.number_of_items
            }
        }

        return item;
    })

    setData(newState);
  }

  const DeleteItem = (id) => {
    console.log(id)
    localStorage.removeItem(id);
    setDeleteFlag(1);
  }

  return (
    <>
    <Header/>
    <div className="row mt-5 mb-5">
      <div className="offset-1 col-10 col-lg-7">
        <div className="card" style={{borderRadius: '0'}}>
          <div className="card-header" style={{backgroundColor: '#f2a154', color: 'white',fontWeight: '500', fontSize: '1.1rem', borderRadius: '0', border: 'none'}}>Items in your cart</div>
          <div className="card-body mt-3">
            {data.map((item, i) => (
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
                </div>
                <div className="col-lg-5 col-xl-4 offset-3 offset-lg-0 text-lg-end">
                  <span className="card-text">
                    <strong>Price: </strong>&nbsp;Rs. {item.rent_price}
                  </span>
                  <p className="card-text mt-2 mb-2"><strong>Quantity: &nbsp;</strong><RemoveIcon style={{color: '#f2a154'}} fontSize="small" onClick={() => decrementQuantity(item.quantity, i)}/>&nbsp;{item.quantity}&nbsp;<AddIcon style={{color: '#f2a154'}} fontSize="small" onClick={() => incrementQuantity(item.quantity, i, item.number_of_items)}/></p>
                  <span>
                  <Link to='/checkout'>
                  <button
              type="button"
              className="btn btn-primary btn-sm me-3"
              style={{ fontSize: "0.8rem"}}
            >
              Buy Now
            </button>            
              </Link>
                  </span>
                  <span><DeleteOutlineSharpIcon onClick={() => DeleteItem(item.id)}/></span>
                </div>
              </div>
              {
                i === data.length - 1? null : <hr className="mb-4"/>
              }
            </>
            ))}
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-10 offset-1 offset-lg-0">
          <div className="card" style={{borderRadius: '0'}}>
          <div className="card-header" style={{backgroundColor: '#f2a154',color: 'white',fontWeight: '500', fontSize: '1.1rem', borderRadius: '0', border: 'none'}}>Support</div>
          <div className="card-body mt-3">
            <p className="card-text text-center" style={{fontWeight: '500', fontSize: '1.1rem'}}><CallIcon/>&nbsp;&nbsp;&nbsp;+92-322-4562345</p>
            <p className="text-center card-text" style={{fontWeight: '500'}}>Contact us if you have any query we are available 24 hours.</p>
          </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
