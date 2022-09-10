import React from 'react'
import * as yup from 'yup';
import { Formik } from 'formik';
import { Link } from 'react-router-dom'
import { jsPDF } from "jspdf";
import QRCode from "react-qr-code";
// import { BiArrowToRight } from "react-icons/bi";

const VehiclesAgreement = () => {
    const validate = yup.object({
        Name: yup.string().required('Required'),
        FatherName: yup.string().required('Required'),
        CnicNo: yup.string().required('Required'),
        desc: yup.string().required('Required'),
        issueDate: yup.string().required('Required'),
        StampDuty: yup.string().required('Required'),
        ChallanNo: yup.string().required('Required'),
        Amount: yup.string().required('Required'),

    })
    const pdfGenerator = () => {
        const doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.save('download.pdf')
    }

    const capitalizar = (element)=>{
     return (element = element.charAt(0).toUpperCase() + element.slice(1))
    }
    return (
        <Formik
            initialValues={{
                Name: '',
                FatherName: '',
                CnicNo: '',
                desc: '',
                issueDate: '',
                StampDuty: '',
                ChallanNo: '',
                Amount: '',
                FirstPartyName: '',
                vehicleType: '',
                vehicleName: ''
            }}
            validate={values => {
                const errors = {};
                if (!values.CnicNo) {
                    errors.Cni = 'Required';
                } else if (
                    !/^[0-9]{5}-[0-9]{7}-[0-9]$/i.test(values.CnicNo)
                ) {
                    errors.CnicNo = 'Invalid Cnic No.';
                }
                if (!values.issueDate) {
                    errors.issueDate = 'Required'
                }
                else if (
                    !/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/i.test(values.issueDate)
                ) {
                    errors.issueDate = 'Invalid Date Format';
                }
                return errors;
            }}
            validationSchema={validate}

        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,

            }) => (
                <div className='AgreementBody'>
                    <div className='defaultStylingAgreement'>

                        <form >

                            <h2 className='templateHeading'>{(values.vehicleType === '') ? 'Vehicles Stamp Agreement' : `${capitalizar(values.vehicleType)} Stamp Agreement`}</h2>
                            <div className='row userDetails'>

                                <div className='col-md-3'>
                                    <label className={errors.Name && touched.Name ? 'tempErrors label-marign tempLabels' : 'tempLabels'}>Person's Name:</label><br /></div>
                                <div className='col-md-9'>

                                    <input name='Name' className='tempInputs' type='text' placeholder='Full Name' onChange={handleChange} onBlur={handleBlur}
                                        value={capitalizar(values.Name)} /><br />
                                    <p className="tempErrors p-margin" > {errors.Name && touched.Name && errors.Name}</p><br /></div>


                                <div className='col-md-3'><label className={errors.FatherName && touched.FatherName ? 'tempErrors label-marign tempLabels' : 'tempLabels'}>Father Name:</label><br /></div>
                                <div className='col-md-9'>
                                    <input name='FatherName' className='tempInputs' type='text' placeholder='Father Name' onChange={handleChange} onBlur={handleBlur}
                                        value={capitalizar(values.FatherName)} /><br />
                                    <p className="tempErrors p-margin" > {errors.FatherName && touched.FatherName && errors.FatherName}</p><br />
                                </div>


                                <div className='col-md-3'>
                                    <label className={errors.CnicNo && touched.CnicNo ? 'tempErrors label-marign tempLabels' : 'tempLabels'}>Cnic No:</label><br />
                                </div>
                                <div className='col-md-9'>
                                    <input name='CnicNo' className='tempInputs' type='text' placeholder='Cnic No' onChange={handleChange} onBlur={handleBlur}
                                        value={values.CnicNo} /><br />
                                    <p className="tempErrors p-margin" > {errors.CnicNo && touched.CnicNo && errors.CnicNo}</p><br />

                                </div>

                                <div className='col-md-3'>
                                    <label className={errors.desc && touched.desc ? 'tempErrors label-marign tempLabels' : 'tempLabels'}>Description:</label><br />
                                </div>
                                <div className='col-md-9'>
                                    <input name='desc' className='tempInputs' type='text' placeholder='Type Of Agreement' onChange={handleChange} onBlur={handleBlur}
                                        value={values.desc} /><br />
                                    <p className="tempErrors p-margin" > {errors.desc && touched.desc && errors.desc}</p><br />
                                </div>

                                <div className='col-md-3'>
                                    <label className={errors.issueDate && touched.issueDate ? 'tempErrors label-marign tempLabels' : 'tempLabels'}>Issue Date:</label><br />
                                </div>

                                <div className='col-md-9'>

                                    <input name='issueDate' className='tempInputs' type='date' placeholder='Date' onChange={handleChange} onBlur={handleBlur}
                                        value={values.issueDate} /><br />
                                    <p className="tempErrors p-margin" > {errors.issueDate && touched.issueDate && errors.issueDate}</p><br />



                                </div>
                            </div>
                            <div className='undertakingContent'>
                                <div className='mb-5'><span className='oath'>"I declare the oath that whatever I am going to write shall be the whole truth."</span><br />
                                    (First Party:Seller) <label>Name:</label><input name='FirstPartyName' className='contentInput' type='text' value={values.FirstPartyName} onChange={handleChange} onBlur={handleBlur}
                                    />,<label>Father Name:</label>  <input className='contentInput' type='text'
                                    /><br />,<label>Cnic No:</label><input className='contentInput' type='text'
                                    /><br />
                                    (Second Party:Buyer) <label>Name:</label><input name='Name' className='contentInput' type='text' onChange={handleChange} onBlur={handleBlur}
                                        value={values.Name} />,<br /><label>Father Name:</label>  <input name='FatherName' className='contentInput' type='text' onChange={handleChange} onBlur={handleBlur}
                                            value={values.FatherName} />,<label>Cnic No</label> <input name='CnicNo' className='contentInput' type='text' onChange={handleChange} onBlur={handleBlur}
                                                value={values.CnicNo} /><br />
                                    Vehicle Type: <input className='contentInput' type='text' name='vehicleType' placeholder='car/bike/etc' value={values.vehicleType} onChange={handleChange} onBlur={handleBlur} />
                                    Vehicle Name: <input className='contentInput' type='text' name='vehicleName' value={values.vehicleName} onChange={handleChange} onBlur={handleBlur} placeholder='' /><br />
                                    Model:<input className='contentInput' type='text' /> Registration Number:<input className='contentInput' type='text' /><br /> Chesis Number: <input className='contentInput' type='text' /> Engine Number: <input className='contentInput' type='text' /> is in the ownership of {values.FirstPartyName}. The above mentioned {values.vehicleType} is been sold by {values.FirstPartyName} for <input className='contentInput' type='text' placeholder='selling amount' /> rupees, out of which <input className='contentInput' type='text' placeholder='amount paid' />  has been paid and <input className='contentInput' type='text' placeholder='remaining amount' /> will pe paid in the time of <input className='contentInput' type='text' id='contentInputWidth' placeholder='months to pay remaining amount' /> months. The above mentioned {values.vehicleType} has been handed over to the {values.Name} with the regional smart card /copy and regional number plate. It is mandatory for {values.FirstPartyName} to get an NOC and transfer letter from the company and give it to {values.Name}. From date <input className='contentInput' type='text' placeholder='Date' /> , Time <input className='contentInput' type='text' placeholder='time' /> , {values.Name} will be responsible for all the dues like challan, tax, accident, theft etc. After the above mentioned date and time and pying all the dues (if any), if {values.Name} sells or transfers this {values.vehicleType} to anybody, {values.FirstPartyName} will have no concerns or issues regarding that {values.vehicleType}. {values.Name} has checked the above mentioned {values.vehicleType} and buying it with full will and own choice in the presence of all witnesses. The hires of both parties will have to accept the agreement. The agreement is written with the will of both parties and witnesses of both parties have accepted it too. So that, it will be handy in the hour of need.<br />


                                </div>
                                </div>
                                {/* <span className='fw-bold mb-3' id='Signature'>Signature First Party:</span> <input className='contentInput mb-3' type='text' /><br />
                                <span className='fw-bold mb-3 ' id='Signature'>Signature Second Party:</span> <input className='contentInput mb-3' type='text' /><br />
                                <span className='fw-bold mb-3' id='Signature'>Signature First Party's Witness:</span> <input className='contentInput mb-3' type='text' /><br />
                                <span className='fw-bold mb-3' id='Signature'>Signature Second Party's Witness:</span> <input className='contentInput mb-3' type='text' /><br/>
                                <span className='fw-bold mb-3' id='Signature'>Lawyer's Signature:</span> <input className='contentInput mb-3' type='text' /> */}
                                <div className='row userDetails'>

                                    <div className='col-md-4'>
                                        <label className='tempLabels'>Seller's Signature:</label><br /></div>
                                    <div className='col-md-8'>
                                    <div className='row'>
                                        <div className='col-md-9'>
                                        <input className='tempInputs' id='SignatureInputs' type='text' 
                                        /><br />
                                        </div>
                                        <div className='col-md-3'>
                                       <button className='signatureBtn'>Sign</button>
                                       </div>


                                       </div>
                                       </div>
                                    <div className='col-md-4'><label className='tempLabels'>Buyer's Public Address</label><br /></div>
                                    <div className='col-md-8'>
                                    <div className='row'>
                                        <div className='col-md-9'>
                                        <input className='tempInputs' id='SignatureInputs' type='text' 
                                        /><br />
                                        </div>
                                        <div className='col-md-3'>
                                       <button className='signatureBtn'>Send</button>
                                       </div>


                                       </div>
                                    </div>


                                    <div className='col-md-4'>
                                        <label className='tempLabels'>First Witness Public Address:</label><br />
                                    </div>
                                    <div className='col-md-8'>
                                    <div className='row'>
                                        <div className='col-md-9'>
                                        <input className='tempInputs' id='SignatureInputs' type='text' placeholder='You can also write email address of witness' 
                                        /><br />
                                        </div>
                                        <div className='col-md-3'>
                                       <button className='signatureBtn'>Send</button>
                                       
                                       </div>


                                       </div>

                                    </div>

                                    <div className='col-md-4'>
                                        <label className='tempLabels'>Second Witness Public Address:</label><br />
                                    </div>
                                    <div className='col-md-8'>
                                    <div className='row'>
                                        <div className='col-md-9'>
                                        <input className='tempInputs' id='SignatureInputs' type='text' placeholder='You can also write email address of witness' 
                                        /><br />
                                        </div>
                                        <div className='col-md-3'>
                                       <button className='signatureBtn'>Send</button>
                                       </div>


                                       </div>

                                    </div>
                                    <div className='col-md-4'>
                                        <label className='tempLabels'>Lawyer's Signature:</label><br />
                                    </div>
                                    <div className='col-md-8'>
                                    <div className='row'>
                                        <div className='col-md-9'>
                                        <input className='tempInputs' id='SignatureInputs' type='text' 
                                        /><br />
                                        </div>
                                        <div className='col-md-3'>
                                       <button className='signatureBtn'>Send</button>
                                       </div>


                                       </div>

                                    </div>
                                </div>

                            
                            <div className=' row d-flex'>
                                <div><Link className='btn agreement-btn' to='/personaddress'>Submit</Link> </div>
                                <div><button className='btn temp-btn-download' onClick={pdfGenerator}>Download</button></div>

                            </div>
                            <QRCode className='qrcode' size={128} value="hey" />
                        </form>
                    </div>
                </div>
            )}
        </Formik>)
}

export default VehiclesAgreement