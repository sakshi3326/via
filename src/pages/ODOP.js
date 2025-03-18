import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ODOP = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#F4F1EE",
      color: "#2D3A0F",
      padding: "0 20px",
    },
    hero: {
      background:
        "url(https://odopup.in/Content/Images/ODOP_banner.jpg) center/cover no-repeat",
      height: "350px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
      marginBottom: "40px",
    },
    logo: {
      width: "500px",
      height: "auto",
      filter: "drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.5))",
    },
    section: {
      maxWidth: "1200px",
      margin: "auto",
      marginBottom: "40px",
    },
    sectionTitle: {
      fontSize: "2rem",
      color: "#4B830D",
      marginBottom: "15px",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    paragraph: {
      fontSize: "1.1rem",
      lineHeight: "1.8",
      marginBottom: "20px",
      color: "#444",
    },
    cards: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "20px",
    },
    card: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      ":hover": {
        transform: "translateY(-10px)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      },
    },
    cta: {
      backgroundColor: "#4B830D",
      color: "white",
      padding: "30px 20px",
      textAlign: "center",
      borderRadius: "10px",
      marginBottom: "40px",
    },
    ctaTitle: {
      fontSize: "1.8rem",
      marginBottom: "10px",
      fontWeight: "700",
    },
    ctaButton: {
      marginTop: "15px",
      padding: "12px 30px",
      fontSize: "1rem",
      backgroundColor: "#D98E04",
      color: "white",
      border: "none",
      borderRadius: "25px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      ":hover": {
        backgroundColor: "#C07D03",
      },
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "30px 0",
    },
    image: {
      width: "100%",
      maxWidth: "600px",
      borderRadius: "15px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    },

    // Modal styles
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    },
    modal: {
      backgroundColor: "white",
      padding: "30px",
      borderRadius: "10px",
      width: "90%",
      maxWidth: "500px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      position: "relative",
    },
    input: {
      width: "100%",
      padding: "10px 12px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    submitBtn: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#4B830D",
      color: "white",
      border: "none",
      fontWeight: "bold",
      borderRadius: "5px",
      marginTop: "10px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      ":hover": {
        backgroundColor: "#3D660F",
      },
    },
    closeBtn: {
      background: "none",
      border: "none",
      fontSize: "1.5rem",
      position: "absolute",
      top: "10px",
      right: "20px",
      color: "#333",
      cursor: "pointer",
    },
  };

  const highlights = [
    "One District, One Unique Product Promotion",
    "Trade Show Representation for ODOP Manufacturers",
    "Digital Marketplace for Local Products",
    "Technology Integration for Traditional Crafts",
    "B2B, B2C, and Export Linkages",
    "Support for Packaging, Branding, and Export",
  ];

  const sectors = [
    {
      title: "Agriculture",
      description:
        "45% of products under the ODOP initiative are agriculture and agro-based.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/agri.webp?alt=media&token=f6ae55fd-9147-41ff-91cc-1576f9a67ea4",
    },
    {
      title: "Food Processing",
      description:
        "Fruit and vegetable processing, meat, poultry, dairy, seafood, packaged/convenience food, oils, beverages, and grain processing.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/food.webp?alt=media&token=550b916c-24c4-4900-bbab-bd2df6bdf28b",
    },
    {
      title: "Handicraft",
      description:
        "Handicraft jewellery, décor, and utility items made by skilled craftsmen and artisans across the country.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/handicraft.webp?alt=media&token=f8cfd104-3db3-4db4-8937-aee008d8d0c5",
    },
    {
      title: "Textile & Handloom",
      description:
        "Traditional and modern textile products from Uttar Pradesh.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/textile.webp?alt=media&token=8215c158-77d9-4d21-afa7-e23b9a2e6106",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      businessName: e.target[3].value,
      product: e.target[4].value,
    };
    navigate("/map", { state: { formData: data } });
  };

  return (
    <div style={styles.container}>
      {/* Hero Section with Logo */}
      <div style={styles.hero}>
        <img
          src="https://www.financialexpress.com/wp-content/uploads/2022/08/odop.jpg?w=1024" // Replace with your logo URL
          alt="ODOP Logo"
          style={styles.logo}
        />
      </div>

      {/* MSME Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Enabling MSME Manufacturing Ecosystem
        </h2>
        <div style={styles.imageContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/msme.webp?alt=media&token=3b715394-9653-4982-ab1a-82cb50dc7ae0"
            alt="MSME Manufacturing Ecosystem"
            style={styles.image}
          />
        </div>
        <p style={styles.paragraph}>
          India has more than 6 crore MSMEs. While these enterprises have
          tremendous potential for growth and can play a lead role in providing
          impetus to India’s GDP growth, they are constrained by lack of market,
          technical depth, and by operational inefficiencies.
        </p>
        <p style={styles.paragraph}>
          Karkhana.io seeks to catalyse the growth of MSMEs by improving their
          order book, expanding technical competencies, and digitalizing
          procurement.
        </p>
      </div>

      {/* Digitalization Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Digitalizing the supply chain</h2>
        <div style={styles.imageContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/digital.webp?alt=media&token=b603343e-f24d-4b79-83e6-3e4ce833ffcf"
            alt="Digitalizing the supply chain"
            style={styles.image}
          />
        </div>
        <p style={styles.paragraph}>
          At Vyapar E kart we have built a marketplace that allows MSMEs to
          access demands not only from India but globally and streamline their
          manufacturing supply chain through our proprietary stack enabling
          their digital transformation. By partnering with us, the MSMEs get
          access to support on Costing, Capability Matching, Project Tracking,
          and Quality Control which helps them simplify processes and grow their
          business.
        </p>
      </div>

      {/* About Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>What is ODOP?</h2>
        <div style={styles.imageContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/odop%20map.jpg?alt=media&token=36edaadb-0eaa-4321-8d29-fb0e69f75fc2"
            alt="ODOP"
            style={styles.image}
          />
        </div>
        <p style={styles.paragraph}>
          ODOP (One District One Product) is an ambitious initiative by the
          Government of Uttar Pradesh to identify and promote a unique product
          from each district. These can range from handicrafts, processed foods,
          textiles, to industrial specialties.
        </p>
        <p style={styles.paragraph}>
          Under the Invest Rural-UP program, VIA is working to digitally empower
          and globally showcase ODOP manufacturers through trade shows, supply
          chain integration, and digital marketing tools.
        </p>
      </div>

      {/* Highlights Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>ODOP Highlights</h2>
        <div style={styles.cards}>
          {highlights.map((item, index) => (
            <div key={index} style={styles.card}>
              <h3 style={{ fontSize: "1.1rem", color: "#8B5E3C" }}>✔ {item}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Sectors Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Sectors Covered Under ODOP</h2>
        <div style={styles.cards}>
          {sectors.map((sector, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.imageContainer}>
                <img
                  src={sector.image}
                  alt={sector.title}
                  style={styles.image}
                />
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  color: "#4B830D",
                  marginBottom: "10px",
                }}
              >
                {sector.title}
              </h3>
              <p style={styles.paragraph}>{sector.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How Buyers Can Join Sellers Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>How Buyers Can Join Sellers Directly</h2>
        <div style={styles.cards}>
          {/* Step 1 */}
          <div style={styles.card}>
            <div style={styles.imageContainer}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/step1.webp?alt=media&token=f4c41b55-5556-4dbe-b371-c51653d64b62"
                alt="Step 1"
                style={styles.image}
              />
            </div>
            <h3
              style={{
                fontSize: "1.2rem",
                color: "#4B830D",
                marginBottom: "10px",
              }}
            >
              Step 1: Register as a Buyer with your Product Name by clicking "Get involved" in the below section
            </h3>
            
          </div>

          {/* Step 2 */}
          <div style={styles.card}>
            <div style={styles.imageContainer}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/step2.webp?alt=media&token=ce97144f-6a21-4a7b-ab54-bfe9ea424fe5"
                alt="Step 2"
                style={styles.image}
              />
            </div>
            <h3
              style={{
                fontSize: "1.2rem",
                color: "#4B830D",
                marginBottom: "10px",
              }}
            >
              Step 2: Explore cities in the Map and Choose the Desired One
            </h3>
            
          </div>

          {/* Step 3 */}
          <div style={styles.card}>
            <div style={styles.imageContainer}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/step3.webp?alt=media&token=4201ec0e-c9c2-486c-b456-e6288f35cc7b"
                alt="Step 3"
                style={styles.image}
              />
            </div>
            <h3
              style={{
                fontSize: "1.2rem",
                color: "#4B830D",
                marginBottom: "10px",
              }}
            >
              Step 3: Get the list of Sellers
            </h3>
            
          </div>

          {/* Step 4 */}
          <div style={styles.card}>
            <div style={styles.imageContainer}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/step4.webp?alt=media&token=83344072-7eaa-4870-8692-b464c0229166"
                alt="Step 4"
                style={styles.image}
              />
            </div>
            <h3
              style={{
                fontSize: "1.2rem",
                color: "#4B830D",
                marginBottom: "10px",
              }}
            >
              Step 4: Get Details of Seller
            </h3>
            
          </div>

          {/* Step 5 */}
          <div style={styles.card}>
            <div style={styles.imageContainer}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/step5.webp?alt=media&token=6094dc70-080a-4620-ac62-58a173041458"
                alt="Step 5"
                style={styles.image}
              />
            </div>
            <h3
              style={{
                fontSize: "1.2rem",
                color: "#4B830D",
                marginBottom: "10px",
              }}
            >
              Step 5: Send Request
            </h3>
            
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ ...styles.section, ...styles.cta }}>
        <div style={styles.ctaTitle}>
          Are You an ODOP Entrepreneur or Supporter?
        </div>
        <p style={{ fontSize: "1.1rem" }}>
          Join the movement to promote your district's legacy, get featured in
          national trade shows, and take your product global.
        </p>
        <button style={styles.ctaButton} onClick={() => setShowForm(true)}>
          Get Involved
        </button>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <button style={styles.closeBtn} onClick={() => setShowForm(false)}>
              &times;
            </button>
            <h2 style={{ color: "#4B830D", marginBottom: "20px" }}>
              ODOP Registration
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                style={styles.input}
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                style={styles.input}
                type="email"
                placeholder="Email Address"
                required
              />
              <input
                style={styles.input}
                type="tel"
                placeholder="Phone Number"
                required
              />
              <input
                style={styles.input}
                type="text"
                placeholder="Business Name"
                required
              />
              <input
                style={styles.input}
                type="text"
                placeholder="Product You Want to Sell"
                required
              />
              <button style={styles.submitBtn} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ODOP;
