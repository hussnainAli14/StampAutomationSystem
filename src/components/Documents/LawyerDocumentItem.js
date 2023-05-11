import React from 'react'
import Title from 'react-vanilla-tilt'
import { useNavigate } from 'react-router-dom';

const LawyerDocumentItem = (props) => {
  const navigate = useNavigate();
let DocumentData;
const showTargetDocument = (e)=>{
  // newArray = props.transaction.filter((i)=>i._id===e.target.value)
  // localStorage.setItem('writer',newArray[0].sender)
  DocumentData = props.transaction.transaction.stampDetail;
  let id = props.id;
  console.log('stamps',DocumentData)
  navigate('/viewDocument',{state:{content:DocumentData,id:id,transaction:props.transaction}})

}
  return (
    <div className='navbar-margin'  >
       <div className="card doc-card-style" >
       <Title className="doc-tilt" style={{max:10, glare:true, "maxGlare":1.4, easing:"cubicBezier(.03,.98,.52,.99)"}}>
  <img src={props.image} className="card-img-top doc-img-style" alt="loading"/>
  <div className="card-body cardBodyStyle">
    <h5 className="card-title doc-card-title">{props.title}</h5>
    {/* <p className="card-text doc-card-text">{props.desc}</p> */}
    <button type="button" onClick={showTargetDocument} className="btn btn-primary doc-btn-preview"> Preview</button>
{/* {localStorage.setItem('id',props.id)} */}
    <button type="button" className="btn btn-primary doc-btn"> Download</button>
  </div>
  </Title>
</div>
  </div>
  )
}

export default LawyerDocumentItem