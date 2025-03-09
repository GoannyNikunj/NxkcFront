import React, { useState } from "react";

const BuyPopup = () => {
  const [amount, setAmount] = useState(7000);

  return (
    <div style={styles3.overlay}>
      <div style={styles3.popup}>
        <p style={styles3.label}>ENTER QUANTITY</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles3.input}
        />
        <div style={styles3.balanceContainer}>
          <span style={styles3.balanceText}>Quantity Cannot Be More Than 1</span>
        </div>
        <button style={styles3.button}>PREVIEW BUY</button>
      </div>
    </div>
  );
};

const styles3 = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "#111827",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "300px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  label: {
    color: "#9CA3AF",
    fontSize: "14px",
    marginBottom: "10px",
  },
  input: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: "32px",
    fontWeight: "bold",
    border: "none",
    textAlign: "center",
    outline: "none",
    width: "100%",
    /* Remove number input arrows */
    appearance: "textfield", // This helps in some cases
  },
  balanceContainer: {
    backgroundColor: "#1E3A8A",
    color: "#60A5FA",
    padding: "8px",
    borderRadius: "5px",
    fontSize: "14px",
    marginBottom: "15px",
  },
  balanceText: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#10B981",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    width: "100%",
  },
};

/* Global CSS to Remove Arrows */
const GlobalStyles = () => (
  <style>{`
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    input[type="number"] {
      -moz-appearance: textfield;
    }
  `}</style>
);

const App = () => (
  <>
    <GlobalStyles />
    <BuyPopup />
  </>
);

export default App;
