import {React,useContext} from 'react'
import {Link} from 'react-router-dom'
import { userContext } from '../App'
import mainFirstPic from '../images/mainFirstPic.png'
import vehiclesAgreement from '../images/vehiclesAgreement.png'
import rentAgreement from '../images/rentAgreement.png'
import propertyAgreement from '../images/propertyAgreement.png'

// import test from '../images/template0.png
const Main = () => {
  // eslint-disable-next-line no-unused-vars
  const {state, dispatch}= useContext(userContext)
  return (
    <div className='mainBg' >
    {/* >
      <div className='FirstSection'>
      <h1 className=' first-heading text-center'>Stamp Automation System</h1>
      </div> */}
      <div className='mainForm'>
    <div className='main' >
       <h1 className='mainForm_heading'>The online stamp paper website helps you to make stamp paper at home with full security of your data</h1>
    </div>
    <section className='first-section'>
        <div className='headings'>
        <h4>Build your stamp agreements in a shorter time at home</h4>
        <h4><b>Try it for free</b></h4>
        {!state?<Link className='mainFormbtn-1'to='/templates'>Get Started Now </Link>:<Link className='mainFormbtn-1'to='/templates'>Build Stamp Agreement </Link>}
        </div> 
         <div className='headings-img'>
 <img src={mainFirstPic} alt='loading' className='mainImage'/>
        </div> 
     </section>
    <section className='mainForm_templates'>
      <div >
      <h2 className='mfth'><b>Agreement Templates of every category</b></h2>
      
      <p className='mft-p'>You can pick one of our handcrafted stamp templates.You can fill your information in prewritten templates of all types.You can select any template according to your need and will. It's too easy even if you haven't use any application like this before.</p>
      </div>
      <div className='row justify-content-center mt-5'>
        
        <div className='col-md-3'>
      <div className='card'>
       <img src={vehiclesAgreement} className='mainCardImg' alt='loading'/>
      </div>
      <div className='card-desc'>
      <h4><b>Vehicles Sale Template</b></h4>
      <span className='card-p'>Edit the template and create the agreement of your need.</span>
      </div>
      </div>
       <div className='col-md-3'>
      <div className='card'>
      <img src={rentAgreement} className='mainCardImg' alt='loading'/>
      </div>
      <div className='card-desc'>
      <h4><b>Property Rent Template</b></h4>
      <span className='card-p'>Edit the template and create the agreement of your need.</span>
      </div>
      </div>
      <div className='col-md-3'>
      <div className='card'>
      <img src={propertyAgreement} className='mainCardImg' alt='loading'/>
      </div>
      <div className='card-desc'>
      <h4><b>Property Sale Template</b></h4>
      <span className='card-p'>Edit the template and create the agreement of your need.</span>
      </div>
      </div>
      </div>
      <div className='mainBtn'>
      <Link className='mainForm_templates_btn'to='/templates'>Discover More Templates </Link>
      </div>
    </section>
    <section className='aboutBuildingStamp'>
       <h2><b>Build Your Template Fast and Easy</b></h2>
       <p className='abs-p'>This website is fast and easy to use. Nothing complex or complicated. Just few steps to login and you are ready to go.</p>
    <div className='row'>
           <div className='col-md-6 d-flex justify-content-end'>
            <div className='number-img'>

            </div>
           <div className='text'>
              <div className='text-content'>
          <h4><b>Pick a Template</b></h4>
          <p className='pickTemplate-p'>Pick a template according to your need without searching too much.</p>
          </div>
            </div>
            
            
           </div>
           <div className='col-md-5'>
           <div className='pickTemplate-img'>

</div>
           </div>
           </div>
           <div className='row mt-5'>
           <div className='col-md-6 d-flex justify-content-end'>
           <div className='fillBlanks-img'>

</div>
           </div>
           <div className='col-md-6 '>
            <div className='fillBlanksnumber-img'>

            </div>
           <div className='text-blanks'>
              <div className='textblank-content'>
          <h4><b>Fill In the Blanks</b></h4>
          <p className='pickTemplate-p'>Fill in the blanks with the required data to make an agreement of your desire.</p>
          </div>
            </div>
            
            
           </div>
           
           </div>
           <div className='row mt-5 mb-5'>
           <div className='col-md-6 d-flex justify-content-end'>
            <div className='download-number-img'>

            </div>
           <div className='text'>
              <div className='text-content'>
          <h4><b>Download Your Agreement</b></h4>
          <p className='pickTemplate-p'>After filling the data in template and a few verifications after that, you can download your agreement with one click.</p>
          </div>
            </div>
            
            
           </div>
           <div className='col-md-6'>
           <div className='downloadTemplate-img'>

</div>
           </div>
           </div>
            <div className='ready'>
<div className='ready-text'>
<h2 >Ready to write online stamp agreements</h2>
{!state?<Link className='mainFormbtn-1 btn-position'to='/templates'>Get Started Now </Link>:<Link className='mainFormbtn-1 btn-position'to='/templates'>Build Stamp Agreement</Link>}
</div>
<div className='ready-img'>
  
</div>
    </div> 
          
    </section>
    </div>
    </div>
  )
}

export default Main