import {React, useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import UserDocumentItems from './UserDocumentItems';
import templateImg from '../../images/template0.png'
import vehiclesAgreement from '../../images/vehiclesAgreement.png'

import axios from '../../axios/Axios'


const UserDocuments = () => {
  const [Docs, setDocs] = useState([])
// let id;
  const getdocs = async()=>{
const publicKey = localStorage.getItem('public')

    try{
    let response = await axios.get(`api/v1/blockchain/findTransactions/${publicKey}`)
    if(response.data.status === "success"){
      console.log('repomse',response.data.data.STAMPS)
      // setId(response.data.data.)
      setDocs(response.data.data.STAMPS)
      console.log('api response',Docs)
    }}
    catch(error){
      console.log(error)
    }
  }
let location = useLocation();
//   const [documents, setDocuments] = useState([])

//   const getDocuments = async()=>{
//     const publickey = localStorage.getItem('public')
//     try{
// let res = await axios.get(`/api/v1/blockchain/findTransactions/${publickey}`)
// if(res.data.status === 'success'){
//   console.log('success')
// setDocuments(res.data.data.stamps)
// }
//     }
//     catch(error){
//         console.log(error)
//     }
// }
let length = Docs.length
// const docs = location.state.documents;
// console.log(docs)
useEffect(()=>{
  getdocs()
  console.log('doc',Docs)
},[])
// getdocs()
//   const data = [
//     {
//         cardKey:1,
//        image: templateImg,
//        title:"Card title1",
//        desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
//      },
//      {
//         cardKey:2,
//         image:templateImg,
//         title:"Card title2",
//         desc:"Some quick example text to build on the card title and make up the bulk of the card's content."

//      },
//      {
//         cardKey:3,
//         image:templateImg,
//         title:"Card title3",
//         desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
//      },
//      {
//         cardKey:4,
//         image:templateImg,
//         title:"Card title4",
//         desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
//      },
//      {
//         cardKey:5,
//         image:templateImg,
//         title:"Card title5",
//         desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
//      },

//      {
//         cardKey:6,
//         image:templateImg,
//         title:"Card title6",
//         desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
//      },
//      {
//       cardKey:7,
//       image:templateImg,
//       title:"Card title6",
//       desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
//    },
//    {
//     cardKey:8,
//     image:templateImg,
//     title:"Card title6",
//     desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
//  }
// ]
  return(
    <>
    <div className='navbar-margin-doc Doc-details pb-3 d-lg-flex d-md-flex'>
    {/* <button onClick={getdocs}style={{color:'black'}}>Test</button> */}

    <div className='d-lg-flex d-md-flex'>
    <input type='text' className='navbarInput mt-lg-4 mt-md-5' placeholder='Search'/>
    <button className='btn rounded-pill doc text-white mt-lg-4 mt-md-5 ms-lg-2 ms-md-2 ps-3 pt-1 pe-3'>Search</button> 
    </div >
    <div className='d-lg-flex doc-details-info'>
    <p className='Doc-Details-p'>Documents Created :<span style={{color:'white'}}>{(length <'10')?'0'+length:length}</span> </p>  
    {/* <p className='Doc-Details-p ms-lg-5'>Sort:</p>
    <button className='doc-Details-btn'>Date</button>
    <button className='doc-Details-btn' id='doc-btn-2'>A-Z</button> */}
     </div>
     </div> 
    <div className='row userDocument' >
      {
        length === 0?
        <p className='docText' style={{color:'white', textAlign:'center', minHeight:'70vh', paddingTop:'15%'}}>No Documents to Show</p>:
        Docs.map((doc)=>{
          return <div className='col-lg-4 col-md-6' key={doc.fromAddress}>
          <UserDocumentItems id={doc._id} transaction={doc} image={vehiclesAgreement} title={doc.transaction.stampName} />
          
          </div>
        })
      }
    </div>
    </>
    // <UserPanelVerification/>
  )
}

export default UserDocuments