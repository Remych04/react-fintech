import styles from "./header.module.css";
import Search from "../../assets/header/search.svg?react";
import Notification from "../../assets/header/notification.svg?react";
import avatar from "../../assets/header/avatar.webp";

export function Header() {
  return (
    <header className={styles.header}>
      <Search className={styles.icon} width={24} height={24} />
      <Notification className={styles.icon} width={24} height={24} />
      <img className={styles.avatar} src={avatar} alt="avatar" />
    </header>
  );
}
