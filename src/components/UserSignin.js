import {React, useState,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link, useLocation} from 'react-router-dom'
import userImage from '../images/man.png'
import { FaTimes } from "react-icons/fa"
import PropTypes from 'prop-types'
import { userContext } from '../App';
import { Alert } from '@mui/material';
// import ResetPassword from './ResetPassword'
const UserSignin = ({hideuserform}) => {
  let location = useLocation();
  const [showAlert, setshowAlert] = useState(false)
  const [show, setShow] = useState(false);
  // eslint-disable-next-line no-unused-vars
 const {state, dispatch}=useContext(userContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const AlertShower = ()=>{
    setShow(false)
    setshowAlert(true)
  }
const navChanger = ()=>{
  // eslint-disable-next-line no-unused-vars
  dispatch ({type:'user', payload:'user'})
}
  return (
    <>
    {showAlert&&<Alert variant='filled' severity="success" className='mt-4' onClose={() => {setshowAlert(false)}}>Resent Password link sent to your email.</Alert>}
    <div className='container'>
    
      
       <div className='login-box'>
       
            <div className={location.pathname === "/Login"?'login-image-box':'login-image-box shadow' }>
               
            </div>
            <div className={location.pathname === "/Login"?'login-form-box':'login-form-box shadow'}>
            {location.pathname ==="/Login"?<FaTimes className='form-icon'  onClick={()=>hideuserform(true)} />:""}
                  <form>
                  <div className='image-size img-margin'>
            <img src={userImage} alt='loading'/>
            </div>
                    
                    <div className='form_group'>
                   
                    
                    <input className='form_input'type="email" placeholder='Email'  required/>
                    <label className='form_label'>
                    Email
                    
                    </label>
                   
                    </div>
                    <div className='form_group'>
                    
                    <input className='form_input'type="Password" placeholder='Password'  required/>
                    <label className='form_label'>
                    Password
                    
                    </label>
                    
                    </div> 
                    <div className='my-2 btn-hover text-center'>
            <Link className='btn btn-outline-primary rounded-pill' to='/main' onClick={navChanger}>Log In</Link>
            </div>
            <p >Forgot Password?<Button className='fp test' onClick={handleShow}>
        Click Here
      </Button></p>
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
          <Button variant="primary" onClick={AlertShower}>
            Reset Password
          </Button>
        </Modal.Footer>
      </Modal>
      
            {location.pathname === "/Login"?<p className='ml'>Haven't created an account?</p>:""}<br/>
            
            <div className='my-2 text-center'>
            {location.pathname === "/Login"?<Link className='btn btn-outline-primary rounded-pill 'to="/UserSignup" >Register</Link>:""}
            
            </div>
            
                  </form>
                  
            </div>
       </div>
       
    </div>
    
  </>
 
  )
  
}
  UserSignin.propTypes =  {
    hideuserform:PropTypes.bool
  }
export default UserSignin;
