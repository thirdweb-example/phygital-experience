"use client";

import { NFTCard } from "@/components/NFTCard";
import { NFT_CONTRACT_ADDRESS } from "@/consts/addresses";
import styles from "@/styles/Home.module.css";
import { useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";

export default function Home() {
  const { data: contract } = useContract(NFT_CONTRACT_ADDRESS);
  const address = useAddress();
  const { data: nfts, isLoading } = useOwnedNFTs(contract, address);

  return (
    <div className={styles.container}>
      <h1>Your inventory</h1>
      {isLoading && <h1>Loading...</h1>}
      <div className={styles.nfts}>
        {nfts?.map((nft) => (
          <NFTCard metadata={nft.metadata} key={nft.metadata.id} />
        ))}
      </div>
    </div>
  );
}
