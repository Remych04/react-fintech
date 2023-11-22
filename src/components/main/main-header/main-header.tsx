import styles from "./main-header.module.css";

type Props = {
  text: string;
};

export function MainHeader({ text }: Props) {
  return <p className={styles.block}>{text}</p>;
}
