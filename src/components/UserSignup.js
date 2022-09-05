import {React, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BiArrowToRight } from "react-icons/bi";
import UserImg from '../images/man.png'
import LawyerImg from '../images/lawyer.png'
import * as yup from 'yup';
import { Formik } from 'formik';
import EmailIcon from '@mui/icons-material/Email';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
// import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import { PersistFormikValues } from 'formik-persist-values';
const UserSignup = (props) => {
    let location = useLocation();
    const [passwordVisible, setpasswordVisible] = useState(false)
    const [ConfirmpasswordVisible, setConfirmpasswordVisible] = useState(false)
    const validate = yup.object({
        firstName: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        email: yup.string().email('Email is invaliid').required('Required'),
        password: yup.string().min(8, 'Password must contain atleast 8 chracters').required('Required'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must match').required('Required')
    })
   
    return (
        <Formik
            
            initialValues={
                {
                
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
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
                
                
            }) => (
                
                <div className='user-signup-img'>


                    <div className='user_signup_form '>
                        {location.pathname === '/UserSignup' ? <img src={UserImg} alt="loading" className='signup-img '></img> : <img src={LawyerImg} alt="loading" className='signup-img '></img>}
                        <form onSubmit={handleSubmit}>
                            {location.pathname === '/UserSignup' ? <h3 className='text-center'>User Signup</h3> : <h3 className='text-center'>Lawyer Signup</h3>}

                            <input type="text" id="input" name='firstName' placeholder="First Name" className={`user_signup_form_input ${!(errors.firstName && touched.firstName) ? 'input-margin' : ''}`} 
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName} />
                
                            
                            <p className="errors p-margin" > {errors.firstName && touched.firstName && errors.firstName}</p><br />
                        
                            <input type="text" id="input" name='lastName' placeholder="Last Name" className={`user_signup_form_input ${!(errors.lastName && touched.lastName) ? 'input-margin' : ''}`} 
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName} />
                            
                            <p className='errors p-margin'> {errors.lastName && touched.lastName && errors.lastName}</p><br />

                            <input type="email" id="input" name='email'  placeholder="Email Address" className={`user_signup_form_input ${!(errors.email && touched.email) ? 'input-margin' : ''}`} 
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email} />
                                <EmailIcon className='emailIcon'/>
                           
                            <p className='errors p-margin'>{errors.email && touched.email && errors.email}</p><br />
                            <input name='password' id="input" type={passwordVisible?'text':"password"} placeholder="Password" className={`user_signup_form_input ${!(errors.password && touched.password) ? 'input-margin' : ''}`} 
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password} />
                            
                                 {values.password ===''? <KeySharpIcon className='emailIcon'/>:
                                 (!passwordVisible)?<VisibilitySharpIcon className='emailIcon' id='VisibilityIcon' onClick={()=>{
                                    setpasswordVisible(true)
                                 }}/>:<VisibilityOffIcon className='emailIcon' id='VisibilityIcon' onClick={()=> setpasswordVisible(false)}/>}
                                 {/* {passwordVisible?<VisibilityOffIcon className='emailIcon' id='VisibilityIcon' onClick={()=> setpasswordVisible(false)}/>:''} */}
                            <p className='errors p-margin'>  {errors.password && touched.password && errors.password}</p><br />

                            <input type={ConfirmpasswordVisible?'text':"password"} id="input" name='confirmPassword' placeholder="Confirm Password" className={`user_signup_form_input ${!(errors.confirmPassword && touched.confirmPassword) ? 'input-margin' : ''}`} 
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.confirmPassword} />
                         {values.confirmPassword ===''?<KeySharpIcon className='emailIcon'/>:(!ConfirmpasswordVisible)?<VisibilitySharpIcon className='emailIcon' id='VisibilityIcon' onClick={()=> setConfirmpasswordVisible(true)}/>:<VisibilityOffIcon className='emailIcon' id='VisibilityIcon' onClick={()=> setConfirmpasswordVisible(false)}/>}

                            <p className='errors p-margin'> {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</p>

                            {location.pathname === '/UserSignup'?<Link to='/UserSignup2' className="btn-signup" >Next<BiArrowToRight /></Link> : <Link className="btn-signup" to='/LawyerSignup2' >Next<BiArrowToRight /></Link>}
                            
                        </form>
                    </div>
                   
                </div>
            )}
        </Formik>
                        
                        

    )
}
export default UserSignup;
