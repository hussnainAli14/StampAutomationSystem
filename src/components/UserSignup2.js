import React, { useState } from "react";
import {useLocation } from "react-router-dom";
import { BiArrowToRight } from "react-icons/bi";
import { BiArrowToLeft } from "react-icons/bi";
import UserImg from "../images/man.png";
import LawyerImg from "../images/lawyer.png";
import Verification from "./Verification";
import * as yup from "yup";
import {useFormik } from "formik";
import axios from '../axios/Axios'
import Spinner from "../SpinnerHolder/Spinner";
const UserSignup2 = (props) => {
  let location = useLocation();
  const [hideVerificationForm, sethideVerificationForm] = useState(true);
const[loading,setLoading] =  useState(false)
// let totalData={};
const roleAssigner = ()=>{
  let role;
  (location.pathname==='/UserSignup')?
     role = 'user'
     :
     role = 'lawyer'
     return role;
}
const cnicRegex=/^[0-9]{5}-[0-9]{7}-[0-9]$/i;
const validate = yup.object({
  cnic: yup.string().matches(cnicRegex,"Cnic must contain dashes").required("Required"),
  address: yup.string().required("Required"),
  gender: yup.string().required("Required"),
});

const formik = useFormik({
  initialValues:{
    cnic: "",
    address: "",
    gender: "",
  },
  validationSchema:validate
})
Object.assign(props.formData,formik.values)
let totalData= props.formData
console.log(totalData)
console.log(props.formData)
console.log(formik.values)
  const  getCode =async ()=>{
   
    try{
      
      console.log(totalData.email)
    const res = await axios.post("/api/v1/users/sendVerificationCode",{email:totalData.email})
    if(res.data.status ==="success"){
      sethideVerificationForm(false);
      setLoading(false)
    }
    }
    catch(error){
      console.log(error);
    }
  }

  const getData = async (event)=>{
    event.preventDefault();   
    setLoading(true)
    try{
    totalData = {role:roleAssigner(),...totalData}
    console.log(totalData)
    const res=await axios.post('/api/v1/users/signup/',totalData)
    console.log(res)
    if(res.data.status ==="success"){
      console.log('success')
    getCode();
    }
   }
   catch(error){
     alert(error)
     setLoading(false)
     console.log("data",error)
   }
  }
  return (
    <>
      
          <div className="user-signup-img">
            <div className="user_signup_form">
              {location.pathname === "/UserSignup" ? (
                <img src={UserImg} alt="loading" className="signup-img "></img>
              ) : (
                <img
                  src={LawyerImg}
                  alt="loading"
                  className="signup-img "
                ></img>
              )}
              <form >
                {location.pathname === "/UserSignup" ? (
                  <h3 className="text-center">User Signup</h3>
                ) : (
                  <h3 className="text-center">Lawyer Signup</h3>
                )}
                <input
                  type="text"
                  name="cnic"
                  placeholder="Cnic No"
                  className={`user_signup_form_input ${
                    !(formik.errors.cnic && formik.touched.cnic) ? "input-margin" : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cnic}
                />
                <br />
                <p className="errors p-margin">
                  {" "} 
                  {formik.errors.cnic && formik.touched.cnic ? formik.errors.cnic:''}
                </p>
                <br />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className={`user_signup_form_input ${
                    !(formik.errors.address && formik.touched.address) ? "input-margin" : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={totalData.address}
                />

                <br />
                <p className="errors p-margin">
                  {" "}
                  {formik.errors.address && formik.touched.address && formik.errors.address}
                </p>
                <br />
                <select
                  name="gender"
                  placeholder="Gender"
                  onChange={formik.handleChange}
                  value={totalData.gender}
                  onBlur={formik.handleBlur}
                  className={`user_signup_form_input ${
                    !(formik.errors.gender && formik.touched.gender) ? "input-margin" : ""
                  }`}
                >
                  <option value="" color="grey">
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <br />
                <p className="errors p-margin">
                  {" "}
                  {formik.errors.gender && formik.touched.gender && formik.errors.gender}
                </p>
                <br />
                {location.pathname === "/UserSignup" ? (
                  <button className="btn-signup-p" onClick={()=>{props.setVisible(false)}}>
                    <BiArrowToLeft />
                    Previous
                  </button>
                ) : (
                  <button className="btn-signup-p" onClick={()=>{props.setVisible(false)}}>
                    <BiArrowToLeft />
                    Previous
                  </button>
                )}
                {
                  <button
                  className={(Object.keys(totalData).length !== 0)&&(Object.keys(formik.errors).length===0)?"btn-nxt":"btn-nxt btn-disabled"}
                    onClick={getData}
                  >
                    Next
                    <BiArrowToRight />
                  </button>
                }
              </form>
            </div>
            {loading ? <Spinner/>:
              <div
                className={`'hideVerificationForm' ${
                  hideVerificationForm
                    ? "hideVerificationForm"
                    : "showVerificationForm "
                }`}
              >
                <div className="verification_overlay">
                  <Verification
                    sethideVerificationForm={sethideVerificationForm}
                    email = {totalData.email}
                  />
                </div>
              </div>
            }
          </div>
    </>
  );
};
export default UserSignup2;
