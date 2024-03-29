import React from 'react'
import TemplatesItem from './TemplatesItem'
import Undertaking1 from '../../images/undertaking1.png'
// import templateImg from '../images/template0.png'
import vehiclesAgreement from '../../images/vehiclesAgreement.png'
import propertyAgreement from '../../images/propertyAgreement.png'
import rentAgreement from '../../images/rentAgreement.png'
const Templates = () => {
  const  template = [
     {
        cardKey:1,
       image: vehiclesAgreement,
       title:"Vehicles Sale Agreement",
       desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
       path:'/vehiclesAgreement'
     },
     {
        cardKey:2,
        image:propertyAgreement,
        title:"Property Sale Agreement",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        path:'/propertyagreement'

     },
     {
        cardKey:3,
        image:rentAgreement,
        title:"Property Rent Agreement",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        path:'/rentagreement'
     },
     {
      cardKey:4,
      image:rentAgreement,
      title:"Property Rent Agreement",
      desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      path:'/rentagreement'
   }
     
    ]

    const affidavet = [
      {
         cardKey:5,
         image:Undertaking1,
         title:"Affidavet for Meter Connections",
         desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
         path:'/undertaking'
         
      },
 
      {
         cardKey:6,
         image:Undertaking1,
         title:"Affidavet for Institues",
         desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
         path:'/undertaking2'
      },
      {
        cardKey:7,
        image:Undertaking1,
        title:"Affidavet for Institues",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        path:'/undertaking'
     },
     {
      cardKey:8,
      image:Undertaking1,
      title:"Affidavet for Institues",
      desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      path:'/undertaking2'
   }
    ]
  return (
    <div className='templatePage'>
    <div>
        <h1 className='template-heading text-center '>Stamp Paper Templates</h1>
        <div className='template-info-div d-flex'>
            <div className='template-heading-text template-heading-text-style'>
             <h3 className=' template-heading-h3'>Pick Free Stamp Templates</h3>
             <p className='template-heading-p'>Pick one of the templates of your need and fill it. Create your stamp agreement and download  it in no time.</p>
            </div>
            <div className='template-heading-image'>

            </div>
            </div>        

    </div>
    
    <div className='row template-style'>
    <h2 className='text-center mt-5 fw-bold fs-italic '>Sale/Purchase/Rent Stamp Templates</h2>
        {template.map((element)=>{
          return <div className='col-lg-4 col-md-6' key={element.cardKey}>
          <TemplatesItem image={element.image} title={element.title} desc={element.desc} path={element.path}  />
          </div>
        })}
         
    
    
    </div>
     
    <div className='row template-style pb-5'>
    <h2 className='text-center fw-bold '>UnderTakings / Affidavets</h2>
        {affidavet.map((element)=>{
          return <div className='col-lg-4 col-md-6' key={element.cardKey}>
          <TemplatesItem image={element.image} title={element.title} desc={element.desc} path={element.path} />
          </div>
        })} 
        
    
    
    </div>
    </div>
  )
}

export default Templates