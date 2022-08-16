import {React,useState} from 'react'
// import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router';
import Title from 'react-vanilla-tilt'
import CnicImg from '../images/insertImage1.jpg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LawyerAccountVerification = () => {
    const [imageFront, setimageFront] = useState(CnicImg)
  const [imageBack, setimageBack] = useState(CnicImg)
   const [licensefront, setlicensefront] = useState(CnicImg)
   const [licenseback, setlicenseback] = useState(CnicImg)
   const imageHandler = (e)=>{
    const reader = new FileReader();
    reader.onload = ()=>{
      if(reader.readyState === 2){
        
      setimageFront(
        reader.result
      )
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  const imageHandlerBack = (e)=>{
    const reader = new FileReader();
    reader.onload = ()=>{
      if(reader.readyState === 2){
        
      setimageBack(
        reader.result
      )
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  
  const imageHandlerlicenseFront = (e)=>{
    const reader = new FileReader();
    reader.onload = ()=>{
      if(reader.readyState === 2){
        
      setlicensefront(
        reader.result
      )
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  const imageHandlerlicenseback = (e)=>{
    const reader = new FileReader();
    reader.onload = ()=>{
      if(reader.readyState === 2){
        
      setlicenseback(
        reader.result
      )
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  //  const [imgSelected, setimgSelected] = useState(false)
   //For modal 
   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  //eslint-disable-next-line no-unused-vars
    
  let navigate = useNavigate();
  const Clicked = ()=>{
    handleShow() 
    
  }
  const CloseClicked = ()=>{
    handleClose()
    navigate('/main')
  }
  return (
    <>
<div className='accver '>
    <div className='row '>
      <h1 className='acc-h2'><u className='underline'>Cnic Images</u></h1>
    
<div className='col-md-6 d-lg-flex mt-5 card-margin'>
<div className='cardDetails'>
<h3 className='fw-bold text-center text-white mt-3'>Front Side Image</h3>
<p className='text-white text-center ps-5 pe-5 fs-5'>Image contents should be readable. Image size should be 325px * 208px.</p>
<input type='file' name='imageUpload' id='input' className='account-cardbtn-1' accept='image/*' onChange={imageHandler}/>
  <label htmlFor='input' className='imageUpload'>
    Select Image
  </label>
</div>
<Title className="tilt" style={{max:10, scale:1.1, glare:true }}> 
<div className='cardDetails cardImg '>

<img src={imageFront} className="account-img-style" alt="loading"/>

</div>
</Title>
</div>
</div>

<div className='row justify-content-end cardImageMargin'>
<div className='col-md-6 d-lg-flex flex-row-reverse card-margin mt-5'>
<div className='cardDetails'>
<h3 className='fw-bold text-center text-white mt-3'>Back Side Image</h3>
<p className='text-white text-center ps-5 pe-5 fs-5'>Image contents should be readable. Image size should be 325px * 208px.</p>
<input type='file' name='imageUploadBack' id='input1' className='account-cardbtn-1' accept='image/*' onChange={imageHandlerBack}/>
  <label htmlFor='input1' className='imageUpload'>
    Select Image
  </label>
</div>
<Title className="tilt" style={{max:10, scale:1.1, glare:true }}> 
<div className='cardDetails cardImg '>

<img src={imageBack} className="account-img-style" alt="loading"/>

</div>
</Title>
</div>
</div>

    <div className='row '>
      <h1 className='acc-h2'><u className='underline'>Bar Association Law Images</u></h1>
    
<div className='col-md-6 d-lg-flex mt-5 card-margin'>
<div className='cardDetails'>
<h3 className='fw-bold text-center text-white mt-3'>Front Side Image</h3>
<p className='text-white text-center ps-5 pe-5 fs-5'>Image contents should be readable. Image size should be 325px * 208px.</p>
<input type='file' name='imageUploadlicenseFront' id='input4' className='account-cardbtn-1' accept='image/*' onChange={imageHandlerlicenseFront}/>
  <label htmlFor='input4' className='imageUpload'>
    Select Image
  </label>
</div>
<Title className="tilt" style={{max:10, scale:1.1, glare:true }}> 
<div className='cardDetails cardImg'>

<img src={licensefront} className="account-img-style" alt="loading"/>

</div>
</Title>
</div>
</div>

<div className='row justify-content-end cardImageMargin'>
<div className='col-md-6 d-lg-flex flex-row-reverse card-margin mt-5'>
<div className='cardDetails'>
<h3 className='fw-bold text-center text-white mt-3'>Back Side Image</h3>
<p className='text-white text-center ps-5 pe-5 fs-5'>Image contents should be readable. Image size should be 325px * 208px.</p>
<input type='file' name='imageUploadlicenseBack' id='input5' className='account-cardbtn-1' accept='image/*' onChange={imageHandlerlicenseback}/>
  <label htmlFor='input5' className='imageUpload'>
    Select Image
  </label>
</div>
<Title className="tilt" style={{max:10, scale:1.1, glare:true }}> 
<div className='cardDetails cardImg'>

<img src={licenseback} className="account-img-style" alt="loading"/>

</div>
</Title>
</div>
</div>

{(imageFront || imageBack || licensefront || licenseback === CnicImg)?<Button className=' mt-5 btnSubmitAcc disabled' id='accBtn' onClick={handleShow}>
         Submit      
         </Button>:<Button className='mt-5 btnSubmitAcc' id='accBtn' onClick={Clicked}>
         Submit      
         </Button>}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <p>Your account will be verified soon after the confirmation of data and then you will be able to make stamp agreements.</p>
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
      </div>
</>
  )
}

export default LawyerAccountVerification