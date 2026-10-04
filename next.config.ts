import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export, served as plain files by Vercel. */
  output: "export",
  images: {
    /* No image optimiser at request time: widths are built ahead of time by scripts/gen-images.sh. */
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    /* Must match WIDTHS in scripts/gen-images.sh. */
    imageSizes: [160, 320],
    deviceSizes: [640, 768, 1080, 1600, 2400],
    formats: ["image/webp"],
  },
  trailingSlash: true,
  experimental: {
    /* Tailwind keeps the CSS small, so inlining it removes the one render-blocking request. */
    inlineCss: true,
  },
};

export default nextConfig;
