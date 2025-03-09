import React, { useState, useEffect } from "react";

import Header from "../../Header";
import Footer from "../../Footer";
import Sidebar from "../../Sidebar";

import BalanceWidget from "../../Screen/DashBoard/BalanceWidget";
import ScaleOfInvestment from "../../Screen/DashBoard/ScaleOfInvestment";
import LivePriceUpdater from "../../Screen/DashBoard/LivePriceUpdater";
import TopEarnUser from "../../Screen/DashBoard/TopEarnUser";

const Home = ({
  UpdateDepositScreen,
  UpdateWithdrawDiv,
  Datachart,
  UpdateActiveChartButton,
  activeButtonChart,
}) => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const styles = {
    container: {
      backgroundColor: "#1a202c",
      minHeight: "100vh",
      color: "#f7fafc",
      fontFamily: "'Poppins', sans-serif",
    },
    contentWrapper: {
      margin: "0 auto",
      padding: "1rem",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 0",
      background: "#2d3748",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    logo: {
      height: "150px",
      objectFit: "contain",
    },
    nav: {
      display: "flex",
      justifyContent: "space-around",
      padding: "1rem 0",
      background: "#2d3748",
      borderRadius: "8px",
      marginTop: "1rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    navLink: {
      position: "relative",
      color: "#cbd5e0",
      textDecoration: "none",
      cursor: "pointer",
      fontSize: "1rem",
      padding: "0.5rem 1rem",
      transition: "all 0.3s ease",
    },
    navLinkHover: {
      color: "#ffffff",
      transform: "scale(1.1)",
    },
    main: {
      padding: "1rem 0",
    },
    chartContainer: {
      backgroundColor: "#2d3748",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(54, 24, 24, 0.1)",
      height: "100vh",
      padding: "1rem",
    },
    chartHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 0",
    },
    button: {
      padding: "0.75rem 1.5rem",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1.5rem",
      fontWeight: "bold",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      border: "none",
      backgroundColor: "transparent",
      color: "#ffffff",
    },
    buttonHover: {
      transform: "scale(1.05)",
    },
    graphArea: {
      backgroundColor: "#4a5568",
      height: "350px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    graphText: {
      color: "#e2e8f0",
      fontSize: "1.25rem",
      fontWeight: "bold",
    }
  };

  const handleClick = (range) => {
    UpdateActiveChartButton(range);
  };

  // useEffect(() => {

  //   fetchData("1D");

  //   const handleResize = () => {
  //     const width = window.innerWidth;

  //     if (width > 1440) {
  //       setFontSize(48);
  //     } else if (width > 1024) {
  //       setFontSize(36);
  //     } else if (width > 768) {
  //       setFontSize(48);
  //     } else {
  //       setFontSize(14);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  // }, [selectedRange]);

  return (
    <>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div style={styles.container}>
        <div style={styles.contentWrapper}>
          {/* Internal CSS for placeholder color */}
          <style>
            {`
          .custom-placeholder::placeholder {
            color: white; /* Change this color as needed */
            opacity: 0.7; /* Adjust transparency */
          }
        `}
          </style>

          <Header toggleSidebar={toggleSidebar} />

          <BalanceWidget UpdateDepositScreen={UpdateDepositScreen} UpdateWithdrawDiv={UpdateWithdrawDiv}/>

          <ScaleOfInvestment/>

          <LivePriceUpdater/>

          <TopEarnUser/>

          <Footer/>
          
        </div>
      </div>
      
    </>
  );
};

export default Home;
