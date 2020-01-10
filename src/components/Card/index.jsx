import React from 'react';
import './Card.scss';


function Card({ acctNum, acctType, amt, img, className, children }) {
  return (
    <div className="card">
      <div className="contents">
        <div className="details">
          <h2>{acctType}</h2>
          <p>{acctNum}</p>
          <h2 className="amt">{amt}</h2>
        </div>
        <div className={`card-icon ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;