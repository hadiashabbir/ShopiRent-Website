import React, {useState} from 'react'

import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const initialState = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

const Contact = () => {
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("submit");
        console.log(formData)
    }

  return (
    <div className='row mt-5 mb-5'>
        <div className='col-10 offset-1'>
            <h2 className='text-center'>Get In Touch With Us</h2>
        </div>
        <div className='row'>
            <div className='col-6 offset-3'>
            <p className='text-capitalize text-center' style={{color: 'GrayText'}}>for more information about our product & services please feel free to drop us an email. our staff always be there to help you out. do not hesitate!</p>
            </div>
        </div>
        <div className='row' style={{marginTop: '5rem'}}>
            <div className='col-4 offset-2'>
                <div className='row align-items-center'>
                    <div className='col-1'>
                        <PlaceIcon/>
                    </div>
                    <div className='col-9'>
                        <strong style={{fontSize: '1.5rem'}}>Address</strong>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-9 offset-1'>
                    G. T. Road, Staff Houses Engineering University Lahore, Lahore, Punjab 39161                    </div>
                </div>

                <div className='row align-items-center mt-5'>
                    <div className='col-1'>
                        <CallIcon/>
                    </div>
                    <div className='col-9'>
                        <strong style={{fontSize: '1.5rem'}}>Phone</strong>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-9 offset-1'>
                    Mobile: +92-322-4125678
                    <br />
                    Hotline: +92-344-1362575                    
                    </div>
                </div>

                <div className='row align-items-center mt-5'>
                    <div className='col-1'>
                        <AccessTimeFilledIcon/>
                    </div>
                    <div className='col-9'>
                        <strong style={{fontSize: '1.5rem'}}>Working Time</strong>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-9 offset-1'>
                    Monday-Friday:&nbsp;&nbsp;8:00 - 22: 00
                    <br />
                    Saturday-Sunday:&nbsp;&nbsp;9:00 - 21: 00
                    </div>
                </div>
            </div>

        <div className='col-3 offset-1'>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                </div>
                <div className='mb-4'>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                </div>
                <div className='mb-4'>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Subject"  value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}/>
                </div>
                <div className='mb-4'>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Message Here' rows="3" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>           
                </div>
                <div className='mb-4'>
                    <button type='submit' className='btn btn-primary' style={{padding: '1px 30px 1px 30px', fontSize: '1.2rem'}}>Submit</button>
                </div>
            </form>
        </div>
        </div>


    </div>
  )
}

export default Contact