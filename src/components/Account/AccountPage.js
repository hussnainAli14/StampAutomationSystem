import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import LockIcon from "@mui/icons-material/Lock";
import AccountImag from "../../images/accountpage.png";
import ResetPassword from "../ResetPassword";
import axios from "../../axios/Axios";
import Spinner from "../../SpinnerHolder/Spinner";
// import { getImage } from "../ApiService/apiService";
const AccountPage = () => {
  const [AccountImage, setAccountImage] = useState({
    preview: AccountImag,
    raw: "",
  });
  //eslint-disable-next-line no-unused-vars
  const [photo, setPhoto] = useState(null);
  const [profilepic, setProfilepic] = useState("");
  const [requestChange, setrequestChange] = useState(false);
  //eslint-disable-next-line no-unused-vars
  const [name,setName] = useState('');
  const userType = localStorage.getItem('userType')
  const userId = localStorage.getItem("userId")
  
  //Selecting Profile Image
  const imageHandler = (e) => {
    console.log(e.target.files);
    setAccountImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  };

  // Getting the Image From Database
  let res;
  const getImage = async () => {
   
    try {
      res = await axios.get(`/api/v1/users/${userId}`);
      if(res.data.data.user.photo === ""){
        setProfilepic(AccountImag)
      }
      setProfilepic(
        `http://127.0.0.1:200/public/img/${res.data.data.user.photo}`
      );
     
      setName(res.data.data.user.firstName + res.data.data.user.lastName  )
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImage();
  });

  // Uploading Image to data base
  const profileImage = async () => {
    const formData = new FormData();
    formData.append("photo", AccountImage.raw);
    try {
      let res = await axios.post(
        `/api/v1/users/uploadUserPhoto/${userId}`,
        formData
      );
      
      if (res.data.status === "success") {
        setPhoto(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    {/* { 
      
      loading ? <Spinner/>: */}
      <div className="accountpage pb-5">
        <div className="accountHolder">
          <p> {name?name:'Account Holder Name'} </p>
        </div>

        <div className="delete-Upload d-flex mt-5 mb-3">
          <div>
            <input
              type="file"
              name="file"
              id="input"
              className="account-cardbtn-1"
              onChange={imageHandler}
            />
            <label htmlFor="input" className="upload">
              Select Photo
            </label>
          </div>
          <div>
            <DeleteIcon
              className="delete"
              onClick={() => setAccountImage(AccountImag)}
            />
          </div>
        </div>

        <div className="aaa">
          <input
            type="file"
            name="file"
            id="input"
            accept="image/*"
            onChange={imageHandler}
          />
          <label htmlFor="input" className="account-page-Btn">
            <img src={profilepic?profilepic:AccountImag.preview} alt="loading" className="AccountImage" />
          </label>
          <div className="text-center">
            <p id="acc-type" className=" mt-3">
              {userType}
            </p>
            <button className="uploadBtn" onClick={profileImage}>
              Upload Photo
            </button>
          </div>
        </div>

        <div className="resetPassword">
          <div className="d-flex">
            <LockIcon />
            <p className="mt-1 ms-2 fw-bold fs-large security">Security</p>
          </div>
          <div>
            <p className="password">Password</p>
            <button
              className="passwordChange"
              onClick={() => setrequestChange(true)}
            >
              Request Password Change
            </button>
          </div>
        </div>
        {requestChange && (
          <ResetPassword
            className="transitionShow"
            setrequestChange={setrequestChange}
            requestChange={requestChange}
          />
        )}
      </div>
    </>
  );
};

export default AccountPage;
