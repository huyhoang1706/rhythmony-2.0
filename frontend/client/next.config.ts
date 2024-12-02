import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1k0447g7gcgry.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
