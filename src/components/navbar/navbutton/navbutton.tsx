import React from "react";
import styles from "./navbutton.module.css";
import { SvgComponent } from "../../../types/types";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  text: string;
  SVG: SvgComponent;
  path: string;
};

export const NavButton = React.memo(function NavButtonComponent({
  text,
  SVG,
  path,
}: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath =
    location.pathname === "/" ? "/dashboard" : location.pathname;
  const isActive = currentPath === path;
  const activeStyle = isActive ? styles.activeBlock : "";

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div
      className={`${styles.navButtonBlock} ${activeStyle}`}
      onClick={handleClick}
    >
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
