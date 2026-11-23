import type { NextConfig } from "next";
import { basePath } from "./lib/site-url";

const config: NextConfig = {
  basePath,
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default config;
