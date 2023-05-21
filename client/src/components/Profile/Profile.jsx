import React from 'react'
import Header from '../Header/Header'

import man from "../../assets/man.jpg";

import './style.css';

const Profile = () => {
  return (
<>
    <Header/>
    <div className='row ms-5 mt-5'>
        <div className='col-6 text-center'>
            <img src={man} alt="man" height="40%" width="40%" className='Avatar'/>
            <h4 className='mt-4'>Asad Zahid</h4>
            
        </div>
        <div className='col-8'>

        </div>
    </div>
</>
  )
}

export default Profile