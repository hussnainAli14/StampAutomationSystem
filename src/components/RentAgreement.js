import React from 'react'
import * as yup from 'yup';
import { Formik } from 'formik';
import { Link } from 'react-router-dom'
import { jsPDF } from "jspdf";
import QRCode from "react-qr-code";
const RentAgreement = () => {
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
    const pdfGenerator = ()=>{
        const doc = new jsPDF('landscape','px','a4','false');
        doc.save('download.pdf')
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
                propertyType:'',
                propertyAddress:''
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
                    <div className='defaultStylingAgreement' id='RentAgreement'>

                        <form >

                            <h2 className='templateHeading'>{(values.propertyType === '')?'Property Rent Agreement':`${values.propertyType} Stamp Agreement`}</h2>
                            <div className='row userDetails'>

                                <div className='col-md-3'>
                                    <label className={errors.Name && touched.Name ? 'tempErrors label-marign tempLabels' : 'tempLabels'}>Person's Name:</label><br /></div>
                                <div className='col-md-9'>

                                    <input name='Name' className='tempInputs' type='text' placeholder='Full Name' onChange={handleChange} onBlur={handleBlur}
                                        value={values.Name} /><br />
                                    <p className="tempErrors p-margin" > {errors.Name && touched.Name && errors.Name}</p><br /></div>
                            
                            
                                <div className='col-md-3'><label className={errors.FatherName && touched.FatherName ? 'tempErrors label-marign tempLabels' : 'tempLabels'}>Father Name:</label><br /></div>
                                <div className='col-md-9'>
                                    <input name='FatherName' className='tempInputs' type='text' placeholder='Father Name' onChange={handleChange} onBlur={handleBlur}
                                        value={values.FatherName} /><br />
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
                                    (First Party:Seller) <label>Name:</label><input name='FirstPartyName' className='contentInput' type='text' value={values.FirstPartyName}  onChange={handleChange} onBlur={handleBlur}
                                    />,<label>Father Name:</label>  <input className='contentInput' type='text'
                                    /><br />,<label>Cnic No:</label><input className='contentInput' type='text'
                                    /><br />
                                    (Second Party:Buyer) <label>Name:</label><input name='Name' className='contentInput' type='text' onChange={handleChange} onBlur={handleBlur}
                                        value={values.Name} />,<br /><label>Father Name:</label>  <input name='FatherName' className='contentInput' type='text' onChange={handleChange} onBlur={handleBlur}
                                            value={values.FatherName} />,<label>Cnic No</label> <input name='CnicNo' className='contentInput' type='text' onChange={handleChange} onBlur={handleBlur}
                                                value={values.CnicNo} /><br />
                                    Property Type: <input className='contentInput' type='text' name='propertyType' placeholder='house/flat' value={values.propertyType}  onChange={handleChange} onBlur={handleBlur} />
                                    {values.propertyType} location: <input className='contentInput' type='text' name='propertyAddress' placeholder='Address' value={values.propertyAddress} onChange={handleChange} onBlur={handleBlur} /><br/>
                                   <b>Valid For 1 Year </b>From: <input className='contentInput' type='text' placeholder='start date'/> To: <input className='contentInput' type='text' placeholder='end date'/><br/>
                                    This {values.propertyType} No: <input className='contentInput' type='text' name='HouseNo' /> is under the sole ownership of {values.FirstPartyName}. This {values.propertyType} floor <input className='contentInput' type='text' placeholder='basement/ground' /> is given on fare to {values.Name} under one year agreement. {values.Name}
                                    cannot leave this {values.propertyType} before one year. {values.Name} should pay the rent of Rs. <input className='contentInput' type='text' name='rent' /> before <input className='contentInput' type='text' name='date' placeholder='date' /> of every month. If {values.Name} delays 
                                    the fare without any reason, he will be fined for Rs. <input className='contentInput' type='text' name='amount' />. The security fee of Rs. <input className='contentInput' type='text' name='securityFee' /> has been recived by {values.FirstPartyName} in the presence of all the witnesses. The {values.propertyType}
                                    has <input className='contentInput' type='text' name='fans' placeholder='no of fans' /> fans, <input className='contentInput' type='text' name='bulbs' /> bulbs, <input className='contentInput' type='text' name='tubelights' /> tubelights, <input className='contentInput' type='text' placeholder='gas/water/electricity' /> connections, <input className='contentInput' type='text' placeholder='solo or joint' />.
                                    If {values.FirstPartyName} behaves immanerly or disturbs the family of {values.Name}, then they can leave the place before one year and security fee will be returned to them. {values.FirstPartyName} cannot empty the {values.propertyType} before
                                    one year. If {values.Name} wants to empty the place after on year they will inform {values.FirstPartyName} one minth early. In case of damaging any thing, amount will be cut from security fee paid by {values.Name}. All the dues before this day should be 
                                    paid by {values.FirstPartyName} and after that {values.Name} will be responsible for all the expenses and {values.Name} should clear all the dues before leaving the place and security fee will not be returned until {values.Name} doesnot clear all  the dues.
                                    I have read this agreement and signing it with my will, so that it will be useful in the time of need.
 
                                    
                                    </div>
                                    {/* <span className='fw-bold mb-3' id='Signature'>Signature First Party:</span> <input className='contentInput mb-3' type='text' /><br/>
                                    <span className='fw-bold mb-3 ' id='Signature'>Signature Second Party:</span> <input className='contentInput mb-3' type='text' /><br/>
                                    <span className='fw-bold mb-3' id='Signature'>Signature First Party's Witness:</span> <input className='contentInput mb-3' type='text' /><br/>
                                    <span className='fw-bold mb-3' id='Signature'>Signature Second Party's Witnees:</span> <input className='contentInput mb-3' type='text' /><br/>
                                    <span className='fw-bold mb-3' id='Signature'>Lawyer's Signature:</span> <input className='contentInput mb-3' type='text' /> */}
                            </div>
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
                            <div>
                                
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

export default RentAgreement