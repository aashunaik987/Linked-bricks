import React from 'react'
import Card from './Card'
import '../Components/Card.css'
import fp1 from '../assets/fp1.jpg';
import fp2 from '../assets/fp2.png';
import fp3 from '../assets/fp3.jpg';
import feature from '../assets/Features.svg'




function FeaturedProperties() {
    return (
        <>
            <h1 style={{textAlign:'left', fontSize:60 ,marginLeft:100,marginBottom:20,marginTop:20}}>Featured Properties</h1>
             <div className='cards-container'>
            <Card imgsrc={fp1} price='$4,250' houseType='Semi detached house' address='South Road Oxford OX4' img={feature} /> 
            <Card imgsrc={fp2} price='$6,250' houseType='Bungalow for rent' address='Leeds city center' img={feature} />
            <Card imgsrc={fp3} price='$2,250' houseType='PentHouse for rent' address='Manchester city' img={feature}/>
       </div>
        </>
       

  )
}

export default FeaturedProperties