// src/pages/Home.js
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#F9F7F1",
      color: "#2E5314",
      // padding: "20px",
      overflowX: "hidden",
    },
    hero: {
      background:
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1607412079264-5e3f9a7e8633) center/cover no-repeat",
      height: "700px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
      // borderRadius: "15px",
      marginBottom: "40px",
      transition: "transform 0.3s ease",
    },
    heroTitle: {
      fontSize: "4rem",
      margin: 0,
      color: "#FFCC00",
      fontWeight: "700",
    },
    heroSubtitle: {
      fontSize: "1.8rem",
      marginTop: "15px",
      fontWeight: "400",
    },
    section: {
      padding: "80px 20px",
      maxWidth: "1200px",
      margin: "auto",
    },
    sectionRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      alignItems: "center",
      justifyContent: "space-between",
    },
    sectionRowReverse: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row-reverse",
      gap: "40px",
      alignItems: "center",
      justifyContent: "space-between",
    },
    textContainer: {
      flex: 1,
      minWidth: "300px",
    },
    imageContainer: {
      flex: 1,
      minWidth: "300px",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    },
    imageBanner: {
      width: "100%",
      height: "auto",
      transition: "transform 0.3s ease",
    },
    sectionTitle: {
      fontSize: "2.5rem",
      marginBottom: "30px",
      color: "#4B830D",
      fontWeight: "600",
    },
    paragraph: {
      fontSize: "1.2rem",
      lineHeight: "1.8",
      color: "#444",
    },
    highlightedBox: {
      background: "linear-gradient(135deg, #fffbe6, #fff3b2)",
      padding: "40px",
      borderRadius: "15px",
      borderLeft: "8px solid #D98E04",
      marginTop: "50px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    },
    highlightedTitle: {
      color: "#D98E04",
      fontSize: "2rem",
      marginBottom: "20px",
      fontWeight: "700",
    },
    sponsorSection: {
      marginTop: "80px",
      textAlign: "center",
      padding: "40px 20px",
      backgroundColor: "#ffffff",
      borderRadius: "15px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    },
    sponsorTitle: {
      fontSize: "2rem",
      color: "#4B830D",
      marginBottom: "30px",
      fontWeight: "600",
    },
    sponsorLogo: {
      height: "100px",
      margin: "20px",
      objectFit: "contain",
      transition: "transform 0.3s ease",
    },
    teamSection: {
      display: "flex",
      gap: "40px",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "50px",
    },
    teamCard: {
      backgroundColor: "#ffffff",
      borderRadius: "15px",
      padding: "30px",
      textAlign: "center",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      maxWidth: "300px",
      transition: "transform 0.3s ease",
    },
    teamImage: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
      borderRadius: "15px",
      marginBottom: "20px",
    },
    footer: {
      textAlign: "center",
      fontSize: "1rem",
      color: "#666",
      marginTop: "80px",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "15px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    },
  };

  const sponsors = [
    {
      name: "Ultratech",
      logo: "https://tse2.mm.bing.net/th?id=OIP.87ANT9iZDVnhxg5EValthgHaC6&pid=Api&P=0&h=180",
    },
    {
      name: "Adani Solar",
      logo: "https://www.adanisolar.com/-/media/Project/AdaniSolar/Common/Adani-Solar-library",
    },
    {
      name: "Amul",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Amul_official_logo.svg/1200px-Amul_official_logo.svg.png",
    },
    {
      name: "Bikaji",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQc3kd4TNbPfigq-bMTq6njdRTwU6S3YbeDA&s",
    },
    {
      name: "Reliance Digital",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPdvsEUmrIf4RHf7bftzU-8PGsZjJ9OtfFQ&s",
    },
    {
      name: "Luminous",
      logo: "https://cdn.freelogovectors.net/wp-content/uploads/2023/12/luminous-logo-freelogovectors.net_.png",
    },
    {
      name: "APEDA",
      logo: "https://getvectorlogo.com/wp-content/uploads/2018/10/agricultural-and-processed-food-products-export-development-authority-apeda-vector-logo.png",
    },
    {
      name: "John Deere",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/John_Deere_logo.svg/1200px-John_Deere_logo.svg.png",
    },
    {
      name: "Cipla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Cipla_logo.svg/1024px-Cipla_logo.svg.png",
    },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  return (
    <div style={styles.container}>
      {/* Hero */}
      <div style={{ ...styles.hero, position: "relative", overflow: "hidden" }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/video2.mp4?alt=media&token=26ea520f-c277-47fb-9fd6-9fe5edd38e2d"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Text Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={styles.heroTitle}>Invest Rural - U.P</h1>
          <p style={styles.heroSubtitle}>
            Connecting Technology & Creating Business Opportunity
          </p>
        </div>
      </div>

      {/* About */}
      <div style={styles.section}>
        <div style={styles.sectionRow}>
          <div style={styles.textContainer}>
            <h2 style={styles.sectionTitle}>About the Program</h2>
            <p style={styles.paragraph}>
              The Invest Rural U.P program by Vyapar India Association (VIA) is
              a flagship initiative to revolutionize investment in the rural
              sector of Uttar Pradesh. It facilitates industrial growth,
              empowers entrepreneurs, and creates opportunities in sectors like
              agriculture, renewable energy, education, fintech, and more.
            </p>
          </div>
          <div style={styles.imageContainer}>
            <img
              style={styles.imageBanner}
              src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/rural.webp?alt=media&token=566ef8bc-e484-4f5c-bac9-d88b41aa53d0"
              alt="Rural Development"
            />
          </div>
        </div>
      </div>

      {/* ODOP */}
      <div style={styles.section}>
        <div style={styles.sectionRowReverse}>
          <div style={styles.textContainer}>
            <h2 style={styles.highlightedTitle}>
              🌾 ODOP: One District One Product
            </h2>
            <p style={styles.paragraph}>
              ODOP is the heartbeat of Invest Rural-UP. Each district of Uttar
              Pradesh is rich with a unique product, craft, or tradition. This
              program focuses on empowering ODOP manufacturers, facilitating
              their growth through exhibitions, digital promotions, and
              connecting them with buyers across B2B, B2C, and B2G channels.
            </p>
          </div>
          <div style={styles.imageContainer}>
            <img
              style={styles.imageBanner}
              src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/odop.webp?alt=media&token=4fe019b9-3c19-4c74-be6a-123b459a4891"
              alt="ODOP Banner"
            />
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Meet the Team</h2>
        <div style={styles.teamSection}>
          <div style={styles.teamCard}>
            <img
              style={styles.teamImage}
              src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/kunal.jpg?alt=media&token=faf9144b-4876-4c86-9473-b8599b26ad18"
              alt="CEO"
            />
            <h3>Mr. Kunal Mishra</h3>
            <p>Founder & CEO, Vyapar India Association</p>
          </div>
          <div style={styles.teamCard}>
            <img
              style={styles.teamImage}
              src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/priya.jpg?alt=media&token=f1043605-5aab-40bb-9b87-e94bb0abc2b4"
              alt="CEO"
            />
            <h3>Miss Priya Pandey</h3>
            <p>Investor, Vyapar India Association</p>
          </div>
          <div style={styles.teamCard}>
            <img
              style={styles.teamImage}
              src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/via.jpg?alt=media&token=c513065a-2eac-4ae5-955d-d8fded28aa12"
              alt="Organization"
            />
            <h3>Vyapar India Association</h3>
            <p>Empowering rural business through technology & opportunity</p>
          </div>
        </div>
      </div>

      {/* Sponsors */}
      <div style={styles.sponsorSection}>
        <h2 style={styles.sponsorTitle}>Our Proud Sponsors</h2>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={1000}
          arrows={false}
        >
          {sponsors.map((sponsor, idx) => (
            <img
              key={idx}
              src={sponsor.logo}
              alt={sponsor.name}
              style={styles.sponsorLogo}
            />
          ))}
        </Carousel>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        © {new Date().getFullYear()} Vyapar India Association | Invest Rural -
        UP
      </div>
    </div>
  );
};

export default Home;
