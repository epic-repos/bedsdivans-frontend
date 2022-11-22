/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  images: {
    domains: ["www.bedsdivans.co.uk", "cdn.shopify.com", "api.dbzbeds.co.uk"],
  },
};

module.exports = nextConfig;
