import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import FarmerScreen from "./Screens/farmerScreen/farmerScreen";
import QualityScreen from "./Screens/qualityScreen/qualityScreen";
import CustomerScreen from "./Screens/customerScreen/customerScreen";
import MicroFinanceScreen from "./Screens/microFinanceScreen/microFinanceScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/homeScreen/homeScreen";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/farmer" element={<FarmerScreen />} />
        <Route path="/quality" element={<QualityScreen />} />
        <Route path="/customer" element={<CustomerScreen />} />
        <Route path="/finance" element={<MicroFinanceScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
