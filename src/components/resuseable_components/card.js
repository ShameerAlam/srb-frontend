import React from 'react';
import './Card.css'; // Import a CSS file for styling (create Card.css in the same folder)

const Card = ({ title, content }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
