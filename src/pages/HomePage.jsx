// src/pages/HomePage.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/order');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f8f8f8' }}>
      <button 
        onClick={handleButtonClick} 
        style={{
          padding: '20px 40px',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#FF5733',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#C70039'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#FF5733'}
      >
        Acıktım
      </button>
    </div>
  );
};

export default HomePage;
