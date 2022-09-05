import React from 'react'
import easypaisaimg from '../images/paymentEasypaisa.jfif'
import jazzcashimg from '../images/jazzcash.jfif'
import visaimg from '../images/visa.png'
// import { useRadioGroup } from '@mui/material/RadioGroup';

const Payment = () => {
  return (
    <div className='row payment'>
 <div className='col-lg-4 col-md-6 payment-method '>
  
<h3 className='fw-bold mt-4 mb-3 text-center'>Select Payment Method</h3><br/>
<input className="form-check-input ms-5" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label mx-2 mb-3" for="flexRadioDefault1">
  <img src={easypaisaimg} alt='loading' className='payment-img'/>



  </label><br/>
<input className="form-check-input ms-5 mt-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label className="form-check-label fs-5 mx-2 mb-3" for="flexRadioDefault1">
  <img src={jazzcashimg} alt='loading' className='payment-img-cash'/>
  </label><br/>

<input className="form-check-input ms-5" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
  <label className="form-check-label fs-5 mx-2 mb-3 mt-1" for="flexRadioDefault1">
  <img src={visaimg} alt='loading' className='payment-img'/>
  </label><br/>


 </div>
<div className='col-lg-4 col-md-6 account-info offset-1'> 
<h3 className='fw-bold text-center mt-5 mb-3'>Account Information</h3>
<input className='mt-3  payment-input' type='text'placeholder='Account Holder Name' required/>
<label className='mt-2 payment-label'>Account Holder Name</label>
<br/>
<input className=' payment-input' type='text'placeholder='Account Number' required/>
<label className='mt-2 payment-label'>Account Number</label>
<br/>
<input className=' payment-input' type='text'placeholder='Stamp Agreement Fee' required/>
<label className='mt-2 payment-label'>Stamp Agreement Fee</label>
<br/>
<button className='btn rounded-pill mt-4 ps-5 pe-5 pt-2 pb-2 bg-dark text-white payment-btn'>Pay</button>
</div>
    </div>
  )
}

export default Payment