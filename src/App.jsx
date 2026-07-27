import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import ScanAndPay from "./pages/ScanAndPay";
import UpiOnCredit from "./pages/UpiOnCredit";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Support from "./pages/Support";
import NotFound from './pages/NotFound';
import CreditCards from './pages/CreditCards';
import Loans from './pages/Loans';
import Insurance from './pages/Insurance';
import TapToPay from './pages/TapToPay';
import AboutUs from './pages/AboutUs';
import Faq from './pages/Faq';
import Footer from './pages/Footer';

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
        <Route path="/support" element={<Support />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/credit-cards" element={<CreditCards />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/tap-to-pay" element={<TapToPay />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<Faq/>} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;