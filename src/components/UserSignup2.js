import React ,{useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BiArrowToRight } from "react-icons/bi";
import { BiArrowToLeft } from "react-icons/bi";
import UserImg from '../images/man.png';
import LawyerImg from '../images/lawyer.png'
import Verification from './Verification';
import * as yup from 'yup';
import { Formik } from 'formik';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDownRounded';
const UserSignup2 = () => {
    let location = useLocation();
    const [hideVerificationForm, sethideVerificationForm] = useState(true)
    
const VisibileVerificationForm = ()=>{
    sethideVerificationForm(false)

}
    const handler =(event)=>{
        event.preventDefault();
    }
    const validate = yup.object({
        CnicNo: yup.string().required('Required'),
        address: yup.string().required('Required'),
        gender: yup.string().required('Required'),
        DOB: yup.string().required('Required'),
        
    })
  return (
    <>
    <Formik
    initialValues={{
        CnicNo: '',
        address: '',
        gender: '',
        DOB: ''
    }}
    validate={values => {
        const errors = {};
        if (!values.CnicNo) {
            errors.CnicNo = 'Required';
        } else if (
            !/^[0-9]{5}-[0-9]{7}-[0-9]$/i.test(values.CnicNo)
        ) {
            errors.CnicNo = 'Invalid Cnic No.';
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
    <div className='user-signup-img'>
    <div className='user_signup_form'>
    {location.pathname === '/UserSignup2'?<img src={UserImg} alt="loading" className='signup-img '></img>:<img src={LawyerImg} alt="loading" className='signup-img '></img>}
                   <form onSubmit={handler}>
                    
                   { location.pathname === '/UserSignup2'?<h3 className='text-center'>User Signup</h3>:<h3 className='text-center'>Lawyer Signup</h3>}
                    <input type="text" name='CnicNo' placeholder="Cnic No" className={`user_signup_form_input ${!(errors.CnicNo && touched.CnicNo) ? 'input-margin':''}`} onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.CnicNo} />
                    <br/>
                    <p className="errors p-margin" > {errors.CnicNo && touched.CnicNo && errors.CnicNo}</p><br />
                    <input type="text" name='address' placeholder="Address" className={`user_signup_form_input ${!(errors.address && touched.address) ? 'input-margin':''}`} onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address} />
                    
                    <br/>
                    <p className="errors p-margin" > {errors.address && touched.address && errors.address}</p><br />
                    {/* <input type="text" name='gender' placeholder="Gender" className={`user_signup_form_input ${!(errors.gender&& touched.gender) ? 'input-margin':''}`} onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.gender}
                                 />
                                 <ArrowDropDownIcon/> */}
                                 <select name="gender" placeholder='Gender' className={`user_signup_form_input ${!(errors.gender && touched.gender) ? 'input-margin':''}`}>
                                 <option value="" color='grey'>Gender</option>
	                                  <option value="male">Male</option>
	                                  <option value="female">Female</option>
	                                  <option value="other">Other</option>
                                     </select>
                    <br />
                    <p className="errors p-margin" > {errors.gender&& touched.gender && errors.gender}</p><br />
                    
                    <input type="date" name='DOB' placeholder="Date of Birth" className={`user_signup_form_input ${!(errors.DOB && touched.DOB) ? 'input-margin':''}`} onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.DOB} />
                    <br/>
                    <p className="errors p-margin" > {errors.DOB && touched.DOB && errors.DOB}</p><br />
                    {location.pathname === '/UserSignup2'?<Link className="btn-signup-p" to='/UserSignup'><BiArrowToLeft/>Previous</Link>:<Link className="btn-signup-p" to='/LawyerSignup'><BiArrowToLeft/>Previous</Link>}
                    {<button className="btn-nxt" onClick={VisibileVerificationForm}>Next<BiArrowToRight/></button>}
                    
                    </form>
            </div>
            {
                <div className={`'hideVerificationForm' ${hideVerificationForm ? 'hideVerificationForm' : 'showVerificationForm '}`}>
           <div  className="verification_overlay">
           <Verification sethideVerificationForm={sethideVerificationForm}/>
           </div>
                </div>
            }
            </div>
            )}
            </Formik>
            
           </> 
            
  )
}
export default UserSignup2;
