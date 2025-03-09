import React from "react";

const TopEarnUser = ({UpdateDepositScreen}) => {

    const Userdatacolumns = [
        { label: "Name", field: "Name" },
        { label: "Amount", field: "Amount" },
      ];
    
      const Userdata = [
        { Name: "Ghost", Amount: "100" },
        { Name: "Hetal", Amount: "400" },
        { Name: "Robber", Amount: "200" },
        { Name: "Sakshi", Amount: "300" },
        { Name: "Saurabh", Amount: "500" },
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
      Top Winners
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
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{fontWeight: "bold"}}>
              {Userdatacolumns.map((col, index) => (
                <th key={index} style={{    padding: "10px",
    textAlign: "left",
    textAlign: "center",}}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Userdata.length > 0 ? (
              Userdata.map((row, rowIndex) => (
                <tr key={rowIndex} style={{       cursor: "pointer",}}>
                  <td style={{    padding: "10px",
    textAlign: "left",
    textAlign: "center",}}>{row.Name}</td>
                  <td style={{    padding: "10px",
    textAlign: "left",
    textAlign: "center",}}>{row.Amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={Userdatacolumns.length}
                  style={{ ...{    padding: "10px",
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

export default TopEarnUser;
