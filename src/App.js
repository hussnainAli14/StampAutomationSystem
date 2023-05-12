import './App.css';
import './components/mediaQueries.css'
import {React, createContext,useEffect } from 'react';
import Navbar from './components/Landing/Navbar'
import Login from './components/SignIn/Login'
import Register from './components/Signup/Register'
import UserSignup from './components/Signup/UserSignup';
import UserSignup2 from './components/Signup/UserSignup2';
import LawyerSignup from './components/Signup/LawyerSignup';
import LawyerSignup2 from './components/Signup/LawyerSignup2';
import LawyerLoginPage from './components/SignIn/LawyerLoginPage';
import Verification from './components/Verification/Verification';
import TermsCondition from './components/Basic/TermsConditions'
import PrivacyPolicy from './components/Basic/PrivacyPolicy'
import CookiePolicy from './components/Basic/CookiePolicy'
import UserSignin from './components/SignIn/UserSignin'
import LoginPage from './components/SignIn/LoginPage';
import Footer from './components/Landing/Footer';
import Main from './components/Landing/Main';
import Templates from './components/Templates/Templates';
import AboutUs from './components/Basic/AboutUs';
import ScrollToTop from './components/ScrollToTop';
import UserDocuments from './components/Documents/UserDocuments';
import UserPanelVerification from './components/Verification/UserPanelVerification';
import AccountVerification from './components/Verification/AccountVerification';
import LawyerPanel from './components/LawyerPanel';
import LawyerAccountVerification from './components/Verification/LawyerAccountVerification';
import Undertaking from './components/Undertaking/Undertaking';
import UndertakingSecond from './components/Undertaking/UndertakingSecond';
import VehiclesAgreement from './components/Agreements/VehiclesAgreement';
import PersonAddress from './components/PersonAddress';
import MediaRecorder from './components/MediaRecorder';
import Payment from './components/Payment';
import PropertySaleAgreement from './components/Agreements/PropertySaleAgreement';
import RentAgreement from './components/Agreements/RentAgreement';
import LawyerDocuments from './components/Documents/LawyerDocuments';
import Notifications from './components/Notification/Notifications';
import axios from './axios/Axios'

// import CardRotator from './components/CardRotator';
// import {getNotification} from './ApiService/NotificationFunction'


import {
  
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import AccountPage from './components/Account/AccountPage';
import PropertyAgreement from './components/Agreements/PropertyAgreement';
import StampView from './StampView/StampView';
import ViewDocuments from './StampView/ViewDocuments';
import QrDocument from './StampView/QrDocument';
import LawyerListButton from './ListButton/LawyerListButton';
import { useState } from 'react';

export const userContext = createContext();
export const verificationContext = createContext();
export const postContext = createContext();
function App() {
  return (
      
    <> 
      <ScrollToTop/>
        <Navbar />
     {/* <BrowserRouter> */}
     
     <Routes>
     {/* <Route path='/rotator' element={<CardRotator />}/> */}
     <Route index element={<Main />}/>
     <Route path='/StampAutomationSystem' element={<Main />}/>
    <Route path="/about" element={<AboutUs />}/>
    <Route path="/userdocs" element={<UserDocuments/>}/>
    <Route path="/userpanelver" element={<UserPanelVerification />}/>
    <Route path='/templates' element={<Templates/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/UserSignin" element={<UserSignin/>}/>
    <Route path="/LoginPage" element={<LoginPage/>}/>
    <Route path="/signup" element={<Register/>}/>
    <Route path='/UserSignup' element={<UserSignup/>}/>
    <Route path='/UserSignup2' element={<UserSignup2/>}/>
    <Route path='/LawyerSignup' element={<LawyerSignup/>}/>
    <Route path='/LawyerSignup2' element={<LawyerSignup2/>}/>
    <Route path='/LawyerLoginPage' element={<LawyerLoginPage/>}/>
    <Route path='/LawyerPanel' element={<LawyerPanel/>}/>
    <Route path='/Lawyeraccountverification' element={<LawyerAccountVerification/>}/>
    <Route path='/Lawyerdocuments' element={<LawyerDocuments/>}/>
    <Route path='/notificationPanel' element={<Notifications/>}/>
    <Route path='/Verification' element={<Verification />}/>
    <Route path='/terms' element={<TermsCondition/>}/>
    <Route path='/privacy' element={<PrivacyPolicy />}/>
    <Route path='/cookie' element={<CookiePolicy/>}/>
    <Route path='/accountverification' element={<AccountVerification/>}/>
    <Route path='/undertaking' element={<Undertaking/>}/>
    <Route path='/undertaking2' element={<UndertakingSecond/>}/>
    <Route path='/vehiclesAgreement' element={<VehiclesAgreement/>}/>
    <Route path='/personaddress' element={<PersonAddress/>}/>
    <Route path='/mediarecorder' element={<MediaRecorder/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/propertyagreement' element={<PropertySaleAgreement/>}/>
    <Route path='/rentagreement' element={<RentAgreement/>}/>
    <Route path='/accountpage' element={<AccountPage/>}/>
    <Route path='/property' element={<PropertyAgreement/>}/>
    <Route path='/viewStamp' element={<StampView/>}/>
    <Route path='/viewDocument' element={<ViewDocuments/>} /> 
    <Route path='/viewDocument/:id' element={<QrDocument/>}/>
    </Routes>
    {/* </BrowserRouter>    */}
    {/* <LawyerListButton/> */}
    <Footer/>
   
    </>
  );
}

export default App;

