import React, { useState, useEffect } from "react";

import { io } from "socket.io-client";

import Pay from "./BalanceWidget/Deposit/index";
import Verify from "./BalanceWidget/Deposit/Verify";
import Withdraw from "./BalanceWidget/WithDraw/index";
import Sucess from "./BalanceWidget/WithDraw/Sucess";
import FrontPage from "./FrontPage";
import AdsPage from "../../../Ads";

import Loader from "../../../../Loader";

import { BackendBASE_URL } from '../../../../../main';

const Home = () => {
  
  const [activeChartButton, setActiveChartButton] = useState("1D");

  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  
  const [DepositScreen, SetDepositScreen] = useState(false);

  const [selectedAmount, setSelectedAmount] = useState(1);

  const [AlertDiv, SetAlertDiv] = useState(false);
  const [WithdrawDiv, SetWithdrawDiv] = useState(true);
  const [ShowMessage, SetShowMessage] = useState(true);

  const [Ads, SetAds] = useState("");

  useEffect(() => {

    const socket = io(`${BackendBASE_URL}/${activeChartButton}`);
    
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

    SetAds(localStorage.getItem("Ads"));

    return () => {
      socket.disconnect();
    };

  }, [activeChartButton]); 

  return (

    <>
    
    <style>
      {`

        .custom-input::placeholder {
          color: #f7fafc; 
        }

        .custom-input:focus {
          outline: none; /* Border color on focus */
        }

      `}
    </style>

    {(DepositScreen && !AlertDiv && Ads == "false") && (

      <Pay UpdateDepositScreen={SetDepositScreen} UpdateSelectedAmount={setSelectedAmount} Amountselected={selectedAmount} UpdateAlertDiv={SetAlertDiv} />

    )}

    {(DepositScreen && AlertDiv && Ads == "false") && (

      <Verify Amountselected={selectedAmount} UpdateAlertDiv={SetAlertDiv} UpdateDepositScreen={SetDepositScreen}/>

    )} 

    {(!DepositScreen && !WithdrawDiv && ShowMessage && Ads == "false") && (

      <Withdraw UpdateWithdrawDiv={SetWithdrawDiv} UpdateShowMessage={SetShowMessage}/>

    )}

    {(!DepositScreen && !WithdrawDiv && !ShowMessage && Ads == "false") && (

      <Sucess UpdateShowMessage={SetShowMessage} UpdateWithdrawDiv={SetWithdrawDiv}/>

    )}

    {(!DepositScreen && WithdrawDiv && Ads == "false") && (

      <FrontPage UpdateDepositScreen={SetDepositScreen} UpdateWithdrawDiv={SetWithdrawDiv} Datachart={chartData} UpdateActiveChartButton={setActiveChartButton} activeButtonChart={activeChartButton}/>

    )}

    {(Ads == "true") && (

      <AdsPage UpdateAds={SetAds}/>

    )}

    {(Ads == "") && (

      <Loader/>

    )}

    </>

  );

};

export default Home;