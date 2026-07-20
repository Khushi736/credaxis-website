import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import ScanAndPay from "./pages/ScanAndPay";
import UpiOnCredit from "./pages/UpiOnCredit";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Security from "./pages/Security";
import About from "./pages/About";
import NotFound from './pages/NotFound';

// Website at / — admin is a separate Vite app (local) or served by backend/nginx at /admin/
const basename = (import.meta.env.BASE_URL || "/").replace(/\/$/, "") || "/";
const adminUrl = (import.meta.env.VITE_ADMIN_URL || "http://localhost:5173/admin").replace(
  /\/$/,
  ""
);

function AdminRedirect() {
  useEffect(() => {
    window.location.replace(`${adminUrl}/`);
  }, []);

  return (
    <div style={{ color: "#fff", padding: 24, fontFamily: "sans-serif" }}>
      Opening admin panel…
    </div>
  );
}

function App() {
  return (
    <Router basename={basename === "/" ? undefined : basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan-and-pay" element={<ScanAndPay />} />
        <Route path="/upi-on-credit" element={<UpiOnCredit />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        {/* Local Vite: /admin → admin-panel (port 5173). Production uses nginx/backend. */}
        <Route path="/admin/*" element={<AdminRedirect />} />
        <Route path="/admin" element={<AdminRedirect />} />
        <Route path="/security" element={<Security />} />
        <Route path="/about" element={<About />} />
        <Route path="/not-found" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;