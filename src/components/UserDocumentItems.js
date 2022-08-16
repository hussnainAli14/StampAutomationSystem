import {React} from 'react'
// import { Link } from 'react-router-dom'
import Title from 'react-vanilla-tilt'
// import templateImg from '../images/template0.png'

const UserDocumentItems = (props) => {
  return (
    <div className='navbar-margin'  >
       <div className="card doc-card-style" >
       <Title className="doc-tilt" style={{max:10, glare:true, "maxGlare":1.4, easing:"cubicBezier(.03,.98,.52,.99)"}}>
  <img src={props.image} className="card-img-top doc-img-style" alt="loading"/>
  <div className="card-body cardBodyStyle">
    <h5 className="card-title doc-card-title">{props.title}</h5>
    <p className="card-text doc-card-text">{props.desc}</p>
    <button type="button" className="btn btn-primary doc-btn">Click here to preview</button>
  </div>
  </Title>
</div>
  </div>
  
  )
}

export default UserDocumentItems