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
};

export default nextConfig;
