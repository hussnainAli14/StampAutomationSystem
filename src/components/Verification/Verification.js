import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import PropTypes from "prop-types";
import axios from '../../axios/Axios'
import Alert from "../../alert/Alerthandler";
import AlertHandler from "../../alert/Alerthandler";
import { getuser } from "../../ApiService/LogInFunction";
import { ToastContainer } from "react-toastify";
import { signupSuccess, signuperrorToast } from "../../ApiService/ToastDisplay";
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
   const getData = async () => {
    // setLoading(true)
    // event.preventDefault();
    try {
      // const role='user';
     
      const res = await axios.post("/api/v1/users/login", {
        email: props.email,
        password: props.password,
      });     
      
      if (res.data.status === "success") {
        
        // navigate("/StampAutomationSystem");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.user_id);
        localStorage.setItem("userType", res.data.role);
        getuser();
        // getNotification(props)
        if(location.pathname === '/UserSignup'){

          navigate('/accountverification');
          }
          else{
          
            navigate('/Lawyeraccountverification')
          }
      }
    } 
    catch (error) {
        alert("Invalid login credentials");
       
      
    }
    // setLoading(false)
  };
  const verifyCode = async ()=>{
    try{
      console.log(verificationCode)
   let res = await axios.post(`/api/v1/users/verifyVerificationCode/${verificationCode}`,{email:'rockeykhan142@gmail.com'})
   if(res.data.status === "success"){
// props.getData();
// setShowAlert(true);
getData()
signupSuccess();
   }
    }
    catch(error){
      signuperrorToast();
      console.log(error)
    }
  }
  return (
    <>
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
            type="number"
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
          onClick={() => {setseconds(60)
          props.getCode('rockeykhan142@gmail.com')}
          }
        >
          Resend Code
        </button>
      </div>
      <ToastContainer/>
    </>
  );
};
Verification.propTypes = {
  hideVerificationForm: PropTypes.func,
};
export default Verification;
