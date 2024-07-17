import React from "react";
import { Routes, Route } from "react-router-dom";
import Campaign from "src/components/campaign";
import Header from "src/components/Common/Header";

const Router = () => {
    return (
            <Routes>
                <Route path="/campaign" element={ <Campaign />} />
                <Route path="/header" element={<Header />} />
            </Routes>
        )
}
export default Router;