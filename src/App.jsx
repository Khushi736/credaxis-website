import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import ScanAndPay from "./pages/ScanAndPay";
import Mandate from "./pages/Mandate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DeleteAccount from "./pages/DeleteAccount";
import TermsAndConditions from "./pages/TermsAndConditions";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import CreditCards from "./pages/CreditCards";
import Loans from "./pages/Loans";
import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq";
import Footer from "./pages/Footer";
import BillPayments from "./pages/BillPayments";
import FeatureComingSoon from "./pages/FeatureComingSoon";
import CreditScore from "./pages/CreditScore";
import DeviceLockPage from "./pages/DeviceLockPage";
import RewardsPage from "./pages/Rewards";
import FdCreditCardPage from "./pages/FdCreditCardPage";
import { useRouteSEO } from "./hooks/useSEO";

const basename = (import.meta.env.BASE_URL || "/").replace(/\/$/, "") || "/";
const adminUrl = (
  import.meta.env.VITE_ADMIN_URL || "http://localhost:5173/admin"
).replace(/\/$/, "");

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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  useRouteSEO();

  const hideFooterRoutes = ["/privacy-policy", "/delete-account", "/upcoming"];
  const showFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mandate" element={<Mandate />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/admin/*" element={<AdminRedirect />} />
        <Route path="/admin" element={<AdminRedirect />} />
        <Route path="/support" element={<Support />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/credit-cards" element={<CreditCards />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/bill-payments" element={<BillPayments />} />
        <Route path="/upcoming" element={<FeatureComingSoon />} />
        <Route path="/credit-score" element={<CreditScore />} />
        <Route path="/device-lock" element={<DeviceLockPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/fd-against-credit" element={<FdCreditCardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router basename={basename === "/" ? undefined : basename}>
      <AppContent />
    </Router>
  );
}

export default App;
