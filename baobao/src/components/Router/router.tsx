import React from "react";
import {Routes, Route} from "react-router-dom";
import Campaign from "src/components/campaign";
import Header from "src/components/Common/Header";
import Login from "src/components/Login/index";
import Callback from "src/components/Callback";
import Write from "src/components/campaign/Write";
import Detail from "src/components/campaign/detail";

const Router = () => {
    return (
        <Routes>
            <Route path="/campaign" element={<Campaign/>}/>
            <Route path="/header" element={<Header/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/callback" element={<Callback/>}/>
            <Route path="/campaign/create" element={<Write />} />
            <Route path="/campaign/:id" element={<Detail />} />
        </Routes>
    )
}
export default Router;