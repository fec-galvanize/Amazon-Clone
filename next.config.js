/** @type {import('next').NextConfig} */

module.exports = {
  nextConfig: {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["m.media-amazon.com"],
    },
  },
};
