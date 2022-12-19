import React from "react";
import { config } from "../config";

const Head: React.FC = () => (
  <>
    <title>{config.name}</title>
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="description" content={config.title} />
    <meta name="image" content="/api/og" />
    {/* OpenGraph */}
    <meta property="og:site_name" content={config.name} />
    <meta property="og:url" content={process.env.NEXT_PUBLIC_VERCEL_URL} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={config.name} />
    <meta property="og:description" content={config.title} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image" content="/api/og" />
    <meta property="og:image:alt" content={config.title} />
    {/* Twitter */}
    <meta name="twitter:title" content={config.name} />
    <meta name="twitter:description" content={config.title} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="/api/og" />
    <meta name="twitter:image:alt" content={config.name} />
    {/* iOS */}
    <meta name="apple-mobile-web-app-status-bar" content="black-translucent" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta
      name="viewport"
      content="viewport-fit=cover, width=device-width, initial-scale=1"
    />
  </>
);

// eslint-disable-next-line import/no-default-export
export default Head;
