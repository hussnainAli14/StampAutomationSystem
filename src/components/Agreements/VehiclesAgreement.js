import React, { useState,useEffect } from "react";
import { useFormik } from "formik";
import AgreementData from "./AgreementData";
import { valueSetter } from "../../ApiService/NotificationFunction";

const VehiclesAgreement = () => {

  const publicKey = localStorage.getItem('public');
  const [clicked, setClicked] = useState(false);
  const capitalizar = (element) => {
    return (element = element.charAt(0).toUpperCase() + element.slice(1));
  };
  const validate = (values) => {
    const errors = {};
    if (!values.CnicNo) {
      errors.Cni = "Required";
    } else if (!/^[0-9]{5}[0-9]{7}[0-9]$/i.test(values.CnicNo)) {
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
     bName:'',
     bFather:'',
     bCnic:'',
      StampDuty: "",
      ChallanNo: "",
      Amount: "",
      FirstPartyName: "",
      vehicleType: "",
      vehicleName: "",
      model:'',
      regno:"",
      chesis:'',
      engineNo:'',
      selling:'',
      remaining:'',
      remainMonths:'',
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
  const agreementName = ()=>{
  localStorage.setItem('AgreementName',formik.values.vehicleType+'Stamp Agreement')
  }
console.log(isNullish)
// const [isButtonDisable, setisButtonDisable] = useState(true)
// useEffect(()=>{
//   if(formik.values==='')
//     {
//     setisButtonDisable(false)
//   }
//   else{
//     setisButtonDisable(true)
//   }
  
//   },[formik.values.FirstPartyName])
  return (

    <>{
      !clicked?
    
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
                  pattern="[A-Za-z]+"
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
                  pattern="[A-Za-z]+"
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
                  type="number"
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
                  pattern="[A-Za-z]+"
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
              <div>
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
                  pattern="[A-Za-z]+"
                  value={formik.values.bName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  
                />
                ,<br />
                <label>Father Name:</label>{" "}
                <input
                  name="bFather"
                  className="contentInput"
                  type="text"
                  pattern="[A-Za-z]+"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.bFather}
                />
                ,<label>Cnic No</label>{" "}
                <input
                  name="bCnic"
                  className="contentInput"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.bCnic}
                />
                <br />
                Vehicle Type:{" "}
                <input
                  className="contentInput"
                  type="text"
                  name="vehicleType"
                  pattern="[A-Za-z]+"
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
                <input className="contentInput" name="model" type="text" value={formik.values.model} onChange={formik.handleChange}
                  onBlur={formik.handleBlur}/> Registration
                Number:
                <input className="contentInput" name="regno" type="text" value={formik.values.regno} onChange={formik.handleChange}
                  onBlur={formik.handleBlur}/>
                <br /> Chesis Number:{" "}
                <input className="contentInput" name="chesis" type="text" value={formik.values.chesis} onChange={formik.handleChange}
                  onBlur={formik.handleBlur}/> Engine Number:{" "}
                <input className="contentInput" name="engineNo" type="text" value={formik.values.engineNo} onChange={formik.handleChange}
                  onBlur={formik.handleBlur} /> is in the
                ownership of {formik.values.Name}. The above mentioned{" "}
                {formik.values.vehicleType} is been sold by{" "}
                {formik.values.Name} for{" "} Rs. {" "}
                <input
                  className="contentInput"
                  name="selling"
                  type="number"
                  placeholder="selling amount"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.selling}
                />{" "} 
               /_ , out of which{" "} Rs.
                <input
                  className="contentInput"
                  name="Amount"
                  type="number"
                  placeholder="amount paid"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Amount}
                />{" "}/_{" "}
                has been paid and{" "}
                <input
                  className="contentInput"
                  type="text"
                  placeholder="remaining amount"
                  name="remaining"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.remaining}
                />{" "}
                will pe paid in the time of{" "}
                <input
                  className="contentInput"
                  name="remainMonths"
                  type="number"
                  id="contentInputWidth"
                  placeholder="months to pay remaining amount"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.remainMonths}
                />{" "}
                months. The above mentioned {formik.values.vehicleType} has been
                handed over to the {formik.values.bName} with the regional smart
                card /copy and regional number plate. It is mandatory for{" "}
                {formik.values.FirstPartyName} to get an NOC and transfer letter
                from the company and give it to {formik.values.bName}. From now on
                , {formik.values.bName} will be responsible for all the dues like
                challan, tax, accident, theft etc. After the above mentioned
                date and time and pying all the dues (if any), if{" "}
                {formik.values.bName} sells or transfers this{" "}
                {formik.values.vehicleType} to anybody,{" "}
                {formik.values.FirstPartyName} will have no concerns or issues
                regarding that {formik.values.vehicleType}. {formik.values.bName}{" "}
                has checked the above mentioned {formik.values.vehicleType} and
                buying it with full will and own choice in the presence of all
                witnesses. The hires of both parties will have to accept the
                agreement. The agreement is written with the will of both
                parties and witnesses of both parties have accepted it too. So
                that, it will be handy in the hour of need.
                <br />
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
                      value={clicked ? publicKey : ""}
                    />
                    {console.log(isNullish)}
                    <br />
                  </div>
                  <div className="col-md-3 pb-5">
                    <button
                      className="signatureBtn "
                      disabled={isNullish}
                      onClick={(e)=>{
                        e.preventDefault()
                        agreementName();
                        valueSetter(formik.values,setClicked)
                      }}
                    >
                      Sign
                    </button>
                    </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      :
      <AgreementData publicKey={publicKey}/>
      }
    </>
  );
};

export default VehiclesAgreement;
