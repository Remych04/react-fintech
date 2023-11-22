import CardService from "../../../assets/dashbord/card-system.svg?react";
import styles from "./bank-card.module.css";

export function BankCard() {
  return (
    <div className={styles.card}>
      <div className={styles.namesBlock}>
        <p className={styles.name}>Name</p>
        <p className={styles.namesCreds}>Carla Rosser</p>
      </div>

      <div className={styles.cardCredsServiceBlock}>
        <div className={styles.cardCredsBlock}>
          <p className={styles.cardNumber}>1200 01452 54215</p>
          <p className={styles.cardDate}>08/23</p>
        </div>
        <div>
          <CardService />
        </div>
      </div>
    </div>
  );
}
