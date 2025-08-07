import type { NextConfig } from "next";

import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
   // Enable .md and .mdx files
  // You can add remark or rehype plugins here if needed
});

export default withMDX(nextConfig);
