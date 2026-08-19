import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export so the site can be served from GitHub Pages. */
  output: "export",
  images: {
    /* Pages cannot optimise on request, so widths are built ahead of time. */
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    /* Must match WIDTHS in scripts/gen-images.sh. */
    imageSizes: [160, 320],
    deviceSizes: [640, 768, 1080, 1600],
    formats: ["image/webp"],
  },
  trailingSlash: true,
};

export default nextConfig;
