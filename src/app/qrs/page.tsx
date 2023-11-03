import { QR } from "@/components/QR";
import prisma from "@/prisma/prisma";
import styles from "@/styles/Home.module.css";

async function getData() {
  const nfts = await prisma.nFT.findMany({
    where: {
      minted: false,
    },
    take: 30,
  });

  if (!nfts) {
    throw new Error("Error");
  }

  return { nfts: JSON.stringify(nfts) };
}

export default async function QrsPage() {
  const nfts = JSON.parse((await getData()).nfts);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Unclaimed NFTs</h1>
      <div className={styles.grid}>
        {nfts.map((nft: { id: string }) => (
          <QR
            url={`https://engine-phygital.vercel.app/claim?id=${nft.id}`}
            key={nft.id}
          />
        ))}
      </div>
    </div>
  );
}
