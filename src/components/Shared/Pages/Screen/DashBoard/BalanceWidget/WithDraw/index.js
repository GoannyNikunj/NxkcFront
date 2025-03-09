import React, { useState, useEffect } from "react";

import { BackendBASE_URL } from '../../../../../../../main';

const Counter = ({ UpdateWithdrawDiv , UpdateShowMessage }) => {

    const [WithDrawalAmount, SetWithDrawalAmount] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const handleVerifyPay = async () => {

        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
    
        var UpdatedWallet = Number(localStorage.getItem("Wallet")) - (100 * WithDrawalAmount);
    
        if(UpdatedWallet >= 0){
            
            localStorage.setItem("Wallet", UpdatedWallet);
        
            const response = await fetch(`${BackendBASE_URL}/PurchaseCurrency`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ UpdatedAmount : UpdatedWallet , Name : localStorage.getItem("Name") , Time : `${hours}:${minutes}:${seconds}` }),
            });

            if(response.status == 200){
                UpdateShowMessage(false)
            }

        }else{
            setErrorMessage("Please Enter A Valid Amount .");
        }
    
    };

    return (
 
        <div style={{backgroundColor:"#2d3748",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",height:"100vh"}}>
            <div style={{ position: "fixed", inset: 0, display: "flex", justifyContent: "center",width:"calc(100% - 2rem)",marginLeft:"1rem",height:"calc(100vh - 2rem)",marginTop:"1rem" }}>
                <div style={{ backgroundColor: "#1a202c", padding: "24px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", width: "100%" }}>

                    <div style={{ display: "flex" , justifyContent: "space-between" , alignItems: "center" , marginBottom: "16px" }} >
                        
                        <h2 style={{ fontSize: "18px" , fontWeight: "bold" , color: "#f7fafc" }} >
                            Withdraw
                        </h2>

                        <button onClick={() => UpdateWithdrawDiv(true)} style={{ backgroundColor: "#2d3748" , color: "#f7fafc" , border: "none" , borderRadius: "50%" , width: "32px" , height: "32px" , display: "flex" , justifyContent: "center" , alignItems: "center" , cursor: "pointer" , fontSize: "18px" }} >
                            ×
                        </button>

                    </div>

                    <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px",color:"#f7fafc" }}>WithDrawal Amount</h3>
      
                    <input type="number" placeholder="Enter WithDrawal Amount" style={{ width: "calc(100% - 16px)", padding: "8px", border: "none", borderRadius: "4px", marginBottom: "16px",backgroundColor:"#2d3748",color:"#f7fafc" }} className="custom-input" value={WithDrawalAmount} onChange={(e) => SetWithDrawalAmount(e.target.value)}/>

                    {errorMessage && <p style={{ color: "red", marginBottom: "8px" }}>{errorMessage}</p>}

                    <button style={{ width: "100%", backgroundColor: '#47c2be', color: '#1a202c', padding: "8px", borderRadius: "4px", marginBottom: "16px", border:"none" }} onClick={handleVerifyPay} >
                        WithDraw
                    </button>
        
                </div>
            </div>
        </div>

    );

};

export default Counter;
