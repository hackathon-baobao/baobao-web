import React from "react";
import {Routes, Route} from "react-router-dom";
import Campaign from "src/components/campaign";
import Header from "src/components/Common/Header";
import Login from "src/components/Login/index";
import Callback from "src/components/Callback";
import Write from "src/components/campaign/Write";
import Detail from "src/components/campaign/detail";
import Tree from "src/components/Tree/Tree";
import Point from "src/components/Tree/Point";
import TreeMain from "src/components/Tree/index";
import Rank from "src/components/Tree/Rank";

const Router = () => {
    return (
        <Routes>
            <Route path="/campaign" element={<Campaign/>}/>
            <Route path="/header" element={<Header/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/callback" element={<Callback/>}/>
            <Route path="/campaign/create" element={<Write />} />
            <Route path="/campaign/:id" element={<Detail />} />
            <Route path="/treetree" element={<Tree />} />
            <Route path="/Point" element={<Point />} />
            <Route path="/tree" element={<TreeMain />} />
            <Route path="/rank" element={<Rank />} />
        </Routes>
    )
}
export default Router;