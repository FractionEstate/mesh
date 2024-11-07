/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
