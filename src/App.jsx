import { useState } from 'react'
import './App.css'

import Navbar from './Components/Navbar';
import FeaturedProperties from './Components/FeaturedProperties';
import Advantages from './Components/Advantages';
import Blog from './Components/Blog';
import CustomerReview from './Components/CustomerReview';
import Footer from './Components/Footer';

function App() {
  

  return (
    <>
      <Navbar />
      <FeaturedProperties />
      <Advantages />
      <Blog />
      <CustomerReview />
      <Footer/>
    </>
   
      
  
  
  )
}

export default App
