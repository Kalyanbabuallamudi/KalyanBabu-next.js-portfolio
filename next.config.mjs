import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
	turbopack: {
		root: __dirname,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.css$/,
			use: ["style-loader", "css-loader"],
		});
		return config;
	},
};

export default nextConfig;
