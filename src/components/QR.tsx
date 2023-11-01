"use client";

import { useQRCode } from "next-qrcode";
import type { FC } from "react";

export const QR: FC<{ url: string }> = ({ url }) => {
  const { SVG } = useQRCode();

  return (
    <SVG
      text={url}
      options={{
        margin: 2,
        width: 200,
      }}
    />
  );
};
