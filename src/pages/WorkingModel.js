import React, { useState } from 'react';

const WorkingModel = () => {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: '#212121',
      color: '#ffffff',
      padding: '40px 20px',
      // maxWidth: '1200px',
      margin: 'auto',
    },
    title: {
      fontSize: '2.5rem',
      color: '#ffffff',
      textAlign: 'center',
      marginBottom: '30px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    tabs: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '30px',
      flexWrap: 'wrap',
    },
    tabButton: (active) => ({
      padding: '10px 20px',
      borderRadius: '25px',
      background: active ? 'linear-gradient(90deg, #4ce0e2, #8d0b93)' : '#333',
      color: active ? 'white' : '#a7a7a7',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: '0.3s ease',
      boxShadow: active ? '0 4px 15px rgba(76, 224, 226, 0.3)' : 'none',
      ':hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
      },
    }),
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      padding: '20px',
    },
    card: {
      position: 'relative',
      textAlign: 'center',
      padding: '40px 20px',
      borderRadius: '2px 16px',
      transition: '0.3s ease-in-out',
      border: '2px solid transparent',
      background:
        'linear-gradient(#212121, #212121) padding-box, linear-gradient(145deg, transparent 35%, #4ce0e2, #8d0b93) border-box',
      color: '#ffffff',
      cursor: 'pointer',
      margin: '40px auto',
      maxWidth: '400px',
      ':hover': {
        rotate: '2deg',
        background: 'linear-gradient(90deg, #4ce0e2, #8d0b93)',
      },
    },
    serviceOrder: {
      position: 'absolute',
      top: '-37px',
      right: '23px',
      fontSize: '50px',
      fontWeight: '700',
      color: '#ccc',
      fontFamily: "'Poppins', sans-serif",
      transition: '0.2s ease-in-out',
    },
    icon: {
      width: '64px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transformStyle: 'preserve-3d',
      margin: '0 auto 20px',
      background: 'linear-gradient(90deg, #4ce0e2 2.6%, #8d0b93 100%)',
      borderRadius: '50%',
      transition: '0.3s ease-out',
      fontSize: '20px',
      position: 'relative',
    },
    iconBefore: {
      position: 'absolute',
      content: '""',
      left: '-8px',
      top: '-8px',
      height: '100%',
      width: '100%',
      transform: 'translateZ(-1px)',
      background: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '40%',
      transition: '0.3s ease-out',
    },
    cardTitle: {
      fontWeight: '700',
      marginBottom: '15px',
      fontSize: '24px',
    },
    paragraph: {
      lineHeight: '24px',
      fontSize: '14px',
      marginBottom: '0px',
    },
  };

  const phases = {
    'Phase 1': [
      
      {
        title: 'Rural Trade Shows across U.P.',
        description:
          'Organizing trade shows to connect rural businesses with potential buyers and investors.',
      },
      {
        title: 'Industrial Technology Promotion in Rural Sectors',
        description:
          'Promoting advanced industrial technologies to uplift rural sectors and enhance productivity.',
      },
      {
        title: 'Buyer & Seller Meets',
        description:
          'Facilitating direct interactions between buyers and sellers to boost rural trade.',
      },
      {
        title: 'Investment Programme Initiation in Rural Sectors',
        description:
          'Facilitating direct interactions between buyers and sellers to boost rural trade.',
      },
      {
        title: 'ODOP Manufacturer & Exporter Meet',
        description:
          'Facilitating direct interactions between buyers and sellers to boost rural trade.',
      },
      {
        title: 'FPO & Buyer Meet',
        description:
          'Facilitating direct interactions between buyers and sellers to boost rural trade.',
      },
    ],
    'Phase 2': [
      {
        title: 'Digital Promotion of Industries & Manufacturers',
        description:
          'Leveraging digital platforms to promote rural industries and manufacturers.',
      },
      {
        title: 'Introducing New Technologies In Rural Sectors',
        description:
          'Promoting advanced industrial technologies to uplift rural sectors and enhance productivity.',
      },
      {
        title: 'ODOP Manufacturing Process Showcase',
        description:
          'Showcasing the manufacturing processes of One District One Product (ODOP) initiatives.',
      },
      {
        title: 'Brand Awareness via Interviews & Media',
        description:
          'Enhancing brand visibility through media interviews and campaigns.',
      },
    ],
    'Phase 3': [
      {
        title: 'Launch of E-Commerce Platform for Rural Sector',
        description:
          'Creating an e-commerce platform to connect rural businesses with global markets.',
      },
      {
        title: 'B2B, B2C, B2G Market Model',
        description:
          'Implementing business models to cater to diverse market needs.',
      },
      {
        title: 'Pan India Buyer & Exporter Connectivity',
        description:
          'Connecting rural businesses with buyers and exporters across India.',
      },
    ],
  };

  const [activePhase, setActivePhase] = useState('Phase 1');

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Working Model – Invest Rural U.P</h1>

      {/* Tabs */}
      <div style={styles.tabs}>
        {Object.keys(phases).map((phase) => (
          <button
            key={phase}
            style={styles.tabButton(phase === activePhase)}
            onClick={() => setActivePhase(phase)}
          >
            {phase}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div style={styles.cardGrid}>
        {phases[activePhase].map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.serviceOrder}>{index + 1}</div>
            <div style={styles.icon}>
              <span>🚀</span>
              <div style={styles.iconBefore}></div>
            </div>
            <p style={styles.cardTitle}>{item.title}</p>
            <p style={styles.paragraph}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingModel;