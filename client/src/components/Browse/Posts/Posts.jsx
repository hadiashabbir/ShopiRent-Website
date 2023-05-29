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
            <div className='row'>
                <div className='col-6'>
            <h5 className='card-title' style={{overflow: 'hidden'}}>{item.title}</h5>
                </div>
                <div className='col-6'>
            <h6 className='card-title text-end' style={{overflow: 'hidden', color: '#f2a154'}}>{item.highlights}</h6>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-10 card-text'>
                    <span  style={{fontWeight: '500'}}>Rental Price:&nbsp;&nbsp;&nbsp;</span>
                    <span style={{color: 'red', fontWeight: '600'}}>Rs. {item.rentingPrice} </span>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-10 card-text'>
                    <span  style={{fontWeight: '500'}}>Size:&nbsp;&nbsp;</span>
                    <span style={{ fontWeight: '600'}}>{item.size} </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Posts