import React from 'react'
import '../Components/CorouselItem.css'
import { Carousel } from 'antd'
function CarouselItem({item}) {
    return (
          <div className='carousel-item'>
                  <div className='carousel-item-text'>
                    <img className='carousel-img' src={item.img} alt={item.name} />
                    <div>
                      {item.name} <br />
                      {item.date}
                    </div>
                  </div>
                  <div className='desc'>
                    {item.desc}
                  </div>
                </div>
              
            
          )
        }
        
     

export default CarouselItem