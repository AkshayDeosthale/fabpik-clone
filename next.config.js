/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "assets.fabpik.in",
      "portal.fabpik.in",
      "s3.ap-south-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
