import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export so the site can be served from GitHub Pages. */
  output: "export",
  images: {
    /* Pages has no Next image optimiser; assets are pre-compressed instead. */
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
