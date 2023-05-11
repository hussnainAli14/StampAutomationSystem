import React, { useState } from "react";
import { useFormik } from "formik";
import PropertyAgreement from "./PropertyAgreement";
import { valueSetter } from "../../ApiService/NotificationFunction";
const PropertySaleAgreement = () => {
  const publicKey = localStorage.getItem('public');

  const [clicked, setClicked] = useState(false);
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
      bName:'',
      bFather:'',
      bCnic:'',
      desc: "",
      issueDate: "",
      StampDuty: "",
      ChallanNo: "",
      Amount: "",
      FirstPartyName: "",
      propertyType: "",
      propertyAddress: "",
      propertyNo:'',
      saleP:'',
      paid:'',
      remaining:'',
      timeLimit:''
    },
    validate: validate,
  });
  const isNullish = Object.values(formik.values).every((value) => {
    if (value === "") {
      return true;
    } else {
      return false;
    }
  });
  const capitalizar = (element) => {
    return (element = element.charAt(0).toUpperCase() + element.slice(1));
  };
  const agreementName = ()=>{
    localStorage.setItem('AgreementName',formik.values.propertyType+'Stamp Agreement')
    }
  return (
    <>
      {
        !clicked?
        <div className="AgreementBody">
        <div className="defaultStylingAgreement">
          <form>
            <h2 className="templateHeading">
              {formik.values.propertyType === ""
                 ? "Property Sale Agreement"
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
                  type="text"
                  placeholder="Cnic No"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.CnicNo}
                />
                <br />
                <p className="tempErrors p-margin">
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
                  {formik.errors.issueDate &&
                    formik.touched.issueDate &&
                    formik.errors.issueDate}
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
               
                (Second Party:Buyer) <label>Name:</label>
                <input
                  name="bName"
                  className="contentInput"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.bName}
                />
                ,<br />
                <label>Father Name:</label>{" "}
                <input
                  name="bFather"
                  className="contentInput"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.bFather}
                />
                ,<label>Cnic No</label>{" "}
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
                  placeholder="house/flat/plot"
                  value={formik.values.propertyType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.values.propertyType} location:{" "}
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
                This {formik.values.propertyType} No:{" "}
                <input className="contentInput" type="text" name="propertyNo"
                 value={formik.values.propertyNo} onChange={formik.handleChange}
                 onBlur={formik.handleBlur}/> is
                under the sole ownership of {formik.values.FirstPartyName}. This{" "}
                {formik.values.propertyType} doesnot have any due bank loans or
                any other dues and {formik.values.FirstPartyName} has all the
                rights to sell this {formik.values.propertyType}. Hence{" "}
                {formik.values.FirstPartyName} has sell this{" "}
                {formik.values.propertyType} for{" "}
                <input
                  className="contentInput"
                  type="text"
                  name="saleP"
                  placeholder="SalePrice"
                  value={formik.values.saleP}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />{" "}
                on date{" "}
                {formik.values.issueDate}, out
                of which{" "}
                <input
                  className="contentInput"
                  type="text"
                  name="paid"
                  placeholder="amountPaid"
                  value={formik.values.paid}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />{" "}
                has been paid and {formik.values.FirstPartyName}
                has recieved the amount in presence of all the witnesses.
                Remaining amount{" "}
                <input
                  className="contentInput"
                  type="text"
                  name="remaining"
                  placeholder="remaing amount"
                  value={formik.values.remaining}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />{" "}
                will be paid when the ownership will be transfered to{" "}
                {formik.values.Name}. The ownership will be transfered in the
                time of{" "}
                <input
                  className="contentInput"
                  type="text"
                  name="timeLimit"
                  placeholder="time decided"
                  value={formik.values.timeLimit}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />{" "}
                
                . If {formik.values.Name} delays the process of
                transfer of ownership after recieving full payment, then he will
                be responsible to pay double of that amount to{" "}
                {formik.values.bName} as fine.If {formik.values.bName} refuses to
                pay the remaining amount and refuses the transfer of this{" "}
                {formik.values.propertyType}, then his paid amount will not be
                returned and this agreement will be cancelled. Transfer will
                occur according to the DC rate, which will be paid by{" "}
                {formik.values.Name}, while remaing all the dues of{" "}
                {formik.values.propertyType} will be paid by{" "}
                {formik.values.bName}. I have read this agreement and
                signing it with my will, so that it will be useful in the time
                of need.
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
                      value={clicked?publicKey:''}
                    />
                    <br />
                  </div>
                  <div className="col-md-3 pb-5">
                    <button className="signatureBtn"
                    disabled={isNullish}
                    onClick={(e)=>{
                      e.preventDefault()
                      agreementName()
                       valueSetter(formik.values,setClicked)
                    }}
                    >Sign</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>  
      </div>
      :
       <PropertyAgreement publicKey={publicKey}/>             
    }
    </>
  );
};

export default PropertySaleAgreement;
