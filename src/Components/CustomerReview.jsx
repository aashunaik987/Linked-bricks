import React from 'react'
import '../Components/CustomerReview.css'
import a1 from '../assets/a1.svg';
import a2 from '../assets/a2.svg';
import a3 from '../assets/a3.svg';
import CarouselItem from './CarouselItem';

const people = [
  {
    img:a1,
    name: 'Guy Hawkins(landlord)',
    date: 'Jun 21,2021',
    desc:'Our property sale was Professionally handled ny Linked Bricks throughout the entire process...'
  },
  {
    img:a2,
    name: 'Kelly(buyer)',
    date: 'Jun 21,2021',
    desc:'Wanted an online agent to market my bunglow and rang loads to see how they answered the phone...'
  },
  {
    img:a3,
    name: 'Mabel Stones(seller)',
    date: 'Jun 21,2021',
    desc:'Our property sale was Professionally handled ny Linked Bricks throughout the entire process...'
  },
  {
    img:a2,
    name: 'Guy Hawkins(landlord)',
    date: 'Jun 21,2021',
    desc:'Our property sale was Professionally handled ny Linked Bricks throughout the entire process...'
  },
  {
    img:a3,
    name: 'Mabel Stones(seller)',
    date: 'Jun 21,2021',
    desc:'Our property sale was Professionally handled ny Linked Bricks throughout the entire process...'
  },
]

function CustomerReview() {

  return (
    <>
    <div className='reviewbox'><h1 style={{ textAlign: 'left', fontSize: 60, marginLeft: 100, marginBottom: 20, marginTop: 20 }}>
          Customer Review
          <button id="cus">See all reviews</button>
      </h1>
          
          
          
      </div>
      <div>
             <p style={{ textAlign: 'left', fontSize: 30, marginLeft: 100, marginBottom: 20, marginTop: 20, fontWeight:'bold'}}>See what our client's are saying</p> 
      </div>
      <div className='carousel'> 
        <div className='inner'>
          {
            people.map((item) => {
              return <CarouselItem item={item} />;
            })
          }

        </div>

      </div>
      
      </>
  )
}

export default CustomerReview