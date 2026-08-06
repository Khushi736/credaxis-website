import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";
import { useSEO } from "../hooks/useSEO";

const SUPPORT_EMAIL = "support@mycredaxis.com";

export default function DeleteAccount() {
  useSEO(null, "Delete Account - MyCredAxis");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <div className="privacy-header">
          <h1>Delete your MyCredAxis account</h1>
          <p>
            MyCredAxis is operated by <strong>Bisani Brothers Private Limited</strong>
          </p>
          <p>Last updated: 6 August 2026</p>
        </div>

        <div className="privacy-content">
          <section>
            <h2>Overview</h2>
            <p>
              You can request deletion of your MyCredAxis account and associated
              personal data from within the mobile app. Requests are reviewed by
              our team before the account is permanently deactivated.
            </p>
          </section>

          <section>
            <h2>How to request account deletion (in the app)</h2>
            <ol className="privacy-steps">
              <li>Open the <strong>MyCredAxis</strong> app and log in with your registered mobile number and OTP.</li>
              <li>Go to <strong>Settings</strong> → <strong>Delete account</strong> (or Profile → Account → Delete account).</li>
              <li>Optionally enter a reason, then tap <strong>Submit deletion request</strong>.</li>
              <li>Your request is sent to our admin team. You will receive an in-app notification when it is received.</li>
              <li>
                While the request is <strong>pending</strong>, you may cancel it from the same screen in the app.
              </li>
              <li>
                After admin approval, your account is deactivated and you will be logged out. You will receive a notification when deletion is approved or if it is rejected (with a reason).
              </li>
            </ol>
          </section>

          <section>
            <h2>What data is deleted</h2>
            <p>When your deletion request is approved, we deactivate your account and:</p>
            <ul className="privacy-list">
              <li>Mark your account as deleted and block further login with that account</li>
              <li>Release your mobile number so you may register again as a new user if you choose</li>
              <li>Stop processing your data for active app services (wallet, rewards, games, mandates, etc.)</li>
            </ul>
          </section>

          <section>
            <h2>What data may be retained</h2>
            <p>
              We may retain certain records where required by law, fraud prevention,
              dispute resolution, or legitimate business purposes, for example:
            </p>
            <ul className="privacy-list">
              <li>Transaction and payment audit logs (as required by financial regulations)</li>
              <li>KYC / identity verification records (as permitted or required by applicable law)</li>
              <li>Support and deletion-request records (admin review trail)</li>
              <li>Aggregated or anonymised analytics that cannot identify you</li>
            </ul>
            <p>
              Retention periods follow our{" "}
              <Link to="/privacy-policy">Privacy Policy</Link> and applicable Indian
              law. Where retention is not legally required, data is deleted or
              anonymised within a reasonable period after account deactivation.
            </p>
          </section>

          <section>
            <h2>Processing time</h2>
            <p>
              Deletion requests are typically reviewed within <strong>7 business days</strong>.
              You can check request status in the app under Settings → Delete account.
            </p>
          </section>

          <section>
            <h2>Delete data without deleting your account</h2>
            <p>
              To update or remove specific profile information without closing your
              account, use Profile settings in the app or contact support. Full
              account deletion requires the in-app request flow above.
            </p>
          </section>

          <section>
            <h2>Need help?</h2>
            <p>
              If you cannot access the app, email us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> from your
              registered email or include your registered mobile number. Subject:
              <strong> Account deletion request — MyCredAxis</strong>.
            </p>
            <p>
              See also: <Link to="/support">Support</Link> ·{" "}
              <Link to="/privacy-policy">Privacy Policy</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
