import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Loader from "./Loader"

import Login from "./Login"
import DashBoard from "./Shared/Pages/Screen/DashBoard/index"

const AuthHandler = () => {
  
    const [Screen, SetScreen] = useState(0);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        
        if(localStorage.getItem("Token") == null){
            SetScreen(1);
        }else{
            SetScreen(2);
        }

    }, [isLogin]);

    if (Screen == 0) {
        return <Loader/>;
    } else if (Screen == 1) {
        return <Login setIsLogin={setIsLogin}/>;
    } else {
        return <DashBoard />;
    }

};

export default AuthHandler;
