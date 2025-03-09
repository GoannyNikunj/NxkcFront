import React from "react";

const BalanceWidget = ({UpdateDepositScreen,UpdateWithdrawDiv}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center", // Vertically center align
        padding: "1rem",
        maxWidth: "100%",
        backgroundColor: "#2d3748",
        borderRadius: "12px",
      }}
    >
      {/* <img
  src="assets/NX.png"
  alt="Example"
  style={{
    width: "5rem",
    height: "5rem"
  }}
/> */}

      {localStorage.getItem("Token") !== null ? (
        <div
          style={{
            textAlign: "center",
            borderRadius: "8px",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#f7fafc",
            }}
          >
            Your Totle Balance
          </h2>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "600",
              margin: "8px 0",
              color: "#f7fafc",
            }}
          >
            {localStorage.getItem("Wallet")} Nx
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "16px",
              gap: "1rem",
            }}
          >
            <button
              style={{
                backgroundColor: "#47c2be",
                color: "#1a202c",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                width: "100%",
              }}
              onClick={() => UpdateDepositScreen(true)}
            >
              Deposit
            </button>
            <button
              style={{
                backgroundColor: "#47c2be",
                color: "#1a202c",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                width: "100%",
              }}
              onClick={() => UpdateWithdrawDiv(false)}
            >
              Withdraw
            </button>
          </div>
        </div>
      ) : (
        // <div style={{ textAlign: 'center', borderRadius: '8px',width:"fit-content" }}>
        //   <h2 style={{ fontSize: '20px', fontWeight: 'bold',color:"#f7fafc" }}>Balance</h2>
        //   <p style={{ fontSize: '24px', fontWeight: '600', margin: '8px 0',color:"#f7fafc" }}>{localStorage.getItem("Wallet")}</p>
        //   <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px',gap:"1rem" }}>
        //   <button style={{ backgroundColor: '#47c2be', color: '#1a202c', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }} onClick={() => UpdateDepositScreen(true)}>Deposit</button>
        //     <button style={{ backgroundColor: '#47c2be', color: '#1a202c', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }} onClick={() => UpdateWithdrawDiv(false)}>Withdraw</button>
        //   </div>
        // </div>

        <div
          style={{
            textAlign: "center",
            borderRadius: "8px",
            width: "fit-content",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#47c2be",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Login
            </button>
            <button
              style={{
                backgroundColor: "#47c2be",
                color: "#1a202c",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BalanceWidget;
