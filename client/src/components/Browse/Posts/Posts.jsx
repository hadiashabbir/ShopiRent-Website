import React from 'react';
import tshirt from "../../../assets/tshirt.jpg";

import { useNavigate } from "react-router-dom";

import './style.css';

const Posts = ({item}) => {
    const navigate = useNavigate();

  return (
    <div className='card' onClick={() => navigate(`/browse/${item.id}`)}>
        <img src={tshirt} alt="T-shirt" className='image'/>
        {
            item.sale? <>
        <div className='card-img-overlay'>
        <span class="badge sale-badge">Sale</span>
        </div>
            </> :
            null
        }
        <div className='card-body'>
            <h5 className='card-title' style={{overflow: 'hidden'}}>{item.name}</h5>
            {
                item.sale_price? <>
                    <span className='card-text actual-price'>Rs. {item.actual_price}</span>
                    <span className='card-text'>&nbsp;&nbsp;&nbsp;Rs. {item.sale_price}</span>
                </>:
                <>
                    <p className='card-text'>Rs. {item.actual_price}</p>
                </>
            }
        </div>
    </div>
  )
}

export default Posts