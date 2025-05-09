import { resolve } from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(process.cwd(), "src"),
    };
    return config;
  },
};

export default nextConfig;
