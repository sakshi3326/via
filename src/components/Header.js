// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 40px',
      backgroundColor: '#2E5314',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    logo: {
      fontSize: '1.9rem',
      fontWeight: 'bold',
      color: '#FFCC00',
    },
    navLinks: {
      display: 'flex',
      gap: '25px',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'color 0.3s',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>UP Industrial Sangam</div>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/sectors" style={styles.link}>Focus Sectors</Link>
        <Link to="/model" style={styles.link}>Working Model</Link>
        <Link to="/odop" style={styles.link}>ODOP</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
