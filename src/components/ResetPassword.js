import React from 'react'
import ReportIcon from '@mui/icons-material/Report';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
const ResetPassword = (prop) => {
  return (
    <div className={`${!(prop.requestChage === true)?'showSidePopup':'hideSidePopup'}`}>
    <div className='SidePopUp'>
    <div className='d-flex'>
        <ReportIcon/>
     <p className='notify-p'>Notification</p>
     <CancelOutlinedIcon className='cancel-icon' onClick={()=>{prop.setrequestChange(false)}}/>
    </div>
<p className='SidePopUp-p'>A link has been sent to your registered email. Click on that link to reset password.</p>

    </div>
    </div>
  )
}

export default ResetPassword