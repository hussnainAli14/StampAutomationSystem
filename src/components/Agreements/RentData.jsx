import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { sendNotification } from '../../ApiService/NotificationFunction';
import { ToastContainer } from 'react-toastify'
import { sendNoti1 } from '../../ApiService/NotificationFunction';
import { emailCheck,emailCheck2} from '../../ApiService/WitnessSignature';
import { LawyerSign } from '../../ApiService/LawyerSignature';
import { buyerChange,witnessChange1,witnessChange2,lawyerChange } from '../../ApiService/HandleChanges';
import { useFormik } from 'formik';
// import {useFormik} from 'formik'
const RentData = (props) => {
  const [sign,setsign] = useState()
  const [wsign,setwsign] = useState()
  const [wsign2,setwsign2] = useState()
  const [lsign,setlsign] = useState()
  const[readable,setReadable] = useState(false)
  const[readableWit1,setReadableWit1] = useState(false)
  const[readableWit2,setReadableWit2] = useState(false)
  const[readableLawyer,setReadableLawyer] = useState(false)
  let publickey = localStorage.getItem('public')
  let navigate = useNavigate();
  const values = localStorage.getItem('values')
  let details;
  setTimeout(() => {
   details  = document.getElementById('rent').innerHTML;
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
    <div id="rent" className="AgreementBody">
    <div className="defaultStylingAgreement" id="RentAgreement">
      <form>
        <h2 className="templateHeading">
          { `${values.propertyType} Stamp Agreement`}
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
          <div className="col-md-9">
           
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
              "I declare the oath that whatever I am going to write shall
              be the whole truth."
            </span>
            <br />
            
            (Second Party:Buyer) <label>Name:</label> {" "}
            {values.bName}
            ,{" "}
            <label>Father Name:</label>{" "}
         
              {values.bFather}
            
            ,{" "}<label>Cnic No</label>{" "}
           {values.bCnic}
            
            Property Type:{" "}
          
              {values.propertyType}, {" "}
              location:{" "}
            {values.propertyAddress}
              ,{" "}
            <b>Valid For 1 Year </b>From:{" "}
            {props.startDate}
            To:{" "}
            {values.endDate}
            This {values.propertyType} No:{" "}
            {values.houseNo}{" "}
            is under the sole ownership of {values.Name}. This{" "}
            {values.propertyType} floor{" "}
            {values.floor}{" "}
            is given on fare to {values.bName} under one year agreement.{" "}
            {values.bName}
            cannot leave this {values.propertyType} before one year.{" "}
            {values.bName} should pay the rent of Rs.{" "}
            {values.rent} every month. If {values.bName} delays the fare without any
            reason, he will be fined for Rs.{" "} {values.fine}
            {values.securityFee}
            has been recived by {values.Name} in the presence of
            all the witnesses. The {values.propertyType}
            has{" "}
            {values.fans} {" "}
            fans,{" "}
            {values.bulb}{" "}
            bulbs,{" "}
            {values.lights}{" "}
            tubelights,{" "}
            {values.connections}{" "}
            connections,{" "}
            {values.ownership}
            . If {values.Name} behaves immanerly or disturbs the
                  family of {values.bName}, then they can leave the place before
                  one year and security fee will be returned to them.{" "}
                  {values.bName} cannot empty the {values.propertyType}{" "}
                  before one year. If {values.bName} wants to empty the place
                  after on year they will inform {values.Name} one
                  month early. In case of damaging any thing, amount will be cut
                  from security fee paid by {values.bName}. All the dues before
                  this day should be paid by {values.Name} and after
                  that {values.bName} will be responsible for all the expenses
                  and {values.bName} should clear all the dues before leaving the
                  place and security fee will not be returned until{" "}
                  {values.bName} doesnot clear all the dues. I have read this
                  agreement and signing it with my will, so that it will be
                  useful in the time of need.
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
                  value={publickey}
                  readOnly={true}
                />
                <br />
              </div>
              {/* <div className="col-md-3">
                <button className="signatureBtn">Sign</button>
              </div> */}
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
                  readOnly={readable}
                  onChange={formik.handleChange}
                />
                <br />
              </div>
              <div className="col-md-3">
                <button className="signatureBtn"
                disabled={!sign}
                     onClick={(e)=>{
                      e.preventDefault()
                      setTimeout(() => {
                      sendNoti1(details)
                        
                      }, 3000);
                      }}

                // onClick={(e)=>{
                //   e.preventDefault();
                //   setTimeout(() => {
                //   sendNotification("Vehicle Stamp Agreement",formik.values.buyer,details,setReadable)
                    
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
                  onChange={formik.handleChange}
                />
                <br />
              </div>
              <div className="col-md-3">
                <button className="signatureBtn"
                disabled={!wsign}
                      // onClick={(e)=>{
                      //   e.preventDefault()
                      //   emailCheck(formik.values.witness1)}}
                      
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
                  name='witness2'
                  type="text"
                  readOnly={readableWit2}
                  placeholder="You can also write email address of witness"
                  onChange={formik.handleChange}
                />
                <br />
              </div>
              <div className="col-md-3">
                <button className="signatureBtn"
                disabled={!wsign2}
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
                  name='lawyer'
                  type="text"
                  onChange={(e)=>{
                    lawyerChange(e,setlsign)
                  }}
                />
                <br />
              </div>
              <div className="col-md-3">
                <button className="signatureBtn"
                disabled={!lsign}
                      // onClick={(e)=>{
                      //   e.preventDefault();
                      //   LawyerSign();
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
        <div></div>
        <div className=" row d-flex">
          <div style={{marginLeft:'10%'}}>
            {/* <Link className="btn agreement-btn" to="/personaddress"> */}
            <button className="btn agreement-btn"
             onClick={()=>{
              navigate('/payment')
              }}
            >
              Submit
              </button>
            {/* </Link>{" "} */}
          </div>
          
        </div>
        {/* <QRCode className="qrcode" size={128} value="hey" /> */}
      </form>
    </div>
    {/* {console.log( document.getElementById('bcb').innerText)} */}
  </div>
  <ToastContainer/>
</>
  )
}

export default RentData