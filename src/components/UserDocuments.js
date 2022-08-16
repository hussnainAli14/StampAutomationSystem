import {React,useContext} from 'react'
import DocumentsContext from '../reducer/Documents/DocumentsContext'
import UserDocumentItems from './UserDocumentItems';
// import UserPanelVerification from './UserPanelVerification'
// import { Link } from 'react-router-dom';
// import { userContext} from '../App';
const UserDocuments = () => {
  const context = useContext(DocumentsContext);
 //eslint-disable-next-line no-unused-vars
    const {docs,setdocs} = context;
  return(
    <div className='row navbar-margin userDocument' >
      {
        docs.map((doc)=>{
          return <div className='col-lg-4 col-md-6' key={doc.cardKey}>
          <UserDocumentItems image={doc.image} title={doc.title} desc = {doc.desc} />
          
          </div>
        })
       
      }
    </div>
    // <UserPanelVerification/>
  )
}

export default UserDocuments