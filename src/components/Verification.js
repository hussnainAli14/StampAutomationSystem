import React, {useState,useEffect}from 'react'
import {Link, useLocation} from 'react-router-dom'
import { FaTimes } from "react-icons/fa"
import { BiArrowBack} from "react-icons/bi";
import PropTypes from 'prop-types'
import * as yup from 'yup';
import { Formik } from 'formik';
 const Verification = ({sethideVerificationForm}) => {
   const [btnClicked, setbtnClicked] = useState(false)
   const [seconds, setseconds] = useState(0);
   var timer;
   let location = useLocation();
   useEffect(() => {
    if(btnClicked === true){
      // eslint-disable-next-line 
     timer  = setInterval(() => {
      setseconds(seconds + 1)
     }, 1000);
     if(seconds === 60){
      clearInterval(timer); 
    }
     return ()=>clearInterval(timer);
      
   }})
   const Changer = ()=>{
    sethideVerificationForm(true);
    setbtnClicked(false);
    setseconds(0)
    
   }
   const backArorowChanger = ()=>{
    
    setbtnClicked(false);
    setseconds(0)
    
   }
   const validate = yup.object({
    phoneNumber: yup.string().matches(/^[0-9]+$/, "Must be only digits").required("Phone number is required")
    
})
  return (
    <>
    <Formik
    initialValues={{
     phoneNumber:''
    }}
    validate={values => {
      const errors = {};
      if (!values.phoneNumber) {
          errors.phoneNumber = 'Required';
      } else if (
          !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(values.phoneNumber)
      ) {
          errors.phoneNumber = 'Invalid Phone number';
      }
      return errors;
  }}
  validationSchema={validate}
    >
      {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                
            }) => (
    
   
    !btnClicked &&
   <div className='user_verification_form'>
        
        <FaTimes className='ver-icon' onClick={Changer}/>
        <form className='verfication-form'>
            
        <h3 className='text-center'>Verification Form</h3>
        <input type="text" name='phoneNumber' placeholder="PhoneNumber" className={`user_signup_form_input ${!(errors.phoneNumber && touched.phoneNumber) ? 'input-margin' : ''}`} onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName} />
                    {/* // <label className='user_verification_form_label'>
                    // Phone Number
                    // </label><br/> */}
                    <p className="errors p-margin" > {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}   </p><br />
                    <button className="btn btn-outline-primary rounded-pill vb" onClick={()=>setbtnClicked(true)}>Get Code</button>
                    </form>
    </div>)}
    </Formik>
        {btnClicked && <div className='user_verification_form'>
        <BiArrowBack className='ver-icon-backArrow' onClick={backArorowChanger}/>
       <FaTimes className='ver-icon' onClick={Changer}/>
       <form className='verfication-form'>
           
       <h3 className='text-center'>Verification Form</h3>
       <input type="text" placeholder="Enter code" className='user_signup_form_input'  />
                   <label className='user_verification_form_label'>
                   Enter code
                   </label><br/>
                   
                   {seconds ===60 ?"":<p>Resend code in {seconds< 10 ? '0'+seconds:seconds} seconds</p>}
                   </form>
                   {location.pathname === '/UserSignup2'?<Link className="btn btn-outline-primary rounded-pill vb1 mx-1" to='/LoginPage' onClick={()=>setbtnClicked(true)}>Submit</Link>:<Link className="btn btn-outline-primary rounded-pill vb1 mx-1" to='/LawyerLoginPage' onClick={()=>setbtnClicked(true)}>Submit</Link>}
                   <button className={seconds === 60 ?'btn btn-outline-primary rounded-pill rb':'btn btn-outline-primary rounded-pill rb disabled'}>Resend Code</button>
                   
   </div>}
   </>
  )
}
Verification.propTypes ={
  hideVerificationForm:PropTypes.func,

}
export default Verification;
