import React from 'react';
import RedGirl from "../../../assets/RedGirl.jpg";
import './style.css';

const Posts = ({item}) => {
  return (
    <div className='card'>
        <img src={RedGirl} alt="T-shirt" className='image'/>
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
                item.sale? <>
                    <span className='card-text actual-price'>{item.actual_price}.00$</span>
                    <span className='card-text'>&nbsp;&nbsp;&nbsp;{item.sale_price}.00$</span>
                </>:
                <>
                    <p className='card-text'>{item.actual_price}.00$</p>
                </>
            }
        </div>
    </div>
  )
}

export default Posts