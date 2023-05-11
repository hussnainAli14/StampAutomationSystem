import React,{useState} from "react";
import {  useFormik } from "formik";
import UnderTakingData from "./UnderTakingData";
import { valueSetter } from "../../ApiService/NotificationFunction";
const Undertaking = () => {
 const publicKey= localStorage.getItem('publicKey')
  const [clicked, setClicked] = useState(false)
  const capitalizar = (element) => {
    return (element = element.charAt(0).toUpperCase() + element.slice(1));
  };

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
      country:"",
      houseNo:'',
      address:"",
      relation:"",
      relationName:'',
      connection:'',


    },
    validate: validate,
  });
  const agreementName = ()=>{
    localStorage.setItem('UnderTaking','UnderTaking')
    }
  return (
    <>
    {!clicked?
    <div className="templateBody">
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
              I resident of{" "}
              <input
              name="country"
                className="contentInput"
                id="contentInputWidth"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
              />
              , state that House No{" "}
              <input
                className="contentInput"
                id="contentInputWidth"
                type="text"
                name="houseNo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.houseNo}
              />{" "}
              located{" "}
              <input
                id="contentInputWidth"
                className="contentInput"
                type="text"
                name="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />{" "}
              is under my solitary ownership. My{" "}
              <input
                className="contentInput"
                type="text"
                placeholder="relation to the person"
                name="relation"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.relation}
              />
              ,{" "}
              <input
                className="contentInput"
                name="relationName"
                type="text"
                placeholder="name of that person"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.relationName}
              />{" "}
              wants to get a new{" "}
              <input
                className="contentInput"
                type="text"
                placeholder="electicity/gas/water"
                name="connection"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.connection}
              />{" "}
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
                    value={clicked?publicKey:''
                    }
                  />
                  <br />
                </div>
                <div className="col-md-3">
                  <button className="signatureBtn" onClick={(e)=>{
                    e.preventDefault()
                    agreementName()
                    valueSetter(formik.values,setClicked)}}>Sign</button>
                </div>
              </div>
            </div>
            
          </div>
        
        </form>
      </div>
    </div>
    :
    <UnderTakingData values={formik.values} publicKey={publicKey} />
    }
    </>
  );
};

export default Undertaking;
