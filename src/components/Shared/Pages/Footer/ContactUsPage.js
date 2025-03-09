import { height, textAlign } from "@mui/system";
import React from "react";

const ContactUs = () => {
  const styles = {
    container: {
      backgroundColor: "#1a202c",
      minHeight: "calc(100vh)",
      color: "#f7fafc",
      fontFamily: "'Poppins', sans-serif",
      display: "flex",
      flexDirection: "column",
      padding: "16px",
      // alignItems: "center",
      // justifyContent: "center",
    },
    header: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      padding:"2rem 0rem",
      textAlign:"center"
    },
    form: {
      backgroundColor: "#2d3748",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      height:"calc(80vh + 52px)"
    },
    inputGroup: {
      height:"20vh"
    },
    label: {
      display: "block",
      marginBottom: "0.5rem",
      fontSize: "2rem",
      color: "#e2e8f0",
    },
    input: {
      width: "calc(100% - 32px)",
      padding: "0.75rem 1rem",
      borderRadius: "4px",
      border: "1px solid #4a5568",
      backgroundColor: "#1a202c",
      color: "#e2e8f0",
      fontSize: "1rem",
      height:"calc(18vh - 68.6px)"
    },
    button: {
      padding: "0.75rem 1.5rem",
      backgroundColor: "#2d3748",
      color: "#e2e8f0",
      fontSize: "2rem",
      fontWeight: "bold",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      height:"calc(20vh - 12.8px)",
      width:"100%"
    },
    buttonHover: {
      backgroundColor: "#38a89d",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Us</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="name">
            Name
          </label>
          <input
            style={styles.input}
            type="text"
            id="name"
            placeholder="Enter your Name"
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="phone">
            Phone Number
          </label>
          <input
            style={styles.input}
            type="text"
            id="phone"
            placeholder="Enter the Phone Number"
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="email">
            Email
          </label>
          <input
            style={styles.input}
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="message">
            Message
          </label>
                    <input
            style={styles.input}
            type="text"
            id="message"
            placeholder="Write your message here"
            required
          />
        </div>
        {/* <div style={styles.inputGroup}>
          <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          type="submit"
        >
          Submit
        </button>
        </div> */}
        <div
      style={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        height: "52px",
        backgroundColor: "#2d3748", 
      }}
    >
      <h2 style={{ margin: 0, fontSize: "24px", color: "#e2e8f0",padding:"0.75rem 1.5rem",backgroundColor:"#1a202c",width:"100%",textAlign:"center" }}>
        Submit
      </h2>
    </div>
      </form>
    </div>
  );
};

export default ContactUs;
