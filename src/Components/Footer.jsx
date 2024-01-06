import React from 'react'
import '../Components/Footer.css'
import social from '../assets/social.svg'
function Footer() {
  return (
      <div className='footer'>
          <div className='div1'>
              
          <span> Sell your Property</span>
          <span> Rent a property</span>
          <span>About us</span>
          <span> Privacy policy</span> 
          </div>
          <div className='div2'>
          <span>Let your property</span>
          <span> Buy a property</span>
          <span> Contact us </span>
          <span>
              Terms of use
          </span>
          </div>
          <div className='icon'>
          <img src={ social} />
          </div>
          
        </div>
  )
}

export default Footer