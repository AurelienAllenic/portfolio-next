import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>
          <Image
            src="/images/logo-icon.png"
            alt="logo"
            width={30}
            height={30}
          ></Image>
          enderFlow.
        </div>
      </Link>
      <Link href="#contact-form" className={styles.contactButton}>
        Contactez-nous
      </Link>
    </header>
  );
}

export default Header;
