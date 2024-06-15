import React, { useState, useEffect } from 'react';
import './fakePeople.css';

const FakePeople = () => {
  const [users, setUsers] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/users');
        const data = await response.json();
        setUsers(data);
        
      } catch (err) {
        setError('Failed to fetch user data.');
        console.error(err);
      }
    };

    fetchData();
  }, []); 

  const handleNextClick = () => {
    setRandomNumber(Math.floor(Math.random() * users.length));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!users.length) {
    return <div>Loading...</div>;
  }

  const randomUser = users[randomNumber];

  return (
    <div className="user">
      <h1>{randomUser.name}</h1>
      <img src={randomUser.avatar} alt="User Avatar" />
      <button onClick={handleNextClick}>Next</button> 
    </div>
  );
};

export default FakePeople;
