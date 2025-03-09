import React, { useState, useEffect } from "react";

const Pay = ({ UpdateDepositScreen , UpdateSelectedAmount , Amountselected , UpdateAlertDiv }) => {

    const moneyOptions = [1, 2, 5, 10, 20, 50];

    const handlePay = async () => {
    
        const upiLink = `upi://pay?pa=paytmqr281005050101ngwvt1fjy1vh@paytm&pn=Paytm%20Merchant&paytmqr=281005050101NGWVT1FJY1VH&am=${Amountselected}`;
        window.location.href = upiLink; 
    
        UpdateAlertDiv(true);
    
    };

    return (
        <div style={{ backgroundColor: "#2d3748" , boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" , height: "100vh" }} >
            <div style={{ position: "fixed" , inset: 0 , display: "flex" , justifyContent: "center" , width: "calc(100% - 2rem)" , marginLeft: "1rem" , height: "calc(100vh - 2rem)" , marginTop: "1rem" }} >
                <div style={{ backgroundColor: "#1a202c" , padding: "24px" , borderRadius: "8px" , boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" , width: "100%" }} >

                    <div style={{ display: "flex" , justifyContent: "space-between" , alignItems: "center" , marginBottom: "16px" }} >
                        <h2 style={{ fontSize: "18px" , fontWeight: "bold" , color: "#f7fafc" }} > Select Amount </h2>
                        <button onClick={() => UpdateDepositScreen(false)} style={{ backgroundColor: "#2d3748" , color: "#f7fafc" , border: "none" , borderRadius: "50%" , width: "32px" , height: "32px" , display: "flex" , justifyContent: "center" , alignItems: "center" , cursor: "pointer" , fontSize: "18px" }} > 
                            ×
                        </button>
                    </div>

                    <div style={{ display: "grid" , gridTemplateColumns: "repeat(3, 1fr)" , gap: "8px" , marginBottom: "16px" }} >
                        {moneyOptions.map((amount) => (
                            <button key={amount} style={{ padding: "8px" , border: "1px solid transparent" , borderRadius: "4px" , backgroundColor: Amountselected === amount ? "#47c2be" : "#2d3748" , color: "#f7fafc" }} onClick={() => UpdateSelectedAmount(amount)} >
                                ₹{amount}
                            </button>
                        ))}
                    </div>

                    <h3 style={{ fontSize: "16px" , fontWeight: "bold" , marginBottom: "8px" , color: "#f7fafc" }} >
                        Enter Custom Amount
                    </h3>

                    <input type="number" placeholder="Enter custom amount" className="custom-input" style={{ width: "calc(100% - 16px)" , padding: "8px" , border: "none" , borderRadius: "4px" , marginBottom: "16px" , backgroundColor: "#2d3748" , color: "#f7fafc" }} value={Amountselected} onChange={(e) => UpdateSelectedAmount(e.target.value)} />

                    <button style={{ width: "100%" , backgroundColor: "#00C853" , color: "white" , padding: "8px" , borderRadius: "4px" , marginBottom: "16px" , border:"none" }} onClick={handlePay} >
                        Pay
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Pay;
