import React from "react";
import {Routes, Route} from "react-router-dom";
import Campaign from "src/components/campaign";
import Header from "src/components/Common/Header";
import Login from "src/components/Login/index";
import Callback from "src/components/Callback";
import Write from "src/components/campaign/Write";

const Router = () => {
    return (
        <Routes>
            <Route path="/campaign" element={<Campaign/>}/>
            <Route path="/header" element={<Header/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/callback" element={<Callback/>}/>
            <Route path="/campaign/create" element={<Write />} />
        </Routes>
    )
}
export default Router;