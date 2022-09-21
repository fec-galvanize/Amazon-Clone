/** @type {import('next').NextConfig} */

module.exports = {
  nextConfig: {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["m.media-amazon.com"],
    },
  },
  env: {
    MONGO_URI:
      "mongodb+srv://jacobdwalters22:mw082868@fec-sdc-galvanize.xjy8uue.mongodb.net/?retryWrites=true&w=majority",
  },
};
