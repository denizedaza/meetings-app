/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_DB: process.env.MONGO_DB,
    MONGO_PW: process.env.MONGO_PW
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config
  }
}

module.exports = nextConfig
