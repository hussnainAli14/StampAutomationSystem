import React from 'react'
// import Title from 'react-vanilla-tilt'
import {Link} from 'react-router-dom'
const TemplatesItem = (props) => {
  return (
     
<div className='abcc'>
<div className='tempCard'>
  <div className='card__content'>
     <div className='card__front'>
     <img className='img-style' src={props.image} alt='loading'/>
     </div>
   <div className='card__back'>
  <h3 className='cardSubtitle'>{props.title}</h3>
  <p className='descText'>{props.desc}</p>
  <Link className='btn rounded-pill text-white tempBtn'to='/'>Use this Template</Link>
   </div>
  {/* </div>
  <div className='title-description'>
  <p className='mt-5 text-white pTest'>{props.title}</p>
  <p className='card-desc-text'>{props.desc}</p>
</div> */}
</div>

      </div>
      </div>
  )
}

export default TemplatesItem;