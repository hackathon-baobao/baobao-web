import React from "react";
import {Routes, Route} from "react-router-dom";
import Campaign from "src/components/campaign";
import Header from "src/components/Common/Header";
import Login from "src/components/Login/index";
import Callback from "src/components/Callback";

const Router = () => {
    return (
        <Routes>
            <Route path="/campaign" element={<Campaign/>}/>
            <Route path="/header" element={<Header/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/callback" element={<Callback/>}/>
        </Routes>
    )
}
export default Router;