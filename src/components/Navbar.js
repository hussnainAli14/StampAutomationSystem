import React ,{useState,useContext}from 'react'
import{Link, useLocation} from "react-router-dom"
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import { Badge } from '@mui/material';
import { userContext } from '../App'
import Notifications from './Notifications';
import NavIcon from '../images/navIcon.png'
import LogoutIcon from '@mui/icons-material/Logout';
const Navbar = () => {
  const [Notificationbar, setNotificationbar] = useState(false)
  let location = useLocation();
  const showNotification = ()=>{
    setNotificationbar(true)
  }
  // eslint-disable-next-line no-unused-vars
  const {state, dispatch}= useContext(userContext)
  const handler =(event)=>{
    event.preventDefault();
}
  return (
    
    <>
    <nav className="navbar navbar-expand-lg fixed-top bg-light text-dark shadow">
  <div className="container-fluid">
    <Link className="navbar-brand " to="/main"><img src={NavIcon} alt="" width="30px" height="24px" className="d-inline-block align-text-top" />
      Stamp Automation System</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-text" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link p-3  ${(location.pathname === "/main" || location.pathname === "/" )?"active-link":"nav-link p-3 "}`} aria-current="page" to="/main">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link p-3 ${location.pathname === "/templates"?"active-link":"nav-link p-3 "}`}  to="/templates">Stamp Paper Templates</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link p-3  ${location.pathname === "/about"?"active-link":"nav-link p-3 "}`} to="/about">About Us</Link>
        </li>
      </ul>
      {
         
      (state === 'none') && <form className="" >
      <Link className="btn btn-outline-primary mx-2 rounded-pill" to='/signup'>Register</Link>
        <Link className="btn btn-outline-primary rounded-pill" to='/Login'>Sign In</Link>
      </form>
}
{    
     (state === 'user')&&
      <form className="d-flex" >
      <Link className="btn btn-outline-primary mx-2 rounded-pill" to='/userdocs'>My Documents</Link>
      <Link className='btn logOut-icon' to='/main'><LogoutIcon/></Link>
      </form>}
      {(state === 'lawyer')&&
      <form className="d-flex" onSubmit={handler}>
        <button className='notifications-icon bg-light' >
        <Badge anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }} badgeContent={1} color="secondary">
        <NotificationsSharpIcon className='me-1 mt-1' onClick={showNotification}/>
        
</Badge>
      
      </button>
      <Link className="btn btn-outline-primary mx-2 rounded-pill" to='/userdocs'>My Documents</Link>
      <Link className='btn' to='/main'><LogoutIcon/></Link>
      </form>
}
{/*  */}
    </div>
  </div>
</nav>
{/* <div className='notificationPanel'>
      <div className=' row notificationContent'>
        <h5 className='col Notification-heading'>Notifications</h5> 
        <CloseRoundedIcon className='col ms-5' onClick={()=>{
          setNotificationbar(false)
        }}/>
        </div>
    </div> */}
    {
      
  (Notificationbar=== true) && <Notifications setNotificationbar={setNotificationbar}/>
  
}
</>
  )
}
export default Navbar;