import React ,{useState}from "react";
// import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import SecondData from "./SecondData";
import { valueSetter } from "../../ApiService/NotificationFunction";
const UndertakingSecond = () => {
  let navigate = useNavigate();
  const publicKey = localStorage.getItem('publicKey')
  const capitalizar = (element) => {
    return (element = element.charAt(0).toUpperCase() + element.slice(1));
  };
  const[clicked, setClicked] = useState(false)
  let data;
const validate = (values) => {
    const errors = {};
    if (!values.CnicNo) {
      errors.Cni = "Required";
    } else if (!/^[0-9]{5}-[0-9]{7}-[0-9]$/i.test(values.CnicNo)) {
      errors.CnicNo = "Invalid Cnic No.";
    }

    return errors;
  };
  const agreementName = ()=>{
    localStorage.setItem('UnderTaking','UnderTaking')
    }
  const formik = useFormik({
    initialValues: {
      Name: "",
      FatherName: "",
      CnicNo: "",
      desc: "",
      issueDate: "",
      address: "",
      institue: "",
    },
    validate: validate,
  });
  return (
    <>
    {
        !clicked?
    <div id="undertaking" className="templateBody">
      <div className="defaultStyling">
        <form>
          <h2 className="templateHeading">Undertaking / Affidavet</h2>

          <div className="row userDetails">
            <div className="col-md-3">
              <label
                className={
                  formik.errors.Name && formik.touched.Name
                    ? "tempErrors label-marign tempLabels"
                    : "tempLabels"
                }
              >
                Person's Name:
              </label>
              <br />
            </div>
            <div className="col-md-9">
              <input
                name="Name"
                className="tempInputs"
                type="text"
                placeholder="Full Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={capitalizar(formik.values.Name)}
              />
              <br />
              <p className="tempErrors p-margin">
                {" "}
                {formik.errors.Name && formik.touched.Name && formik.errors.Name}
              </p>
              <br />
            </div>

            <div className="col-md-3">
              <label
                className={
                  formik.errors.FatherName && formik.touched.FatherName
                    ? "tempErrors label-marign tempLabels"
                    : "tempLabels"
                }
              >
                Father Name:
              </label>
              <br />
            </div>
            <div className="col-md-9">
              <input
                name="FatherName"
                className="tempInputs"
                type="text"
                placeholder="Father Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={capitalizar(formik.values.FatherName)}
              />
              <br />
              <p className="tempErrors p-margin">
                {" "}
                {formik.errors.FatherName && formik.touched.FatherName && formik.errors.FatherName}
              </p>
              <br />
            </div>

            <div className="col-md-3">
              <label
                className={
                  formik.errors.CnicNo && formik.touched.CnicNo
                    ? "tempErrors label-marign tempLabels"
                    : "tempLabels"
                }
              >
                Cnic No:
              </label>
              <br />
            </div>
            <div className="col-md-9">
              <input
                name="CnicNo"
                className="tempInputs"
                type="text"
                placeholder="Cnic No"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.CnicNo}
              />
              <br />
              <p className="tempErrors p-margin">
                {" "}
                {formik.errors.CnicNo && formik.touched.CnicNo && formik.errors.CnicNo}
              </p>
              <br />
            </div>

            <div className="col-md-3">
              <label
                className={
                  formik.errors.desc && formik.touched.desc
                    ? "tempErrors label-marign tempLabels"
                    : "tempLabels"
                }
              >
                Description:
              </label>
              <br />
            </div>
            <div className="col-md-9">
              <input
                name="desc"
                className="tempInputs"
                type="text"
                placeholder="Type Of Agreement"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.desc}
              />
              <br />
              <p className="tempErrors p-margin">
                {" "}
                {formik.errors.desc && formik.touched.desc && formik.errors.desc}
              </p>
              <br />
            </div>

            <div className="col-md-3">
              <label
                className={
                  formik.errors.issueDate && formik.touched.issueDate
                    ? "tempErrors label-marign tempLabels"
                    : "tempLabels"
                }
              >
                Issue Date:
              </label>
              <br />
            </div>

            <div className="col-md-9">
              <input
                name="issueDate"
                className="tempInputs"
                type="date"
                placeholder="Date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.issueDate}
              />
              <br />
              <p className="tempErrors p-margin">
                {" "}
                {formik.errors.issueDate && formik.touched.issueDate && formik.errors.issueDate}
              </p>
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
              {formik.values.Name} {""}
              son of{" "}
              {formik.values.FatherName}
              , resident of{" "}
              <input
                className="contentInput"
                id="contentInputWidth"
                type="text"
                placeholder="address"
                name="address"                
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              .I admit that I will follow all the rules of{" "}
              <input
                className="contentInput"
                id="contentInputWidth"
                type="text"
                placeholder="Name of Institue"
                name="institue"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.institue}
              />{" "}
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
                    value={clicked?publicKey:''}
                  />
                  <br />
                </div>
                <div className="col-md-3">
                  <button className="signatureBtn" onClick={(e)=>{
                    e.preventDefault()
                    agreementName()
                    valueSetter(formik.values,setClicked)
                  }}>Sign</button>
                 
                  
                  
                </div>
              </div>
            </div>
           
          </div>
          
          {/* <QRCode className="qrcode" size={128} value="hey" /> */}
        </form>
      </div>
    </div>
    :
    <SecondData values={formik.values} publicKey={publicKey}/>
}
    </>
  );
};

export default UndertakingSecond;
