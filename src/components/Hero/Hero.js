import React from 'react';
import './Hero.css'

function Hero() {
  return <div className="heroBlock">
      <div className="hero__info">
          <div className="hero__infoText">
              <h1>Nissan GTR </h1>
              <h4> 
                  Book a test drive now and <span> visit your nearest showroom </span>
              </h4>
          </div>
          <div className="hero__actions">
              <button className="hero-btn-primary">Book Now</button>
              <button className="hero-btn-secondary">Customise</button>
          </div>
      </div>
  </div>;
}

export default Hero;
