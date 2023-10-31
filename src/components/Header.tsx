"use client";

import type { FC } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

export const Header: FC = () => {
  return (
    <nav className={styles.header}>
      <div style={{ width: "200px" }}>
        <Link href="/">
          <Image
            src="/thirdweb.svg"
            alt="thirdweb"
            width={52}
            height={32}
            className={styles.logo}
          />
        </Link>
      </div>

      <div style={{ width: "200px" }}>
        <ConnectWallet theme="dark" />
      </div>
    </nav>
  );
};
