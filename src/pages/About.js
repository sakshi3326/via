// src/pages/About.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const About = () => {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#F9F9F6",
      color: "#2D2D2D",
      padding: "50px 20px",
      lineHeight: "1.8",
      // maxWidth: '1200px',
      margin: "auto",
    },
    title: {
      fontSize: "3rem",
      color: "#3D660F",
      marginBottom: "40px",
      textAlign: "center",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    sectionContainer: {
      background: "linear-gradient(135deg, #FFFFFF, #F0F9EB)",
      borderRadius: "15px",
      padding: "40px",
      marginBottom: "40px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      ":hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
      },
    },
    sectionTitle: {
      fontSize: "2rem",
      marginTop: "20px",
      marginBottom: "20px",
      color: "#5E3C1B",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "1px",
      borderBottom: "2px solid #4B830D",
      display: "inline-block",
      paddingBottom: "10px",
    },
    paragraph: {
      fontSize: "1.1rem",
      marginBottom: "20px",
      color: "#444",
      lineHeight: "1.8",
    },
    list: {
      marginLeft: "20px",
      fontSize: "1.1rem",
      listStyleType: "disc",
      color: "#444",
      lineHeight: "1.8",
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
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      ":hover": {
        transform: "scale(1.02)",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
      },
    },
    chartContainer: {
      marginTop: "40px",
      padding: "30px",
      background: "linear-gradient(135deg, #FFFFFF, #F0F9EB)",
      borderRadius: "15px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      ":hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
      },
    },
  };

  // Chart Data
  const chartData = {
    labels: [
      "Industries Represented",
      "Companies Supported",
      "Projects Executed",
      "Partners",
    ],
    datasets: [
      {
        label: "VIA Achievements",
        data: [150000, 10000, 500, 200],
        backgroundColor: "#4B830D",
        borderColor: "#4B830D",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            weight: "600",
          },
        },
      },
      title: {
        display: true,
        text: "VIA Achievements in Numbers",
        font: {
          size: 20,
          weight: "700",
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
            weight: "600",
          },
        },
      },
      y: {
        grid: {
          color: "#E0E0E0",
        },
        ticks: {
          font: {
            size: 14,
            weight: "600",
          },
        },
      },
    },
  };

  return (
    <div style={styles.container}>
      {/* <h1 style={styles.title}>About Us</h1> */}
      {/* VIA Section */}
      <div style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Vyapar India Association (VIA)</h2>
        <p style={styles.paragraph}>
          Vyapar India Association (VIA) is a non-government, not-for-profit
          organization established in 2023. It is the largest business promotion
          body in India, dedicated to uplifting the rural industrial sector of
          Uttar Pradesh and supporting the nation's broader economic vision.
        </p>
        <p style={styles.paragraph}>
          VIA has embarked on smarter initiatives that enhance the
          competitiveness of Indian industry by focusing on rapid upgradation in
          areas such as quality, corporate governance, knowledge management,
          energy efficiency, and environmental sustainability.
        </p>
        <ul style={styles.list}>
          <li>
            India's largest business promotion organization, established in 2023
          </li>
          <li>Represents over 1,50,000 companies across all sectors</li>
          <li>Includes private, public, and multinational companies</li>
          <li>
            Supports industrialization and India’s growth as a global economy
          </li>
          <li>
            Advocates technology intervention and provides business platforms
          </li>
          <li>
            Builds consensus and fosters networking across all industrial
            sectors
          </li>
        </ul>
      </div>
      {/* Invest Rural - UP Section */}
      <div style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Invest Rural – U.P</h2>
        <p style={styles.paragraph}>
          Invest Rural-UP is a strategic initiative of VIA, designed to promote
          and facilitate investments in the rural sectors of Uttar Pradesh. The
          program tackles challenges faced by both emerging and existing
          industries, aiming to uplift the ecosystem for small and marginal
          entrepreneurs.
        </p>
        <ul style={styles.list}>
          <li>
            Encourages rural industrialization through investment facilitation
          </li>
          <li>Solves infrastructure and policy challenges for entrepreneurs</li>
          <li>Acts as a bridge between industries and government bodies</li>
          <li>Promotes economic growth and quality of life in rural areas</li>
        </ul>
      </div>
      
      <div
        style={{
          ...styles.sectionContainer,
          background: "linear-gradient(135deg, #4B830D, #3D660F)",
          color: "#FFF",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png" // Vision icon
            alt="Vision Icon"
            style={{ width: "50px", marginRight: "15px" }}
          /> */}
          <h2
            style={{
              ...styles.sectionTitle,
              color: "#FFF",
              borderBottom: "2px solid #FFF",
            }}
          >
            Our Vision
          </h2>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <img
            style={{
              ...styles.image,
              width: "40%",
              maxWidth: "400px",
              borderRadius: "15px",
            }}
            src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/vision.webp?alt=media&token=16c1971a-6f5b-4c73-bbb4-34e7c16debe7"
            alt="Vision"
          />
          <p style={{ ...styles.paragraph, color: "#FFF", width: "60%" }}>
            To transform Uttar Pradesh into the most preferred investment
            destination in India by acting as an industrial promoter and
            facilitator — building world-class infrastructure and creating a
            thriving business ecosystem in rural areas.
          </p>
        </div>
      </div>
      {/* Mission Section */}
      <div
        style={{
          ...styles.sectionContainer,
          background: "linear-gradient(135deg, #5E3C1B, #4B2E1A)",
          color: "#FFF",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135815.png" // Mission icon
            alt="Mission Icon"
            style={{ width: "50px", marginRight: "15px" }}
          /> */}
          <h2
            style={{
              ...styles.sectionTitle,
              color: "#FFF",
              borderBottom: "2px solid #FFF",
            }}
          >
            Our Mission
          </h2>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <p style={{ ...styles.paragraph, color: "#FFF", width: "60%" }}>
            VIA, through Invest Rural-UP, aims to attract and support
            investments in rural Uttar Pradesh. It contributes to policy
            development, facilitates project execution, and resolves issues
            faced by industries — working with transparency, responsiveness, and
            a business-friendly approach.
          </p>
          
          <img
            style={{
              ...styles.image,
              width: "40%",
              maxWidth: "400px",
              borderRadius: "15px",
            }}
            src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/mission4.webp?alt=media&token=8f482214-b398-4dfa-af74-3cd1453346bd"
            alt="Mission"
          />
         
        </div>
      </div>
      {/* Additional Info Section */}
      <div style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Our Network & Expertise</h2>
        <p style={styles.paragraph}>
          VIA has a well-established network of over 10,000 industries and
          partners, including the Government of India, NABARD, banks, PSUs,
          corporates, startups, NGOs, research institutions, and incubation
          centers.
        </p>
        <ul style={styles.list}>
          <li>Identification of potential development projects</li>
          <li>Pre-feasibility studies and baseline surveys</li>
          <li>Techno-economic project appraisals</li>
          <li>Monitoring, evaluation, and impact assessments</li>
          <li>Socio-economic research and needs assessments</li>
        </ul>
        <p style={styles.paragraph}>
          VIA is actively driving the Invest Rural-UP Program to support rural
          development, empower entrepreneurs, and bring modern technology and
          investment to rural sectors for a sustainable future.
        </p>
      </div>
      {/* Chart Section */}
      <div style={styles.chartContainer}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default About;
