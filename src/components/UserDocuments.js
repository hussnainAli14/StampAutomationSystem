import {React,useContext} from 'react'
// import { Link } from 'react-router-dom';
import DocumentsContext from '../reducer/Documents/DocumentsContext'
import UserDocumentItems from './UserDocumentItems';
const UserDocuments = () => {
  const context = useContext(DocumentsContext);
 //eslint-disable-next-line no-unused-vars
    const {docs,setdocs} = context;
  return(
    <>
    <div className='navbar-margin-doc Doc-details pb-3 d-lg-flex d-md-flex'>
    <div className='d-lg-flex d-md-flex'>
    <input type='text' className='navbarInput mt-lg-4 mt-md-5' placeholder='Search'/>
    <button className='btn rounded-pill doc text-white mt-lg-4 mt-md-5 ms-lg-2 ms-md-2 ps-3 pt-1 pe-3'>Search</button> 
    </div >
    <div className='d-lg-flex doc-details-info'>
    <p className='Doc-Details-p'>Documents Created :<span style={{color:'white'}}>1/10</span> </p>  
    <p className='Doc-Details-p ms-lg-5'>Sort:</p>
    <button className='doc-Details-btn'>Date</button>
    <button className='doc-Details-btn' id='doc-btn-2'>A-Z</button>
     </div>
     </div> 
    <div className='row userDocument' >

      
      {
        docs.map((doc)=>{
          return <div className='col-lg-4 col-md-6' key={doc.cardKey}>
          <UserDocumentItems image={doc.image} title={doc.title} desc = {doc.desc} />
          
          </div>
        })
       
      }
    </div>
    </>
    // <UserPanelVerification/>
  )
}

export default UserDocuments