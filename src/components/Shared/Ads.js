import React from "react";

const Ads = ({ UpdateAds }) => {
  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "calc(100% - 2rem)",
      height: "calc(100% - 2rem)",
      background:'linear-gradient(to right, #2d3748, #1a202c)',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      padding:"1rem"
    },
    popup: {
      position: "relative",
      padding: "3rem",
      borderRadius: "12px",
      // width: "100%",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#2d3748"
    },
    closeButton: {
      position: "absolute",
      top: "5px",
      right: "10px",
      fontSize: "40px",
      fontWeight: "bold",
      color: "white",
      cursor: "pointer",
      border: "none",
      background: "none",
    },
    image: {
      maxWidth:"192px",
      borderRadius: "8px",
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button style={styles.closeButton} 
            onClick={() => {
              localStorage.setItem("Ads", "false");
              UpdateAds("false");
            }}>
          &times;
        </button>
        <img src="/assets/image.png" alt="Refer and Earn" style={styles.image} />
      </div>
    </div>
  );
};

export default Ads;
