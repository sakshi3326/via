import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import sectors from '../data/sectors';

const FocusSectors = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const styles = {
    container: {
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: '#F4F1EE',
      color: '#2D3A0F',
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: 'auto',
    },
    title: {
      fontSize: '2.5rem',
      textAlign: 'center',
      marginBottom: '30px',
      color: '#4B830D',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '25px',
      marginBottom: '40px', // Added margin to separate grid from button
    },
    card: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
      transition: '0.3s',
      ':hover': {
        transform: 'scale(1.03)',
      },
    },
    icon: {
      width: '60px',
      height: '60px',
      marginBottom: '15px',
    },
    name: {
      fontSize: '1.1rem',
      fontWeight: '600',
    },
    exploreButton: {
      display: 'block',
      margin: '0 auto',
      padding: '12px 30px',
      fontSize: '1rem',
      backgroundColor: '#4B830D',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      ':hover': {
        backgroundColor: '#3D660F',
      },
    },
  };

  // Function to handle button click
  const handleExploreClick = () => {
    navigate('/explore'); // Navigate to the '/explore' route
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Focus Sectors – Invest Rural U.P</h1>
      <div style={styles.grid}>
        {sectors.map((sector, index) => (
          <div key={index} style={styles.card}>
            <img src={sector.icon} alt={sector.name} style={styles.icon} />
            <div style={styles.name}>{sector.name}</div>
          </div>
        ))}
      </div>
      {/* Explore Here Button */}
      <button style={styles.exploreButton} onClick={handleExploreClick}>
        Explore Here
      </button>
    </div>
  );
};

export default FocusSectors;