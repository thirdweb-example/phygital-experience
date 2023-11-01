"use client";

import { NFT, ThirdwebNftMedia } from "@thirdweb-dev/react";
import type { FC } from "react";
import styles from "@/styles/Home.module.css";

interface NFTCardProps {
  metadata: NFT["metadata"];
}

export const NFTCard: FC<NFTCardProps> = ({ metadata }) => {
  return (
    <div key={metadata.id} className={styles.nft}>
      <ThirdwebNftMedia metadata={metadata} className={styles.nftImage} />
      <h2>{metadata.name}</h2>
      <p>{metadata.description}</p>
    </div>
  );
};
