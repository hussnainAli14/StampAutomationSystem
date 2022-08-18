import './App.css';
import './components/mediaQueries.css'
import {React, createContext, useReducer } from 'react';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import UserSignup from './components/UserSignup';
import UserSignup2 from './components/UserSignup2';
import LawyerSignup from './components/LawyerSignup';
import LawyerSignup2 from './components/LawyerSignup2';
import LawyerLoginPage from './components/LawyerLoginPage';
import Verification from './components/Verification';
import TermsCondition from './components/TermsConditions'
import PrivacyPolicy from './components/PrivacyPolicy'
import CookiePolicy from './components/CookiePolicy'
import UserSignin from './components/UserSignin'
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import Main from './components/Main';
import Templates from './components/Templates';
import AboutUs from './components/AboutUs';
import ScrollToTop from './components/ScrollToTop';
import UserDocuments from './components/UserDocuments';
import UserPanelVerification from './components/UserPanelVerification';
import AccountVerification from './components/AccountVerification';
import LawyerPanel from './components/LawyerPanel';
import LawyerAccountVerification from './components/LawyerAccountVerification';
import { initialState,reducer } from './reducer/UseReducer';
import DocumentState from './reducer/Documents/DocumentState';
import Undertaking from './components/Undertaking';
import UndertakingSecond from './components/UndertakingSecond';
import VehiclesAgreement from './components/VehiclesAgreement';
import PersonAddress from './components/PersonAddress';
import MediaRecorder from './components/MediaRecorder';
import Payment from './components/Payment';
import PropertySaleAgreement from './components/PropertySaleAgreement';
import RentAgreement from './components/RentAgreement';
import LawyerDocuments from './components/LawyerDocuments';
import Notifications from './components/Notifications';
import CardRotator from './components/CardRotator';
// import { Scrollbars } from 'react-custom-scrollbars-2';

// import downloadAndQe from './components/downloadAndQe';
// import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export const userContext = createContext();
export const verificationContext = createContext();
function App() {
 const [state, dispatch] = useReducer(reducer, initialState);
 
  return (
    // <Scrollbars style={{width:'100px' , height:'500px'}}>
    <BrowserRouter>
    
    <DocumentState>
    <userContext.Provider value={{state, dispatch}}>
      
    <ScrollToTop/>
        <Navbar/>
        
     <Routes>
     <Route path='/rotator' element={<CardRotator />}/>
     <Route index element={<Main />}/>
     <Route path='/main' element={<Main />}/>
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
    {/* <Route path='/downloadAndQr' element={<downloadAndQe/>}/> */}
    </Routes>
    <Footer/>
    </userContext.Provider>
    </DocumentState>
    
    </BrowserRouter>
    // </Scrollbars>
  );
}

export default App;

