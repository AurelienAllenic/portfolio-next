import React from "react";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>RenderFlow.</div>
      <button className={styles.contactButton}>Contactez-nous</button>
    </header>
  );
}

export default Header;
