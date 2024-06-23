import React, { useState } from 'react';
import { landmarks, Landmark } from './data'; 
import './cardElement.css';
import Button from '../button/Button';

function LandmarkCard({ landmark, onDelete }: { landmark: Landmark; onDelete: () => void }) {
  return (
    <div className="card">
      <img src={landmark.image} alt={landmark.name} />
      <h3>{landmark.name}</h3>
      <ul>
        {landmark.interestingFacts.map(fact => (
          <li key={fact}>{fact}</li> 
        ))}
      </ul>
      <Button buttonText="Delete card" isGetButton={true} onButtonClick={onDelete} />
    </div>
  );
}

export default LandmarkCard;
