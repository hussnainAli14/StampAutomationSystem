import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { sendNotification } from '../../ApiService/NotificationFunction';
import { ToastContainer } from 'react-toastify'
import { sendNoti1 } from '../../ApiService/NotificationFunction';
import { emailCheck,emailCheck2} from '../../ApiService/WitnessSignature';
import { LawyerSign } from '../../ApiService/LawyerSignature';
import { buyerChange,witnessChange1,witnessChange2,lawyerChange } from '../../ApiService/HandleChanges';
const PropertyAgreement = (props) => {
  let navigate = useNavigate();
  const [sign,setsign] = useState()
  const [wsign,setwsign] = useState()
  const [wsign2,setwsign2] = useState()
  const [lsign,setlsign] = useState()
  const[readable,setReadable] = useState(false)
  const[readableWit1,setReadableWit1] = useState(false)
  const[readableWit2,setReadableWit2] = useState(false)
  const[readableLawyer,setReadableLawyer] = useState(false)
  let details;
  const values = JSON.parse(localStorage.getItem('values'))
  const publicKey = localStorage.getItem('public')

    setTimeout(() => {
     details  = document.getElementById('sale').innerHTML;
console.log('details',details)

    }, 2000);
  return (
    <>
    <div id='sale' className="AgreementBody">
        <div className="defaultStylingAgreement">
          <form>
            <h2 className="templateHeading">
              {`${values.propertyType} Sale Agreement`}
                
            </h2>
            <div className="row userDetails">
              <div className="col-md-3">
                <label
                  className=
                    "tempLabels"
                  
                >
                  Person's Name:
                </label>
                <br />
              </div>
              <div className="col-md-9">
                {values.Name}
                <br />
                
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
              <div>
                <span className="oath">
                  "I declare the oath that whatever I am going to write shall be
                  the whole truth."
                </span>
                <br />
               
                (Second Party:Buyer) <label>Name:</label>
               {values.bName}
                
                ,{" "}
                <label>Father Name:</label>{" "}
                {values.bFather},{" "}
                
                ,<label>Cnic No</label>{" "}
               {values.bCnic},{" "}
                Property Type:{" "}
                  {values.propertyType}, {" "}
                  
                {values.propertyType} location:{" "}
               {values.propertyAddress}, {" "}
                This {values.propertyType} No:{" "}
                 {values.propertyNo}  is
                under the sole ownership of {values.FirstPartyName}. This{" "}
                {values.propertyType} doesnot have any due bank loans or
                any other dues and {values.FirstPartyName} has all the
                rights to sell this {values.propertyType}. Hence{" "}
                {values.FirstPartyName} has sell this{" "}
                {values.propertyType} for{" "}
             {values.saleP}
                 {" "}
                on date{" "}
                {values.issueDate}, out
                of which{" "}
                  {values.paid}
                  {" "}
                has been paid and {values.FirstPartyName}
                has recieved the amount in presence of all the witnesses.
                Remaining amount{" "}
                  {values.remaining}
                  will be transfered when the ownership will be transfered to{" "}
                {values.Name}. The ownership will be transfered in the
                time of{" "}
                  {values.timeLimit}
                 {" "}
                
                . If {values.Name} delays the process of
                transfer of ownership after recieving full payment, then he will
                be responsible to pay double of that amount to{" "}
                {values.bName} as fine.If {values.bName} refuses to
                pay the remaining amount and refuses the transfer of this{" "}
                {values.propertyType}, then his paid amount will not be
                returned and this agreement will be cancelled. Transfer will
                occur according to the DC rate, which will be paid by{" "}
                {values.Name}, while remaing all the dues of{" "}
                {values.propertyType} will be paid by{" "}
                {values.bName}. I have read this agreement and
                signing it with my will, so that it will be useful in the time
                of need.
              </div>
            </div>
            <div className="row userDetails mt-5">
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
                        value={publicKey}
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
                        readOnly={readable}
                  onChange={(e)=>{buyerChange(e,setsign)}}
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
                      //   sendNotification("Vehicle Stamp Agreement",sign.value,details,setReadable)
                          
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
                        readOnly={readableWit1}
                        placeholder="You can also write email address of witness"
                        name='w1'
                  onChange={(e)=>{
                    witnessChange1(e,setwsign)
                  }}
                      />
                      <br />
                    </div>
                    <div className="col-md-3">
                      <button className="signatureBtn"
                disabled={!wsign}
                      onClick={(e)=>{
                        e.preventDefault()
                        emailCheck(wsign)}}
                      // onClick={(e)=>{
                      //   e.preventDefault();
                      //   sendNotification("Vehicle Stamp Agreement",wsign.value,details,readableWit1)
      
                      // }}
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
                        type="text"
                        readOnly={readableWit2}
                        placeholder="You can also write email address of witness"
                        onChange={(e)=>{
                          witnessChange2(e,setwsign2)
                        }}
                      />
                      <br />
                    </div>
                    <div className="col-md-3">
                      <button className="signatureBtn"
                      disabled={!wsign2}
                       onClick={(e)=>{
                        e.preventDefault();
                        emailCheck2(wsign2)}}
                      // onClick={(e)=>{
                      //   e.preventDefault();
                      //   sendNotification("Vehicle Stamp Agreement",wsign2.value,details,setReadableWit2)
      
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
                        readOnly={readableLawyer}
                        onChange={(e)=>{
                          lawyerChange(e,setlsign)
                        }}
                      />
                      <br />
                    </div>
                    <div className="col-md-3">

                      <button className="signatureBtn" 
                      disabled={!lsign}
                      onClick={(e)=>{
                        e.preventDefault();
                        LawyerSign();
                      }}
                //       onClick={(e)=>{
                //   e.preventDefault();
                //   // sendNotification("Vehicle Stamp Agreement",lsign.value,details,readableLawyer)

                // }}
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
      </>
  )
}

export default PropertyAgreement