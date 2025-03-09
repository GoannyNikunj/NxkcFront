import React, { useState, useEffect } from "react";

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
  
const ScaleOfInvestment = () => {

      const [fontSize, setFontSize] = useState(14);
      const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            bodyFont: {
              size: 14,
            },
            titleFont: {
              size: 14,
            },
            displayColors: true,
            callbacks: {
              label: (tooltipItem) => {
                return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
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
                size: 14,
              },
              color: "#E0E0E0",
              maxRotation: 90, // Force labels to rotate
              minRotation: 90, // Prevent labels from staying horizontal
            },
          },
          y: {
            grid: {
              drawBorder: false,
              color: "#2d3748",
            },
            ticks: {
              font: {
                size: 14,
              },
              color: "#E0E0E0",
              align: "end",
            },
          },
        },
      };

        useEffect(() => {
          var data = [
            { time: "1/14/2025", value: 8004747, value2: 7500000 },
            { time: "1/15/2025", value: 8016198, value2: 7600000 },
            { time: "1/16/2025", value: 7736213, value2: 7700000 },
            { time: "1/17/2025", value: 7791826, value2: 7800000 },
          ];
      
          const labels = data.map((point) => point.time);
          const values1 = data.map((point) => point.value);
          const values2 = data.map((point) => point.value2);
      
          setChartData({
            labels,
            datasets: [
              {
                label: "Coin Value (Live)",
                data: values1,
                fill: true,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                pointBackgroundColor: "rgba(75, 192, 192, 1)",
              },
              {
                label: "New Line Data",
                data: values2,
                fill: false,
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                pointBackgroundColor: "rgba(255, 99, 132, 1)",
              },
            ],
          });
        }, []);
        
  return (
    <main style={{padding:"1rem 0"}}>
      <h2
        style={{
          fontSize: "1.75rem",
          fontWeight: "bold",
          padding: "1rem 0",
        }}
      >
        Top Investor Performance
      </h2>
      <div style={{
              backgroundColor: "#2d3748",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              height: "100vh",
              padding: "1rem",
      }}>
        <div
          style={{
            height: "100%",
            backgroundColor: "#1a202c", // Box background color
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for box effect
            borderRadius: "10px", // Rounded corners
            padding: "20px", // Inner padding for content
            boxSizing: "border-box",
            id: "2",
          }}
        >
          <Line data={chartData} options={options} id="1" />
        </div>
      </div>
    </main>
  );
};

export default ScaleOfInvestment;
