import CardService from "../../../assets/dashbord/card-system.svg?react";
import { TextField } from "../../text/textfield";
import styles from "./bank-card.module.css";

export function BankCard() {
  return (
    <div className={styles.card}>
      <div className={styles.namesBlock}>
        <TextField text="Name" colorKey="white" size={12} />
        <TextField text="Carla Rosser" colorKey="white" size={18} />
      </div>

      <div className={styles.cardCredsServiceBlock}>
        <div className={styles.cardCredsBlock}>
          <TextField text="1200 01452 54215" colorKey="white" size={14} />
          <TextField text="08/23" colorKey="white" size={11} />
        </div>
        <div>
          <CardService />
        </div>
      </div>
    </div>
  );
}
