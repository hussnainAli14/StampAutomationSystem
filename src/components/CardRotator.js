import React from 'react'
import vehiclesAgreement from '../images/vehiclesAgreement.png';
const CardRotator = () => {
  return (
    <div className='rotator'>
      <div className='card'>
        <div className='card__content'>
           <div className='card__front'>
           <img className='img-style' src={vehiclesAgreement} alt='loading'/>
           </div>
         <div className='card__back'>
        <h3 className='cardSubtitle'>VehiclesAgreement</h3>
        <p className='descText'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         </div>
        </div>
      </div>
    </div>
  )
}

export default CardRotator