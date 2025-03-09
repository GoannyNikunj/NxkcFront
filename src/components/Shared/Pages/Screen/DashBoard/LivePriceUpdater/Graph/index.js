import React, { useState, useEffect } from "react";
import { useNavigate , useLocation } from "react-router-dom";

import { io } from "socket.io-client";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { BackendBASE_URL } from "../../../../../../../main";
import Buy from "./Buy/index"
import Sell from "./Sell/index"

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const ToggleSwitch = () => {
  
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);
  const batchValue = queryParams.get("Name"); 

  const [fontSize, setFontSize] = useState(14);

  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  const [activeChartButton, setActiveChartButton] = useState("1D");

  const [hoveredButton, setHoveredButton] = useState(null);

  const [ReferralCodeStatus, SetReferralCodeStatus] = useState(false);
  const [Userdata, SetUserdata] = useState([]);

  const [ScreenNumber, SetScreenNumber] = useState(1);

  const styles = {
    container: {
      backgroundColor: "#2d3748",
      minHeight: "100vh",
      color: "#f7fafc",
      fontFamily: "'Poppins', sans-serif",
      padding: "1rem",
    },
    main: {
      margin: "0 auto",
    },
    tableContainer: {
      backgroundColor: "#1a202c",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      height: "50vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
    },
    tableWrapper: {
      overflowX: "auto",
      height: "calc(50vh - 2rem)",
      width: "100%",
      maxWidth: "100%",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      whiteSpace: "nowrap",
    },
    thTdStyle: {
      padding: "10px",
      textAlign: "center",
    },
    rowHoverStyle: {
      cursor: "pointer",
    },
    firstColStyle: {
      padding: "10px",
      textAlign: "center",
      fontWeight: "bold",
      backgroundColor: "#374151",
      color: "#f7fafc",
    },
    otherColStyle: {
      padding: "10px",
      textAlign: "center",
      backgroundColor: "#4a5568",
      color: "#f7fafc",
    },
    container2: {
      backgroundColor: "#2d3748",
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
    chartContainer: {
      backgroundColor: "#2d3748",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      height: "calc(100vh - 6rem)",
    },
    chartHeader: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
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
    },
    footer: {
      textAlign: "center",
      padding: "1rem 0",
      background: "#2d3748",
      borderRadius: "8px",
      marginTop: "2rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        bodyFont: {
          size: fontSize,
        },
        titleFont: {
          size: fontSize,
        },
        displayColors: false,
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "transparent",
        },
        type: "category",
        labels: chartData.labels,
        ticks: {
          font: {
            size: fontSize,
          },
          color: "#E0E0E0",
          maxRotation: 90, // Rotate labels for better readability
          minRotation: 90,
        },
      },
      y: {
        grid: {
          drawBorder: false,
          color: "#2d3748",
        },
        ticks: {
          font: {
            size: fontSize,
          },
          color: "#E0E0E0",
          align: "end",
          padding: 10,
        },
      },
    },
  };

  const handleClick = (range) => {
    setActiveChartButton(range);
  };

  useEffect(() => {
    
    var UserId = localStorage.getItem("_id");
    var ShareId = queryParams.get("_id");

    async function readFileAsync() {
      const response = await fetch(`${BackendBASE_URL}/GetPurchaseShare`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ UserId, ShareId }),
      });

      const data = await response.json();
      SetUserdata(data.data);
      SetReferralCodeStatus(true);
    }

    readFileAsync();

    const socket = io(`${BackendBASE_URL}/${activeChartButton}`);

    socket.emit("sendId", { _id: ShareId }); // Replace 'yourId' with the actual _id value

    socket.on("updateChartData", (data) => {

      const labels = data.map((point) => point.time);
      const values = data.map((point) => point.value);

      setChartData({
        labels,
        datasets: [
          {
            label: "Coin Value (Live)",
            data: values,
            fill: true,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            pointBackgroundColor: "rgba(75, 192, 192, 1)",
          },
        ],
      });
      
    });

    return () => {
      socket.disconnect();
    };

  }, [activeChartButton]); 

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return [`${day}-${month}-${year}`, `${hours}:${minutes}`];
  };

  return (

    <>

{ ( ScreenNumber == 1 ) ? 

<>
<div style={styles.container2}>
<div style={styles.contentWrapper}>
    
        <main>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              marginBlock:"0rem",
              padding:"1rem"
            }}
          >
            {batchValue}
          </h2>
          <div style={styles.chartContainer}>
    
            <div
              style={{
                height: "calc(100vh - 6rem)",
                width: "calc(100%)",
                backgroundColor: "#1a202c", // Box background color
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for box effect
                borderRadius: "10px", // Rounded corners
                padding: "1rem 1rem 6.5rem 1rem", // Inner padding for content
                boxSizing: "border-box"
              }}
            >

                          <div style={styles.chartHeader}>
              <div>
                {["1D", "5D", "1M", "1Y"].map((label) => (
                  <button
                    key={label}
                    onClick={() => handleClick(label)}
                    onMouseEnter={() => setHoveredButton(label)}
                    onMouseLeave={() => setHoveredButton(null)}
                    style={{
                      padding: "0.5rem 1rem",
                      border: "none",
                      backgroundColor: "transparent",
                      color:
                        activeChartButton === label
                          ? "#47c2be"
                          : hoveredButton === label
                          ? "#47c2be"
                          : "#f7fafc",
                      textDecoration:
                        activeChartButton === label
                          ? "underline"
                          : hoveredButton === label
                          ? "underline"
                          : "none",
                      textUnderlineOffset:
                        activeChartButton === label
                          ? "1px"
                          : hoveredButton === label
                          ? "1px"
                          : "0px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

              <Line data={chartData} options={options} />

              <div style={{      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding:"1rem"}}>
                   <div style={{ display: "flex", gap: "8px" }}>
           <button style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "white", borderRadius: "5px", cursor: "pointer",border:"none" }} onClick={() => SetScreenNumber(2)}>Buy</button>
           <button style={{ padding: "10px 20px", backgroundColor: "#dc3545", color: "white", borderRadius: "5px", cursor: "pointer",border:"none"  }} onClick={() => SetScreenNumber(3)}>Sell</button>
       </div>
       
            </div>

            </div>
          </div>
        </main>

</div>
</div>

<div style={styles.container}>
      <main style={styles.main}>
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            padding: "1rem 0",
            textAlign: "center",
          }}
        >
          Top Winners
        </h2>

        <div style={styles.tableContainer}>
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.firstColStyle}>Time</th>
                  <th style={styles.firstColStyle}>Sell/Buy Price</th>
                  <th style={styles.firstColStyle}>Quantity</th>
                  <th style={styles.firstColStyle}>Total</th>
                </tr>
              </thead>
              <tbody>
                {Userdata.length > 0 ? (
                  Userdata.map((row, index) => (
                    <tr key={index} style={styles.rowHoverStyle}>
                      <td style={styles.otherColStyle}>
                        {formatDate(row.createdAt)[0]}
                        <br />
                        {formatDate(row.createdAt)[1]}
                      </td>
                      <td style={styles.otherColStyle}>{row.PurchsePrice}</td>
                      <td style={styles.otherColStyle}>{row.Quantity}</td>
                      <td style={styles.otherColStyle}>
                        {row.PurchsePrice * row.Quantity}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} style={{ ...styles.thTdStyle, textAlign: "center" }}>
                      No Data Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>

    </>

:        (ScreenNumber == 2) ? 
<Buy/>
:
<Sell/>
              }

    </>

  );

};

export default ToggleSwitch;