import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
      <div className={styles.logo}>RenderFlow.</div>
    </Link>
      <button className={styles.contactButton}>Contactez-nous</button>
    </header>
  );
}

export default Header;
