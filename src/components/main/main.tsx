import { Route, Routes } from "react-router-dom";
import { Dashobard } from "../../pages/dashboard/dashobard";
import { Activity } from "../../pages/activity/activity";
import { Analytics } from "../../pages/analytics/analytics";
import { Wallets } from "../../pages/wallets/wallets";
import { Invoices } from "../../pages/invoices/invoices";
import { Messages } from "../../pages/messages/messages";

export function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Dashobard />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/dashboard" element={<Dashobard />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/wallets" element={<Wallets />} />
      </Routes>
    </main>
  );
}
