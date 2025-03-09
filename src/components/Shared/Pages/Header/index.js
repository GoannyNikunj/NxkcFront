import React from "react";

import { FaBell, FaUser, FaBars } from "react-icons/fa";

const Header = ({toggleSidebar}) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#2d3748",
        borderRadius: "12px",
        marginBottom: "2.83rem",
      }}
    >
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="custom-placeholder"
          style={{
            width: "calc(100% - 15px)",
            padding: "8px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#1a202c",
            outline: "none",
            color: "white",
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <div
          style={{
            position: "relative",
            width: "20px",
            height: "20px",
            // backgroundColor: "#1a202c", // Dark circle background
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Profile Icon */}
          <FaUser style={{ fontSize: "12px", color: "#FFFFFF" }} />

          {/* Notification Bell */}
          <FaBell
            style={{
              position: "absolute",
              top: "-2px",
              right: "-2px",
              fontSize: "6px",
              color: "white", // Custom color for notification (Yellow)
              borderRadius: "50%",
              padding: "1px",
              boxShadow: "0px 0px 2px rgba(0,0,0,0.3)",
            }}
          />
        </div>
        <FaBars
          style={{ fontSize: "20px", cursor: "pointer", color: "white" }}
          onClick={toggleSidebar}
        />
      </div>
    </header>
  );
};

export default Header;
