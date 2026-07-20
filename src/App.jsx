import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Apne components import karein
import Home from "./pages/Home";
import ScanAndPay from "./pages/ScanAndPay"; 
// import NotFound from "./NotFound"; // (Hit the wall wala page agar aapne banaya hai)
import UpiOnCredit from "./pages/UpiOnCredit"; // Upar import karein



function App() {
  return (
    <Router>
      <Routes>
        {/* Main website "/" url par dikhegi */}
        <Route path="/" element={<Home />} />
        
        {/* Upgrade section ke naye pages */}
        <Route path="/scan-and-pay" element={<ScanAndPay />} />
        <Route path="/upi-on-credit" element={<UpiOnCredit />} />
        
        {/* Agar aap baaki pages baad mein banayenge, toh unhe filhal 404 par bhej sakte hain */}
        {/* <Route path="/upi-on-credit" element={<NotFound />} /> */}
        {/* <Route path="/tap-to-pay" element={<NotFound />} /> */}
        
        {/* Koi bhi galat URL type kare toh ye dikhega */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;