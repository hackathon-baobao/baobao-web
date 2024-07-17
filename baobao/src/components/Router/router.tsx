import React from "react";
import { Routes, Route } from "react-router-dom";
import Campaign from "src/components/campaign";

const Router = () => {
    return (
            <Routes>
                <Route path="/" element={ <Campaign />} />
            </Routes>
        )
}
export default Router;