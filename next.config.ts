import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/storage/:path*',
        destination: 'https://mehra.liara.run/storage/:path*',
      },
    ];
  },
  /* config options here */
  images: {
    // domains: ['mehra.liara.run','intorias.liara.run'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'mehra.liara.run',
        port: '',
        pathname: '/**',
        search: '',
      },  {
        protocol: 'http',
        hostname: 'intorias.liara.run',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'mehra.liara.run',
        port: '',
        pathname: '/**',
        search: '',
      },  {
        protocol: 'https',
        hostname: 'intorias.liara.run',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;