import { React, useState,useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import userImage from "../../images/man.png";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { Alert } from "@mui/material";
import axios from "../../axios/Axios";
import { useFormik } from "formik";
import Spinner from "../../SpinnerHolder/Spinner";
import { getuser } from "../../ApiService/LogInFunction";
// import { getNotification } from "../../ApiService/NotificationFunction";
// import StateContext from "../../StateContext/StateContext";

const UserSignin = (props) => {
  // console.log(typeof props.setNotification)
  // console.log(props)

  let location = useLocation();
  const [showAlert, setshowAlert] = useState(false);
  const [show, setShow] = useState(false);
  const [loading,setLoading] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//  const setNotification=useContext(StateContext)
//  console.log(setNotification)
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must contain 8 characters";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      email1: "",
    },
    validate: validate,
  });
// console.log(notification)
  let navigate = useNavigate();
  const getData = async (event) => {
    setLoading(true)
    event.preventDefault();
    try {
      // const role='user';
     
      const res = await axios.post("/api/v1/users/login", {
        email: formik.values.email,
        password: formik.values.password,
      });     
      
      if (res.data.status === "success" && res.data.role === "user") {
        
        navigate("/StampAutomationSystem");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.user_id);
        localStorage.setItem("userType", res.data.role);
        getuser();
        // getNotification(props)
      }
    } 
    catch (error) {
      setLoading(false)
        alert("Invalid login credentials");
       
      
    }
    setLoading(false)
  };

  const resetPassword = async () => {
    try {
      const res = await axios.post("/api/v1/users/forgetPassword", {
        email: formik.values.email1,
      });
      console.log(res);
      if (res.data.status === "success") {
        setshowAlert(true);
        handleClose();
      }
    } catch (error) {
      alert("Invalid email");
    }
  };

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
      
{loading===true?<Spinner/>:
      <div className="container">
        <div className="login-box">
          <div
            className={
              location.pathname === "/Login"
                ? "login-image-box"
                : "login-image-box shadow"
            }
          ></div>
          <div
            className={
              location.pathname === "/Login"
                ? "login-form-box"
                : "login-form-box shadow"
            }
          >
            {location.pathname === "/Login" ? (
              <FaTimes
                className="form-icon"
                onClick={() => props.hideuserform(true)}
              />
            ) : (
              ""
            )}
            <form onSubmit={getData}>
              {console.log(formik.errors)}
              <div className="image-size img-margin">
                <img src={userImage} alt="loading" />
              </div>

              <div className="form_group">
                <input
                  className="form_input"
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  placeholder="Email"
                  required
                />
                {!formik.errors.email && (
                  <label className="form_label">Email</label>
                )}
                <span
                  style={{
                    color: "orangered",
                    display: "block",
                    paddingTop: "2%",
                  }}
                >
                  {" "}
                  {formik.errors.email &&
                    formik.touched.email &&
                    formik.errors.email}
                </span>
              </div>
              <div className="form_group">
                <input
                  className="form_input"
                  type="Password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  required
                />
                {!formik.errors.password && (
                  <label className="form_label">Password</label>
                )}
                <span
                  style={{
                    color: "orangered",
                    display: "block",
                    paddingTop: "2%",
                  }}
                >
                  {" "}
                  {formik.errors.password &&
                    formik.touched.password &&
                    formik.errors.password}
                </span>
              </div>
              <div className="my-2 btn-hover text-center">
                <button
                  type="submit"
                  // {isError?console.log(true):console.log(false)}
                  className={
                    Object.keys(formik.values).length !== 0 &&
                    Object.keys(formik.errors).length === 0
                      ? "btn btn-outline-primary rounded-pill"
                      : "btn btn-outline-primary rounded-pill disabled"
                  }
                >
                  Log In
                </button>
                {/* {console.log(isError)} */}
              </div>

              <p>
                Forgot Password?
                <Button className="fp test" onClick={handleShow}>
                  Click Here
                </Button>
              </p>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Confirm Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <input
                    type="email"
                    name="email1"
                    placeholder="Enter Your Email Address"
                    className="user_signup_form_input mt-3 mx-5"
                    onChange={formik.handleChange}
                    value={formik.values.email1}
                    required
                  />
                  <label className="user_verification_form_label mt-3 mx-5">
                    Email Address
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
                <p className="ml">Haven't created an account?</p>
              ) : (
                ""
              )}
              <br />

              <div className="my-2 text-center">
                {location.pathname === "/Login" ? (
                  <Link
                    className="btn btn-outline-primary rounded-pill "
                    to="/UserSignup"
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
}
    </>
  );
};
// UserSignin.propTypes = {
//   hideuserform: PropTypes.bool,
// };
export default UserSignin;
