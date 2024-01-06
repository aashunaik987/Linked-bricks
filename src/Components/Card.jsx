import React from 'react'
import '../Components/Card.css'

import bubble from '../assets/Bubble.svg'

function Card(props) {
  return (
    <>
             <div className='cards'>
        <div className='card'>
          <img className='card-image' src={props.imgsrc} alt={props.houseType} />
          <div className='card-info'>
            <p className='price'>{props.price}</p>
          </div>
          <p className='house-type'>{props.houseType}</p>
          <p className='address'>{props.address}</p>
          <img src={props.img}  style={{width:300}}/>
              </div>
              
      </div>
      </>
  )
}

export default Card