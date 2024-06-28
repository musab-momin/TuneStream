/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "safat-bookstore.s3.ap-south-1.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "tdozvpqcnzwyqzpphmqp.supabase.co",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
