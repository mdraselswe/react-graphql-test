/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    url: process.env.NEXT_GRAPHQL_ENDPOINT,
    token: process.env.NEXT_GRAPHQL_TOKEN,
  },
};

module.exports = nextConfig;
