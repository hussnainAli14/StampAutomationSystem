import { React, useState } from "react";
// import {Link} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'

import { useNavigate } from "react-router";
import Title from "react-vanilla-tilt";
import CnicImg from "../../images/insertImage1.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "../../axios/Axios"
const LawyerAccountVerification = () => {
  const showCnicToast = ()=>{
    toast('Images Uploaded Successfully!' ,{
      theme:'dark',
      position:"top-center",
    })
  }
  const CnicErrorToast = ()=>{
    toast.error('Image not uploaded',{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      })
  }
  const userId = localStorage.getItem('userId')
  const [imageFront, setimageFront] = useState({
    preview: CnicImg,
    raw: "",
  });
  const [imageBack, setimageBack] = useState({
    preview: CnicImg,
    raw: "",
  });
  const [licensefront, setlicensefront] = useState({
    preview: CnicImg,
    raw: "",
  });
  const [licenseback, setlicenseback] = useState({
    preview: CnicImg,
    raw: "",
  });
  const imageHandler = (e) => {
    setimageFront({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  };

  const imageHandlerBack = (e) => {
    setimageBack({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  };

  const imageHandlerlicenseFront = (e) => {
    setlicensefront({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  };

  const imageHandlerlicenseback = (e) => {
    setlicenseback({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  };

  const CnicUpload = async ()=>{
    const formData = new FormData();
    formData.append('cnicPhoto',imageFront.raw);
    formData.append('cnicPhoto',imageBack.raw)
    try{
      let res = await axios.post(`/api/v1/users/uploadCnic/${userId}`,formData)
      if(res.data.status === "success"){
      showCnicToast();
        console.log("Uploaded",formData)
      }
        
    }
    catch(error){
      CnicErrorToast()
      console.log(error)
    }
  }

  const licenseUpload = async ()=>{
    const formData = new FormData();
    formData.append('barAssociation',licensefront.raw);
    formData.append('barAssociation',licenseback.raw)
    try{
      let res = await axios.post(`/api/v1/users/uploadBarAss/${userId}`,formData)
      if(res.data.status === "success"){
        handleShow();
      }
        
    }
    catch(error){
      console.log(error)
    }
  }

  //  const [imgSelected, setimgSelected] = useState(false)
  //For modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  //eslint-disable-next-line no-unused-vars

  let navigate = useNavigate();
  // const Clicked = () => {
  //   handleShow();
  // };
  const CloseClicked = () => {
    handleClose();
    navigate("/main");
  };
  return (
    <>
      <div className="accver ">
        <div className="row ">
          <h1 className="acc-h2">
            <u className="underline">Cnic Images</u>
          </h1>

          <div className="col-md-6 d-lg-flex mt-5 card-margin">
            <div className="cardDetails">
              <h3 className="fw-bold text-center text-white mt-3">
                Front Side Image
              </h3>
              <p className="text-white text-center ps-5 pe-5 fs-5 details">
                Image contents should be readable. Image size should be 325px *
                208px.
              </p>
              <input
                type="file"
                name="imageUpload"
                id="input"
                className="account-cardbtn-1"
                accept="image/*"
                onChange={imageHandler}
              />
              <label htmlFor="input" className="imageUpload">
                Select Image
              </label>
            </div>
            <Title
              className="tilt"
              style={{ max: 10, scale: 1.1, glare: true }}
            >
              <div className="cardDetails cardImg ">
                <img
                  src={imageFront.preview}
                  className="account-img-style"
                  alt="loading"
                />
              </div>
            </Title>
          </div>
        </div>

        <div className="row justify-content-end cardImageMargin">
          <div className="col-md-6 d-lg-flex flex-row-reverse card-margin mt-5">
            <div className="cardDetails">
              <h3 className="fw-bold text-center text-white mt-3">
                Back Side Image
              </h3>
              <p className="text-white text-center ps-5 pe-5 fs-5 details">
                Image contents should be readable. Image size should be 325px *
                208px.
              </p>
              <input
                type="file"
                name="imageUploadBack"
                id="input1"
                className="account-cardbtn-1"
                accept="image/*"
                onChange={imageHandlerBack}
              />
              <label htmlFor="input1" className="imageUpload">
                Select Image
              </label>
            </div>
            <Title
              className="tilt"
              style={{ max: 10, scale: 1.1, glare: true }}
            >
              <div className="cardDetails cardImg ">
                <img
                  src={imageBack.preview}
                  className="account-img-style"
                  alt="loading"
                />
              </div>
            </Title>
          </div>
        </div>
        <Button
            className={imageFront.preview && imageBack.preview === CnicImg ?" mt-5 btnSubmitAcc disabled":" mt-5 btnSubmitAcc"}
            id="accBtn"
            onClick={CnicUpload}
          >
            Upload
          </Button>
        <div className="row ">
          <h1 className="acc-h2">
            <u className="underline">Bar Association Law Images</u>
          </h1>

          <div className="col-md-6 d-lg-flex mt-5 card-margin">
            <div className="cardDetails">
              <h3 className="fw-bold text-center text-white mt-3">
                Front Side Image
              </h3>
              <p className="text-white text-center ps-5 pe-5 fs-5 details">
                Image contents should be readable. Image size should be 325px *
                208px.
              </p>
              <input
                type="file"
                name="imageUploadlicenseFront"
                id="input4"
                className="account-cardbtn-1"
                accept="image/*"
                onChange={imageHandlerlicenseFront}
              />
              <label htmlFor="input4" className="imageUpload">
                Select Image
              </label>
            </div>
            <Title
              className="tilt"
              style={{ max: 10, scale: 1.1, glare: true }}
            >
              <div className="cardDetails cardImg">
                <img
                  src={licensefront.preview}
                  className="account-img-style"
                  alt="loading"
                />
              </div>
            </Title>
          </div>
        </div>

        <div className="row justify-content-end cardImageMargin">
          <div className="col-md-6 d-lg-flex flex-row-reverse card-margin mt-5">
            <div className="cardDetails">
              <h3 className="fw-bold text-center text-white mt-3">
                Back Side Image
              </h3>
              <p className="text-white text-center ps-5 pe-5 fs-5 details">
                Image contents should be readable. Image size should be 325px *
                208px.
              </p>
              <input
                type="file"
                name="imageUploadlicenseBack"
                id="input5"
                className="account-cardbtn-1"
                accept="image/*"
                onChange={imageHandlerlicenseback}
              />
              <label htmlFor="input5" className="imageUpload">
                Select Image
              </label>
            </div>
            <Title
              className="tilt"
              style={{ max: 10, scale: 1.1, glare: true }}
            >
              <div className="cardDetails cardImg">
                <img
                  src={licenseback.preview}
                  className="account-img-style"
                  alt="loading"
                />
              </div>
            </Title>
          </div>
        </div>

        
          <Button
            className={imageFront.preview && imageBack.preview && licensefront.preview && licenseback.preview === CnicImg ?" mt-5 btnSubmitAcc disabled":" mt-5 btnSubmitAcc"}
            id="accBtn"
            onClick={licenseUpload}
          >
            Submit
          </Button>
        

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Notification</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Your account will be verified soon after the confirmation of data
              and then you will be able to make stamp agreements.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={CloseClicked}>
              OK!
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
            Reset Password
          </Button> */}
          </Modal.Footer>
        </Modal>
    <ToastContainer/>

      </div>
    </>
  );
};

export default LawyerAccountVerification;
