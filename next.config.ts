import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lictonspringsreview.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
