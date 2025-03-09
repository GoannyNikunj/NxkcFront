import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";

import { FrontEndBASE_URL , BackendBASE_URL } from '../../../../../../../main';

import Graph from "./index";

const ReferAndEarn = () => {
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [ReferralCode, SetReferralCode] = useState("");
  const [ReferralCodeStatus,SetReferralCodeStatus] = useState(false);

  useEffect(() => {

    var UserId = localStorage.getItem("_id");
    var ShareId = queryParams.get("_id");

    var AccountActivationCode = UserId+ShareId;

    async function readFileAsync() {

      const response = await fetch(`${BackendBASE_URL}/UserStatus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ AccountActivationCode }),
      });

      const data = await response.json();

      if(data.data.length == 1){
        SetReferralCodeStatus(true)
      }

      SetReferralCode(AccountActivationCode);

    }
    
    readFileAsync();
    
  }, []);

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
  
  const openWhatsApp = () => {

    var ReferCode = `${FrontEndBASE_URL}/Signup/${ReferralCode}`
    var MessageText = ` 🔗 तेज़ , आसान और सुरक्षित प्लेटफॉर्म पैसे कमाने के लिए दिए गए लिंक से साइन अप करें : ${ReferCode}`

    const message = encodeURIComponent(MessageText);
    const whatsappURL = `https://wa.me/?text=${message}`;
    
    window.open(whatsappURL, "_blank");

  };

  const handleClick = () => {
    SetReferralCodeStatus(true)
  };

  return (

    <>

      { ( ReferralCode == "" ) ? 
        
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
        </div> :
        
        (ReferralCodeStatus == false) ? 
        
        <div style={styles2.overlay}>
        <div style={styles2.popup}>
          <button style={styles2.closeButton} onClick={handleClick}>
            &times;
          </button>

          <div style={styles.container} id="2">
            <h2 style={styles.title}>Refer & Earn</h2>
            <div style={styles.card}>
              <div style={styles.icon}>
                <span role="img" aria-label="gift">🎁</span>
              </div>
            </div>
            <p style={styles.commission}>1 Referral = 1 Share</p>
            <p style={styles.description}> Invite A Friend And Get Free Share (One-Time Use Only) </p>
            <div style={styles.inputContainer}>
              <input type="text" value={ReferralCode} readOnly style={styles.input} aria-label="Referral Link" />
            </div>
            <button style={styles.shareButton} onClick={openWhatsApp}> Share </button>
          </div>

        </div>
        </div> : 

        <Graph/>

      }

    </>

  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "300px",
    backgroundColor:"#2d3748"
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color:"white"
  },
  card: {
    backgroundColor: "#FFD54F",
    padding: "20px",
    borderRadius: "10px",
    display: "inline-block",
    margin: "10px 0",
  },
  icon: {
    fontSize: "30px",
  },
  commission: {
    fontSize: "16px",
    fontWeight: "bold",
    color:"white"
  },
  description: {
    fontSize: "12px",
    color: "#555",
    margin: "10px 0",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    width: "80%",
    textAlign: "center",
    fontSize: "12px",
    backgroundColor: "#2D3748",
    color:"white",
    border:"none",
    outline:"none"
  },
  copyButton: {
    marginLeft: "5px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: "16px",
  },
  shareButton: {
    backgroundColor: "#FFD54F",
    border: "none",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
};

const styles2 = {
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

export default ReferAndEarn;
