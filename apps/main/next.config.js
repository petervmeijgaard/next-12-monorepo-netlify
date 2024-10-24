/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	rewrites: async () => [
		{
			destination: `${process.env.DOCS_URL}/docs`,
			source: "/docs",
		},
		{
			destination: `${process.env.DOCS_URL}/docs/:path*`,
			source: "/docs/:path*",
		},
		{
			destination: `${process.env.DOCS_URL}/docs-static/:path*`,
			source: "/docs-static/:path*",
		},
	],
	swcMinify: true,
};

module.exports = nextConfig;
