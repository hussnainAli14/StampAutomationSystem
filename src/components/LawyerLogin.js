import {React, useState,useContext }from 'react'
import {Link,useLocation} from 'react-router-dom'
import lawyerImage from'../images/lawyer.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaTimes } from "react-icons/fa"
import PropTypes from 'prop-types'
import { userContext } from '../App';

export const LawyerLogin = ({sethideLawyerform}) => {
  let location = useLocation();
  
  // eslint-disable-next-line no-unused-vars
  const {state, dispatch}=useContext(userContext);
  //For Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navChanger = ()=>{
    dispatch ({type:'lawyer', payload:'lawyer'})
  }
  return (
    <>
    
    <div className='container'>
     
       <div className='login-box'>
       
            <div className='login-image-box'>
               
            </div>
            <div className='login-form-box'>
            {location.pathname === '/Login'?<FaTimes className='form-iconLawyer' onClick={()=>sethideLawyerform(true)} />:""}
                  <form>
                  <div className='image-size img-margin'>
            <img src={lawyerImage} alt='loading'/>
            </div>
                    
                    <div className='form_group'>
                   
                    
                    <input className='form_input' type="email" placeholder='Email' required/>
                    <label className='form_label'>
                    Email
                    
                    </label>
                    </div>
                    <div className='form_group'>
                    
                    <input className='form_input' type="Password" placeholder='Password' required/>
                    <label className='form_label'>
                    Password
                    
                    </label>
            
                    </div>
                    <div className='btn-mr btn-hover text-center'>
            <Link className='btn btn-outline-primary rounded-pill' onClick={navChanger} to="/Lawyerdocuments">Log In</Link>
            </div>
            <p className='p'>Forgot Password?<Button className='fp' onClick={handleShow}>
        Click Here
      </Button></p>
{/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type="text" placeholder="Enter Your Email Address" className='user_signup_form_input mt-3 mx-5'/>
             <label className='user_verification_form_label mt-3 mx-5'>
                 Enter Email Address
                </label>
                
              </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Reset Password
          </Button>
        </Modal.Footer>
      </Modal>
            
            {location.pathname === "/Login"?<span className='ml'>Haven't created an account?</span>:""}<br/>
            <div className='my-2 text-center'>
            {location.pathname === "/Login"?<Link className='my-1 btn btn-outline-primary rounded-pill 'to="/">Register</Link>:""}
            
            </div>
                  </form>
            </div>
       </div>
       
    </div>
    
  </>
 
  )
}
LawyerLogin.propTypes =  {
    hideLawyerform:PropTypes.func
  }
  export default LawyerLogin;