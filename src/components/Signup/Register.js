import React from 'react'
import userImage from '../../images/man.png'
import lawyerImage from'../../images/lawyer.png'
import {Link} from 'react-router-dom'
 const Register = () => {
  return (
    <section className='container-height'> 
    <div className='selection'>
       <div className='user-portion'>
        <div className='image-size ms-1'>
        <img src={userImage} alt='loading'/>
        </div>
        <div className='my-5 btn-hover'>
        <Link className='btn btn-outline-primary rounded-pill btn-margin ' to='/UserSignup'>User Registration</Link>
        
        </div>
       </div>
       <div className='lawyer-portion'>
       <div className='image-size '>
        <img src={lawyerImage} alt='loading'/>
        </div>
        <div className='my-5 btn-hover'>
        <Link className='btn btn-outline-primary rounded-pill btn-margin-1' to='/LawyerSignup'>Lawyer Registration</Link>
       
        </div>
       </div>
    </div>
</section>
  )
}
export default Register;