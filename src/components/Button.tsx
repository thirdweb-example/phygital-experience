"use client";

import type { FC } from "react";
import axios from "axios";
import { useAddress } from "@thirdweb-dev/react";
import styles from "@/styles/Home.module.css";

const Button: FC<{ id: string }> = ({ id }) => {
  const address = useAddress();

  const claim = async () => {
    try {
      const req = await axios.post("/api/nft", {
        id: id,
        address,
      });

      alert("NFT claimed!");
    } catch (err) {
      alert("Error claiming NFT");
    }
  };

  return (
    <>
      {address && (
        <button className={styles.claimButton} onClick={() => claim()}>
          Claim
        </button>
      )}
    </>
  );
};

export default Button;
