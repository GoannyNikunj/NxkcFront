import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./components/Register"
import Auth from "./components/Auth"

import Privacy from "./components/Shared/Pages/Footer/Privacy"
import Terms from "./components/Shared/Pages/Footer/Terms"
import ContactUsPage from "./components/Shared/Pages/Footer/ContactUsPage"
import About from "./components/Shared/Pages/Footer/About"

import GraphAds from "./components/Shared/Pages/Screen/DashBoard/LivePriceUpdater/Graph/Ads"

const App = () => {
  
  return (
    <Router>
      <Routes> 

        <Route path="/" element={ <Auth/> } />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Register/:ReferralCode" element={<Register/>} />

        <Route path="/ContactUs" element={<ContactUsPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/TermsAndCondition" element={<Terms />} />
        <Route path="/PrivacyPolicy" element={<Privacy />} />

        <Route path="/GraphBatches" element={<GraphAds />} />

      </Routes>
    </Router>
  );
};

export default App;