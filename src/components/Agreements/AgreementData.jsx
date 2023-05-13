import React,{useState} from 'react'
// import axios from "../../axios/Axios";
import { sendNotification,sendNoti1 } from '../../ApiService/NotificationFunction'

// import Toast from '../../Toast/Toast'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { emailCheck,emailCheck2} from '../../ApiService/WitnessSignature';
import { LawyerSign } from '../../ApiService/LawyerSignature';
import { buyerChange,witnessChange1,witnessChange2,lawyerChange } from '../../ApiService/HandleChanges';
import { useFormik } from 'formik';
// import Toast from '../../Toast/Toast';
const AgreementData = (props) => {
  let navigate = useNavigate();
  // const [showToast, setshowToast] = useState(false)
  const [sign,setsign] = useState()
  const [wsign,setwsign] = useState()
  const [wsign2,setwsign2] = useState()
  const [lsign,setlsign] = useState()
  const[readable,setReadable] = useState(false)
  const[readableWit1,setReadableWit1] = useState(false)
  const[readableWit2,setReadableWit2] = useState(false)
  const[readableLawyer,setReadableLawyer] = useState(false)
    const values = JSON.parse(localStorage.getItem('values'))
    let details;
    setTimeout(() => {
     details  = document.getElementById('vehicle').innerHTML;
console.log('details',details)

    }, 2000);
       
    const formik = useFormik({
      initialValues: {
      sender:'',
      buyer:"",
      witness1:'',
      witness2:"",
      lawyer:''
      }
    });

  return (
    <>
    
    <div className="AgreementBody">

    <div className="defaultStylingAgreement">
      <form name='myform'>
        <div id="vehicle">
        <h2 className="templateHeading">
           {values.vehicleType} Stamp Agreement
           
        </h2>
        <div className="row userDetails">
          <div className="col-md-3">
            <label
              className={
                   "tempLabels"
              }
            >
              Person's Name:
            </label>
            <br />
          </div>
          <div className="abc col-md-9">
           {values.Name}
            <br />
          
          </div>

          <div className="col-md-3">
            <label
              className={
               
                  "tempLabels"
              }
            >
              Father Name:
            </label>
            <br />
          </div>
          <div className="col-md-9">
            {values.FatherName}
            <br />
          </div>

          <div className="col-md-3">
            <label
              className={
               
                   "tempLabels"
              }
            >
              Cnic No:
            </label>
            <br />
          </div>
          <div className="col-md-9">
            {values.CnicNo}
            <br />
          </div>

          <div className="col-md-3">
            <label
              className={
                
                  "tempLabels"
              }
            >
              Description:
            </label>
            <br />
          </div>
          <div className="col-md-9">
            {values.desc}
            <br />
          
          </div>

          <div className="col-md-3">
            <label
              className={
               
                  "tempLabels"
              }
            >
              Issue Date:
            </label>
            <br />
          </div>

          <div className="col-md-9">
            {values.issueDate}
            <br />
            
          </div>
        </div>
        <div className="undertakingContent">
          <div className="mb-5">
            <span className="oath">
              "I declare the oath that whatever I am going to write shall be
              the whole truth."
            </span>
            <br />
           
            (Second Party:Buyer)Name
            {values.bName}
            ,{" "}
            <label>Father Name:</label>{" "}
            {values.bFather}
            ,<label>Cnic No:</label>{" "}
            {values.bCnic}, {" "}
             Vehicle Type:{" "}
            {values.vehicleType},{" "}
            Vehicle Name:{" "}
            {values.vehicleName},{" "}
            Model:
            {values.model}, {" "}
            Registration Number:
            {values.regno}{" "} Chesis Number:{" "}
            {values.chesis} Engine Number:{" "}
            {values.engineNo} is in the ownership of {values.Name}
             
             The above mentioned{" "} {values.vehicleType}
            
            is been sold by{" "} {values.Name}
            
             for{" "}
            {values.selling}{" "}
            rupees, out of which{" "}
            {values.amount}{" "}
            has been paid and{" "}
            {values.remaining}{" "}
            will pe paid in the time of{" "}
            {values.remainMonths}{" "}
            months. The above mentioned 
            
             has been
            handed over to the
        
             {values.Name} 
             with the regional smart
            card /copy and regional number plate. It is mandatory for{" "}
            {values.Name} 
            to get an NOC and transfer letter
            from the company and give it to 
            {values.bName}
            . From Now on
            , {values.bName} 
            will be responsible for all the dues like
            challan, tax, accident, theft etc. After the above mentioned
            date and time and pying all the dues (if any), if{" "}
            {values.bName} 
            sells or transfers this{" "}
            {values.vehicleType} 
            to anybody,{" "}
            {values.Name}
             will have no concerns or issues
            regarding that 
            {values.vehicleType}. {values.bName}{" "}
            has checked the above mentioned 
            {values.vehicleType} 
            and
            buying it with full will and own choice in the presence of all
            witnesses. The hires of both parties will have to accept the
            agreement. The agreement is written with the will of both
            parties and witnesses of both parties have accepted it too. So
            that, it will be handy in the hour of need.
            <br />
          </div>
        </div>
        </div>
    
        <div className="row userDetails">
          <div className="col-md-4">
            <label className="tempLabels">Seller's Signature:</label>
            <br />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-9">
                <input
                  className="tempInputs"
                  id="SignatureInputs"
                  type="text"
                  value={props.publicKey}
            readOnly={true}
                />
                
                <br />
              </div>
            
            </div>
          </div>
          <div className="col-md-4">
            <label className="tempLabels">Buyer's Public Address</label>
            <br />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-9">
                <input
                  className="tempInputs"
                  id="SignatureInputs"
                  type="text"
                  name='buyer'
                  onChange={formik.handleChange}
                  readOnly={readable}
                />
                <br />
              </div>
              <div className="col-md-3"> 
                <button 
                className="signatureBtn"
                disabled={!formik.values.buyer}
                onClick={(e)=>{
                  e.preventDefault()
                  setTimeout(() => {
                  sendNoti1(details,setReadable)
                    
                  }, 3000);
                  }}
                // disabled={!clicked}
                // onClick={(e)=>{
                //   e.preventDefault();
                //   setTimeout(() => {
                //     console.log(sign,'sfaf')
                //   sendNotification("Vehicle Stamp Agreement",formik.values.buyer,details,setReadable)
                //     console.log('buyer',formik.values.buyer)
                //   }, 3000);

                // }}
                >Send</button>
                            

              </div>
            </div>
          </div>

          <div className="col-md-4">
            <label className="tempLabels">
              First Witness Public Address:
            </label>
            <br />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-9">
                <input
                  className="tempInputs"
                  id="SignatureInputs"
                  type="text"
                  placeholder="You can also write email address of witness"
                  name='witness1'
                  readOnly={readableWit1}
                  onChange={
                    // witnessChange1(e,setwsign)
                    formik.handleChange
                  }
                />
                <br />
              </div>
              <div className="col-md-3">
                <button 
                className="signatureBtn"
                disabled={!formik.values.witness1}
                // onClick={(e)=>{
                //   e.preventDefault()
                //   setTimeout(() => {
                //   emailCheck(formik.values.witness1)
                    
                //   }, 3000);
                // }}
                onClick={(e)=>{
                  e.preventDefault()
                  setTimeout(() => {
                  sendNoti1(details,setReadable)
                    
                  }, 3000);
                  }}
                // onClick={(e)=>{
                //   e.preventDefault();
                //   sendNotification("Vehicle Stamp Agreement",formik.values.witness1,details,setReadableWit1)
                //   // sendNoti1(details,setReadable)

                // }}
                // disabled={!clicked}
                >Send</button>
              </div>
            </div>
          </div>
{/* {console.log(JSON.parse(localStorage.getItem('values')))} */}
          <div className="col-md-4">
            <label className="tempLabels">
              Second Witness Public Address:
            </label>
            <br />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-9">
                <input
                  className="tempInputs"
                  id="SignatureInputs"
                  type="text"
                  name='witness2'
                  placeholder="You can also write email address of witness"
                  readOnly={readableWit2}
                  onChange={formik.handleChange}
                />
                <br />
              </div>
              <div className="col-md-3">
                <button 
                className="signatureBtn"
                disabled={!formik.values.witness2}
                // onClick={(e)=>{
                //   e.preventDefault();
                //   emailCheck2(formik.values.witness2)
                // }}
                onClick={(e)=>{
                  e.preventDefault()
                  setTimeout(() => {
                  sendNoti1(details,setReadable)
                    
                  }, 3000);
                  }}
                // onClick={(e)=>{
                //   e.preventDefault();
                //   sendNotification("Vehicle Stamp Agreement",formik.values.witness2,details,setReadableWit2)

                //   // sendNotification(publicKey)
                // }}
                >Send</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <label className="tempLabels">Lawyer's Signature:</label>
            <br />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-9">
                <input
                  className="tempInputs"
                  id="SignatureInputs"
                  type="text"
                  name='lawyer'
                  readOnly={readableLawyer}
                  onChange={formik.handleChange}
                />
                <br />
              </div>
              <div className="col-md-3">
                <button 
                className="signatureBtn"
                disabled={!formik.values.lawyer}
                // onClick={(e)=>{
                //   e.preventDefault();
                //   LawyerSign(setReadableLawyer);
                // }}

                // onClick={(e)=>{
                //   e.preventDefault();
                //   sendNotification("Vehicle Stamp Agreement",formik.values.lawyer,details,setReadableLawyer)
                // }}
                onClick={(e)=>{
                  e.preventDefault()
                  setTimeout(() => {
                  sendNoti1(details,setReadable)
                    
                  }, 3000);
                  }}
                >Send</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" row d-flex">
          <div>
          </div>
          <div>
            <button
              className="btn temp-btn-download mt-5 mb-5"
              onClick={()=>{
              navigate('/payment')
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
   
  </div>
  <ToastContainer/>
  {/* {showToast&&<Toast/>} */}
  </>
  )
}

export default AgreementData