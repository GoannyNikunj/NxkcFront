import React from "react";

const Footer = () => {
  return (
    <footer style={{ textAlign: "center",
        padding: "1rem 0",
        background: "#2d3748",
        borderRadius: "8px",
        marginTop: "2rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
        }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          marginLeft: "4px",
          marginRight: "4px",
        }}
      >
        <a
          href="/ContactUs"
          style={{ color: "#E0E0E0", textDecoration: "none" }}
        >
          Contact Us
        </a>
        <a
          href="/About"
          style={{ color: "#E0E0E0", textDecoration: "none" }}
        >
          About Us
        </a>
        <a
          href="/TermsAndCondition"
          style={{ color: "#E0E0E0", textDecoration: "none" }}
        >
          Terms and Conditions
        </a>
        <a
          href="/PrivacyPolicy"
          style={{ color: "#E0E0E0", textDecoration: "none" }}
        >
          Privacy Policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
