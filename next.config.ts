import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "standalone",
	images: {
		domains: ["flagcdn.com"],
	},
};

export default nextConfig;
