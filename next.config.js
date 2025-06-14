/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // Required when using `output: 'export'`
  },
  trailingSlash: true, // Ensures URLs end with / for static hosting
};

module.exports = nextConfig;
