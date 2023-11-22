import styles from "./navbar.module.css";
import FintechLogo from "../../assets/logo.svg";

import DashboardSvg from "../../assets/navbar/dashboard.svg?react";
import InvoicesSvg from "../../assets/navbar/invoices.svg?react";
import MessagesSvg from "../../assets/navbar/messages.svg?react";
import MyWalletsSvg from "../../assets/navbar/mywallets.svg?react";
import ActivitySvg from "../../assets/navbar/activity.svg?react";
import AnalyticsSvg from "../../assets/navbar/analytics.svg?react";

import { NavButton } from "./navbutton/navbutton";

const buttons = [
  { text: "Dashobard", svg: DashboardSvg, path: "/dashboard" },
  { text: "Invoices", svg: InvoicesSvg, path: "/invoices" },
  { text: "Messages", svg: MessagesSvg, path: "/messages" },
  { text: "My Wallets", svg: MyWalletsSvg, path: "/wallets" },
  { text: "Activity", svg: ActivitySvg, path: "/activity" },
  { text: "Analytics", svg: AnalyticsSvg, path: "/analytics" },
];

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img width="30px" height="30px" src={FintechLogo} alt="Fintech Logo" />
        <p className={styles.name}>Fintech</p>
      </div>
      <div className={styles.navButtons}>
        {buttons.map((button) => {
          return (
            <NavButton
              key={button.text}
              text={button.text}
              SVG={button.svg}
              path={button.path}
            />
          );
        })}
      </div>
    </nav>
  );
}
