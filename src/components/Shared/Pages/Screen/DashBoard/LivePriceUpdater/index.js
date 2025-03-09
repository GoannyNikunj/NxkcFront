import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LivePriceUpdater = () => {

  const navigate = useNavigate();
  
  const columns = [
    { label: "Name", field: "Name" },
    { label: "Current Price", field: "CurrentPrice" },
    { label: "Launch Price", field: "InitialPrice" },
    { label: "Highest Price", field: "HighestPrice" },
    { label: "Lowest Price", field: "LowestPrice" },
  ];

  const data = [
    {
      _id: "67b88efc2bd8585e59981e74",
      Name: "Love Bird",
      InitialPrice: "200",
      CurrentPrice: "220",
      Change: "+10.00",
      TimeFrame: "Last Hour",
    },
    {
      _id: "67b88f0f2bd8585e59981e76",
      Name: "MSK",
      InitialPrice: "0.3",
      CurrentPrice: "0.25",
      Change: "-16.67",
      TimeFrame: "Last Month",
    },
    {
      _id: "67b8983e2bd8585e59981ec0",
      Name: "Sunrisers Surat",
      InitialPrice: "0.01",
      CurrentPrice: "0.015",
      Change: "+50.00",
      TimeFrame: "Last Day",
    },
    {
      _id: "67b8985a2bd8585e59981ec2",
      Name: "Rajasthani Kamariya",
      InitialPrice: "300",
      CurrentPrice: "280",
      Change: "-6.67",
      TimeFrame: "Last Year",
    },
    {
      _id: "67b8987f2bd8585e59981ec4",
      Name: "Amritsari Gold",
      InitialPrice: "0.5",
      CurrentPrice: "0.55",
      Change: "+10.00",
      TimeFrame: "Last Day",
    },
    {
      _id: "67b88f392bd8585e59981e78",
      Name: "Royal Challengers Ahmedabad",
      InitialPrice: "0.02",
      CurrentPrice: "0.018",
      Change: "-10.00",
      TimeFrame: "Last Week",
    },
  ];
  
  return (
    <main style={{padding:"1rem 0"}}>
    <h2
      style={{
        fontSize: "1.75rem",
        fontWeight: "bold",
        padding: "1rem 0",
      }}
    >
      LIVE Updates
    </h2>
    <div
      style={{
        backgroundColor: "#2d3748",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        height: "50vh",
        alignContent: "center",
        justifyItems: "center",
      }}
    >
      <div
        style={{
          overflow: "auto",
          height: "calc(50vh - 2rem)",
          width: "calc(100% - 2rem)",
          scrollbarWidth:"none"
        }}
      >
        <table style={{    width: "100%",
    borderCollapse: "collapse",
    margin: "1rem",}}>
          <thead>
            <tr style={{    fontWeight: "bold",}}>
              {columns.map((col, index) => (
                <th key={index} style={{       padding: "10px",
    textAlign: "left",
    textAlign: "center",}}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  style={{cursor: "pointer"}}
                  onClick={() =>
                    navigate(
                      `/GraphBatches?_id=${row._id}&Name=${row.Name}`
                    )
                  }
                >
                  <td style={{       padding: "10px",
    textAlign: "left",
    textAlign: "center",}}>{row.Name}</td>
                  <td style={{       padding: "10px",
    textAlign: "left",
    textAlign: "center",}}>
                    <div>
                      <strong>{row.CurrentPrice}</strong>
                    </div>
                    <div
                      style={{
                        color: row.Change > 0 ? "limegreen" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {row.Change}
                    </div>
                    <div style={{ fontSize: "12px", color: "#a0aec0" }}>
                      {row.TimeFrame}
                    </div>
                  </td>
                  <td style={{       padding: "10px",
    textAlign: "left",
    textAlign: "center",}}>{row.InitialPrice}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  style={{ ...{       padding: "10px",
    textAlign: "left",
    textAlign: "center",}, textAlign: "center" }}
                >
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </main>
  );
};

export default LivePriceUpdater;
