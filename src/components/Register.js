import React, { useState, useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaPhoneAlt, FaEnvelope, FaCheckCircle } from "react-icons/fa";

import { BackendBASE_URL } from '../main';

const Register = () => {

  const navigate = useNavigate();
    
  const { ReferralCode } = useParams();

  const [ScreenNumber, SetScreenNumber] = useState(1);
  const [ActualReferralCode, SetActualReferralCode] = useState("");
  const [ActualReferredBy, SetActualReferredBy] = useState("");
  const [Warning, SetWarning] = useState("");

  useEffect(() => {

    const handleSubmit2 = async (e) => {

      try {

        var SendingReferralCode 
        if (typeof ReferralCode == "undefined") {
          SendingReferralCode = null
        } else {
          SendingReferralCode = ReferralCode
        }

        const response = await fetch(`${BackendBASE_URL}/CheckReferralCodeStatus`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ SendingReferralCode }),
        });
        
        const data = await response.json();

        if(data.UserAndShareExist == false){
          SetScreenNumber(4);
        }

        if(data.status == 200){
          SetActualReferralCode(data.ReferralCode);
          SetActualReferredBy(data.ReferredBy);   
          SetScreenNumber(2);   
        }

      } catch (error) {
        console.error("Error:", error.message);
      }
      
    };

    handleSubmit2();

  }, []); 

  const handleSubmit = async (e) => {

    e.preventDefault();

    const form = e.target;
    
    const Name = form.elements["Name"].value;
    const Phone = form.elements["Phone Number"].value;
    const Email = form.elements["Email"].value;
    const Password = form.elements["Password"].value;

    try {
      
      const response = await fetch(`${BackendBASE_URL}/SignUp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          Name, 
          Phone, 
          Email, 
          Password, 
          ReferralCode : ActualReferredBy + ActualReferralCode
        }),
      });

      const data = await response.json();

      if(data.status == 409){
        SetWarning(data.message)
      }else if(data.status == 419){
        SetScreenNumber(4);
      }else{
        SetScreenNumber(3);
      }

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
      padding: "16px 48px 16px 48px", // Left padding for icon space
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

  const loaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #2d3748, #1a202c)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 9999,
  };

  const spinnerStyle = {
    width: "50px",
    height: "50px",
    border: "5px solid #f7fafc",
    borderTop: "5px solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  if (ScreenNumber == 1) {
    return (
      <div style={loaderStyle}>
      <div style={spinnerStyle}></div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      </div>
    );
  }else if(ScreenNumber == 4){
    return(
      <div style={{ display: "flex", height: "calc(100vh - 1rem)", alignItems: "center", justifyContent: "center", textAlign: "center", background: "linear-gradient(to right, #2d3748, #1a202c)", padding:"0.5rem" }}>
      <div style={{ padding: "0.5rem", background: "#2d3748", borderRadius: "12px",boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
        <h2 style={{color:"white",fontSize:"1.5rem",fontWeight:"bold",textAlign:"center",marginTop:"1rem"}}>Expired Referral Code</h2>
        <p style={{color:"rgb(160, 174, 192)",fontSize:"2rem"}}>Referral Code Does Not Exist OR Has Expired . Register Button To Proceed WithOut Referral Code .</p>
        <button
          style={{ padding: "1rem", background: "#000", color: "#fff", border: "none", borderRadius: "12px", cursor: "pointer",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"1rem" }}
          onClick={() => { 
            SetScreenNumber(2) 
            navigate("/Register");   
          }}
        >
          Register
        </button>
      </div>
    </div>
    )
  }else if(ScreenNumber == 3){
    return(
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2d3748",
        textAlign: "center",
        padding: "16px",
        height:"100vh"
      }}
    >
      <div
        style={{
          backgroundColor: "#1a202c",
          padding: "16px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width:"calc(-64px + 100%)"
        }}
      >
        <h2 style={{ color: "#47c2be", marginBottom: "15px" }}>
          Success!
        </h2>
        <p style={{ color: "#f7fafc", fontSize: "16px", marginBottom: "20px" }}>
          Your Account Has Been Created . Please Login With your Credentials
        </p>
        <FaCheckCircle size={80} color="#47c2be" style={{ marginBottom: "20px" }} /><br/>
        <button
          style={{
            backgroundColor: "#47c2be",
            color: "#1a202c",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => { 
            localStorage.clear();  
            navigate("/");   
          }}
        >
          Login 
        </button>
      </div>
        </div>
    )
  }else{
    return (
      <div style={styles.container} id="1">
      <div style={styles.formContainer}>
        <div>
          <h2 style={styles.header}>Register</h2>
          <form onSubmit={handleSubmit}>
  
        <div style={styles.inputGroup}>
            <FaUser style={styles.icon} /> {/* User Icon */}
            <input
              style={styles.input}
              type="text"
              id="Name"
              placeholder="Name"
              required
            />
          </div>
          
          {(() => {
            if (Warning !== "") {
              
              return(
                <div style={{position:"relative",textAlign:"center",fontSize:"1.5rem",top:"-0.5rem"}}>
                  Name Already Exist
                </div>
              )

            }
          })()}

          <div style={styles.inputGroup}>
            <FaPhoneAlt style={styles.icon} /> {/* User Icon */}
            <input
              style={styles.input}
              type="text"
              id="Phone Number"
              placeholder="Phone Number"
              required
            />
          </div>
  
          <div style={styles.inputGroup}>
            <FaEnvelope style={styles.icon} /> {/* User Icon */}
            <input
              style={styles.input}
              type="text"
              id="Email"
              placeholder="Email"
              required
            />
          </div>
  
          {/* Password Input */}
          <div style={styles.inputGroup}>
            <FaLock style={styles.icon} /> {/* Lock Icon */}
            <input
              style={styles.input}
              type="password"
              id="Password"
              placeholder="Password"
              required
            />
          </div>
  
          <button
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            type="submit"
          >
            Register
          </button>
          </form>
          <p style={styles.linkText}>
            Have an account ?
            <span style={styles.link} onClick={() => navigate(`/`)}> Login</span>
          </p>
        </div>
      </div>
    </div>
    );
  }

};

export default Register;
