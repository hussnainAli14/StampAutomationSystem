import React from 'react'
import { useNavigate } from 'react-router-dom';
import { sendNotification } from '../../ApiService/NotificationFunction';
import { ToastContainer } from 'react-toastify'
// import { showToastf } from '../../ApiService/ToastDisplay';
// import { sendNoti1 } from '../../ApiService/NotificationFunction';
import { LawyerSign } from '../../ApiService/LawyerSignature';
const UnderTakingData = (props) => {
  let navigate=useNavigate();
  const values = localStorage.getItem('values')
  const publicKey = localStorage.getItem('public')
  let details;
    setTimeout(() => {
     details  = document.getElementById('undertaking1').innerHTML;
console.log('details',details)

    }, 2000);
  return (
    <>
    <div id='undertaking1' className="templateBody">
    <div className="defaultStyling">
      <form>
        <h2 className="templateHeading">Undertaking / Affidavet</h2>

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
           {props.values.Name}
           
            <br />
           
            <br />
          </div>

          <div className="col-md-3">
            <label
              className={"tempLabels"
              }
            >
              Father Name:
            </label>
            <br />
          </div>
          <div className="col-md-9">
            {props.values.FatherName}
            
            
           
            <br />
          </div>

          <div className="col-md-3">
            <label
              className={ "tempLabels"
              }
            >
              Cnic No:
            </label>
            <br />
          </div>
          <div className="col-md-9">
           {props.values.CnicNo}
          
            <br />
            
          </div>

          <div className="col-md-3">
            <label
              className={"tempLabels"
              }
            >
              Description:
            </label>
            <br />
          </div>
          <div className="col-md-9">
           {props.values.desc}
           
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
            {props.values.issueDate}
          
            <br />
          </div>
        </div>
        <div className="undertakingContent">
          <p>
            <span className="oath">
              "I declare the oath that whatever I am going to write shall be
              the whole truth."
            </span>
            <br />
            I resident of{" "}
            {props.values.country}
            
            , state that House No{" "}
            {props.values.houseNo}
            {" "}
            located{" "}
            {props.values.address}
            {" "}
            is under my solitary ownership. My{" "}
           {props.values.address}
           
            ,{" "}
           {props.values.relationName}
            {" "}
            wants to get a new{" "}
         {props.values.connection}
            {" "}
            connection on the above mentioned house, on which I have no
            objection (now or in future). He will follow the rules of
            respective organization. He will pay the bills in due time given
            by the organization. There are no dues of the organization and if
            there are any, he is responsible to pay them. I have read the
            above written doccument and my digital signature ensures that this
            Affidavet is the proof and will be useful in the time of need.
            <br />
            {/* <span className='fw-bold'>Signature:</span> <input className='contentInput' type='text'/><br/>
         <span className='fw-bold'>Lawyer's Signature:</span> <input className='contentInput' type='text'/></p> */}
          </p>
        </div>
        <div className="row userDetails">
          <div className="col-md-4">
            <label className="tempLabels">Person's Signature:</label>
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
              {/* <div className="col-md-3">
                <button className="signatureBtn">Sign</button>
              </div> */}
            </div>
          </div>
          <div className="col-md-4">
            <label className="tempLabels">Lawyer's Signature</label>
            <br />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-9">
                <input
                  className="tempInputs"
                  id="SignatureInputs"
                  type="text"
                />
                <br />
              </div>
              <div className="col-md-3">
                <button className="signatureBtn"
                onClick={(e)=>{
                  e.preventDefault();
                  LawyerSign();
                }}
                // onClick={(e)=>{
                //   e.preventDefault();
                //   sendNotification("Vehicle Stamp Agreement","049895b54f3159ae7b8e44f8f5351491d414aa0be5f48864d8d62a1afa698d1ad1b5053e150790eede49e21c55537a529dfebae4c4ca47a2e1da69a873cbffd07e",details)

                // }}
                >Sign</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex">
          <div style={{marginLeft:'10%'}}>
            <button className="btn agreement-btn" 
            onClick={()=>{
              navigate('/payment')
              }}
            >
              Submit
            </button>
          </div>

          {/* <div>
            <button className="btn temp-btn-download" onClick={pdfGenerator}>
              Download
            </button>
          </div> */}
        </div>
        {/* <QRCode className="qrcode" size={128} value="hey" /> */}
      </form>
    </div>
  </div>
  <ToastContainer/>
  </>
  )
}

export default UnderTakingData