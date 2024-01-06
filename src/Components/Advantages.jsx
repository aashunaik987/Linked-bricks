import React from 'react';
import f1 from '../assets/ff1.svg';
import f2 from '../assets/ff2.svg';
import f3 from '../assets/ff3.svg';
import f4 from '../assets/ff4.svg';
import f5 from '../assets/ff5.svg'; 
import f6 from '../assets/ff6.svg';
import '../Components/Advantages.css'
const whyChooseUs = [
    {
        img: f1,
        title: "Hassle-Free Searching",
        description: "Say goodbye to tedious property searches. Our intuitive platform allows effortless filtering for hassle-free results."
    },
    {
        img: f2,
        title: "Direct Communication",
        description: 'Linked Bricks enables direct communication with landlords for questions, negotiations, and transparent experiences.'
    },
    {
        img: f3,
        title: 'Verified Listings',
        description: 'Browse with confidence – Linked Bricks verifies all listings for your safety and quality assurance.'
    },
    {
        img: f4,
        title: 'Local Market Insights',
        description: 'Get informed with local market insights on property trends, prices, and neighborhoods for confident decisions.'
    },
    {
        img: f5,
        title: 'No Middlemen',
        description: 'Linked Bricks eliminates intermediaries, granting you more control for faster, direct real estate interactions and decisions.'
    },
    {
        img: f6,
        title: 'Dedicated Customer Support',
        description: 'Our dedicated customer support team is ready to assist you at every step of your property search journey.'
    }
];

function Advantages() {
    return (
        <div className="advantages-container">
            <h1 style={{ textAlign: 'left', fontSize: 60, marginLeft: 100, marginBottom: 20, marginTop: 20 }}>Why Choose Us</h1>
            <div className="advantages-grid">
                <div className="left-column">
                    {whyChooseUs.slice(0, 3).map((choose, index) => (
                        <div key={index} className="horizontal-card">
                            <img src={choose.img} alt={`Why Choose Us ${index + 1}`} />
                            <div className="card-info">
                                <span style={{fontWeight:'bolder',fontSize:20}}>{choose.title}</span>
                                
                                <span>{choose.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="right-column">
                    {whyChooseUs.slice(3).map((choose, index) => (
                        <div key={index} className="horizontal-card">
                            <img src={choose.img} alt={`Why Choose Us ${index + 4}`} />
                            <div className="card-info">
                                <span style={{fontWeight:'bolder',fontSize:20}}>{choose.title}</span>
                               
                                <span>{choose.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Advantages;
