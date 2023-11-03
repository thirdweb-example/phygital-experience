# Phygital experience with thirdweb Engine

This example demonstrates using thirdweb Engine to let users claim an NFT by scanning a QR code.

1. Buyers scans a QR code they received with their physical product.
2. Sign in with google/email on our website using embedded wallet.
3. Click on the claim button which will call our backend API to mint the NFT.

The buyer receives the NFT without requiring wallet signatures or gas funds.

## Instructions

1. Create a `.env.local` file from the template:
   ```bash
   cp .env.example .env.local
   ```
2. Provide details of your project.
   ```bash
   DATABASE_URL=
   NEXT_PUBLIC_TEMPLATE_CLIENT_ID=
   ENGINE_URL=
   THIRDWEB_ACCESS_TOKEN=
   BACKEND_WALLET_ADDRESS=
   NEXT_PUBLIC_NFT_CONTRACT_ADDRESS=
   ```
3. Start the server with favorite package manager.
   ```bash
   bun dev
   ```

## Get in touch

- Support: [Join the Discord](https://discord.gg/thirdweb)
- Twitter: [@thirdweb](https://twitter.com/thirdweb)
