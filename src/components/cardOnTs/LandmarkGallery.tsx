import React, { useState } from 'react';
import { landmarks, Landmark } from './data';
import styles from './cardElement.module.css';
import LandmarkCard from './CardElement';

function LandmarkGallery() {
    const [landmarksToShow, setLandmarksToShow] = useState(landmarks);
    
  
    const handleDelete = (id: string) => {
      setLandmarksToShow(prevLandmarks => prevLandmarks.filter(l => l.id !== id));
      
    };
  
    return (
      <div>
        <div className={styles.title}><h1><span className={styles.blue}>Landmark</span> <span className={styles.red}>Gallery</span> <span>Romania</span></h1></div>
        <div className={styles.gallery}>
        {landmarksToShow.map(landmark => (
          <LandmarkCard 
            key={landmark.id} 
            landmark={landmark} 
            onDelete={() => handleDelete(landmark.id)} 
          />
        ))}
      </div>
      
      </div>
    );
  }
  
  export default LandmarkGallery;
  