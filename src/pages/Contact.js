// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  const styles = {
    container: {
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: '#F4F1EE',
      color: '#2D3A0F',
      padding: '40px 20px',
      maxWidth: '1000px',
      margin: 'auto'
    },
    title: {
      fontSize: '2.5rem',
      color: '#4B830D',
      marginBottom: '30px',
      textAlign: 'center'
    },
    infoSection: {
      marginBottom: '40px'
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: '1.6'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      marginBottom: '40px'
    },
    input: {
      padding: '10px 15px',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #ccc'
    },
    textarea: {
      minHeight: '100px',
      fontFamily: 'inherit',
      padding: '10px 15px',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #ccc'
    },
    button: {
      padding: '12px',
      backgroundColor: '#4B830D',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '1rem'
    },
    map: {
      border: 0,
      width: '100%',
      height: '300px',
      borderRadius: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>

      {/* Contact Info */}
      <div style={styles.infoSection}>
        <p style={styles.paragraph}>
          <strong>Vyapar India Association</strong><br />
          13/110 A-Aak, Yamuna Nagar Colony,<br />
          Tarna Bazar, Shivpur, Varanasi, U.P. – 221003<br />
          📧 Email: <a href="mailto:info@vyaparindiaassociation.com">info@vyaparindiaassociation.com</a><br />
          📞 Phone: 8160480947, 8881077704, 8881077703
        </p>
      </div>

      {/* Contact Form */}
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input style={styles.input} type="text" placeholder="Your Name" required />
        <input style={styles.input} type="email" placeholder="Your Email" required />
        <textarea style={styles.textarea} placeholder="Your Message..." required />
        <button style={styles.button} type="submit">Send Message</button>
      </form>

      {/* Map */}
      <iframe
        title="VIA Location"
        style={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.542646502015!2d82.9860285!3d25.3464735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31f4cf1b19fb%3A0xf6a1db69345ad6e1!2sTarna%20Bazar%2C%20Shivpur%2C%20Varanasi%2C%20Uttar%20Pradesh%20221003!5e0!3m2!1sen!2sin!4v1712776436545!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Contact;
