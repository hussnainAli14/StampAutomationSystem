import React,{useState} from 'react'
// import {Link} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import LockIcon from '@mui/icons-material/Lock';
import AccountImag from '../images/accountpage.png'
import ResetPassword from './ResetPassword';
// import Logout from '@mui/icons-material/Logout';
const AccountPage = () => {
    const [AccountImage, setAccountImage] = useState(AccountImag)
    const [requestChange, setrequestChange] = useState(false)
    const imageHandler = (e)=>{
        const reader = new FileReader();
        reader.onload = ()=>{
          if(reader.readyState === 2){
            
          setAccountImage(
            reader.result
          )
          }
        }
        reader.readAsDataURL(e.target.files[0])
      }
  return (
    <>
    <div className='accountpage pb-5'>
        <div className='accountHolder'>
            <p> Account Holder Name </p>
        </div>
        
        <div className='delete-Upload d-flex mt-5 mb-3'> 
        <div>
        <input type='file' name='imageUpload' id='input' className='account-cardbtn-1' accept='image/*' onChange={imageHandler}/>
        <label htmlFor='input' className='upload'>
            Upload Photo
        </label>
        </div>
        <div>
        <DeleteIcon className='delete' onClick={()=> setAccountImage(AccountImag)}/>
        </div>
        </div>
        <div className='aaa'>
         <input type='file' name='imageUpload' id='input' accept='image/*' onChange={imageHandler}/>
         <label htmlFor='input' className='account-page-Btn'>
            <img src={AccountImage} alt='loading' className='AccountImage'/>
         </label>
         
         <div className='text-center'>
              <p id='acc-type' className=' mt-3'>User</p>
         </div>
         </div>
         <div className='resetPassword'>
          <div className='d-flex'>
             <LockIcon/>
             <p className='mt-1 ms-2 fw-bold fs-large security'>Security</p>
             </div>
             <div>
              <p className='password'>Password</p>
              <button className='passwordChange' onClick={()=>setrequestChange(true)}>Request Password Change</button>
             </div>
            
              
         </div>           
         {requestChange && <ResetPassword className='transitionShow' setrequestChange={setrequestChange} requestChange={requestChange}/>}
    </div>
    
    </>
  )
}

export default AccountPage