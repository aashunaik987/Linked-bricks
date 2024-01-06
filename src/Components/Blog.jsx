import React, { useState, useEffect } from 'react';
import Card from './Card';
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import ui from '../assets/UI.svg';
import '../Components/Card.css';

const blog = [
  {
    img: bg1,
    houseType: 'Which properties are selling best right now?',
  },
  {
    img: bg2,
    houseType: 'What do higher interest rates mean for the housing market?',
  },
  {
    img: bg3,
    houseType: 'The best areas to live in North London',
  },
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      
      setActiveIndex((prevIndex) => (prevIndex + 1) % blog.length);
    }, 2000); 
    return () => {
      
      clearInterval(intervalId);
    };
  }, []); 

  return (
    <div>
      <h1 style={{ textAlign: 'left', fontSize: 60, marginLeft: 100, marginBottom: 20, marginTop: 20 }}>
       Blog
      </h1>
      <div className='cards-container'>
        {blog.map((item, index) => (
          <Card key={index} imgsrc={item.img} houseType={item.houseType} isActive={index === activeIndex} />
        ))}
          </div>
          <img src={ ui} />
      </div>
      
  );
}

export default Carousel;
