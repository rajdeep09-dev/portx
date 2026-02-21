/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com'
      }
    ],
    unoptimized: false
  },
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false
};

export default nextConfig;
