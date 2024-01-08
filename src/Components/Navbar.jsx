import React, { useState } from 'react'
import '../Components/Navbar.css'
import logo from '../assets/LOGO.svg';
import home from '../assets/home.svg';
import img1 from '../assets/Rectangle 34624572.jpg';
import store from '../assets/store.svg';
import homeactivity from '../assets/home-activity.svg';
import coins from '../assets/building-coins.svg';

import search from '../assets/search.svg'

function Navbar() {
    const [clicked, setClicked] = useState(false);
    return (
      <>
          <nav>
              <img className='pic' src={logo}/>
              <div>
                  <ul id='navbar' className={clicked?"#navbar active": "#navbar"} >
                      <li>
                          <img src={home}/> Home</li>
                      <li>For sale</li>
                      <li>For rent</li>
                      <li>For investment</li>
                      <li>Blog</li>
                        <li>Sign in</li>
                        <button id='add'> <img src={home} style={{marginRight:6}}/>Add Listing</button>
                   </ul>
            </div>
              <div id='mobile'>
                  <i id='bar' className={clicked?'fas fa-times':'fas fa-bars'} onClick={() => setClicked(!clicked)}></i>
              </div>
            </nav>
            <div className='image'>
            <img src={img1} />
            <div style={{ position: 'absolute', top: '25%', left: '10%', color: 'white', fontSize:70 ,fontWeight:"bolder",fontFamily:'serif' }}>
                    <p>Discover Your</p>
                    <p>Dream Home</p> 
                    
                        <p style={{ fontSize: 40, marginTop:15 }}>Your one-stop real esate destination for buying,</p>
                    <p style={{ fontSize: 40 }}>renting and selling properties</p>    
                </div>
                <div className='bar'>
                    <ul className='bar-content'>
                        <li> <img src={store} style={{marginRight:6}} /> For Sale</li>
                        <li> <img src={ homeactivity}  style={{marginRight:6}} /> For rent</li>
                        <li> <img src={coins}  style={{marginRight:6}} /> For Investment</li>
                        <input type='text' placeholder='Enter the location'/>
                        <button> <img src={ search} /> Search</button>
                        
                    </ul>
                </div>
            </div>
            </>
  )
}

export default Navbar