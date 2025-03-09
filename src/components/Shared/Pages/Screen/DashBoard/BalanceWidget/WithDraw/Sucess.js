import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WithdrawalSuccess = ({ UpdateShowMessage , UpdateWithdrawDiv}) => {
  return (

        <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2d3748",
        textAlign: "center",
        padding: "16px",
      }}
    >
      <div
        style={{
          backgroundColor: "#1a202c",
          padding: "16px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          height:"calc(100vh - 64px)",
          width:"calc(-64px + 100%)"
        }}
      >
        <h2 style={{ color: "#47c2be", marginBottom: "15px" }}>
          Request Sent Successfully
        </h2>
        <FaCheckCircle size={80} color="#47c2be" style={{ marginBottom: "20px" }} />
        <p style={{ color: "#f7fafc", fontSize: "16px", marginBottom: "20px" }}>
          Your Request Has Been Received!
          <strong> 75%</strong> Amount will Be Created In Your Bank Account If No Suspicious
          Activities Are Found During Verification .
        </p>
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
          onClick={() => { UpdateShowMessage(true); UpdateWithdrawDiv(true); }}
        >
          Confirm
        </button>
      </div>
    </div>

  );
};

export default WithdrawalSuccess;