import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  //biz ayarladık
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
