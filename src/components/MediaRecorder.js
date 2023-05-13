import React,{useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import { useReactMediaRecorder } from 'react-media-recorder';
// eslint-disable-next-line
import { ReactMediaRecorder } from "react-media-recorder";
// import Record1 from '../images/record.png'
import {FaRegDotCircle} from 'react-icons/fa'
import Title from "react-vanilla-tilt";
import CnicImg from "../images/insertImage1.jpg";
// import bill from "../../images/bill.jfif";
import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import axios from '../axios/Axios'
import AlertHandler from "../alert/Alerthandler";
// import { accountVerifyToast } from "../../ApiService/ToastDisplay";
const MediaRecorder = () => {
  const userId = localStorage.getItem('userId')

  const [alert, showAlert] = useState(false)

  const [imageFront, setimageFront] = useState({
    preview: CnicImg,
    raw: "",
  });
  const [imageBack, setimageBack] = useState({
    preview: CnicImg,
    raw: "",
  });
    // eslint-disable-next-line
    const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });
    const [stopped, setstopped] = useState(false)
    const [started, setStarted] = useState(false)
    const recordingStopped = ()=>{
        stopRecording();
        setstopped(true)
        setStarted(false)
        // console.log(status)
    }
    const recordingStarted = () =>{
      startRecording();
      setStarted(true)
      // console.log(status)
    }
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
    const CnicUpload = async ()=>{
      const formData = new FormData();
      formData.append('cnicPhoto',imageFront.raw);
      formData.append('cnicPhoto',imageBack.raw)
      try{
        let res = await axios.post(`/api/v1/users/uploadCnic/${userId}`,formData)
        if(res.data.status === "success"){
            showAlert(true)
            showCnicToast()
        }
          
      }
      catch(error){
        CnicErrorToast()
        console.log(error)
      }
    }
  return (
    
    <div className='media-recorder'>
      
      <div className="row ">
      
        <h1 className="acc-h2">
        {alert&&<AlertHandler sx={{marginTop:'20%'}} severity={'success'} title={'Success'} message={'Cnic Images Uploaded Successfully'}/>}
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
          <Title className="tilt" style={{ max: 10, scale: 1.1, glare: true }}>
            <div className="cardDetails cardImg">
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
        <div className="col-md-6 d-lg-flex flex-row-reverse card-margin">
          <div className="cardDetails">
            <h3 className="fw-bold text-center text-white " id="BackImage">
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
          <Title className="tilt" style={{ max: 10, scale: 1.1, glare: true }}>
            <div className="cardDetails cardImg">
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
          className={imageFront.preview && imageBack.preview === CnicImg ?"btnSubmitAcc disabled mt-5":"btnSubmitAcc mt-5"}
          id="accBtn"
          onClick={CnicUpload}
        >
          Upload
        </Button>
      {/* {console.log(startRecording())} */}
        <div className='witness-oath'>
        <h3 className='text-center fw-bold mt-4 text-success'>Start Recording and read the text below</h3>
         <p className='text-center witness-oath-text'> "I declare under the  oath that I have read this argument and I assure that I am participating as a witness with my full will without any pressure. I will be available in any time of need regarding this agreement."</p> 
        </div>
        
        <div className='recording-section'>
    
      
        <div className='d-flex'>
          {/* <p>{status}</p> */}
          <button className='btn rounded-pill bg-primary text-white recording-btn' onClick={recordingStarted}>Start Recording</button>
          <button className='btn rounded-pill bg-primary text-white ms-2' onClick={recordingStopped}>Stop Recording</button>
          
        </div>
        
        <div className='recording-screen'>
           <FaRegDotCircle />
        {stopped &&<video className='screen' src={mediaBlobUrl} controls autoPlay loop />}
        </div>
      <div >
       {stopped &&<button className='btn rounded-pill bg-primary text-white rSubmitBtn'>Submit</button>}
      </div>
    
    </div>
    <ToastContainer/>
  </div>
  )
}

export default MediaRecorder