import React from 'react';
import ButtonPrimary from '../Button/ButtonPrimary';
import ButtonSecondary from '../Button/ButtonSecondary';
import './Car.css'

function Car({imgSrc,model,testDrive}) {
  return <div className="car">
      <div className="car__img">
          <img src={imgSrc} alt={model} />
          <h2 className="car__model">{model}</h2>
          </div>
          <div className="car__actions">
            <ButtonPrimary name="Book Now" />
            {testDrive && <ButtonSecondary name="Test Drive" />}
          </div>
      <div className="car__info">
        <span>Request a Call </span> to speak with a product specialist
      </div>

  </div>;
}

export default Car;
