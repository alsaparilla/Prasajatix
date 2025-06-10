/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // Required when using `output: 'export'`
  },
};

module.exports = nextConfig;
