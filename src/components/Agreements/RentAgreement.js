import React,{useState} from "react";
// import * as yup from "yup";
import {useFormik} from "formik";
import RentData from "./RentData";
import { valueSetter } from "../../ApiService/NotificationFunction";
// import { Link } from "react-router-dom";
// import { jsPDF } from "jspdf";
// import QRCode from "react-qr-code";
const RentAgreement = () => {
  const publicKey = localStorage.getItem('publicKey')
  const [clicked, setClicked] = useState(false)
  // const pdfGenerator = () => {
  //   const doc = new jsPDF("landscape", "px", "a4", "false");
  //   doc.html(document.querySelector(".AgreementBody"),{
  //       callback:function(pdf){
  //           pdf.save("dow nload.pdf");
  //       }
  //   })
    
  // };
  const capitalizar = (element) => {
    return (element = element.charAt(0).toUpperCase() + element.slice(1));
  };
  // let data ;
  const validate = (values) => {
    const errors = {};
    if (!formik.values.CnicNo) {
      formik.errors.Cni = "Required";
    } else if (!/^[0-9]{5}-[0-9]{7}-[0-9]$/i.test(formik.values.CnicNo)) {
      formik.errors.CnicNo = "Invalid Cnic No.";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      Name: "",
      FatherName: "",
      CnicNo: "",
      desc: "",
      issueDate: "",
     bName:'',
     bFather:'',
     bCnic:'',
     propertyType:"",
      startDate:"",
      endDate:'',
      houseNo:'',
      floor:'',
      rent:'',
      fine:'',
      securityFee:'',
      fans:'',
      bulb:'',
      lights:'',
      connections:'',
      ownership:'',
    },
    validate: validate,
  });
  const agreementName = ()=>{
    localStorage.setItem('AgreementName',formik.values.propertyType+'Stamp Agreement')
    }
  return (
<>
       {
        !clicked?
        <div id="bcb" className="AgreementBody">
          <div className="defaultStylingAgreement" id="RentAgreement">
            <form>
              <h2 className="templateHeading">
                {formik.values.propertyType === ""
                  ? "Property Rent Agreement"
                  : `${capitalizar(formik.values.propertyType)} Stamp Agreement`}
              </h2>
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
                    {formik.errors.FatherName &&
                      formik.touched.FatherName &&
                      formik.errors.FatherName}
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
                    type="number"
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
                <div>
                  <span className="oath">
                    "I declare the oath that whatever I am going to write shall
                    be the whole truth."
                  </span>
                  <br />
                  
                  (Second Party:Buyer) <label>Name:</label>
                  <input
                    name="bName"
                    className="contentInput"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bName}
                  />
                  ,{" "}
                  <label>Father Name:</label>{" "}
                  <input
                    name="bFather"
                    className="contentInput"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bFather}
                  />
                  ,{" "}<label>Cnic No</label>{" "}
                  <input
                    name="bCnic"
                    className="contentInput"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bCnic}
                  />
                  <br />
                  Property Type:{" "}
                  <input
                    className="contentInput"
                    type="text"
                    name="propertyType"
                    placeholder="house/flat"
                    value={formik.values.propertyType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                   location:{" "}
                  <input
                    className="contentInput"
                    type="text"
                    name="propertyAddress"
                    placeholder="Address"
                    value={formik.values.propertyAddress}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <br />
                  <b>Valid For 1 Year </b>From:{" "}
                  <input
                    className="contentInput"
                    name="startDate"
                    type="text"
                    placeholder="start date"
                    value={formik.values.startDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />{" "}
                  To:{" "}
                  <input
                    className="contentInput"
                    type="text"
                    placeholder="end date"
                    name="endDate"
                    value={formik.values.endDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <br />
                  This {formik.values.propertyType} No:{" "}
                  <input className="contentInput" type="text" name="houseNo"
                  value={formik.values.houseNo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  />{" "}
                  is under the sole ownership of {formik.values.Name}. This{" "}
                  {formik.values.propertyType} floor{" "}
                  <input
                    className="contentInput"
                    name="floor"
                    type="text"
                    placeholder="basement/ground"
                    value={formik.values.floor}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />{" "}
                  is given on fare to {formik.values.bName} under one year agreement.{" "}
                  {formik.values.bName}
                  cannot leave this {formik.values.propertyType} before one year.{" "}
                  {formik.values.bName} should pay the rent of Rs.{" "}
                  <input className="contentInput" type="text" name="rent" value={formik.values.rent}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />{" "}
                 every month. If {formik.values.bName} delays the fare without any
                  reason, he will be fined for Rs.{" "}
                  <input className="contentInput" type="text" name="fine"value={formik.values.fine}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />.
                  The security fee of Rs.{" "}
                  <input
                    className="contentInput"
                    type="text"
                    name="securityFee"
                    value={formik.values.securityFee}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />{" "}
                  has been recived by {formik.values.Name} in the presence of
                  all the witnesses. The {formik.values.propertyType}
                  has{" "}
                  <input
                    className="contentInput"
                    type="text"
                    name="fans"
                    placeholder="no of fans"
                    value={formik.values.fans}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />{" "}
                  fans,{" "}
                  <input className="contentInput" type="text" name="bulb"
                  value={formik.values.bulb}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  />{" "}
                  bulbs,{" "}
                  <input
                    className="contentInput"
                    type="text"
                    name="lights"
                    value={formik.values.lights}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />{" "}
                  tubelights,{" "}
                  <input
                    className="contentInput"
                    name="connections"
                    type="text"
                    placeholder="gas/water/electricity"
                    value={formik.values.connections}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />{" "}
                  connections,{" "}
                  <input
                    className="contentInput"
                    name="ownership"
                    type="text"
                    placeholder="solo or joint"
                    value={formik.values.ownership}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  . If {formik.values.Name} behaves immanerly or disturbs the
                  family of {formik.values.bName}, then they can leave the place before
                  one year and security fee will be returned to them.{" "}
                  {formik.values.bName} cannot empty the {formik.values.propertyType}{" "}
                  before one year. If {formik.values.bName} wants to empty the place
                  after on year they will inform {formik.values.Name} one
                  month early. In case of damaging any thing, amount will be cut
                  from security fee paid by {formik.values.bName}. All the dues before
                  this day should be paid by {formik.values.Name} and after
                  that {formik.values.bName} will be responsible for all the expenses
                  and {formik.values.bName} should clear all the dues before leaving the
                  place and security fee will not be returned until{" "}
                  {formik.values.bName} doesnot clear all the dues. I have read this
                  agreement and signing it with my will, so that it will be
                  useful in the time of need.
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
                        value={clicked?publicKey:''}
                      />
                      <br />
                    </div>
                    <div className="col-md-3">
                      <button className="signatureBtn"
                      onClick={(e)=>{
                        e.preventDefault();
                        agreementName();
                        valueSetter(formik.values,setClicked)
                      }}
                      >Sign</button>
                    </div>
                  </div>
                </div>
                
                  
              </div>
              
             
            </form>
          </div>
          {/* {console.log( document.getElementById('bcb').innerText)} */}
        </div>
        : 
        <RentData publicKey={publicKey}/>
     }
     </>
  );
};

export default RentAgreement;
