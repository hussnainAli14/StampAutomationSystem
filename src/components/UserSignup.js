import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import { BiArrowToRight } from "react-icons/bi";
import UserImg from "../images/man.png";
import LawyerImg from "../images/lawyer.png";
import * as yup from "yup";
import { useFormik } from "formik";
import EmailIcon from "@mui/icons-material/Email";
import KeySharpIcon from "@mui/icons-material/KeySharp";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
// import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import UserSignup2 from "./UserSignup2";
// import axios from '../axios/Axios'
// import { PersistFormikValues } from 'formik-persist-values';
const UserSignup = () => {
  let location = useLocation();
  const [Visible, setVisible] = useState(false);
  const [passwordVisible, setpasswordVisible] = useState(false);
  const [passwordConfirmVisible, setpasswordConfirmVisible] = useState(false);

  const visibility = () => {
    setVisible(true);
  };
  const [formData, setFormData] = useState({});
  // const handleChanger = (event) => {
  //   const { name, value } = event.target;

  //   setFormData({ ...formData, [name]: value });
  //   // console.log(formData)
  // };

  // const getData = async (event)=>{
  //   event.preventDefault();   try{
  //   const res=await axios.post('/api/v1/users/signup',formData)
  //   if(res.data.status ==="success"){
  //   VisibileVerificationForm();

  //   }

  //  }
  //  catch(error){
  //    alert(error)
  //  }
  // }

  const validate = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "First name should have atleast 3 chracters")
      .required("Required"),
    lastName: yup
      .string()
      .min(3, "Last name should have atleast 3 chracters")
      .required("Required"),
    email: yup.string().email("Email is invaliid").required("Required"),
    password: yup
      .string()
      .min(8, "Password must contain atleast 8 chracters")
      .required("Required"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: validate,
  });
  return (
    // <Formik
    //   initialValues={{
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     passwordConfirm: "",
    //   }}
    //   validate={(values) => {
    //     const errors = {};
    //     if (!values.email) {
    //       errors.email = "Required";
    //     } else if (
    //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //     ) {
    //       errors.email = "Invalid email address";
    //     }
    //     return errors;
    //   }}
    //   validationSchema={validate}
    // >
    //   {({
    //     values,
    //     errors,
    //     touched,
    //     // handleChange,
    //     // handleBlur,
    //     // handleSubmit,
    //   }) => (
    <>
      {!Visible && (
        <div className="user-signup-img">
          <div className="user_signup_form ">
            {location.pathname === "/UserSignup" ? (
              <img src={UserImg} alt="loading" className="signup-img "></img>
            ) : (
              <img src={LawyerImg} alt="loading" className="signup-img "></img>
            )}
            <form>
              {location.pathname === "/UserSignup" ? (
                <h3 className="text-center">User Signup</h3>
              ) : (
                <h3 className="text-center">Lawyer Signup</h3>
              )}

              <input
                type="text"
                id="input"
                name="firstName"
                placeholder="First Name"
                className={`user_signup_form_input ${
                  !(formik.errors.firstName && formik.touched.firstName)
                    ? "input-margin"
                    : ""
                }`}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />

              <p className="errors p-margin">
                {" "}
                {formik.errors.firstName &&
                  formik.touched.firstName &&
                  formik.errors.firstName}
              </p>
              <br />

              <input
                type="text"
                id="input"
                name="lastName"
                placeholder="Last Name"
                className={`user_signup_form_input ${
                  !(formik.errors.lastName && formik.touched.lastName)
                    ? "input-margin"
                    : ""
                }`}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />

              <p className="errors p-margin">
                {" "}
                {formik.errors.lastName &&
                  formik.touched.lastName &&
                  formik.errors.lastName}
              </p>
              <br />

              <input
                type="email"
                id="input"
                name="email"
                placeholder="Email Address"
                className={`user_signup_form_input ${
                  !(formik.errors.email && formik.touched.email)
                    ? "input-margin"
                    : ""
                }`}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <EmailIcon className="emailIcon" />

              <p className="errors p-margin">
                {formik.errors.email &&
                  formik.touched.email &&
                  formik.errors.email}
              </p>
              <br />
              <input
                name="password"
                id="input"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className={`user_signup_form_input ${
                  !(formik.errors.password && formik.touched.password)
                    ? "input-margin"
                    : ""
                }`}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />

              {formik.values.password === "" ? (
                <KeySharpIcon className="emailIcon" />
              ) : !passwordVisible ? (
                <VisibilitySharpIcon
                  className="emailIcon"
                  id="VisibilityIcon"
                  onClick={() => {
                    setpasswordVisible(true);
                  }}
                />
              ) : (
                <VisibilityOffIcon
                  className="emailIcon"
                  id="VisibilityIcon"
                  onClick={() => setpasswordVisible(false)}
                />
              )}
              {/* {passwordVisible?<VisibilityOffIcon className='emailIcon' id='VisibilityIcon' onClick={()=> setpasswordVisible(false)}/>:''} */}
              <p className="errors p-margin">
                {" "}
                {formik.errors.password &&
                  formik.touched.password &&
                  formik.errors.password}
              </p>
              <br />

              <input
                type={passwordConfirmVisible ? "text" : "password"}
                id="input"
                name="passwordConfirm"
                placeholder="Confirm Password"
                className={`user_signup_form_input ${
                  !(
                    formik.errors.passwordConfirm &&
                    formik.touched.passwordConfirm
                  )
                    ? "input-margin"
                    : ""
                }`}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.passwordConfirm}
              />
              {formik.values.passwordConfirm === "" ? (
                <KeySharpIcon className="emailIcon" />
              ) : !passwordConfirmVisible ? (
                <VisibilitySharpIcon
                  className="emailIcon"
                  id="VisibilityIcon"
                  onClick={() => setpasswordConfirmVisible(true)}
                />
              ) : (
                <VisibilityOffIcon
                  className="emailIcon"
                  id="VisibilityIcon"
                  onClick={() => setpasswordConfirmVisible(false)}
                />
              )}

              <p className="errors p-margin">
                {" "}
                {formik.errors.passwordConfirm &&
                  formik.touched.passwordConfirm &&
                  formik.errors.passwordConfirm}
              </p>
              {console.log(formik.values)}
              {location.pathname === "/UserSignup" ? (
                <button
                  onClick={visibility}
                  className={
                    Object.keys(formik.values).length !== 0 &&
                    Object.keys(formik.errors).length === 0
                      ? "btn-signup"
                      : "btn-signup btn-disabled"
                  }
                >
                  Next
                  <BiArrowToRight />
                </button>
              ) : (
                <button
                  onClick={visibility}
                  className={
                    Object.keys(formik.values).length !== 0 &&
                    Object.keys(formik.errors).length === 0
                      ? "btn-signup"
                      : "btn-signup btn-disabled"
                  }
                >
                  Next
                  <BiArrowToRight />
                </button>
              )}
            </form>
          </div>
        </div>
      )}
      {Visible && (
        <UserSignup2
          Visible={Visible}
          setVisible={setVisible}
          formData={formik.values}
          setFormData={setFormData}
        />
      )}
    </>
  );
};

// </Formik>

//   );
// };
export default UserSignup;
