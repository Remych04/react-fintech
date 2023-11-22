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
  { text: "Dashobard", svg: DashboardSvg },
  { text: "Invoices", svg: InvoicesSvg },
  { text: "Messages", svg: MessagesSvg },
  { text: "My Wallets", svg: MyWalletsSvg },
  { text: "Activity", svg: ActivitySvg },
  { text: "Analytics", svg: AnalyticsSvg },
];

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img width="30px" height="30px" src={FintechLogo} alt="Fintech Logo" />
        <p className={styles.name}>Fintech</p>
      </div>
      <div className={styles.navButtons}>
        {buttons.map((button, index) => {
          //TODO check active
          const isActive = index === 0;
          return (
            <NavButton
              key={button.text}
              text={button.text}
              SVG={button.svg}
              isActive={isActive}
            />
          );
        })}
      </div>
    </nav>
  );
}
