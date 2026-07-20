import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components import karein
import Home from "./pages/Home";
import ScanAndPay from "./pages/ScanAndPay"; 
import UpiOnCredit from "./pages/UpiOnCredit"; 
import PrivacyPolicy from "./pages/PrivacyPolicy"; // <-- Privacy Policy yahan import ki hai

function App() {
  return (
    <Router>
      <Routes>
        {/* Main website "/" url par dikhegi */}
        <Route path="/" element={<Home />} />
        
        {/* Upgrade section ke naye pages */}
        <Route path="/scan-and-pay" element={<ScanAndPay />} />
        <Route path="/upi-on-credit" element={<UpiOnCredit />} />

        {/* Footer link ke liye Privacy Policy route */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        
        {/* Koi bhi galat URL type kare toh ye dikhega (Optional) */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;