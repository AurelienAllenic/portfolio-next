import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["aurelienallenic.fr", "raw.githubusercontent.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
