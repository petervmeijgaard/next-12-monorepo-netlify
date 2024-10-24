/** @type {import('next').NextConfig} */
const nextConfig = {
	assetPrefix: "/docs-static",
	reactStrictMode: true,
	rewrites: async () => ({
		beforeFiles: [
			{
				destination: "/_next/:path*",
				source: "/docs-static/_next/:path*",
			},
		],
	}),
	swcMinify: true,
};

module.exports = nextConfig;
