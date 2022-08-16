import React,{useState} from 'react'
import DocumentsContext from './DocumentsContext'
import templateImg from '../../images/template0.png'

const DocumentState = (props) => {
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
            title:"Card title7",
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
         },
         {
            cardKey:8,
            image:templateImg,
            title:"Card title7",
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
         },
         {
            cardKey:9,
            image:templateImg,
            title:"Card title7",
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
         },
         {
            cardKey:10,
            image:templateImg,
            title:"Card title7",
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
         }
    ]
    const [docs, setdocs] = useState(data)
  return (
    <DocumentsContext.Provider value={{docs,setdocs}}>
        { props.children}    
</DocumentsContext.Provider>
  )
}

export default DocumentState;