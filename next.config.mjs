/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uwyrzvjdygfrsildagru.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
