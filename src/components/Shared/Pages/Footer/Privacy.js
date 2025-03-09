import { minHeight } from "@mui/system";
import React from "react";

const PrivacyPolicy = () => {
  const styles = {
    container: {
      backgroundColor: "#1a202c",
    //   minHeight: "100vh",
      color: "#f7fafc",
      fontFamily: "'Poppins', sans-serif",
      padding: "1rem",
    },
    logo: {
      height: "50px",
      objectFit: "contain",
    },
    content: {
      backgroundColor: "#2d3748",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "1rem",
      minHeight:"calc(100vh - 2rem)"
    },
  };

  return (
    <div style={styles.container}>

      <div style={styles.content}>
        <h1 style={{textAlign:"center"}}>Privacy Policy</h1>

        <h2>1 . Information We Collect</h2>
        <ul>
          <li>Personal Details like Name , Email And Contact Information provided by you .</li>
          <li>Transaction Data , Such As Coin Purchases , Sales And Other Activities.</li>
        </ul>

        <h2>2 . How We Use Your Information</h2>
        <ul>
          <li>To Provide And Improve Our Platform.</li>
          <li>To Ensure Security And Prevent Fraudulent Activities.</li>
        </ul>

        <h2>3 . Sharing of Information</h2>
        <ul>
            <li>
          We Do Not Share Your Personal Information With Third Parties Except As Required By Law Or To Provide Services You Have Requested.
          </li>
        </ul>

        <h2>4 . Security</h2>
        <ul>
            <li>
          We Take Appropriate Measures To Ensure The Security Of Your Data , Including Encryption And Secure Server Storage.
          </li>
        </ul>

        <h2>5 . Changes To This Policy</h2>
        <ul>
            <li>
          We May Update This Privacy Policy From Time To Time . Any Changes Will Be Reflected On This Page .
          </li>
        </ul>

        <h2>6 . Contact Us</h2>
        <ul>
            <li>
          If You Have Any Questions About This Privacy Policy , Please Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
