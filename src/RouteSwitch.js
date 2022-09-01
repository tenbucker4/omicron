import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/Home.css";

const RouteSwitch = () => {
    const [currentId, setCurrentId] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/omicron" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
