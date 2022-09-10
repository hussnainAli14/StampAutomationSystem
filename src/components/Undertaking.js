import React from 'react'
import * as yup from 'yup';
import { Formik } from 'formik';
import {Link} from 'react-router-dom'
import { jsPDF } from "jspdf";
import QRCode from "react-qr-code";
const Undertaking = () => {
   
    const pdfGenerator = ()=>{
        const doc = new jsPDF('landscape','px','a4','false');
        doc.save('download.pdf')
    }
    const capitalizar = (element)=>{
        return (element = element.charAt(0).toUpperCase() + element.slice(1))
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
           <p><span className='oath'>"I declare the oath that whatever I am going to write shall be the whole truth."</span><br/>
           I resident of <input className='contentInput' id='contentInputWidth' type='text'/>, state that House No <input className='contentInput' id='contentInputWidth' type='text'/> located <input id='contentInputWidth' className='contentInput' type='text'/> is under my solitary ownership. My <input className='contentInput' type='text' placeholder='relation to the person'/>, <input className='contentInput' type='text' placeholder='name of that person'/> wants to get a new <input className='contentInput' type='text' placeholder='electicity/gas/water'/> connection on the above mentioned house, on which I have no objection (now or in future). He will follow the rules of respective organization. He will pay the bills in due time given by the organization. There are no dues of the organization and if there are any, he is responsible to pay them. I have read the above written doccument and my digital signature ensures that this Affidavet is the proof and will be useful in the time of need.<br/>
           {/* <span className='fw-bold'>Signature:</span> <input className='contentInput' type='text'/><br/>
           <span className='fw-bold'>Lawyer's Signature:</span> <input className='contentInput' type='text'/></p> */}</p>
       </div>
       <div className='row userDetails'>

<div className='col-md-4'>
    <label className='tempLabels'>Person's Signature:</label><br /></div>
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
<div className='col-md-4'><label className='tempLabels'>Lawyer's Signature</label><br /></div>
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

</div>
       <div className='row d-flex'>
        <div><Link className='btn agreement-btn' to='/'>Submit</Link></div>
        
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

export default Undertaking