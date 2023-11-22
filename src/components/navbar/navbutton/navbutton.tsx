import React from "react";
import styles from "./navbutton.module.css";
import { SvgComponent } from "../../../types/types";

type Props = {
  text: string;
  isActive: boolean;
  SVG: SvgComponent;
};

export const NavButton = React.memo(function NavButtonComponent({
  text,
  isActive,
  SVG,
}: Props) {
  const activeStyle = isActive ? styles.activeBlock : "";

  return (
    <div className={`${styles.navButtonBlock} ${activeStyle}`}>
      <SVG
        className={styles.svg}
        fill={isActive ? "#0177fd" : "#a4b4cb"}
        width="24"
        height="24"
      />
      <p className={isActive ? styles.textActive : styles.textInactive}>
        {text}
      </p>
    </div>
  );
});
