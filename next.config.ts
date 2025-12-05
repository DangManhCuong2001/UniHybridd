import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'crypto-images-4545f.web.app', protocol: 'https' },
    ],
  },
  /* config options here */
};

export default nextConfig;
