import React from 'react'
import * as yup from 'yup';
import { Formik } from 'formik';
import {Link} from 'react-router-dom'
import { jsPDF } from "jspdf";
import QRCode from "react-qr-code";
const UndertakingSecond = () => {
    const pdfGenerator = ()=>{
        const doc = new jsPDF('landscape','px','a4','false');
        doc.save('download.pdf')
    }
    const validate = yup.object({
        Name: yup.string().required('Required'),
        FatherName:yup.string().required('Required'),
        CnicNo: yup.string().required('Required'),
        desc: yup.string().required('Required'),
        issueDate: yup.string().required('Required'),
        StampDuty: yup.string().required('Required'),
        ChallanNo: yup.string().required('Required'),
        Amount: yup.string().required('Required'),
        
    })
  return (
    
    <Formik
    initialValues={{
        Name:'',
        FatherName:'',
        CnicNo: '',
        desc: '',
        issueDate: '',
        StampDuty: '',
        ChallanNo:'',
        Amount:''
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
        if(!values.issueDate){
            errors.issueDate = 'Required'
        }
        else if(
            !/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/i.test(values.issueDate)
        ){
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
    <div className='templateBody'>
        <div className='defaultStyling'>
    
    <form >
    
        <h2 className='templateHeading'>Undertaking / Affidavet</h2>
        
     
    
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
           <p><span className='oath'>"I declare the oath that whatever I am going to write shall be the whole truth."</span><br/>
           I <input className='contentInput' id='contentInputWidth' type='text'/> son of <input className='contentInput' id='contentInputWidth' type='text'/>, resident of <input className='contentInput' id='contentInputWidth' type='text' placeholder='address'/>.I admit that I will follow all the rules of <input className='contentInput' id='contentInputWidth' type='text' placeholder='Name of Institue'/> and all of my acts will be according to the laws of this Institue. If any of my action is against the laws of this institue, I will be responsible and the institue has all the rights to take action against me. I have read the document and my digital signature ensures that this affidavet is the proof in the time of need.<br/>
           <span className='fw-bold mt-5 '>Signature:<br/></span> <input className='contentInput' type='text'/><br/>
           <span className='fw-bold'>Lawyer's Signature:</span> <input className='contentInput' type='text'/></p>
       </div>
       <div className='row d-flex'>
        <div><Link className='btn temp-btn' to='/'>Submit</Link></div>
        
        <div><button className='btn temp-btn-download' onClick={pdfGenerator}>Download</button></div>
        
       </div>
       <QRCode className='qrcode' size={128} value="hey"/>
    </form>
    </div>
    </div>
      )}
      </Formik>
        )
  
}

export default UndertakingSecond