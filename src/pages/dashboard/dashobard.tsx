import { BankCard } from "../../components/main/bank-card/bank-card";
import { MainHeader } from "../../components/main/main-header/main-header";
import styles from "./dashbord.module.css";

export function Dashobard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.transfer}>
        <MainHeader text="My Card" />
        <BankCard />
      </div>
      <div className={styles.flow}>Stat Block</div>
    </div>
  );
}
