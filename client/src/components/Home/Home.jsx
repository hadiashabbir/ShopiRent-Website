import React from 'react';
import "./style.css";
import RedGirl from "../../assets/RedGirl.jpg";
import boy from "../../assets/boy.jpg";
import Avatar from "@mui/material/Avatar";
import StarIcon from '@mui/icons-material/Star';
import yellowGirl from "../../assets/yellowGirl.jpg";

const Home = () => {
  return (
    <>
    <div className='row main-div'>
      <div className='col-12 col-lg-5 offset-1 mt-5 text-div'>
        <h1 className='main-text display-3'>Matching style<br/>and class<br/>with luxury</h1>
        <p className='sub-text mt-4'>We also have a vibrant and trendy online<br/>fashion shop that is always stocked with<br/>trendy fashion styles and accessories to match<br/>any occasion.</p>
        <button type="button" class="btn btn-primary btn-lg">Rent Now</button>
        </div>
        <div className='col-9 col-sm-6 col-md-5 offset-2 offset-lg-0 col-lg-4 col-xl-3 photo'>
          <img src={RedGirl} alt="photo" className='redgirl' height='60%' width='90%'/>
        </div>
        <div className='col-12 col-lg-3 third-div'>
              <div className='row comment d-flex align-items-center'>
                <div className='col-3 offset-1 avatar d-flex'>
                    <Avatar alt='' src={boy} sx={{ width: 56, height: 56 }}></Avatar>
                </div>
                <div className='col-8'>
                    <p className='display-4'>Hareem</p>
                    <p className='lead'>"Wow, its amazing product!"</p>
                    <StarIcon fontSize='sm' className='star'/>
                    <StarIcon fontSize='sm' className='star'/>
                    <StarIcon fontSize='sm' className='star'/>
                    <StarIcon fontSize='sm' className='star'/>
                    <StarIcon fontSize='sm' className='star'/>
                </div>
              </div>
              <div className='row shopping offset-3'>
                <img src={RedGirl} alt="shopping" />
              </div>
        </div>
    </div>
    </>
  )
}

export default Home