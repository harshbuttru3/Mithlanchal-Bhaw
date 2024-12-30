import React from 'react';
import './Intro.css'; // Import styles for the component

const Intro = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Shaping Tomorrow's </h1>
        <h1>Adventurers</h1>
        <p>Empower your spirit of adventure with quality experiences and engaging activities that foster exploration, fun, and lasting memories.</p>
        <button className="book-button">Book Your Adventure Today</button>
      </div>
      <div className="hero-image-container">
        <img src="image/Tower.jpeg" alt="A historical building with a clock tower" />
        <p className='alt'>Where nature meets excitement - a legacy of unforgettable adventures.</p>
      </div>
    </div>
  );
};

export default Intro;