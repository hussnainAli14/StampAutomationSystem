import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import PropTypes from "prop-types";
import axios from '../axios/Axios'
import Alert from "../alert/Alerthandler";
import AlertHandler from "../alert/Alerthandler";
const Verification = (props) => {
  const [btnClicked, setbtnClicked] = useState(false);
  const [seconds, setseconds] = useState(60);
  const [verificationCode, setVerificationCode] = useState();
  const [showAlert, setShowAlert]=useState(false);
  var timer;
  let location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    // if(btnClicked === true){
    // eslint-disable-next-line
    timer = setInterval(() => {
      setseconds(seconds - 1);
    }, 1000);
    if (seconds === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);

    //  }
  });
  const Changer = () => {
    props.sethideVerificationForm(true);
    setbtnClicked(false);
    setseconds(60);
  };
  const backArorowChanger = () => {
    setbtnClicked(false);
    setseconds(60);
  };

   const handleChange = (event)=>{
    const {value}=event.target;
    setVerificationCode(value);
   }

  const verifyCode = async ()=>{
    try{
      console.log(verificationCode)
   let res = await axios.post(`/api/v1/users/verifyVerificationCode/${verificationCode}`,{email:props.email})
   if(res.data.status === "success"){
// props.getData();
setShowAlert(true);
navigate('/Login');

   }
    }
    catch(error){
      console.log(error)
    }
  }
  //    const validate = yup.object({
  //     phoneNumber: yup.string().matches(/^[0-9]+$/, "Must be only digits").required("Phone number is required")

  // })
  return (
    <>
      {/* <Formik
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
      {/* <p className="errors p-margin" > {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}   </p><br />
                    <button className="btn btn-outline-primary rounded-pill vb" onClick={()=>setbtnClicked(true)}>Get Code</button>
                    </form>
    </div>)}
    </Formik>  */}
    {
      showAlert&&
      <AlertHandler/>
    }
      <div className="user_verification_form">
        <BiArrowBack
          className="ver-icon-backArrow"
          onClick={backArorowChanger}
        />
        <FaTimes className="ver-icon" onClick={Changer} />
        <form className="verfication-form">
          <h3 className="text-center">Verification Form</h3>
          <input
            type="text"
            placeholder="Enter code"
            className="user_signup_form_input"
            onChange={handleChange}
          />
          <label className="user_verification_form_label" style={{marginTop:'10px'}}>Code</label>
          <br />

          {seconds === 0 ? (
            ""
          ) : (
            <p>
              Code will expire in {seconds < 10 ? "0" + seconds : seconds}{" "}
              seconds
            </p>
          )}
        </form>
        {location.pathname === "/UserSignup" ? (
          <button
            className="btn btn-outline-primary rounded-pill vb1 mx-1"
            // to="/LoginPage"
            onClick={verifyCode}
          >
            Submit
          </button>
        ) : (
          <button
            className="btn btn-outline-primary rounded-pill vb1 mx-1"
            // to="/LawyerLoginPage"
            onClick={verifyCode}
          >
            Submit
          </button>
        )}
        <button
          className={
            seconds === 0
              ? "btn btn-outline-primary rounded-pill rb"
              : "btn btn-outline-primary rounded-pill rb disabled"
          }
          onClick={() => setseconds(60)}
        >
          Resend Code
        </button>
      </div>
    </>
  );
};
Verification.propTypes = {
  hideVerificationForm: PropTypes.func,
};
export default Verification;
