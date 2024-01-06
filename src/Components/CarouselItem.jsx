import React from 'react'
import '../Components/CorouselItem.css'
function CarouselItem({item}) {
  return (
      <div className='carousel-item'>
          
          <div className='carousel-item-text'>
          <img className='carousel-img' src={item.img} />
              {item.name} <br/>
              {item.date}
              </div>
          <div>
            
          </div>
          <div className='desc'>
              {item.desc}
          </div>
      </div>
     
  )
}

export default CarouselItem