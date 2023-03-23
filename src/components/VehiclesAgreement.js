import React, { useState } from "react";
import * as yup from "yup";
import { Formik, useFormik } from "formik";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import QRCode from "react-qr-code";
import axios from "../axios/Axios";
// import { BiArrowToRight } from "react-icons/bi";

const VehiclesAgreement = () => {
  // const publicKey = localStorage.getItem('public');
  const userId = localStorage.getItem("userId");
  const vehicle = document.getElementById("vehicle");
  const [clicked, setClicked] = useState(false);
  const [publicKey, setpublicKey] = useState("");
  // const validate = yup.object({
  //   Name: yup.string().required("Required"),
  //   FatherName: yup.string().required("Required"),
  //   CnicNo: yup.string().required("Required"),
  //   desc: yup.string().required("Required"),
  //   issueDate: yup.string().required("Required"),
  //   StampDuty: yup.string().required("Required"),
  //   ChallanNo: yup.string().required("Required"),
  //   Amount: yup.string().required("Required"),
  // });
  const pdfGenerator = () => {
    const doc = new jsPDF("landscape", "px", "a4", "false");
    doc.save("download.pdf");
  };

  const capitalizar = (element) => {
    return (element = element.charAt(0).toUpperCase() + element.slice(1));
  };

  const getuser = async (e) => {
    e.preventDefault();
    let res = await axios.get(`/api/v1/users/${userId}`);
    console.log(res);
    if (res.data.status === "success") {
      setpublicKey(res.data.data.user.publicKey);
      setClicked(true);
    }
  };
  const validate = (values) => {
    const errors = {};
    if (!values.CnicNo) {
      errors.Cni = "Required";
    } else if (!/^[0-9]{5}-[0-9]{7}-[0-9]$/i.test(values.CnicNo)) {
      errors.CnicNo = "Invalid Cnic No.";
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
      StampDuty: "",
      ChallanNo: "",
      Amount: "",
      FirstPartyName: "",
      vehicleType: "",
      vehicleName: "",
    },
    validate: validate,
  });
  const isNullish = Object.values(formik.values).every(value =>{
    if(value === ''){
     return true;
    }
    else{
      return false
    }
  })
  
console.log(isNullish)
  return (

    <>
      <div id="vehicle" className="AgreementBody">
        <div className="defaultStylingAgreement">
          <form>
            <h2 className="templateHeading">
              {formik.values.vehicleType === ""
                ? "Vehicles Stamp Agreement"
                : `${capitalizar(formik.values.vehicleType)} Stamp Agreement`}
            </h2>
            <div className="row userDetails">
              <div className="col-md-3">
                <label
                  className={
                    formik.errors.Name && formik.touched.Name
                      ? "tempformik.errors label-marign tempLabels"
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
                <p className="tempformik.errors p-margin">
                  {" "}
                  {formik.errors.Name &&
                    formik.touched.Name &&
                    formik.errors.Name}
                </p>
                <br />
              </div>

              <div className="col-md-3">
                <label
                  className={
                    formik.errors.FatherName && formik.touched.FatherName
                      ? "tempformik.errors label-marign tempLabels"
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
                <p className="tempformik.errors p-margin">
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
                      ? "tempformik.errors label-marign tempLabels"
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
                <p className="tempformik.errors p-margin">
                  {" "}
                  {formik.errors.CnicNo &&
                    formik.touched.CnicNo &&
                    formik.errors.CnicNo}
                </p>
                <br />
              </div>

              <div className="col-md-3">
                <label
                  className={
                    formik.errors.desc && formik.touched.desc
                      ? "tempformik.errors label-marign tempLabels"
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
                <p className="tempformik.errors p-margin">
                  {" "}
                  {formik.errors.desc &&
                    formik.touched.desc &&
                    formik.errors.desc}
                </p>
                <br />
              </div>

              <div className="col-md-3">
                <label
                  className={
                    formik.errors.issueDate && formik.touched.issueDate
                      ? "tempformik.errors label-marign tempLabels"
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
                <p className="tempformik.errors p-margin">
                  {" "}
                  {/* {formik.errors.issueDate && formik.touched.issueDate && formik.errors.issueDate} */}
                </p>
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
                (First Party:Seller) <label>Name:</label>
                <input
                  name="FirstPartyName"
                  className="contentInput"
                  type="text"
                  value={formik.values.FirstPartyName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                ,<label>Father Name:</label>{" "}
                <input className="contentInput" type="text" />
                <br />,<label>Cnic No:</label>
                <input className="contentInput" type="text" />
                <br />
                (Second Party:Buyer) <label>Name:</label>
                <input
                  name="Name"
                  className="contentInput"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Name}
                />
                ,<br />
                <label>Father Name:</label>{" "}
                <input
                  name="FatherName"
                  className="contentInput"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.FatherName}
                />
                ,<label>Cnic No</label>{" "}
                <input
                  name="CnicNo"
                  className="contentInput"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.CnicNo}
                />
                <br />
                Vehicle Type:{" "}
                <input
                  className="contentInput"
                  type="text"
                  name="vehicleType"
                  placeholder="car/bike/etc"
                  value={formik.values.vehicleType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                Vehicle Name:{" "}
                <input
                  className="contentInput"
                  type="text"
                  name="vehicleName"
                  value={formik.values.vehicleName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder=""
                />
                <br />
                Model:
                <input className="contentInput" type="text" /> Registration
                Number:
                <input className="contentInput" type="text" />
                <br /> Chesis Number:{" "}
                <input className="contentInput" type="text" /> Engine Number:{" "}
                <input className="contentInput" type="text" /> is in the
                ownership of {formik.values.FirstPartyName}. The above mentioned{" "}
                {formik.values.vehicleType} is been sold by{" "}
                {formik.values.FirstPartyName} for{" "}
                <input
                  className="contentInput"
                  type="text"
                  placeholder="selling amount"
                />{" "}
                rupees, out of which{" "}
                <input
                  className="contentInput"
                  type="text"
                  placeholder="amount paid"
                />{" "}
                has been paid and{" "}
                <input
                  className="contentInput"
                  type="text"
                  placeholder="remaining amount"
                />{" "}
                will pe paid in the time of{" "}
                <input
                  className="contentInput"
                  type="text"
                  id="contentInputWidth"
                  placeholder="months to pay remaining amount"
                />{" "}
                months. The above mentioned {formik.values.vehicleType} has been
                handed over to the {formik.values.Name} with the regional smart
                card /copy and regional number plate. It is mandatory for{" "}
                {formik.values.FirstPartyName} to get an NOC and transfer letter
                from the company and give it to {formik.values.Name}. From date{" "}
                <input
                  className="contentInput"
                  type="text"
                  placeholder="Date"
                />{" "}
                , Time{" "}
                <input
                  className="contentInput"
                  type="text"
                  placeholder="time"
                />{" "}
                , {formik.values.Name} will be responsible for all the dues like
                challan, tax, accident, theft etc. After the above mentioned
                date and time and pying all the dues (if any), if{" "}
                {formik.values.Name} sells or transfers this{" "}
                {formik.values.vehicleType} to anybody,{" "}
                {formik.values.FirstPartyName} will have no concerns or issues
                regarding that {formik.values.vehicleType}. {formik.values.Name}{" "}
                has checked the above mentioned {formik.values.vehicleType} and
                buying it with full will and own choice in the presence of all
                witnesses. The hires of both parties will have to accept the
                agreement. The agreement is written with the will of both
                parties and witnesses of both parties have accepted it too. So
                that, it will be handy in the hour of need.
                <br />
              </div>
            </div>
            {/* <span className='fw-bold mb-3' id='Signature'>Signature First Party:</span> <input className='contentInput mb-3' type='text' /><br />
                                <span className='fw-bold mb-3 ' id='Signature'>Signature Second Party:</span> <input className='contentInput mb-3' type='text' /><br />
                                <span className='fw-bold mb-3' id='Signature'>Signature First Party's Witness:</span> <input className='contentInput mb-3' type='text' /><br />
                                <span className='fw-bold mb-3' id='Signature'>Signature Second Party's Witness:</span> <input className='contentInput mb-3' type='text' /><br/>
                                <span className='fw-bold mb-3' id='Signature'>Lawyer's Signature:</span> <input className='contentInput mb-3' type='text' /> */}
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
                      value={clicked ? publicKey : ""}
                    />
                    {console.log(isNullish)}
                    <br />
                  </div>
                  <div className="col-md-3">
                    <button
                      className="signatureBtn"
                      disabled={isNullish}
                      onClick={getuser}
                    >
                      Sign
                    </button>
                    {/* <button disabled={Object.values(formik.values).toString() != ""} type="submit"> Submit </button> */}

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
                    />
                    <br />
                  </div>
                  <div className="col-md-3">
                    <button className="signatureBtn">Send</button>
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
                    />
                    <br />
                  </div>
                  <div className="col-md-3">
                    <button className="signatureBtn">Send</button>
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
                      placeholder="You can also write email address of witness"
                    />
                    <br />
                  </div>
                  <div className="col-md-3">
                    <button className="signatureBtn">Send</button>
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
                    <button className="signatureBtn">Send</button>
                  </div>
                </div>
              </div>
            </div>

            <div className=" row d-flex">
              <div>
                <Link className="btn agreement-btn" to="/personaddress">
                  Submit
                </Link>{" "}
              </div>
              <div>
                <button
                  className="btn temp-btn-download"
                  onClick={pdfGenerator}
                >
                  Download
                </button>
              </div>
            </div>
            <QRCode className="qrcode" size={128} value="hey" />
          </form>
          {console.log(vehicle)}
        </div>
      </div>
    </>
  );
};

export default VehiclesAgreement;
