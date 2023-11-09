"use client";

import { NFT, ThirdwebNftMedia } from "@thirdweb-dev/react";
import type { FC } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

interface NFTCardProps {
  metadata: NFT["metadata"];
}

export const NFTCard: FC<NFTCardProps> = ({ metadata }) => {
  return (
    <Link
      href={`https://thirdweb.com/goerli/${process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS}/nfts/0/${metadata.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div key={metadata.id} className={styles.nft}>
        <ThirdwebNftMedia metadata={metadata} width="140px" height="140px" />
        <h2>{metadata.name}</h2>
      </div>
    </Link>
  );
};
