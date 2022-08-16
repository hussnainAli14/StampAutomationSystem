import React from 'react'
import LawyerDocumentItem from './LawyerDocumentItem'
import templateImg from '../images/template0.png'
const LawyerDocuments = () => {
    const data = [
        {
            cardKey:1,
           image: templateImg,
           title:"Card title1",
           desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
         },
         {
            cardKey:2,
            image:templateImg,
            title:"Card title2",
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
    
         },
         {
            cardKey:3,
            image:templateImg,
            title:"Card title3",
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
         },
         {
            cardKey:4,
            image:templateImg,
            title:"Card title4",
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
         },
         {
            cardKey:5,
            image:templateImg,
            title:"Card title5",
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
         },
    
         {
            cardKey:6,
            image:templateImg,
            title:"Card title6",
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
         },
         {
          cardKey:7,
          image:templateImg,
          title:"Card title6",
          desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
       },
       {
        cardKey:8,
        image:templateImg,
        title:"Card title6",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
     }
    ]
  return (
    <div className='row navbar-margin userDocument' >
      {
        data.map((doc)=>{
          return <div className='col-md-6 col-lg-4' key={doc.cardKey}>
          <LawyerDocumentItem image={doc.image} title={doc.title} desc = {doc.desc} />
          
          </div>
        })
       
      }
    </div>
  )
}

export default LawyerDocuments