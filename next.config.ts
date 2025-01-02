import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mehra.liara.run",
      },
      {
        protocol: "https",
        hostname: "intorias.liara.run",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: "https://mehra.liara.run/api/v1",
  },
};

export default nextConfig;
