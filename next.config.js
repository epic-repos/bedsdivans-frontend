/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["www.bedsdivans.co.uk", "cdn.shopify.com", "localhost"],
  },
};

module.exports = nextConfig;
