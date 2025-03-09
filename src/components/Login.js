import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

import { BackendBASE_URL } from '../main';

const Login = ({ setIsLogin }) => {
  
  const [InputName, SetInputName] = useState("");
  const [InputPassword, SetInputPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await fetch(`${BackendBASE_URL}/SignIn`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Name:InputName, Password:InputPassword }),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      const data = await response.json();
      localStorage.setItem("Token", data.Token);
      localStorage.setItem("Wallet", data.User.Wallet);
      localStorage.setItem("Name", data.User.Name);

      localStorage.setItem("Ads", "true");

      localStorage.setItem("_id", data.User._id);

      setIsLogin(true);
    } catch (error) {
      console.error("Error:", error.message);
      alert("Something went wrong. Please try again.");
    }
  };

  const styles = {
    container: {
      display: "flex",
      minHeight: "calc(100vh - 16px)",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to right, #2d3748, #1a202c)",
      color: "white",
      padding: "8px"
    },
    formContainer: {
      backgroundColor: "#2d3748",
      padding: "8px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      maxWidth: "256px",
      width: "calc(100% - 2rem)",
    },
    header: {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "bold",
      marginBlockStart: "0px", 
      marginBlockEnd: "1rem"
    },
    input: {
      width: "calc(100% - 96px)",
      padding: "16px 48px 16px 48px",
      borderRadius: "12px",
      border: "1px solid #4a5568",
      backgroundColor: "#1a202c",
      color: "#e2e8f0",
      fontSize: "1.5rem",
    },
    inputGroup: {
      position: "relative",
      marginBottom: "0.5rem"
    },
    icon: {
      position: "absolute",
      left: "16px",
      top: "calc(50% - 12px)",
      color: "#a0aec0",
      fontSize: "1.5rem"
    },
    button: {
      width: "100%",
      padding: "8px",
      backgroundColor: "#3182ce",
      border: "none",
      borderRadius: "12px",
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "white",
      cursor: "pointer"
    },
    buttonHover: {
      backgroundColor: "#63b3ed"
    },
    linkText: {
      textAlign: "center",
      color: "#a0aec0",
      fontSize: "1.5rem",
      marginBlockStart: "0px", 
      marginBlockEnd: "0rem"
    },
    link: {
      color: "#63b3ed",
      cursor: "pointer",
      textDecoration: "underline"
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.header}>Login</h2>
        <form onSubmit={handleSubmit}>

        <div style={styles.inputGroup}>
            <FaUser style={styles.icon} /> 
            <input
              style={styles.input}
              type="text"
              id="Name"
              placeholder="Name"
              required
              value={InputName}
              onChange={(e) => SetInputName(e.target.value)}
              autoComplete="Name"
            />
          </div>

          <div style={styles.inputGroup}>
            <FaLock style={styles.icon} /> 
            <input
              style={styles.input}
              type="password"
              id="password"
              placeholder="Password"
              required
              value={InputPassword}
              onChange={(e) => SetInputPassword(e.target.value)}
              autoComplete="password"
            />
          </div>

          <button
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            type="submit"
          >
            Login
          </button>
        </form>
        <p style={styles.linkText}>
          Don't have an account?
          <span style={styles.link} onClick={() => navigate(`/Register`)}>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;

