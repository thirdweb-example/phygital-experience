import Button from "@/components/Button";
import { MediaRenderer } from "@/components/MediaRenderer";
import prisma from "@/prisma/prisma";
import styles from "@/styles/Home.module.css";

export default async function Home({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const nft = await getData(searchParams.id);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Claim Page</h1>
      {nft.minted && <h1>NFT has already been claimed</h1>}
      <MediaRenderer src={nft.image} alt={nft.name} />
      <h2>{nft.name}</h2>
      <p>{nft.description}</p>

      <h3>Attributes</h3>
      {/* @ts-ignore */}
      {Object.keys(nft.attributes).map((key) => (
        <p key={key}>
          {/* @ts-ignore */}
          {key}: {nft.attributes[key]}
        </p>
      ))}

      <Button id={searchParams.id} />
    </div>
  );
}

export async function getData(id: string) {
  const nft = await prisma.nFT.findUnique({
    where: {
      id,
    },
  });

  if (!nft) {
    throw new Error("NFT does not exist");
  }

  return nft;
}
