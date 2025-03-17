import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import districts from "../data/districts";
import { useLocation } from "react-router-dom";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const SelectLocation = () => {
  const location = useLocation();
  const formData = location.state?.formData;
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [filter, setFilter] = useState("All");
  const [productMatchedDistricts, setProductMatchedDistricts] = useState([]);
  const [showListModal, setShowListModal] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState(null);


  useEffect(() => {
    if (formData?.product) {
      const matched = districts.filter((d) =>
        d.product.toLowerCase().includes(formData.product.toLowerCase())
      );
      setProductMatchedDistricts(matched);
    } else {
      setProductMatchedDistricts(districts);
    }
  }, [formData]);

  const styles = {
    container: {
      fontFamily: "'Segoe UI', sans-serif",
      padding: "40px 20px",
      backgroundColor: "#F4F1EE",
      color: "#2D3A0F",
      textAlign: "center",
    },
    title: {
      fontSize: "2.5rem",
      color: "#4B830D",
      marginBottom: "10px",
    },
    filter: {
      marginBottom: "20px",
    },
    mapContainer: {
      height: "600px",
      width: "100%",
      maxWidth: "1000px",
      margin: "auto",
      border: "2px solid #ccc",
      borderRadius: "10px",
      overflow: "hidden",
    },
    select: {
      padding: "10px",
      fontSize: "1rem",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    noMatch: {
      margin: "20px 0",
      color: "red",
      fontSize: "1.1rem",
    },

    // Modal styles
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    },
    modal: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      width: "90%",
      maxWidth: "800px",
      maxHeight: "90vh",
      overflowY: "auto",
      position: "relative",
    },
    closeBtn: {
      position: "absolute",
      top: "10px",
      right: "20px",
      fontSize: "1.5rem",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "#333",
    },
    row: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#f6f6f6",
      padding: "15px 20px",
      borderRadius: "10px",
      marginBottom: "15px",
    },
    rowLeft: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    dp: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid #4B830D",
    },
    name: {
      fontSize: "1rem",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    description: {
      fontSize: "0.9rem",
      color: "#555",
    },
    connectBtn: {
      backgroundColor: "#4B830D",
      color: "white",
      padding: "8px 16px",
      borderRadius: "20px",
      border: "none",
      cursor: "pointer",
    },
  };

  const productTypes = ["All", ...new Set(districts.map((d) => d.type))];
  const filteredDistricts =
    filter === "All"
      ? productMatchedDistricts
      : districts.filter((d) => d.type === filter);

  // Dummy 10 entries (You can replace with real API later)
  const dummyConnections = Array.from({ length: 10 }, (_, i) => ({
    name: `Business ${i + 1}`,
    image: `https://randomuser.me/api/portraits/men/${i + 10}.jpg`,
    desc: "Experienced ODOP entrepreneur in your region.",
  }));

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Select Your District</h1>

      {/* Filter Dropdown */}
      <div style={styles.filter}>
        <label>
          <strong>Filter by Product Type:</strong>{" "}
          <select
            style={styles.select}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            {productTypes.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filteredDistricts.length === 0 && (
        <div style={styles.noMatch}>
          ❌ No districts found{" "}
          {filter === "All"
            ? `for product "${formData?.product}"`
            : `for type "${filter}"`}
        </div>
      )}

      {/* Map */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          margin: "auto",
          aspectRatio: "1.2",
          overflow: "hidden",
          borderRadius: "20px",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          marginBottom: "40px",
        }}
      >
        {/* Background Map */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        >
          <MapContainer
            center={[26.8467, 80.9462]}
            zoom={7}
            scrollWheelZoom
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

{filteredDistricts.map((district, idx) => (
  <Marker
    key={idx}
    position={district.coords}
    eventHandlers={{
      click: () => {
        setSelectedDistrict(district); // Update selected district
        // setShowListModal(true); 
      },
    }}
  />
))}
            {selectedDistrict && (
              <Popup
                position={selectedDistrict.coords}
                onClose={() => setSelectedDistrict(null)}
              >
                {/*select this district button */}
                <div>
                  <h3>{selectedDistrict.name}</h3>
                  <p>
                    <strong>ODOP:</strong> {selectedDistrict.product}
                  </p>
                  <p>
                    <strong>Type:</strong> {selectedDistrict.type}
                  </p>
                  {/* Display the product image */}
                  <div style={{ margin: "20px 0" }}>
                    <img
                      src={selectedDistrict.image}
                      alt={selectedDistrict.product}
                      style={{
                        width: "100%",
                        maxWidth: "300px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  {/* Display the description */}
                  <p>
                    <strong>How it works:</strong>{" "}
                    {selectedDistrict.description}
                  </p>
                  {/* Select This District button */}
                  <button
                    style={{
                      padding: "8px 14px",
                      backgroundColor: "#4B830D",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => setShowListModal(true)}
                  >
                    Select This District
                  </button>
                </div>
              </Popup>
            )}
          </MapContainer>
        </div>

        {/* Transparent UP PNG Overlay */}
        <img
          src="https://banner2.cleanpng.com/20180926/hjk/kisspng-clip-art-portable-network-graphics-madhyanchal-vid-uday-5bab07ee742eb9.7228672815379353424759.jpg"
          alt="UP Outline"
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.5,
            mixBlendMode: "multiply",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Elegant Modal Popup */}
      {showListModal && (
  <div style={styles.modalOverlay}>
    <div style={styles.modal}>
      <button
        style={styles.closeBtn}
        onClick={() => setShowListModal(false)}
      >
        &times;
      </button>
      <h2 style={{ color: "#4B830D", marginBottom: "20px" }}>
        Connect with Businesses in {selectedDistrict.name}
      </h2>

      {selectedDistrict.businesses?.map((item, idx) => (
        <div key={idx} style={styles.row}>
          <div style={styles.rowLeft}>
            <img src={item.image} alt="dp" style={styles.dp} />
            <div>
              <div style={styles.name}>
                {item.name} <span title="Verified">✅</span>
              </div>
              <div style={styles.description}>{item.desc}</div>
            </div>
          </div>
          <button
  style={styles.connectBtn}
  onClick={() => {
    setSelectedBusiness(item);
    setShowConfirmPopup(true);
  }}
>
  Connect
</button>

        </div>
      ))}
    </div>
  </div>
)}

      {/* Confirm Message Popup */}
      {showConfirmPopup && (
        <div style={styles.modalOverlay}>
          <div
            style={{ ...styles.modal, maxWidth: "400px", textAlign: "center" }}
          >
            <button
              style={styles.closeBtn}
              onClick={() => setShowConfirmPopup(false)}
            >
              &times;
            </button>
            <h3 style={{ color: "#4B830D" }}>✅ Message Sent</h3>
            <p style={{ marginTop: "15px", fontSize: "1.1rem" }}>
  {selectedBusiness?.desc}<br />
  Details have been sent to your registered email 📩
</p>

            <button
              style={{ ...styles.connectBtn, marginTop: "20px" }}
              onClick={() => setShowConfirmPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectLocation;
