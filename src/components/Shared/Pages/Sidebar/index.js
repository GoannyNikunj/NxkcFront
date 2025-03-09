import React, { useState, useEffect } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const [hoveredItem, setHoveredItem] = useState(null);

  const [bgColor, setBgColor] = useState("#2d3748");
  const [textColor, setTextColor] = useState("#1a202c"); // Text color state

  const menuItems = ["Assets", "Transaction", "WatchList", "Referral"];

  return (
    
    <div>

{isOpen && (
        <div
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transition: "opacity 0.3s ease-in-out",
            zIndex: 999,
          }}
        ></div>
      )}
      
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "fixed",
        top: "0",
        right: "0",
        background: "#1a202c",
        color: "white",
        transition: "transform 0.3s ease-in-out",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        padding: "20px",
        boxSizing: "border-box",
        zIndex: 1000, // Ensures sidebar is above the overlay,
      }}
    >

      <div
        style={{
          width: "100%",
          flexGrow: 1,
          overflowY: "auto",
          maxHeight: "20vh",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            cursor: "pointer",
            textAlign: "end",
            height: "32px",
            marginBottom: "16px",
          }}
          onClick={toggleSidebar}
        >
          <button
            style={{
              fontSize: "24px",
              background: "none",
              color: "white",
              border: "none",
              cursor: "pointer",
              height: "32px",
              width: "32px",
              padding: "0px",
            }}
          >
            ✖
          </button>
        </div>

      </div>

      <div
        style={{
          width: "100%",
          flexGrow: 1,
          overflowY: "auto",
          maxHeight: "80vh",
          textAlign: "center",
          boxSizing: "border-box",
          scrollbarWidth:"none"
        }}
      >

        <div
          style={{
            fontSize: "18px",
            cursor: "pointer",
            textAlign: "center",
            height: "50px",
            marginBottom: "20px",
            height:"32px",
            width: "calc(100% - 64px)",
            padding: "15px 0px",
            marginLeft: "32px",
            transition: "background 0.3s",
            background: "#4A5568", 
          }}
        >
          <button
            style={{
              fontSize: "20px",
              background: "transparent",
              width: "100%",
              color: "white",
              border: "none",
              cursor: "pointer",
              padding: "0px"
            }}
          >
            DashBoard
          </button>
        </div>

        {menuItems.map((item, index) => (
        <div
          key={index}
          style={{
            fontSize: "18px",
            cursor: "pointer",
            textAlign: "center",
            height: "50px",
            marginBottom: "20px",
            height:"32px",
            width: "calc(100% - 64px)",
            padding: "15px 0px",
            marginLeft: "32px",
            transition: "background 0.3s",
            background: hoveredItem === index ? "#4A5568" : "#2d3748", // Change background on hover
          }}
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button
            style={{
              fontSize: "20px",
              background: "transparent",
              width: "100%",
              color: hoveredItem === index ? "white" : "#1a202c",
              border: "none",
              cursor: "pointer",
              padding: "0px"
            }}
          >
            {item}
          </button>
        </div>
      ))}

<div
          style={{
            fontSize: "18px",
            cursor: "pointer",
            textAlign: "center",
            height: "50px",
            marginBottom: "20px",
            height:"32px",
            width: "calc(100% - 64px)",
            padding: "15px 0px",
            marginLeft: "32px",
            transition: "background 0.3s",
            background: bgColor
          }}
          onMouseEnter={() => {
            setBgColor("#4a5568"); 
            setTextColor("white");
          }}
          onMouseLeave={() => {
            setBgColor("#2d3748"); 
            setTextColor("#1a202c"); 
          }}
        >
          <button
            style={{
              fontSize: "20px",
              background: "transparent",
              width: "100%",
              border: "none",
              cursor: "pointer",
              padding: "0px",
              color: textColor
            }}
            onClick={() => {
              localStorage.clear(); // Clears local storage
              window.location.reload(); // Reloads the page
            }}
          >
            Logout
          </button>
        </div>

      </div>
      
    </div>
  </div>
  );
};

export default Sidebar;
