import React,{useState} from 'react'
import { sendNotification,sendNoti1 } from '../../ApiService/NotificationFunction';
import { ToastContainer } from 'react-toastify'
import { showToastf } from '../../ApiService/ToastDisplay';
import { LawyerSign } from '../../ApiService/LawyerSignature';
import { useNavigate } from 'react-router-dom';

const SecondData = (props) => {
  const [readable,setReadable] = useState(false)
  let navigate = useNavigate();
  const values = localStorage.getItem('values')
  const publicKey = localStorage.getItem('public')
  let details;
    setTimeout(() => {
     details  = document.getElementById('undertaking2').innerHTML;
console.log('details',details)

    }, 2000);
  return (
    <>
    <div id='undertaking2' className="templateBody">
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
              className={
                "tempLabels"
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
              className={ "tempLabels"
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
              className={ "tempLabels"
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
            I{" "}
            {props.values.Name} {""}
            son of{" "}
            {props.values.FatherName}
            , resident of{" "}
            {props.values.address}
            
            .I admit that I will follow all the rules of{" "}
            {props.values.institute}
            {" "}
            and all of my acts will be according to the laws of this Institue.
            If any of my action is against the laws of this institue, I will
            be responsible and the institue has all the rights to take action
            against me. I have read the document and my digital signature
            ensures that this affidavet is the proof in the time of need.
            <br />
            {/* <span className='fw-bold mt-5 '>Signature:<br/></span> <input className='contentInput' type='text'/><br/>
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
                />
                <br />
              </div>
              <div className="col-md-3">
                <button className="signatureBtn"
                //  onClick={(e)=>{
                //   e.preventDefault();
                //   LawyerSign();
                // }}
                onClick={(e)=>{
                  e.preventDefault()
                  setTimeout(() => {
                  sendNoti1(details,setReadable)
                    
                  }, 3000);
                  }}
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

export default SecondData