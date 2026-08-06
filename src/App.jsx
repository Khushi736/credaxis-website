import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // 🔥 useLocation import kiya
import "./App.css";

import Home from "./pages/Home";
import ScanAndPay from "./pages/ScanAndPay";
import Mandate from "./pages/Mandate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DeleteAccount from "./pages/DeleteAccount";
import TermsAndConditions from "./pages/TermsAndConditions";
import Support from "./pages/Support";
import NotFound from './pages/NotFound';
import CreditCards from './pages/CreditCards';
import Loans from './pages/Loans';
import Insurance from './pages/Insurance';
import AboutUs from './pages/AboutUs';
import Faq from './pages/Faq';
import Footer from './pages/Footer';
import BillPayments from "./pages/BillPayments";

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

// 🔥 NAYA COMPONENT: Routing aur Footer logic ke liye
function AppContent() {
  const location = useLocation();
  
  // Jin pages par Footer hide karna hai, unka path is array mein daalein
  const hideFooterRoutes = ["/privacy-policy", "/delete-account"];
  
  // Agar current path is array mein nahi hai, tabhi Footer dikhega
  const showFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan-and-pay" element={<ScanAndPay />} />
        <Route path="/mandate" element={<Mandate />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        {/* Local Vite: /admin → admin-panel (port 5173). Production uses nginx/backend. */}
        <Route path="/admin/*" element={<AdminRedirect />} />
        <Route path="/admin" element={<AdminRedirect />} />
        <Route path="/support" element={<Support />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/credit-cards" element={<CreditCards />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/bill-payments" element={<BillPayments />} />
      </Routes>

      {/* Conditionally Rendering the Footer */}
      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router basename={basename === "/" ? undefined : basename}>
      {/* AppContent ko Router ke andar render kiya taaki useLocation kaam kare */}
      <AppContent />
    </Router>
  );
}

export default App;