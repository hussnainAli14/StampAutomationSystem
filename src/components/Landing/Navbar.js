import React, { useState, useEffect, useRef,useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { Badge } from "@mui/material";
import Notifications from "../Notification/Notifications";
import NavIcon from "../../images/navIcon.png";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import DocumentSideBar from "../Documents/DocumentSideBar";
import {getNotification} from '../../ApiService/NotificationFunction'
import { array1 } from "../../ApiService/NotificationFunction";
import { getDocuments } from "../../ApiService/FindStamp";
// import StateContext from "../../StateContext/StateContext";
const Navbar = () => {
  let navigate = useNavigate();
// console.log('NAV NOTIFICATION',props.notification)
const [documents, setDocuments] = useState([])
const userType = localStorage.getItem("userType");

const docFunction = ()=>{
getDocuments(setDocuments);
if(userType === 'user')
{
  navigate('/userdocs',{
    state:{
      documents:documents
    }
  })
}
else{
  navigate('/Lawyerdocuments',{
    state:{
      documents:documents
    }
  })
}
}

  const userId = localStorage.getItem("userId");
  // const notification = useContext(StateContext)
  // console.log(notification)

  let length;
  const [Notificationbar, setNotificationbar] = useState(false);
  const [notification, setNotification]=useState([]);
  let location = useLocation();
  const showNotification = (e) => {
    setNotificationbar(true);
  };
  const handler = (event) => { 
    event.preventDefault();
  };
  const LogOut = () => {
    localStorage.clear();
    navigate("/StampAutomationSystem");
  };
  //Side bar use state of my documents
  const [display, setdisplay] = useState(false);
console.log(array1)
  const refOne = useRef(null);

  // const handleClickOutside = (e) => {
  //   if (!refOne.current.contains(e.target)) {
  //     setdisplay(false);
  //   } else {
  //     console.log("clicked inside");
  //   }
  // };

  useEffect(() => {
    getNotification(setNotification)
  },[])
  // getNotification(setNotification)
  
  return (
    <>
      {userId === null && (
        <>
          <nav className="navbar navbar-expand-lg fixed-top bg-light text-dark shadow">
            <div className="container-fluid">
              <Link className="navbar-brand " to="/StampAutomationSystem">
                <img
                  src={NavIcon}
                  alt=""
                  width="30px"
                  height="24px"
                  className="d-inline-block align-text-top"
                />
                Stamp Automation System 
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse nav-text"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className={`nav-link p-3  ${
                        location.pathname === "/StampAutomationSystem"
                          ? "active-link"
                          : "nav-link p-3 "
                      }`}
                      aria-current="page"
                      to="/StampAutomationSystem"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link p-3 ${
                        location.pathname === "/templates"
                          ? "active-link"
                          : "nav-link p-3 "
                      }`}
                      to="/templates"
                    >
                      Stamp Paper Templates
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link p-3  ${
                        location.pathname === "/about"
                          ? "active-link"
                          : "nav-link p-3 "
                      }`}
                      to="/about"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
                <form className="d-lg-flex d-md-flex">
                  <Link
                    className="btn btn-outline-primary me-2 rounded-pill"
                    to="/signup"
                  >
                    Register
                  </Link>
                  <Link
                    className="btn btn-outline-primary rounded-pill"
                    to="/Login"
                  >
                    Sign In
                  </Link>
                </form>
              </div>
            </div>
          </nav>
        </>
      )}
      {userId && userType === "user" && (
  // getNotification(setNotification)
        // {}
        <>
        {/* {getNotification(setNotification)} */}
          {location.pathname !== "/userdocs" ? (
            <nav className="navbar navbar-expand-lg fixed-top bg-light text-dark shadow">
              <div className="container-fluid">
                <Link className="navbar-brand " to="/StampAutomationSystem">
                  <img
                    src={NavIcon}
                    alt=""
                    width="30px"
                    height="24px"
                    className="d-inline-block align-text-top"
                  />
                  Stamp Automation System
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse nav-text"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${
                          location.pathname === "/StampAutomationSystem" 
                            ? "active-link"
                            : "nav-link"
                        }`}
                        aria-current="page"
                        to="/StampAutomationSystem"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${
                          location.pathname === "/templates"
                            ? "active-link"
                            : "nav-link "
                        }`}
                        to="/templates"
                      >
                        Stamp Paper Templates
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${
                          location.pathname === "/about"
                            ? "active-link"
                            : "nav-link"
                        }`}
                        to="/about"
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>

                  <form className="d-flex">
                  <button className="notifications-icon bg-light text-dark me-2">
                        <Badge
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          badgeContent={notification.length}
                          color="secondary"
                        >
                          <NotificationsSharpIcon
                            className="me-1 mt-1"
                            onClick={(e)=>{
                              e.preventDefault()
                              showNotification()}}

                          />
                        </Badge>
                      </button>
                    <button
                      className="btn btn-outline-primary mx-2 rounded-pill"
                      // to="/userdocs"
                      onClick={
                        docFunction}
                      
                    >
                      My Documents
                    </button>
                    <button className="btn logOut-icon">
                      <LogoutIcon onClick={LogOut} />
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          ) : (
            <nav className="navbar navbar-expand-lg fixed-top doc-nav text-light shadow">
              <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/StampAutomationSystem">
                  <img
                    src={NavIcon}
                    alt=""
                    width="30px"
                    height="24px"
                    className="d-inline-block align-text-top"
                  />
                  Stamp Automation System
                </Link>
                <div id="navbarSupportedContent">
                  
                  <ul className=" navbar-nav me-auto mb-2 mb-lg-0 doc-nav-icon d-lg-flex">
                    <li>
                    <button className="notifications-icon bg-dark text-dark mt-2 me-2">
                        <Badge
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          badgeContent={notification.length}
                          color="secondary"
                        >
                          <NotificationsSharpIcon
                            // className="me-1 mt-1"
                            sx={{color:'white',paddingTop:'2px'}}
                            onClick={showNotification}
                          />
                        </Badge>
                      </button>
                    </li>
                    <li className="nav-item">
                      <MenuIcon
                        className="doc-menu"
                        style={{ fontSize: 50 }}
                        onClick={() => setdisplay(true)}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          )}
          {display && <DocumentSideBar setdisplay={setdisplay} />}
        </>
      )}
      {userId && userType === "lawyer" && (
        <>
        {/* {getNotification(setNotification)} */}
          {location.pathname !== "/Lawyerdocuments" ? (
            <>
              <nav className="navbar navbar-expand-lg fixed-top bg-light text-dark shadow">
                <div className="container-fluid">
                  <Link className="navbar-brand " to="/StampAutomationSystem">
                    <img
                      src={NavIcon}
                      alt=""
                      width="30px"
                      height="24px"
                      className="d-inline-block align-text-top"
                    />
                    Stamp Automation System
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse nav-text"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link
                          className={`nav-link p-3  ${
                            location.pathname === "/StampAutomationSystem"
                              ? "active-link"
                              : "nav-link p-3 "
                          }`}
                          aria-current="page"
                          to="/StampAutomationSystem"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={`nav-link p-3 ${
                            location.pathname === "/templates"
                              ? "active-link"
                              : "nav-link p-3 "
                          }`}
                          to="/templates"
                        >
                          Stamp Paper Templates
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={`nav-link p-3  ${
                            location.pathname === "/about"
                              ? "active-link"
                              : "nav-link p-3 "
                          }`}
                          to="/about"
                        >
                          About Us
                        </Link>
                      </li>
                    </ul>
                    <form className="d-flex" onSubmit={handler}>
                      <button className="notifications-icon bg-light text-dark">
                        <Badge
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          badgeContent={notification.length}
                          color="secondary"
                        >
                          <NotificationsSharpIcon
                            className="me-1 mt-1"
                            onClick={showNotification}
                          />
                        </Badge>
                      </button>
                      <button
                        className="btn btn-outline-primary mx-2 rounded-pill"
                        onClick={
                          docFunction}
                      >
                        My Documents
                      </button>
                      <button className="btn">
                        <LogoutIcon onClick={LogOut} />
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </>
          ) : (
            <nav className="navbar navbar-expand-lg fixed-top doc-nav text-light shadow">
              <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/StampAutomationSystem">
                  <img
                    src={NavIcon}
                    alt=""
                    width="30px"
                    height="24px"
                    className="d-inline-block align-text-top"
                  />
                  Stamp Automation System
                </Link>

                <div id="navbarSupportedContent" className="d-flex">
                  <ul className="me-auto mb-2 mb-lg-0 doc-nav-icon d-flex">
                    <li className="d-flex">
                      <button className="notifications-icon mt-2 me-3">
                        <Badge badgeContent={notification.length} color="secondary">
                          <NotificationsSharpIcon onClick={showNotification} />
                        </Badge>
                      </button>
                    </li>

                    <li className="d-flex">
                      <MenuIcon
                        className="doc-menu"
                        style={{ fontSize: 50 }}
                        onClick={() => setdisplay(true)}
                        ref={refOne}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          )}
          {display && <DocumentSideBar setdisplay={setdisplay} />}
        </>
      )}
      {Notificationbar === true && (
        <Notifications setNotificationbar={setNotificationbar} notification={notification} length={length}/>
      )}
    </>
  );
};
export default Navbar;
