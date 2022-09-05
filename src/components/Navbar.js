import React ,{useState,useContext,useEffect,useRef}from 'react'
import{Link, useLocation,useNavigate} from "react-router-dom"
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import { Badge } from '@mui/material';
import { userContext } from '../App'
import Notifications from './Notifications';
import NavIcon from '../images/navIcon.png'
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import DocumentSideBar from './DocumentSideBar';
const Navbar = () => {
  let navigate = useNavigate();
  const [Notificationbar, setNotificationbar] = useState(false)
  let location = useLocation();
  const showNotification = ()=>{
    setNotificationbar(true)
  }
  // eslint-disable-next-line no-unused-vars
  const {state, dispatch}= useContext(userContext)
  const navChanger = ()=>{
    // eslint-disable-next-line no-unused-vars
    dispatch ({type:'none', payload:'none'})
    navigate('/main')
  }
  const handler =(event)=>{
    event.preventDefault();
}

//Side bar use state of my documents
const [display, setdisplay] = useState(false)
//Close On Outside Click
useEffect(() => {
  document.addEventListener("click", handleClickOutside, true)
}, [])

const refOne = useRef(null);

const handleClickOutside = (e)=>{
  if(!refOne.current.contains(e.target)){
    console.log('clicked outside')
    setdisplay(false)
  }
  else{
    console.log('clicked inside')
  }
}
  return (
    
    <>
    
    {
         
         (state === 'none') && 
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
      <form className="d-lg-flex d-md-flex" >
      <Link className="btn btn-outline-primary me-2 rounded-pill" to='/signup'>Register</Link>
        <Link className="btn btn-outline-primary rounded-pill" to='/Login'>Sign In</Link>
      </form>
      </div>
      </div>
</nav>
      </>
}
{    
     (state === 'user')&&
     
     
     <>
     {(location.pathname !== '/userdocs')?
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
          <Link className={`nav-link ${(location.pathname === "/main" || location.pathname === "/" )?"active-link":"nav-link"}`} aria-current="page" to="/main">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/templates"?"active-link":"nav-link "}`}  to="/templates">Stamp Paper Templates</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/about"?"active-link":"nav-link"}`} to="/about">About Us</Link>
        </li>
      </ul>
     
      <form className="d-flex" >
      <Link className="btn btn-outline-primary mx-2 rounded-pill" to='/userdocs'>My Documents</Link>
      <button className='btn logOut-icon' to='/main'><LogoutIcon onClick={navChanger}/></button>
      </form>
      </div>
      </div>
</nav>
      :
      <nav className="navbar navbar-expand-lg fixed-top doc-nav text-light shadow">
   <div className="container-fluid">
     <Link className="navbar-brand text-light" to="/main"><img src={NavIcon} alt="" width="30px" height="24px" className="d-inline-block align-text-top" />
       Stamp Automation System</Link>
     <div  id="navbarSupportedContent">      
       <ul className=" navbar-nav me-auto mb-2 mb-lg-0 doc-nav-icon d-lg-flex"><li className='nav-item'>
      
       <MenuIcon className='doc-menu' style={{fontSize:50}} onClick={()=>setdisplay(true)} ref={refOne}/>
        </li></ul>
       
     
       </div>
       </div>
 </nav>
      }
      {
        display && <DocumentSideBar  setdisplay={setdisplay}/>
      }
      </>
      }
      {(state === 'lawyer')&& 
      <> 
     { 
     (location.pathname !== '/Lawyerdocuments')?
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
      <form className="d-flex" onSubmit={handler}>
        <button className='notifications-icon bg-light text-dark' >
        <Badge anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }} badgeContent={1} color="secondary">
        <NotificationsSharpIcon className='me-1 mt-1' onClick={showNotification}/>
        
</Badge>
      
      </button>
      <Link className="btn btn-outline-primary mx-2 rounded-pill" to='/Lawyerdocuments'>My Documents</Link>
      <Link className='btn' to='/main'><LogoutIcon onClick={navChanger}/></Link>
      </form>
      </div>
      </div>
</nav></>:
<nav className="navbar navbar-expand-lg fixed-top doc-nav text-light shadow">
   <div className="container-fluid">
     <Link className="navbar-brand text-light" to="/main"><img src={NavIcon} alt="" width="30px" height="24px" className="d-inline-block align-text-top" />
       Stamp Automation System</Link>
       
     <div  id="navbarSupportedContent" className='d-flex'>      
       <ul className="me-auto mb-2 mb-lg-0 doc-nav-icon d-flex">
        <li className='d-flex'>
        <button className='notifications-icon mt-2 me-3' >
        <Badge  badgeContent={1} color="secondary">
        <NotificationsSharpIcon onClick={showNotification}/>
        
</Badge>
      
      </button>
        </li>
        
        <li className='d-flex'>
      
       <MenuIcon className='doc-menu' style={{fontSize:50}} onClick={()=>setdisplay(true)} ref={refOne}/>
        </li></ul>
       
     
       </div>
       </div>
 </nav>
      }
      {
        display && <DocumentSideBar  setdisplay={setdisplay}/>
      }
      </>   
} 
    {
      
  (Notificationbar=== true) && <Notifications setNotificationbar={setNotificationbar}/>
  
}
</>
  )
}
export default Navbar;