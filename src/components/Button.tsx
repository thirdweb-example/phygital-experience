"use client";

import { useState, type FC } from "react";
import axios from "axios";
import { useAddress } from "@thirdweb-dev/react";
import styles from "@/styles/Home.module.css";

const Button: FC<{ id: string }> = ({ id }) => {
  const address = useAddress();
  const [loading, setLoading] = useState(false);

  const claim = async () => {
    setLoading(true);
    try {
      await axios.post("/api/nft", {
        id: id,
        address,
      });

      alert("NFT claimed!");
    } catch (err) {
      alert("Error claiming NFT");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {address && (
        <button
          className={styles.claimButton}
          onClick={() => claim()}
          disabled={loading}
        >
          {loading ? "Loading..." : "Claim"}
        </button>
      )}
    </>
  );
};

export default Button;
