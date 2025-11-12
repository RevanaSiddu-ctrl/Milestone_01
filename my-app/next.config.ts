import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "restan-nextjs.vercel.app",
      },
    ],
  },
};

export default nextConfig;

