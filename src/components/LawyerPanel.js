import {React, useContext} from 'react'
import { Link } from 'react-router-dom';
import { userContext} from '../App';

const LawyerPanel = () => {
  // eslint-disable-next-line no-unused-vars
  const {state, dispatch}=useContext(userContext);
  const navChanger = ()=>{
    // eslint-disable-next-line no-unused-vars
    dispatch ({type:'user', payload:true})
  }
  return (
    <div className='userpanel'>
<div className='verification-box'>
<p className='userpanel-p'>Your account is not verified. To continue your services, you need to verify your account first. For Verification, Click the button below</p>
<Link className="btn btn-outline-primary rounded-pill mlb mt-1" to='/Lawyeraccountverification' onClick={navChanger}>Click here for account verification</Link>

</div>
      </div>
  )
}

export default LawyerPanel