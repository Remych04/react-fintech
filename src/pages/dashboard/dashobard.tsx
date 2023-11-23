import { BankCard } from "../../components/main/bank-card/bank-card";
import { TextField } from "../../components/text/textfield";
import styles from "./dashbord.module.css";

export function Dashobard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.transfer}>
        <TextField text="My Card" colorKey="primary" size={24} />
        <BankCard />
      </div>
      <div className={styles.flow}>Stat Block</div>
    </div>
  );
}
