import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const DocumentSideBar = (prop) => {
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.clear();
    navigate("/main");
  };
  const visible = () => {
    prop.setdisplay(false);
  };

  // const abc=(event)=>{event.preventDefault()}
  return (
    <div className="doc-sideBar">
      <div className="closeIconNav">
        <CloseIcon
          style={{ fontSize: 30 }}
          className="iconDoc"
          onClick={visible}
        />
      </div>
      <div>
        <Link
          className="btn bg-primary text-white doc-sideBarbtn"
          to="/accountpage"
        >
          Account Page
        </Link>
        <p className="doc-sideBarbtn-p">{/*underline */}</p>
      </div>
      <div>
        <ul>
          <li className="docBarLi">
            <Link to="/StampAutomationSystem" className="Link">
              Home
            </Link>
          </li>
          <li className="docBarLi">
            <Link to="/templates" className="Link">
              Stamp Paper Templates
            </Link>
          </li>
          <li className="docBarLi">
            <Link to="/about" className="Link">
              About Us
            </Link>
          </li>
        </ul>
        <p className="doc-sideBarbtn-p">{/*underline */}</p>
      </div>
      <div className="ms-4 mb-3">
        Sign Out{" "}
        <button className="border-0 ms-0 bg-white Link" onClick={LogOut}>
          {" "}
          <LogoutIcon />
        </button>
      </div>
      <p className="doc-sideBarbtn-p">{/*underline */}</p>
      <div className="ms-4">
        <FacebookOutlinedIcon
          className="me-2"
          style={{ fontSize: 30, backgroundColor: "white" }}
        />
        <LinkedInIcon
          className="me-2"
          style={{ fontSize: 30, backgroundColor: "white" }}
        />
        <InstagramIcon
          className="me-2"
          style={{ fontSize: 30, backgroundColor: "white" }}
        />
        <TwitterIcon
          className="me-2"
          style={{ fontSize: 30, backgroundColor: "white" }}
        />
        <p className="mt-3 sideBarp">contact@stampautomationsystem.com</p>
      </div>
    </div>
  );
};

export default DocumentSideBar;
