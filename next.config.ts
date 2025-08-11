import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
    prependData: `@use "_var.scss" as *;`,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/styles': path.resolve(process.cwd(), 'src/styles'),
      '@/components': path.resolve(process.cwd(), 'src/components'),
      '@/ui' : path.resolve(process.cwd(), 'src/components/ui'),
    };
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://49.12.128.167:7001/api/'}:path*`,
      },
    ];
  },
};

export default nextConfig;
