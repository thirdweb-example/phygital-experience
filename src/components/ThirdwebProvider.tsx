"use client";

import { ThirdwebProvider, embeddedWallet } from "@thirdweb-dev/react";

import type { FC } from "react";

export const CustomThirdwebProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThirdwebProvider
      activeChain="goerli"
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      supportedWallets={[embeddedWallet()]}
    >
      {children}
    </ThirdwebProvider>
  );
};
