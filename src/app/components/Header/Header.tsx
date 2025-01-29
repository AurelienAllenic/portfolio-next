import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
      <div className={styles.logo}>RenderFlow.</div>
    </Link>
      <Link href="#contact-form" className={styles.contactButton}>Contactez-nous</Link>
    </header>
  );
}

export default Header;
