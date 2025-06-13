/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export
    eslint: { ignoreDuringBuilds: true }, // Temporary
    typescript: { ignoreBuildErrors: true }, // Temporary
};

module.exports = nextConfig;