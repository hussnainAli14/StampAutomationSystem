import { React, useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import lawyerImage from "../images/lawyer.png";
import { Alert } from "@mui/material";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import axios from "../axios/Axios";
import { useFormik } from "formik";
// import * as yup from "yup";

export const LawyerLogin = ({ sethideLawyerform }) => {
  let location = useLocation();
  let navigate = useNavigate();
  //For Modal
  const [show, setShow] = useState(false);
  const [showAlert, setshowAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const validate = (values)=>{
    const errors={};
    if(!values.email){
      errors.email = 'Required';
      // errorCheck();
     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
       errors.email = 'Invalid email address';
      //  errorCheck();
     }
  
     if(!values.password){
      errors.password = "Required";
      // errorCheck();
     }
     else if(values.password.length<8){
      errors.password = "Password must contain 8 characters";
      // errorCheck();
     }
     return errors;
  }
  
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
        email1:'',
      },
      validate:validate,
     
      // isInitialValid,
      // isValid,
    });

const getData = async (event)=>{
  event.preventDefault();
  // console.log(values)
  try{
   const res = await axios.post("/api/v1/users/login",{email:formik.values.email, password:formik.values.password})
   if(res.data.status === "success" && res.data.role ==="lawyer"){
  navigate('/StampAutomationSystem');
  localStorage.setItem("token",res.data.token)
  localStorage.setItem("LoggedIn",'true')
  localStorage.setItem("userType",res.data.role)
   }
  }
  catch(error){
     alert("Invalid login credentials")
     console.log(error)
  }
}

const resetPassword = async ()=>{
  try{
    const res = await axios.post("/api/v1/users/forgetPassword",{email:formik.values.email1});
    console.log(res);
    if(res.data.status === "success"){
      setshowAlert(true);
      handleClose();
      // console.log(formData);
    }
  }
  catch(error){
    alert("Invalid email");
  }
    }
  
  
//  useEffect(()=>{
//   console.log(errorCheck());
//  },formik.validate)
  return (
    <>
      {showAlert && (
        <Alert
          variant="filled"
          severity="success"
          className="mt-1"
          onClose={() => {
            setshowAlert(false);
          }}
        >
          Resent Password link sent to your email.
        </Alert>
      )}
      <div className="container">
        <div className="login-box">
          <div className="login-image-box"></div>
          <div className="login-form-box">
            {location.pathname === "/Login" ? (
              <FaTimes
                className="form-iconLawyer"
                onClick={() => sethideLawyerform(true)}
              />
            ) : (
              ""
            )}
            <form onSubmit={getData}>
              <div className="image-size img-margin">
                <img src={lawyerImage} alt="loading" />
              </div>

              <div className="form_group">
                <input
                  className="form_input"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  required
                />
               { !formik.errors.email && <label className="form_label">Email</label>}
                
                <span style={{color:'orangered',display:'block', paddingTop:'2%'}}>  {formik.errors.email && formik.touched.email && formik.errors.email}
                </span>
              </div>
              <div className="form_group">
                <input
                  className="form_input"
                  name="password"
                  type="Password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  required
                />
                
              { !formik.errors.password && <label className="form_label">Password</label>}
                
                  
               <span style={{color:'orangered',display:'block', paddingTop:'2%'}}>   {formik.errors.password && formik.touched.password && formik.errors.password}</span>
                
              </div>
              <div className="btn-mr btn-hover text-center">
                {console.log(Object.keys(formik.values).length)}
                {console.log(formik.errors)
                }
                <button
                  type="submit"
                  className={(Object.keys(formik.values).length !== 0)&&(Object.keys(formik.errors).length===0)?'btn btn-outline-primary rounded-pill':'btn btn-outline-primary rounded-pill disabled'}
              // {...isError?console.log("babab"):console.log("aaaa")}
                  // onClick={navChanger}
                  // to="/Lawyerdocuments"
                  // disabled={formik.errors!=={}}

                >
                  Log In
                </button>
              </div>
              <p className="p">
                Forgot Password?
                <Button className="fp test" onClick={handleShow}>
                  Click Here
                </Button>
              </p>
              {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Reset Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <input
                    type="text"
                    name="email1"
                    placeholder="Enter Your Email Address"
                    className="user_signup_form_input mt-3 mx-5"
                    onChange={formik.handleChange}
                    value={formik.values.email1}
                  />
                  <label className="user_verification_form_label mt-3 mx-5">
                    Enter Email Address
                  </label>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={resetPassword}>
                    Reset Password
                  </Button>
                </Modal.Footer>
              </Modal>

              {location.pathname === "/Login" ? (
                <span className="ml">Haven't created an account?</span>
              ) : (
                ""
              )}
              <br />
              <div className="my-2 text-center">
                {location.pathname === "/Login" ? (
                  <Link
                    className="my-1 btn btn-outline-primary rounded-pill "
                    to="/"
                  >
                    Register
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
LawyerLogin.propTypes = {
  hideLawyerform: PropTypes.func,
};
export default LawyerLogin;
