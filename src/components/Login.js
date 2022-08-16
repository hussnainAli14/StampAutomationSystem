import React, { useState } from 'react'
import userImage from '../images/man.png'
import lawyerImage from'../images/lawyer.png'
import  LawyerLogin from './LawyerLogin'
import UserSignin from './UserSignin'


 const Login = () => {
  const [hideUserForm, sethideUserForm] = useState(true)
  const [hideLawyerForm, sethideLawyerForm] = useState(true)
  const visibilityChanger =()=>{
    sethideUserForm(false);
  }
  const visibilityChangerLawyer =()=>{
    sethideLawyerForm(false);
  }
  return (
    <>

    <section className='container-height'>
        <div className='selection'>
           <div className='user-portion'>
            <div className='image-size ms-1'>
            <img src={userImage} alt='loading'/>
            </div>
            <div className='my-5 btn-hover'>
            <button className='btn btn-outline-primary rounded-pill' onClick={visibilityChanger} >User Login</button>
            
            </div>
           </div>
           <div className='lawyer-portion'>
           <div className='image-size '>
            <img src={lawyerImage} alt='loading'/>
            </div>
            <div className='my-5 btn-hover'>
            <button className='btn btn-outline-primary rounded-pill' onClick={visibilityChangerLawyer}>Lawyer Login</button>
           
            </div>
           </div>
        </div>
    </section>
    { <div id='userForm' className={`hideUserForm ${hideUserForm ? 'hideUserForm background':'showUserForm'}  `} >
        <UserSignin hideuserform={sethideUserForm}/>
        </div>}
        { <div id='lawyerForm' className={`hideUserForm ${hideLawyerForm ? 'hideUserForm background':'showUserForm'} `} >
        <LawyerLogin sethideLawyerform={sethideLawyerForm}/>
        </div>}
    </>
  )
  }

export default Login;
