import React from 'react'
import Title from 'react-vanilla-tilt'
import {Link} from 'react-router-dom'
const TemplatesItem = (props) => {
  return (
     
    <div  >
        <div className="card card-style " >
        <Title className="tilt" style={{max:10, scale:1.1, glare:true, "maxGlare":1.4, easing:"cubicBezier(.03,.98,.52,.99)"}}> 
  <img src={props.image} className="card-img-top img-style" alt="loading"/>
  
  </Title>
  <Link className='cardbtn-1'to='/'>Use this Template</Link>
  </div>
      
  <div className="card-body">
    <h5 className="card-title card-desc-text ">{props.title}</h5>
    {/* <p className="card-text card-desc-text">{props.desc}</p> */}
    
  </div>
  
</div>
      
      
  )
}

export default TemplatesItem;